/*
  Warnings:

  - You are about to drop the `fsm_action` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `fsm_state` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `fsm_transition` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `stage_order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `trip` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `fsm_transition` DROP FOREIGN KEY `fsm_transition_actionId_fkey`;

-- DropForeignKey
ALTER TABLE `fsm_transition` DROP FOREIGN KEY `fsm_transition_fromStateId_fkey`;

-- DropForeignKey
ALTER TABLE `fsm_transition` DROP FOREIGN KEY `fsm_transition_toStateId_fkey`;

-- DropTable
DROP TABLE `fsm_action`;

-- DropTable
DROP TABLE `fsm_state`;

-- DropTable
DROP TABLE `fsm_transition`;

-- DropTable
DROP TABLE `order`;

-- DropTable
DROP TABLE `stage_order`;

-- DropTable
DROP TABLE `trip`;

-- CreateTable
CREATE TABLE `fsm_states` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `label` VARCHAR(191) NULL,

    UNIQUE INDEX `fsm_states_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fsm_actions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `label` VARCHAR(191) NULL,

    UNIQUE INDEX `fsm_actions_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fsm_transitions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fromStateId` INTEGER NOT NULL,
    `actionId` INTEGER NOT NULL,
    `toStateId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stage_orders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `trips` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `fsm_transitions` ADD CONSTRAINT `fsm_transitions_fromStateId_fkey` FOREIGN KEY (`fromStateId`) REFERENCES `fsm_states`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `fsm_transitions` ADD CONSTRAINT `fsm_transitions_toStateId_fkey` FOREIGN KEY (`toStateId`) REFERENCES `fsm_states`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `fsm_transitions` ADD CONSTRAINT `fsm_transitions_actionId_fkey` FOREIGN KEY (`actionId`) REFERENCES `fsm_actions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
