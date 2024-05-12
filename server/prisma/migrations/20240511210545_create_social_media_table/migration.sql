-- CreateTable
CREATE TABLE `socialmedias` (
    `id` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `socialMedia` VARCHAR(191) NOT NULL,
    `salonId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `socialmedias` ADD CONSTRAINT `socialmedias_salonId_fkey` FOREIGN KEY (`salonId`) REFERENCES `salons`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
