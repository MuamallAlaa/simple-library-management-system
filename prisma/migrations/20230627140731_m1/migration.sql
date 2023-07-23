-- CreateEnum
CREATE TYPE "role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "user" (
    "Id" TEXT NOT NULL,
    "Role" "role" NOT NULL DEFAULT 'USER',
    "Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Pssaword" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "book" (
    "Id" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Img" TEXT,
    "PublicationYear" TEXT NOT NULL,
    "Price" DOUBLE PRECISION NOT NULL,
    "AthorId" TEXT,

    CONSTRAINT "book_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "category" (
    "Id" TEXT NOT NULL,
    "Name" TEXT NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "_bookTocategory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_Email_key" ON "user"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "_bookTocategory_AB_unique" ON "_bookTocategory"("A", "B");

-- CreateIndex
CREATE INDEX "_bookTocategory_B_index" ON "_bookTocategory"("B");

-- AddForeignKey
ALTER TABLE "book" ADD CONSTRAINT "book_AthorId_fkey" FOREIGN KEY ("AthorId") REFERENCES "user"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_bookTocategory" ADD CONSTRAINT "_bookTocategory_A_fkey" FOREIGN KEY ("A") REFERENCES "book"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_bookTocategory" ADD CONSTRAINT "_bookTocategory_B_fkey" FOREIGN KEY ("B") REFERENCES "category"("Id") ON DELETE CASCADE ON UPDATE CASCADE;
