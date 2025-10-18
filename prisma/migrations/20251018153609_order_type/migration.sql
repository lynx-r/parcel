/*
  Warnings:

  - The primary key for the `orders` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `orders` DROP PRIMARY KEY,
    ADD COLUMN `order_type` VARCHAR(50) NOT NULL DEFAULT 'cell',
    MODIFY `id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`, `order_type`);
