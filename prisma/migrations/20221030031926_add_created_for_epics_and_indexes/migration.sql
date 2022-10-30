/*
  Warnings:

  - Added the required column `createdById` to the `Epic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Epic" ADD COLUMN     "createdById" TEXT NOT NULL,
ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Story" ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Votes" ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE INDEX "Epic_createdById_status_updatedAt_idx" ON "Epic"("createdById", "status", "updatedAt" DESC);

-- CreateIndex
CREATE INDEX "Story_createdById_status_updatedAt_idx" ON "Story"("createdById", "status", "updatedAt" DESC);

-- CreateIndex
CREATE INDEX "Votes_userId_updatedAt_idx" ON "Votes"("userId", "updatedAt" DESC);

-- AddForeignKey
ALTER TABLE "Epic" ADD CONSTRAINT "Epic_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
