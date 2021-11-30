import { IJob } from "../interfaces/job.interface";

let id = 0;

export const createJob = (priority?: number): IJob => ({
  id: id++,
  priority: priority || Math.floor(Math.random() * 100),
  task: function() {
    console.log(`I am a task with id ${this.id} and priority ${this.priority}`)
  }
});
