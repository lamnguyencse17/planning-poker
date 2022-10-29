-- CreateEnum
CREATE TYPE "StoryStatus" AS ENUM ('TODO', 'READY_TO_VOTE', 'VOTING', 'DONE');

-- AlterTable
ALTER TABLE "Epic" ADD COLUMN     "status" "StoryStatus" NOT NULL DEFAULT 'TODO';

-- AlterTable
ALTER TABLE "Story" ADD COLUMN     "status" "StoryStatus" NOT NULL DEFAULT 'TODO';
