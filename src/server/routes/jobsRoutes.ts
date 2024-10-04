import { publicProcedure, router } from "@/server/trpc";

export const jobRouter = router({
  jobList: publicProcedure.query(async () => {
    console.log("hello");
  }),
});
