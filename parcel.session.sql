-- =============================
-- 🚀 FSM V9 — Полный пакет
-- =============================

-- Очистка старых зависимостей
DROP TABLE IF EXISTS fsm_action_logs;
DROP TABLE IF EXISTS fsm_errors_log;
DROP TABLE IF EXISTS fsm_transitions;
DROP TABLE IF EXISTS fsm_actions;
DROP TABLE IF EXISTS fsm_states;
DROP TABLE IF EXISTS stage_orders;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS trips;
DROP PROCEDURE IF EXISTS  fsm_perform_action;

-- ------------------------------------
-- 1️⃣ Таблицы FSM
-- ------------------------------------
CREATE TABLE fsm_states (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    label VARCHAR(100)
);

CREATE TABLE fsm_actions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    label VARCHAR(100)
);

CREATE TABLE fsm_transitions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    from_state_id INT NOT NULL,
    action_id INT NOT NULL,
    to_state_id INT NOT NULL,
    FOREIGN KEY (from_state_id) REFERENCES fsm_states(id),
    FOREIGN KEY (action_id) REFERENCES fsm_actions(id),
    FOREIGN KEY (to_state_id) REFERENCES fsm_states(id)
);

CREATE TABLE fsm_action_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    entity_type VARCHAR(50),
    entity_id INT,
    action_name VARCHAR(100),
    from_state VARCHAR(50),
    to_state VARCHAR(50),
    user_id INT,
    created_at DATETIME
);

CREATE TABLE fsm_errors_log (
    id INT AUTO_INCREMENT PRIMARY KEY,
    error_time DATETIME,
    error_message TEXT,
    entity_type VARCHAR(50),
    entity_id INT,
    action_name VARCHAR(100),
    user_id INT
);

-- ------------------------------------
-- 2️⃣ Таблицы сущностей
-- ------------------------------------
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    status VARCHAR(50),
    description VARCHAR(255)
);

CREATE TABLE stage_orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    status VARCHAR(50),
    description VARCHAR(255)
);

CREATE TABLE trips (
    id INT AUTO_INCREMENT PRIMARY KEY,
    status VARCHAR(50),
    description VARCHAR(255)
);

-- ------------------------------------
-- 3️⃣ Данные FSM
-- ------------------------------------
INSERT INTO fsm_states (name, label) VALUES
('created', 'Создан'),
('reserved', 'Зарезервирован'),
('assigned', 'Назначен'),
('in_progress', 'В пути'),
('completed', 'Завершён');

INSERT INTO fsm_actions (name, label) VALUES
('reserve_cell', 'Забронировать ячейку'),
('assign_courier', 'Назначить курьера'),
('start_trip', 'Начать поездку'),
('complete_trip', 'Завершить поездку');

INSERT INTO fsm_transitions (from_state_id, action_id, to_state_id) VALUES
-- Для заказов
(1, 1, 2),  -- created → reserve_cell → reserved
(2, 2, 3),  -- reserved → assign_courier → assigned
(3, 3, 4),  -- assigned → start_trip → in_progress
(4, 4, 5);  -- in_progress → complete_trip → completed

-- ------------------------------------
-- 4️⃣ Тестовые данные
-- ------------------------------------
INSERT INTO orders (status, description) VALUES
('created', 'Order 1'),
('reserved', 'Order 2');

INSERT INTO stage_orders (status, description) VALUES
('created', 'Stage order 1'),
('assigned', 'Stage order 2');

INSERT INTO trips (status, description) VALUES
('in_progress', 'Trip 1'),
('completed', 'Trip 2');

-- ------------------------------------
-- 5️⃣ Единая процедура FSM
-- ------------------------------------
-- DELIMITER $$

