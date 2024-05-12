/*
  Warnings:

  - You are about to drop the `salonsegment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `segment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `salonsegment` DROP FOREIGN KEY `SalonSegment_salonId_fkey`;

-- DropForeignKey
ALTER TABLE `salonsegment` DROP FOREIGN KEY `SalonSegment_segmentId_fkey`;

-- DropTable
DROP TABLE `salonsegment`;

-- DropTable
DROP TABLE `segment`;

-- CreateTable
CREATE TABLE `segments` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `salonsegments` (
    `id` VARCHAR(191) NOT NULL,
    `salonId` VARCHAR(191) NOT NULL,
    `segmentId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `salonsegments` ADD CONSTRAINT `salonsegments_salonId_fkey` FOREIGN KEY (`salonId`) REFERENCES `salons`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `salonsegments` ADD CONSTRAINT `salonsegments_segmentId_fkey` FOREIGN KEY (`segmentId`) REFERENCES `segments`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
