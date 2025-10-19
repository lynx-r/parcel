/*
  Warnings:

  - You are about to drop the `Logistic` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Parcel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Shipment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Logistic` DROP FOREIGN KEY `Logistic_cell_id_fkey`;

-- DropForeignKey
ALTER TABLE `Parcel` DROP FOREIGN KEY `Parcel_orderId_fkey`;

-- DropForeignKey
ALTER TABLE `Shipment` DROP FOREIGN KEY `ShipmentDelivery_fkey`;

-- DropForeignKey
ALTER TABLE `Shipment` DROP FOREIGN KEY `ShipmentPickup_fkey`;

-- DropForeignKey
ALTER TABLE `orders` DROP FOREIGN KEY `orders_shipment_id_fkey`;

-- DropTable
DROP TABLE `Logistic`;

-- DropTable
DROP TABLE `Parcel`;

-- DropTable
DROP TABLE `Shipment`;

-- CreateTable
CREATE TABLE `parcels` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `location` VARCHAR(1000) NOT NULL,
    `value` VARCHAR(255) NOT NULL,
    `orderId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `logistics` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,
    `cell_id` INTEGER NULL,
    `cell_size` VARCHAR(10) NULL DEFAULT 'S',
    `address` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `shipments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `delivery_id` INTEGER NOT NULL,
    `pickup_id` INTEGER NOT NULL,

    UNIQUE INDEX `shipments_delivery_id_key`(`delivery_id`),
    UNIQUE INDEX `shipments_pickup_id_key`(`pickup_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `parcels` ADD CONSTRAINT `parcels_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `orders`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `logistics` ADD CONSTRAINT `logistics_cell_id_fkey` FOREIGN KEY (`cell_id`) REFERENCES `parcels`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `shipments` ADD CONSTRAINT `ShipmentDelivery_fkey` FOREIGN KEY (`delivery_id`) REFERENCES `logistics`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `shipments` ADD CONSTRAINT `ShipmentPickup_fkey` FOREIGN KEY (`pickup_id`) REFERENCES `logistics`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_shipment_id_fkey` FOREIGN KEY (`shipment_id`) REFERENCES `shipments`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
