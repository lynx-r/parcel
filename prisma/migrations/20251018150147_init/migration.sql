-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(191) NOT NULL,
    `second_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fsm_states` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `label` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fsm_actions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `label` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fsm_transitions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `from_state_id` INTEGER NOT NULL,
    `action_id` INTEGER NOT NULL,
    `to_state_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fsm_action_logs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `entity_type` VARCHAR(50) NULL,
    `entity_id` INTEGER NOT NULL,
    `action_name` VARCHAR(100) NULL,
    `from_state` VARCHAR(50) NULL,
    `to_state` VARCHAR(50) NULL,
    `user_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fsm_errors_log` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `error_time` DATETIME(3) NULL,
    `error_message` TEXT NOT NULL,
    `entity_type` VARCHAR(50) NULL,
    `entity_id` INTEGER NOT NULL,
    `action_name` VARCHAR(100) NULL,
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` VARCHAR(50) NULL,
    `description` VARCHAR(255) NULL,
    `user_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stage_orders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` VARCHAR(50) NULL,
    `description` VARCHAR(255) NULL,
    `user_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `trips` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` VARCHAR(50) NULL,
    `description` VARCHAR(255) NULL,
    `user_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `fsm_transitions` ADD CONSTRAINT `fsm_transitions_from_state_id_fkey` FOREIGN KEY (`from_state_id`) REFERENCES `fsm_states`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `fsm_transitions` ADD CONSTRAINT `fsm_transitions_to_state_id_fkey` FOREIGN KEY (`to_state_id`) REFERENCES `fsm_states`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `fsm_transitions` ADD CONSTRAINT `fsm_transitions_action_id_fkey` FOREIGN KEY (`action_id`) REFERENCES `fsm_actions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `fsm_action_logs` ADD CONSTRAINT `fsm_action_logs_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `fsm_errors_log` ADD CONSTRAINT `fsm_errors_log_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `stage_orders` ADD CONSTRAINT `stage_orders_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `trips` ADD CONSTRAINT `trips_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
