import { router } from "../trpc";
import { authRouter } from "./auth";
import { cardsRouter } from "./cards";
import { exampleRouter } from "./example";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  cards: cardsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
