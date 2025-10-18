/*
  Warnings:

  - You are about to alter the column `location` on the `Parcel` table. The data in that column could be lost. The data in that column will be cast from `VarChar(5000)` to `VarChar(1000)`.
  - Added the required column `value` to the `Parcel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Parcel` ADD COLUMN `value` VARCHAR(255) NOT NULL,
    MODIFY `location` VARCHAR(1000) NOT NULL;
