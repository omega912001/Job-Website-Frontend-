import { jobRouter } from "@/server/routes/jobsRoutes";
import { router } from "@/server/trpc";

export const appRouter = router({
  jobs: jobRouter,
});

export type AppRouter = typeof appRouter;
