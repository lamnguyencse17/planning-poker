import { Prisma } from "@prisma/client";
import { compareDesc, subDays } from "date-fns";
import { router, protectedProcedure } from "../trpc";

export const tasksRouter = router({
  getRecentTasks: protectedProcedure.query(async ({ ctx }) => {
    const currentDate = new Date();
    const last30Days = subDays(currentDate, 30);
    const filter: Prisma.StoryFindManyArgs | Prisma.EpicFindManyArgs = {
      where: {
        createdById: ctx.session.user.id,
        updatedAt: {
          lte: currentDate,
          gte: last30Days,
        },
      },
    };
    const stories = ctx.prisma.story.findMany(
      filter as Prisma.StoryFindManyArgs
    );
    const epics = ctx.prisma.epic.findMany(filter as Prisma.EpicFindManyArgs);
    const results = await Promise.all([stories, epics]);
    return results
      .flat()
      .sort((taskA, taskB) => compareDesc(taskA.updatedAt, taskB.updatedAt));
  }),
});
