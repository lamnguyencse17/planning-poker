import { router, protectedProcedure } from "../trpc";

export const epicsRouter = router({
  getUnfinishedEpics: protectedProcedure.query(async ({ ctx }) => {
    return ctx.prisma.epic.findMany({
      where: {
        createdById: ctx.session.user.id,
        NOT: {
          status: "DONE",
        },
      },
      orderBy: {
        updatedAt: "desc",
      },
    });
  }),
});
