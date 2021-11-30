import "./style/style.css"
import Graph from "./graph";

window.addEventListener('DOMContentLoaded', () => {
  const graph = new Graph(4);
  graph.addEdge(0, 1);
  graph.addEdge(0, 2);
  graph.addEdge(0, 3);
  graph.addEdge(1, 2);

  graph.printMatrix()

  // graph.removeVertex(2)
  // graph.addEdge(1, 2);
  // graph.addEdge(2, 4);
  // graph.addEdge(2, 5);
  // graph.addEdge(3, 4);
  // graph.addEdge(4, 5);
  // graph.printMatrix()
  // graph.printMatrix()
  graph.displayMatrix()
  graph.findShortestPath(1, 3);
})