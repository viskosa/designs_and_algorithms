import { createJob } from "./helpers/create-job.helper";
import { sortJobs } from "./helpers/sort-jobs.helper";

const jobs = [];

for (let i = 0; i < 20; i++) {
  jobs.push(createJob());
}

// console.log(jobs);

const prioritizedJobs = sortJobs(jobs);

for (let job of prioritizedJobs) {
  job.task();
}