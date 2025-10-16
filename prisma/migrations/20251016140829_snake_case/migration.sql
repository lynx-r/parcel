/*
  Warnings:

  - You are about to drop the column `actionName` on the `fsm_action_log` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `fsm_action_log` table. All the data in the column will be lost.
  - You are about to drop the column `entityId` on the `fsm_action_log` table. All the data in the column will be lost.
  - You are about to drop the column `entityType` on the `fsm_action_log` table. All the data in the column will be lost.
  - You are about to drop the column `fromState` on the `fsm_action_log` table. All the data in the column will be lost.
  - You are about to drop the column `toState` on the `fsm_action_log` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `fsm_action_log` table. All the data in the column will be lost.
  - You are about to drop the column `actionName` on the `fsm_error_log` table. All the data in the column will be lost.
  - You are about to drop the column `entityId` on the `fsm_error_log` table. All the data in the column will be lost.
  - You are about to drop the column `entityType` on the `fsm_error_log` table. All the data in the column will be lost.
  - You are about to drop the column `errorMessage` on the `fsm_error_log` table. All the data in the column will be lost.
  - You are about to drop the column `errorTime` on the `fsm_error_log` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `fsm_error_log` table. All the data in the column will be lost.
  - You are about to drop the column `actionId` on the `fsm_transitions` table. All the data in the column will be lost.
  - You are about to drop the column `fromStateId` on the `fsm_transitions` table. All the data in the column will be lost.
  - You are about to drop the column `toStateId` on the `fsm_transitions` table. All the data in the column will be lost.
  - Added the required column `action_name` to the `fsm_action_log` table without a default value. This is not possible if the table is not empty.
  - Added the required column `entity_id` to the `fsm_action_log` table without a default value. This is not possible if the table is not empty.
  - Added the required column `entity_type` to the `fsm_action_log` table without a default value. This is not possible if the table is not empty.
  - Added the required column `from_state` to the `fsm_action_log` table without a default value. This is not possible if the table is not empty.
  - Added the required column `to_state` to the `fsm_action_log` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `fsm_action_log` table without a default value. This is not possible if the table is not empty.
  - Added the required column `action_name` to the `fsm_error_log` table without a default value. This is not possible if the table is not empty.
  - Added the required column `entity_id` to the `fsm_error_log` table without a default value. This is not possible if the table is not empty.
  - Added the required column `entity_type` to the `fsm_error_log` table without a default value. This is not possible if the table is not empty.
  - Added the required column `error_message` to the `fsm_error_log` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `fsm_error_log` table without a default value. This is not possible if the table is not empty.
  - Added the required column `action_id` to the `fsm_transitions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `from_state_id` to the `fsm_transitions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `to_state_id` to the `fsm_transitions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `fsm_transitions` DROP FOREIGN KEY `fsm_transitions_actionId_fkey`;

-- DropForeignKey
ALTER TABLE `fsm_transitions` DROP FOREIGN KEY `fsm_transitions_fromStateId_fkey`;

-- DropForeignKey
ALTER TABLE `fsm_transitions` DROP FOREIGN KEY `fsm_transitions_toStateId_fkey`;

-- DropIndex
DROP INDEX `fsm_transitions_actionId_fkey` ON `fsm_transitions`;

-- DropIndex
DROP INDEX `fsm_transitions_fromStateId_fkey` ON `fsm_transitions`;

-- DropIndex
DROP INDEX `fsm_transitions_toStateId_fkey` ON `fsm_transitions`;

-- AlterTable
ALTER TABLE `fsm_action_log` DROP COLUMN `actionName`,
    DROP COLUMN `createdAt`,
    DROP COLUMN `entityId`,
    DROP COLUMN `entityType`,
    DROP COLUMN `fromState`,
    DROP COLUMN `toState`,
    DROP COLUMN `userId`,
    ADD COLUMN `action_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `entity_id` INTEGER NOT NULL,
    ADD COLUMN `entity_type` VARCHAR(191) NOT NULL,
    ADD COLUMN `from_state` VARCHAR(191) NOT NULL,
    ADD COLUMN `to_state` VARCHAR(191) NOT NULL,
    ADD COLUMN `user_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `fsm_error_log` DROP COLUMN `actionName`,
    DROP COLUMN `entityId`,
    DROP COLUMN `entityType`,
    DROP COLUMN `errorMessage`,
    DROP COLUMN `errorTime`,
    DROP COLUMN `userId`,
    ADD COLUMN `action_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `entity_id` INTEGER NOT NULL,
    ADD COLUMN `entity_type` VARCHAR(191) NOT NULL,
    ADD COLUMN `error_message` VARCHAR(191) NOT NULL,
    ADD COLUMN `error_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `user_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `fsm_transitions` DROP COLUMN `actionId`,
    DROP COLUMN `fromStateId`,
    DROP COLUMN `toStateId`,
    ADD COLUMN `action_id` INTEGER NOT NULL,
    ADD COLUMN `from_state_id` INTEGER NOT NULL,
    ADD COLUMN `to_state_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `fsm_transitions` ADD CONSTRAINT `fsm_transitions_from_state_id_fkey` FOREIGN KEY (`from_state_id`) REFERENCES `fsm_states`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `fsm_transitions` ADD CONSTRAINT `fsm_transitions_to_state_id_fkey` FOREIGN KEY (`to_state_id`) REFERENCES `fsm_states`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `fsm_transitions` ADD CONSTRAINT `fsm_transitions_action_id_fkey` FOREIGN KEY (`action_id`) REFERENCES `fsm_actions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
