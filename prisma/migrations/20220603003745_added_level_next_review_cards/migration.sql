/*
  Warnings:

  - Added the required column `updatedAt` to the `Cards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cards" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "level" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "nextReview" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
