/*
  Warnings:

  - The primary key for the `orders` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cell_size` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `order_type` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `parcel_id` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `stage_orders` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `trips` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[shipment_id]` on the table `orders` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[order_id]` on the table `stage_orders` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `orders` DROP FOREIGN KEY `orders_parcel_id_fkey`;

-- DropForeignKey
ALTER TABLE `orders` DROP FOREIGN KEY `orders_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `stage_orders` DROP FOREIGN KEY `stage_orders_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `trips` DROP FOREIGN KEY `trips_user_id_fkey`;

-- DropIndex
DROP INDEX `orders_parcel_id_key` ON `orders`;

-- DropIndex
DROP INDEX `orders_user_id_fkey` ON `orders`;

-- DropIndex
DROP INDEX `stage_orders_user_id_fkey` ON `stage_orders`;

-- DropIndex
DROP INDEX `trips_user_id_fkey` ON `trips`;

-- AlterTable
ALTER TABLE `Parcel` ADD COLUMN `orderId` INTEGER NULL;

-- AlterTable
ALTER TABLE `orders` DROP PRIMARY KEY,
    DROP COLUMN `cell_size`,
    DROP COLUMN `order_type`,
    DROP COLUMN `parcel_id`,
    DROP COLUMN `user_id`,
    ADD COLUMN `recipient_id` INTEGER NULL,
    ADD COLUMN `sender_id` INTEGER NULL,
    ADD COLUMN `shipment_id` INTEGER NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `stage_orders` DROP COLUMN `user_id`,
    ADD COLUMN `order_id` INTEGER NULL;

-- AlterTable
ALTER TABLE `trips` DROP COLUMN `user_id`,
    ADD COLUMN `userId` INTEGER NULL;

-- CreateTable
CREATE TABLE `Logistic` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,
    `cell_id` INTEGER NULL,
    `cell_size` VARCHAR(10) NULL DEFAULT 'S',
    `address` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Shipment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `delivery_id` INTEGER NOT NULL,
    `pickup_id` INTEGER NOT NULL,

    UNIQUE INDEX `Shipment_delivery_id_key`(`delivery_id`),
    UNIQUE INDEX `Shipment_pickup_id_key`(`pickup_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `orders_shipment_id_key` ON `orders`(`shipment_id`);

-- CreateIndex
CREATE UNIQUE INDEX `stage_orders_order_id_key` ON `stage_orders`(`order_id`);

-- AddForeignKey
ALTER TABLE `Parcel` ADD CONSTRAINT `Parcel_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `orders`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Logistic` ADD CONSTRAINT `Logistic_cell_id_fkey` FOREIGN KEY (`cell_id`) REFERENCES `Parcel`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Shipment` ADD CONSTRAINT `ShipmentDelivery_fkey` FOREIGN KEY (`delivery_id`) REFERENCES `Logistic`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Shipment` ADD CONSTRAINT `ShipmentPickup_fkey` FOREIGN KEY (`pickup_id`) REFERENCES `Logistic`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_sender_id_fkey` FOREIGN KEY (`sender_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_recipient_id_fkey` FOREIGN KEY (`recipient_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_shipment_id_fkey` FOREIGN KEY (`shipment_id`) REFERENCES `Shipment`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `stage_orders` ADD CONSTRAINT `stage_orders_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `trips` ADD CONSTRAINT `trips_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
