export interface IJob {
  id: number;
  priority: number
  task: () => void;
}
