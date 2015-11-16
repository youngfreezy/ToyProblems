function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  //adjacency list for the vertices. 
  this.adj = [];
  for (var i = 0; i < this.vertices; i++) {
    this.adj[i] = [];
  }

  //marked flag for depthFirst search
  this.marked = [];

  for (var i = 0; i < this.vertices; i++) {
    this.marked[i] = false;
  };
  this.addEdge = addEdge;
  // this.showGraph = showGraph;
  this.dfs = dfs;
  this.bfs = bfs;

  this.edgeTo = [];
  this.pathTo = pathTo;
  this.hasPathTo = hasPathTo;
  this.showPath = showPath;
  // this.possibleToVisit = possibleToVisit;
}

function addEdge(from, to) {
  this.adj[from].push(to);
  this.adj[to].push(from);
  this.edges++;
}



function dfs(v) {
  this.marked[v] = true;
  if (this.adj[v] !== undefined) {
    //console.log("visited vertex " + v);
  }

  for (var i = 0; i < this.adj[v].length; i++) {
    var w = this.adj[v][i];
    if (!this.marked[w]) {
      possibleToVisit.push(w)
      this.dfs(w);
    }
  }
  // console.log(possibleToVisit);
}


function bfs(s) {
  var queue = [];
  this.marked[s] = true;
  queue.push(s);

  while (queue.length > 0) {
    var v = queue.shift();
    if (v !== undefined) {
      console.log('visited vertex v')
    }

    for (var i = 0; i < this.adj[v].length; i++) {
      var w = this.adj[v][i];
      if (!this.marked[w]) {
        this.edgeTo[w] = v;
        this.marked[w] = true;
        queue.push(w);
      }
    }
  }
}

function pathTo(source, v) {
  if (!this.hasPathTo(v)) {
    return undefined;
  }
  var path = [];

  for (var i = v; i != source; i = this.edgeTo[i]) {
    path.push(i);
  }

  path.push(source);
  return path;
}

function hasPathTo(v) {
  return this.marked[v];
}

function showPath(paths) {
  while (paths.length > 0) {
    if (paths.length > 1) {
      console.log(paths.pop() + '-')
    } else {
      console.log(paths.pop());
    }
  }
}
g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);

g.bfs(0);
var vertex = 4;
var source = 0;
var shortestpath = g.pathTo(source, vertex);
g.showPath(shortestpath);