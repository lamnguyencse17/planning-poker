import { router, protectedProcedure } from "../trpc";

export const storiesRouter = router({
  getUnfinishedStories: protectedProcedure.query(async ({ ctx }) => {
    return ctx.prisma.story.findMany({
      where: {
        createdById: ctx.session.user.id,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });
  }),
});
