/*
  Warnings:

  - You are about to drop the column `NameCategory` on the `category` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `category` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `category` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "category_NameCategory_key";

-- AlterTable
ALTER TABLE "category" DROP COLUMN "NameCategory",
ADD COLUMN     "name" "Type" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "category_name_key" ON "category"("name");
