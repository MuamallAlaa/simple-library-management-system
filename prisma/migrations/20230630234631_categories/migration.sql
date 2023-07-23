/*
  Warnings:

  - Made the column `AthorId` on table `book` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "book" DROP CONSTRAINT "book_AthorId_fkey";

-- AlterTable
ALTER TABLE "book" ALTER COLUMN "AthorId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "book" ADD CONSTRAINT "book_AthorId_fkey" FOREIGN KEY ("AthorId") REFERENCES "user"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
