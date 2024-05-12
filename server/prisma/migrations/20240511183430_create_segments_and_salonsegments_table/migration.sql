/*
  Warnings:

  - You are about to alter the column `latitude` on the `salons` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `longitude` on the `salons` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `salons` MODIFY `latitude` VARCHAR(191) NOT NULL,
    MODIFY `longitude` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Segment` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SalonSegment` (
    `id` VARCHAR(191) NOT NULL,
    `salonId` VARCHAR(191) NOT NULL,
    `segmentId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SalonSegment` ADD CONSTRAINT `SalonSegment_salonId_fkey` FOREIGN KEY (`salonId`) REFERENCES `salons`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SalonSegment` ADD CONSTRAINT `SalonSegment_segmentId_fkey` FOREIGN KEY (`segmentId`) REFERENCES `Segment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
