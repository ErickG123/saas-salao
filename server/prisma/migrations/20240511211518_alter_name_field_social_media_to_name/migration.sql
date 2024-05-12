/*
  Warnings:

  - You are about to drop the column `socialMedia` on the `socialmedias` table. All the data in the column will be lost.
  - Added the required column `name` to the `socialmedias` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `socialmedias` DROP COLUMN `socialMedia`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;
