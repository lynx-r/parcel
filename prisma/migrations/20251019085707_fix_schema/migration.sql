/*
  Warnings:

  - You are about to drop the column `orderId` on the `parcels` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `trips` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `second_name` on the `users` table. All the data in the column will be lost.
  - Added the required column `type` to the `shipments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `fsm_action_logs` DROP FOREIGN KEY `fsm_action_logs_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `fsm_errors_log` DROP FOREIGN KEY `fsm_errors_log_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `parcels` DROP FOREIGN KEY `parcels_orderId_fkey`;

-- DropForeignKey
ALTER TABLE `trips` DROP FOREIGN KEY `trips_userId_fkey`;

-- DropIndex
DROP INDEX `fsm_action_logs_user_id_fkey` ON `fsm_action_logs`;

-- DropIndex
DROP INDEX `fsm_errors_log_user_id_fkey` ON `fsm_errors_log`;

-- DropIndex
DROP INDEX `parcels_orderId_fkey` ON `parcels`;

-- DropIndex
DROP INDEX `trips_userId_fkey` ON `trips`;

-- AlterTable
ALTER TABLE `fsm_action_logs` MODIFY `user_id` INTEGER NULL;

-- AlterTable
ALTER TABLE `fsm_errors_log` MODIFY `user_id` INTEGER NULL;

-- AlterTable
ALTER TABLE `parcels` DROP COLUMN `orderId`;

-- AlterTable
ALTER TABLE `shipments` ADD COLUMN `type` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `trips` DROP COLUMN `userId`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `first_name`,
    DROP COLUMN `second_name`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `fsm_action_logs` ADD CONSTRAINT `fsm_action_logs_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `fsm_errors_log` ADD CONSTRAINT `fsm_errors_log_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
