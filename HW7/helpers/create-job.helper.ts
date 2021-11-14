import { IJob } from "../interfaces/job.interface";

let id = 0;

export const createJob = (): IJob => ({
  id: id++,
  priority: Math.floor(Math.random() * 10),
  task: function() {
    console.log(`I am a task with id ${this.id} and priority ${this.priority}`)
  }
});
