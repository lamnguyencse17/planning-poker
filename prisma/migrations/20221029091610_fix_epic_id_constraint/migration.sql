-- DropForeignKey
ALTER TABLE "Story" DROP CONSTRAINT "Story_epicId_fkey";

-- AlterTable
ALTER TABLE "Story" ALTER COLUMN "epicId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Story" ADD CONSTRAINT "Story_epicId_fkey" FOREIGN KEY ("epicId") REFERENCES "Epic"("id") ON DELETE SET NULL ON UPDATE CASCADE;
