/*
  Warnings:

  - Added the required column `author` to the `book` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `NameCategory` on the `category` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Type" AS ENUM ('Mystery', 'Poetry', 'Sciencefiction', 'Adventure');

-- AlterTable
ALTER TABLE "book" ADD COLUMN     "author" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "category" DROP COLUMN "NameCategory",
ADD COLUMN     "NameCategory" "Type" NOT NULL;
