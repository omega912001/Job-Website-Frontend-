import { publicProcedure, router } from "@/server/trpc";
import { z } from "zod";

export const jobRouter = router({
  jobList: publicProcedure.query(async () => {
    console.log("hello");
  }),
  createJob: publicProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        type: z.string(),
      }),
    )
    .mutation(async (opts) => {
      const { input } = opts;
      const user = input;
      return user;
    }),
});
