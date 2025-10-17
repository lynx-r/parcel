
CREATE PROCEDURE fsm_perform_action(
    IN p_entity_type VARCHAR(50),
    IN p_entity_id INT,
    IN p_action_name VARCHAR(100),
    IN p_user_id INT,
    IN p_extra_id INT
)
BEGIN
    DECLARE v_action_id INT;
    DECLARE v_next_state_id INT;
    DECLARE v_cnt INT DEFAULT 0;
    DECLARE v_current_status VARCHAR(50);
    DECLARE v_message TEXT;

    -- Обработчик ошибок
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        INSERT INTO fsm_errors_log(
            error_time, error_message, entity_type, entity_id, action_name, user_id
        ) VALUES (
            NOW(),
            CONCAT('SQL Exception during ', p_action_name),
            p_entity_type, p_entity_id, p_action_name, p_user_id
        );
        SET v_message = 'SQL Exception';
        SELECT v_message AS result;
    END;

    proc_end: BEGIN

        -- 1️⃣ Проверяем сущность и читаем текущий статус
        IF p_entity_type = 'order' THEN
            SELECT COUNT(*) INTO v_cnt FROM orders WHERE id = p_entity_id;
            IF v_cnt = 0 THEN
                INSERT INTO fsm_errors_log(
                    error_time, error_message, entity_type, entity_id, action_name, user_id
                ) VALUES (
                    NOW(),
                    CONCAT('Entity not found: ', p_entity_type, ' #', p_entity_id),
                    p_entity_type, p_entity_id, p_action_name, p_user_id
                );
                SET v_message = 'Entity not found';
                SELECT v_message AS result;
                LEAVE proc_end;
            END IF;
            SELECT status INTO v_current_status FROM orders WHERE id = p_entity_id;

        ELSEIF p_entity_type = 'stage_order' THEN
            SELECT COUNT(*) INTO v_cnt FROM stage_orders WHERE id = p_entity_id;
            IF v_cnt = 0 THEN
                INSERT INTO fsm_errors_log(
                    error_time, error_message, entity_type, entity_id, action_name, user_id
                ) VALUES (
                    NOW(),
                    CONCAT('Entity not found: ', p_entity_type, ' #', p_entity_id),
                    p_entity_type, p_entity_id, p_action_name, p_user_id
                );
                SET v_message = 'Entity not found';
                SELECT v_message AS result;
                LEAVE proc_end;
            END IF;
            SELECT status INTO v_current_status FROM stage_orders WHERE id = p_entity_id;

        ELSEIF p_entity_type = 'trip' THEN
            SELECT COUNT(*) INTO v_cnt FROM trips WHERE id = p_entity_id;
            IF v_cnt = 0 THEN
                INSERT INTO fsm_errors_log(
                    error_time, error_message, entity_type, entity_id, action_name, user_id
                ) VALUES (
                    NOW(),
                    CONCAT('Entity not found: ', p_entity_type, ' #', p_entity_id),
                    p_entity_type, p_entity_id, p_action_name, p_user_id
                );
                SET v_message = 'Entity not found';
                SELECT v_message AS result;
                LEAVE proc_end;
            END IF;
            SELECT status INTO v_current_status FROM trips WHERE id = p_entity_id;

        ELSE
            SET v_message = CONCAT('Unknown entity type: ', p_entity_type);
            SELECT v_message AS result;
            LEAVE proc_end;
        END IF;

        -- 2️⃣ Проверяем валидность статуса
        IF v_current_status IS NULL THEN
            INSERT INTO fsm_errors_log(
                error_time, error_message, entity_type, entity_id, action_name, user_id
            ) VALUES (
                NOW(),
                CONCAT('Entity has NULL status: ', p_entity_type, ' #', p_entity_id),
                p_entity_type, p_entity_id, p_action_name, p_user_id
            );
            SET v_message = 'Entity has NULL status';
            SELECT v_message AS result;
            LEAVE proc_end;
        END IF;

        -- 3️⃣ Находим id действия
        SET v_action_id = (SELECT id FROM fsm_actions WHERE name = p_action_name LIMIT 1);

        IF v_action_id IS NULL THEN
            INSERT INTO fsm_errors_log(
                error_time, error_message, entity_type, entity_id, action_name, user_id
            ) VALUES (
                NOW(),
                CONCAT('Unknown action: ', p_action_name),
                p_entity_type, p_entity_id, p_action_name, p_user_id
            );
            SET v_message = 'Unknown action';
            SELECT v_message AS result;
            LEAVE proc_end;
        END IF;

        -- 4️⃣ Проверяем разрешённый переход
        SET v_next_state_id = (
            SELECT t.to_state_id
            FROM fsm_transitions t
            JOIN fsm_states s ON s.id = t.from_state_id
            WHERE s.name = v_current_status AND t.action_id = v_action_id
            LIMIT 1
        );

        IF v_next_state_id IS NULL THEN
            INSERT INTO fsm_errors_log(
                error_time, error_message, entity_type, entity_id, action_name, user_id
            ) VALUES (
                NOW(),
                CONCAT('Transition not allowed: ', p_action_name, ' from ', v_current_status),
                p_entity_type, p_entity_id, p_action_name, p_user_id
            );
            SET v_message = 'Transition not allowed';
            SELECT v_message AS result;
            LEAVE proc_end;
        END IF;

        -- 5️⃣ Обновляем статус
        IF p_entity_type = 'order' THEN
            UPDATE orders
            SET status = (SELECT name FROM fsm_states WHERE id = v_next_state_id)
            WHERE id = p_entity_id;
        ELSEIF p_entity_type = 'stage_order' THEN
            UPDATE stage_orders
            SET status = (SELECT name FROM fsm_states WHERE id = v_next_state_id)
            WHERE id = p_entity_id;
        ELSEIF p_entity_type = 'trip' THEN
            UPDATE trips
            SET status = (SELECT name FROM fsm_states WHERE id = v_next_state_id)
            WHERE id = p_entity_id;
        END IF;

        -- 6️⃣ Логируем действие
        INSERT INTO fsm_action_logs(
            entity_type, entity_id, action_name, from_state, to_state, user_id, created_at
        ) VALUES (
            p_entity_type,
            p_entity_id,
            p_action_name,
            v_current_status,
            (SELECT name FROM fsm_states WHERE id = v_next_state_id),
            p_user_id,
            NOW()
        );

        -- 7️⃣ Возврат результата
        SET v_message = CONCAT('FSM action "', p_action_name, '" applied on ', p_entity_type, ' #', p_entity_id);
        SELECT v_message AS result;

    END proc_end;
END;