CREATE PROCEDURE fsm_perform_action(
    IN p_entity_type VARCHAR(50),
    IN p_entity_id INT,
    IN p_action_name VARCHAR(100),
    IN p_user_id INT,
    IN p_extra_id INT
)
BEGIN
    DECLARE v_current_state_id INT;
    DECLARE v_next_state_id INT;
    DECLARE v_action_id INT;
    DECLARE v_status_field VARCHAR(50);
    DECLARE v_table_name VARCHAR(50);
    DECLARE v_sql TEXT;
    DECLARE v_message TEXT;

    DECLARE EXIT HANDLER FOR SQLEXCEPTION 
    BEGIN
        INSERT INTO fsm_errors_log(error_time, error_message, entity_type, entity_id, action_name, user_id)
        VALUES (NOW(), CONCAT('SQL Exception during ', p_action_name), p_entity_type, p_entity_id, p_action_name, p_user_id);
    END;

    proc_end: BEGIN
      -- 1️⃣ Определяем таблицу и поле статуса
      IF p_entity_type = 'stage_order' THEN
          SET v_table_name = 'stage_orders';
          SET v_status_field = 'status';
      ELSEIF p_entity_type = 'order' THEN
          SET v_table_name = 'orders';
          SET v_status_field = 'status';
      ELSEIF p_entity_type = 'trip' THEN
          SET v_table_name = 'trips';
          SET v_status_field = 'status';
      ELSE
          INSERT INTO fsm_errors_log(error_time, error_message, entity_type, entity_id, action_name, user_id)
          VALUES (NOW(), CONCAT('Unknown entity_type: ', p_entity_type), p_entity_type, p_entity_id, p_action_name, p_user_id);
          LEAVE proc_end;
      END IF;

      -- 2️⃣ Проверяем наличие записи
      SET @check_sql = CONCAT('SELECT COUNT(*) INTO @cnt FROM ', v_table_name, ' WHERE id = ', p_entity_id);
      PREPARE stmt_check FROM @check_sql;
      EXECUTE stmt_check;
      DEALLOCATE PREPARE stmt_check;

      IF @cnt = 0 THEN
          INSERT INTO fsm_errors_log(error_time, error_message, entity_type, entity_id, action_name, user_id)
          VALUES (NOW(), CONCAT('Entity not found: ', p_entity_type, ' #', p_entity_id), p_entity_type, p_entity_id, p_action_name, p_user_id);
          LEAVE proc_end;
      END IF;

      -- 3️⃣ Получаем текущее состояние
      SET @sql = CONCAT('SELECT ', v_status_field, ' INTO @current_status FROM ', v_table_name, ' WHERE id = ', p_entity_id);
      PREPARE stmt1 FROM @sql;
      EXECUTE stmt1;
      DEALLOCATE PREPARE stmt1;

      IF @current_status IS NULL THEN
          INSERT INTO fsm_errors_log(error_time, error_message, entity_type, entity_id, action_name, user_id)
          VALUES (NOW(), CONCAT('Entity has NULL status: ', p_entity_type, ' #', p_entity_id), p_entity_type, p_entity_id, p_action_name, p_user_id);
          LEAVE proc_end;
      END IF;

      -- 4️⃣ Находим id действия
      SELECT id INTO v_action_id FROM fsm_actions WHERE name = p_action_name;
      IF v_action_id IS NULL THEN
          INSERT INTO fsm_errors_log(error_time, error_message, entity_type, entity_id, action_name, user_id)
          VALUES (NOW(), CONCAT('Unknown action: ', p_action_name), p_entity_type, p_entity_id, p_action_name, p_user_id);
          LEAVE proc_end;
      END IF;

      -- 5️⃣ Проверяем разрешённый переход
      SELECT t.to_state_id INTO v_next_state_id
      FROM fsm_transitions t
      JOIN fsm_states s ON s.id = t.from_state_id
      WHERE s.name = @current_status AND t.action_id = v_action_id
      LIMIT 1;

      IF v_next_state_id IS NULL THEN
          INSERT INTO fsm_errors_log(error_time, error_message, entity_type, entity_id, action_name, user_id)
          VALUES (NOW(), CONCAT('Transition not allowed: ', p_action_name, ' from ', @current_status), p_entity_type, p_entity_id, p_action_name, p_user_id);
          LEAVE proc_end;
      END IF;

      -- 6️⃣ Обновляем статус
      SET @sql_update = CONCAT(
          'UPDATE ', v_table_name,
          ' SET ', v_status_field, ' = (SELECT name FROM fsm_states WHERE id = ', v_next_state_id, ')',
          ' WHERE id = ', p_entity_id
      );
      PREPARE stmt_update FROM @sql_update;
      EXECUTE stmt_update;
      DEALLOCATE PREPARE stmt_update;

      -- 7️⃣ Логируем действие
      INSERT INTO fsm_action_logs(entity_type, entity_id, action_name, from_state, to_state, user_id, created_at)
      VALUES (p_entity_type, p_entity_id, p_action_name, @current_status, (SELECT name FROM fsm_states WHERE id = v_next_state_id), p_user_id, NOW());

      -- 8️⃣ Возврат результата
      SET v_message = CONCAT('FSM action "', p_action_name, '" applied on ', p_entity_type, ' #', p_entity_id);
      SELECT v_message AS result;

    END proc_end;

END;
-- DELIMITER ;

-- ------------------------------------
-- 6️⃣ Тесты
-- ------------------------------------
CALL fsm_perform_action('order', 1, 'reserve_cell', 100, NULL);
CALL fsm_perform_action('order', 1, 'assign_courier', 100, NULL);
CALL fsm_perform_action('order', 1, 'start_trip', 100, NULL);
CALL fsm_perform_action('order', 1, 'complete_trip', 100, NULL);

CALL fsm_perform_action('stage_order', 1, 'reserve_cell', 100, NULL);
CALL fsm_perform_action('stage_order', 1, 'assign_courier', 100, NULL);

CALL fsm_perform_action('trip', 1, 'complete_trip', 100, NULL);

SELECT * FROM fsm_action_logs;
SELECT * FROM fsm_errors_log;
SELECT id, status FROM orders;
SELECT id, status FROM stage_orders;
SELECT id, status FROM trips;
