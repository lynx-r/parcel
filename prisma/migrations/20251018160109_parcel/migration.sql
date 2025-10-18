/*
  Warnings:

  - A unique constraint covering the columns `[parcel_id]` on the table `orders` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `orders` ADD COLUMN `cell_size` VARCHAR(10) NULL DEFAULT 'S',
    ADD COLUMN `parcel_id` INTEGER NULL;

-- CreateTable
CREATE TABLE `Parcel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `location` VARCHAR(5000) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `orders_parcel_id_key` ON `orders`(`parcel_id`);

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_parcel_id_fkey` FOREIGN KEY (`parcel_id`) REFERENCES `Parcel`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
