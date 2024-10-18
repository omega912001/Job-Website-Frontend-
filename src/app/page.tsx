import Header from "@/components/header";
import { trpc } from "./_trpc/client";

export default function Home() {
  // query example
  const { data } = trpc.jobs.jobList.useQuery();
  console.log(data);

  // mutation example
  const listJobMutation = trpc.jobs.createJob.useMutation({
    onError(error) {
      console.error("Error:", error);
    },
    onSuccess(data) {
      console.log(data);
    },
  });

  function listJob() {
    listJobMutation.mutate({
      title: "Some job",
      description: "some description",
      type: "full time",
    });
  }

  return (
    <>
      <Header />
    </>
  );
}
