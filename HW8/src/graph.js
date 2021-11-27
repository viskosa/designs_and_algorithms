class Graph {
  constructor(size = 1) {
    this.size = size;
    this.matrix = [];
    this.limit = this.size - 1;
    // create new matrix and put nulls into it by default:
    // [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]]
    for (let i = 0; i < size; i++) {
      this.matrix.push([]);
      for (let j = 0; j < size; j++) {
        this.matrix[i][j] = 0;
      }
    }
    console.log(this.matrix)
  }

  addEdge(vertex1, vertex2, weight = 1) {
    if (vertex1 > this.limit || vertex2 > this.limit) {
      return console.log('you try to add an invalid edge');
    } else if (vertex1 === vertex2) {
      return console.log('you try to add an edge to the same vertexes');
    } else {
      this.matrix[vertex1][vertex2] = weight;
      this.matrix[vertex2][vertex1] = weight;
    }
    console.log(this.matrix)
  }

  removeEdge(vertex1, vertex2) {
    if (vertex1 > this.limit || vertex2 > this.limit) {
      return console.log('you try to remove an invalid edge');
    } else if (vertex1 === vertex2) {
      return console.log('you try to remove the edge to the same vertex');
    } else {
      this.matrix[vertex1][vertex2] = 0;
      this.matrix[vertex2][vertex1] = 0;
    } 
  }

  addVertex() {
    this.size++;
    this.matrix.push([]);
    for (let i = 0; i < this.size; i++) {
      this.matrix[i][this.limit] = 0;
      this.matrix[this.limit][i] = 0;
    }
  }

  removeVertex(vertex) {  
    if (vertex < 0 || vertex > this.limit) { 
      return console.log('you try to remove invalid vertex');
    } else { 
      while (vertex < this.limit) {  
        // shifting the rows to left side
        for (let i = 0; i < this.size; i++) { 
          this.matrix[i][vertex] = this.matrix[i][vertex + 1]; 
        } 
        // shifting the columns upwards
        for (let i = 0; i < this.size; i++) { 
          this.matrix[vertex][i] = this.matrix[vertex + 1][i]; 
        } 
        vertex++; 
      }

      this.matrix.pop();
      this.size--;
    } 
  } 

  printMatrix() {
    for (let i = 0; i < this.size; i++) {
      let row = '';
      for (let j = 0; j < this.size; j++) {
        row += ` ${this.matrix[i][j]}`;
      }
      console.log(row);
    }
  }

  displayMatrix() {
    const container = document.getElementById("graph-wrapper");

    // displaying the 2D array
    for (let i = 0; i < this.size; ++i) {
      container.insertAdjacentHTML("beforeEnd", "<br>");

      for (let j = 0; j < this.size; ++j) {
        container.insertAdjacentHTML("beforeEnd", this.matrix[i][j]);
      }
    }
  }

  findShortestPath(start, end) {
    const matrixLength = this.matrix.length; // 4
    const visited = new Array(matrixLength); // [,,,,]
    const pathLengths = new Array(matrixLength); // [,,,,]
    const prevVertices = new Array(matrixLength); // [,,,,]
    visited[start] = true;

    for (let i = 0; i < matrixLength; i++) {
      pathLengths[i] = this.matrix[start][i] || Infinity;
      if (pathLengths[i] !== Infinity) {
        prevVertices[i] = start;
      }
    }

    pathLengths[start] = 0;

    for (let i = 0; i < matrixLength - 1; i++) {
      let closestVertex = -1;
      let closestDistance = Infinity;

      for (let j = 0; j < matrixLength; j++) {
        if (!visited[j] && (pathLengths[j] < closestDistance)) {
          closestDistance = pathLengths[j];
          closestVertex = j;
        }
      }

      visited[closestVertex] = true;

      for (let j = 0; j < matrixLength; j++) {
        if (!visited[j]) {
          const possiblyCloserDistance = pathLengths[closestVertex] + this.matrix[start][closestVertex];
          if (possiblyCloserDistance < pathLengths[j]) {
            pathLengths[j] = possiblyCloserDistance;
            prevVertices[j] = closestVertex;
          }
        }
      }
    }

    const path = [];

    while (end != start) {
      path.unshift(end);
      end = prevVertices[end];
    }

    console.log(path);
  }
}

export default Graph;
