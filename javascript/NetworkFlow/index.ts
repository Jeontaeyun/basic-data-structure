import { Graph } from "../Graph";

class ReArc()

class NetworkFlow extends Graph {
  public fordFulkerson = (start, end) => {
    const vertex = this.first;
    while(vertex){
      const reArc = new ReArc(arc.capacity-arc.data, arc.destination)
    }
  };
  private findArcInPath = (path, reArc, start) => {};
  private findPath = (from, to, path) => {};
}

const networkFlow = new NetworkFlow();
networkFlow.insertVertex("s");
networkFlow.insertVertex("w");
networkFlow.insertVertex("y");
networkFlow.insertVertex("x");
networkFlow.insertVertex("z");
networkFlow.insertVertex("t");
networkFlow.insertArc(1, "s", "w", 3);
networkFlow.insertArc(2, "w", "x", 2);
networkFlow.insertArc(2, "x", "t", 3);
networkFlow.insertArc(2, "s", "y", 2);
networkFlow.insertArc(1, "y", "w", 3);
networkFlow.insertArc(1, "x", "y", 1);
networkFlow.insertArc(2, "y", "z", 3);
networkFlow.insertArc(1, "z", "x", 3);
networkFlow.insertArc(1, "z", "t", 2);
networkFlow.fordFulkerson("s", "t"); // 4
