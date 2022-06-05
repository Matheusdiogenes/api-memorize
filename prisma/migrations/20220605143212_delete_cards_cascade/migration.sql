-- DropForeignKey
ALTER TABLE "Cards" DROP CONSTRAINT "Cards_authorId_fkey";

-- AddForeignKey
ALTER TABLE "Cards" ADD CONSTRAINT "Cards_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
