/*
  Warnings:

  - You are about to drop the column `Name` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `category` table. All the data in the column will be lost.
  - Added the required column `Title` to the `book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `NameCategory` to the `category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "book" DROP COLUMN "Name",
ADD COLUMN     "Title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "category" DROP COLUMN "Name",
ADD COLUMN     "NameCategory" TEXT NOT NULL;
