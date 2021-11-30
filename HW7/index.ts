import { createJob } from "./helpers/create-job.helper";
import PriorityQueue from "./src/priority-queue";

const priorityQueue = new PriorityQueue();

for (let i = 0; i < 100; i++) {
  priorityQueue.insert(createJob());
}

priorityQueue.getQueue()
console.log(priorityQueue.getHighestPriority());
console.log(priorityQueue.getLowestPriority());
priorityQueue.increasePriority(2, 0)
priorityQueue.printQueue()

const jobRunner = queue => {
  for (let item of queue) {
    item.task()
  }
}

jobRunner(priorityQueue.getQueue());
