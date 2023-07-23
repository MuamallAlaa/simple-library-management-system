/*
  Warnings:

  - A unique constraint covering the columns `[NameCategory]` on the table `category` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "category_NameCategory_key" ON "category"("NameCategory");
