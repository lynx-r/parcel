/*
  Warnings:

  - You are about to drop the `fsm_action_log` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `fsm_error_log` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `fsm_action_log`;

-- DropTable
DROP TABLE `fsm_error_log`;

-- CreateTable
CREATE TABLE `fsm_action_logs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `entity_type` VARCHAR(191) NOT NULL,
    `entity_id` INTEGER NOT NULL,
    `action_name` VARCHAR(191) NOT NULL,
    `from_state` VARCHAR(191) NOT NULL,
    `to_state` VARCHAR(191) NOT NULL,
    `user_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fsm_errors_log` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `error_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `error_message` VARCHAR(191) NOT NULL,
    `entity_type` VARCHAR(191) NOT NULL,
    `entity_id` INTEGER NOT NULL,
    `action_name` VARCHAR(191) NOT NULL,
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
