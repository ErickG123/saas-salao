-- CreateTable
CREATE TABLE `openinghours` (
    `id` VARCHAR(191) NOT NULL,
    `weekDay` VARCHAR(191) NOT NULL,
    `startTime` VARCHAR(191) NOT NULL,
    `endTime` VARCHAR(191) NOT NULL,
    `salonId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `openinghours` ADD CONSTRAINT `openinghours_salonId_fkey` FOREIGN KEY (`salonId`) REFERENCES `salons`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
