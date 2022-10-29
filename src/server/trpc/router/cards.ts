import { router, protectedProcedure } from "../trpc";

export const cardsRouter = router({
  getAllCards: protectedProcedure.query(async ({ ctx }) => {
    return ctx.prisma.story.findMany({
      where: {
        createdById: ctx.session.user.id,
        NOT: {
          status: "DONE",
        },
      },
    });
  }),
});
