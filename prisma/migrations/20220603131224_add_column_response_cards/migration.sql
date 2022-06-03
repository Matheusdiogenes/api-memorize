/*
  Warnings:

  - Added the required column `response` to the `Cards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cards" ADD COLUMN     "response" BOOLEAN NOT NULL;
