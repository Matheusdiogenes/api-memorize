/*
  Warnings:

  - Made the column `authorId` on table `Cards` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Cards" DROP CONSTRAINT "Cards_authorId_fkey";

-- AlterTable
ALTER TABLE "Cards" ALTER COLUMN "authorId" SET NOT NULL,
ALTER COLUMN "response" SET DEFAULT false;

-- AddForeignKey
ALTER TABLE "Cards" ADD CONSTRAINT "Cards_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
