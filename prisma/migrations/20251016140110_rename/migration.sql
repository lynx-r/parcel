/*
  Warnings:

  - You are about to drop the `FsmAction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FsmActionLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FsmErrorLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FsmTransition` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StageOrder` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Trip` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `FsmTransition` DROP FOREIGN KEY `FsmTransition_actionId_fkey`;

-- DropForeignKey
ALTER TABLE `FsmTransition` DROP FOREIGN KEY `FsmTransition_fromStateId_fkey`;

-- DropForeignKey
ALTER TABLE `FsmTransition` DROP FOREIGN KEY `FsmTransition_toStateId_fkey`;

-- DropTable
DROP TABLE `FsmAction`;

-- DropTable
DROP TABLE `FsmActionLog`;

-- DropTable
DROP TABLE `FsmErrorLog`;

-- DropTable
DROP TABLE `FsmTransition`;

-- DropTable
DROP TABLE `Order`;

-- DropTable
DROP TABLE `StageOrder`;

-- DropTable
DROP TABLE `Trip`;

-- CreateTable
CREATE TABLE `fsm_action` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `label` VARCHAR(191) NULL,

    UNIQUE INDEX `fsm_action_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fsm_transition` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fromStateId` INTEGER NOT NULL,
    `actionId` INTEGER NOT NULL,
    `toStateId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fsm_action_log` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `entityType` VARCHAR(191) NOT NULL,
    `entityId` INTEGER NOT NULL,
    `actionName` VARCHAR(191) NOT NULL,
    `fromState` VARCHAR(191) NOT NULL,
    `toState` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fsm_error_log` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `errorTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `errorMessage` VARCHAR(191) NOT NULL,
    `entityType` VARCHAR(191) NOT NULL,
    `entityId` INTEGER NOT NULL,
    `actionName` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stage_order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `trip` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `fsm_transition` ADD CONSTRAINT `fsm_transition_fromStateId_fkey` FOREIGN KEY (`fromStateId`) REFERENCES `fsm_state`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `fsm_transition` ADD CONSTRAINT `fsm_transition_toStateId_fkey` FOREIGN KEY (`toStateId`) REFERENCES `fsm_state`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `fsm_transition` ADD CONSTRAINT `fsm_transition_actionId_fkey` FOREIGN KEY (`actionId`) REFERENCES `fsm_action`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
