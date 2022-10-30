import { router } from "../trpc";
import { authRouter } from "./auth";
import { epicsRouter } from "./epics";
import { exampleRouter } from "./example";
import { storiesRouter } from "./stories";
import { tasksRouter } from "./tasks";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  stories: storiesRouter,
  epics: epicsRouter,
  tasks: tasksRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
