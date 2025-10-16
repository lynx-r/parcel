/*
  Warnings:

  - You are about to drop the `FsmState` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `FsmTransition` DROP FOREIGN KEY `FsmTransition_fromStateId_fkey`;

-- DropForeignKey
ALTER TABLE `FsmTransition` DROP FOREIGN KEY `FsmTransition_toStateId_fkey`;

-- DropIndex
DROP INDEX `FsmTransition_fromStateId_fkey` ON `FsmTransition`;

-- DropIndex
DROP INDEX `FsmTransition_toStateId_fkey` ON `FsmTransition`;

-- DropTable
DROP TABLE `FsmState`;

-- CreateTable
CREATE TABLE `fsm_state` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `label` VARCHAR(191) NULL,

    UNIQUE INDEX `fsm_state_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `FsmTransition` ADD CONSTRAINT `FsmTransition_fromStateId_fkey` FOREIGN KEY (`fromStateId`) REFERENCES `fsm_state`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FsmTransition` ADD CONSTRAINT `FsmTransition_toStateId_fkey` FOREIGN KEY (`toStateId`) REFERENCES `fsm_state`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
