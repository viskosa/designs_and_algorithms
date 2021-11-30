import { IJob } from "../interfaces/job.interface";

class PriorityQueue {
  queue: IJob[];
 
  constructor() {
      this.queue = [];
  }

  isEmpty() {
      return this.queue.length == 0;
  }

  getQueue() {
    return this.queue;
  }

  printQueue() {
    console.log("Prioritized queue: ", this.queue)
  }

  insert(element: IJob) {
    let contain = false;
  
    // iterating through the entire Queue to add element at the
    // correct location of the Queue
    for (let i = 0; i < this.queue.length; i++) {
        if (this.queue[i].priority > element.priority) {
            // Once the correct location is found it is inserts in the queue
            this.queue.splice(i, 0, element);
            contain = true;
            break;
        }
    }
  
    // if the element have the highest priority - it is added at the end of the queue
    if (!contain) {
      this.queue.push(element);
    }
  }

  // Returns the highest priority element in the Priority queue without removing it
  getHighestPriority() {
    if (this.isEmpty())
      return "No elements in the Queue";
    return this.queue[0];
  }

  // Returns the lowest priority element of the queue without removing it
  getLowestPriority() {
    if (this.isEmpty())
      return "No elements in the Queue";
    return this.queue[this.queue.length - 1];
  }

  // Returns the certain priority element of the queue without removing it
  getCertainPriority(priority) {
    for (let item of this.queue) {
      if (item.priority === priority) {
        return item;
      }
    }
  }

  // Removes the highest priority element from the priority queue 
  extractHighestPriority() {
    if (this.isEmpty()) return "Underflow";
    return this.queue.shift();
  }

  // Removes the lowest priority element from the priority queue 
  extractLowestPriority() {
    if (this.isEmpty()) return "Underflow";
    return this.queue.pop();
  }

  // Increase item's priority
  increasePriority(id: number, value: number) {
    let element;
    for (let item of this.queue) {
      if (item.id === id) {
        element = item;
      }
    }

    if (value < element.priority) {
      const newElement = {
        ...element,
        priority: value
      }

      this.queue.splice(element, 1);
      this.insert(newElement);
    } else {
      console.log("The new value is lower then existed one")
    }
  }
}

export default PriorityQueue;
