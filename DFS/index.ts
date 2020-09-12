import { Graph, insertTwoWayArc } from "../Graph";
import { Stack } from "../Stack";

class DfsGraph extends Graph {
  dfs = () => {
    const stack = new Stack();
    let temp = this.first;
    /**
     * 순회했는지를 조회하기 위해 inTree 속성을 씀
     */
    while (temp) {
      temp.inTree = false;
      temp = temp.next;
    }
    temp = this.first;
    stack.push(temp);
    temp.inTree = true;
    while (stack.count) {
      temp = stack.pop(); // 넣었던 버텍스를 하나씩 꺼낸다.
      console.log(temp.key);
      // 트리로 반환한다.
      temp.inTree = true;
      let arc = temp.arc;
      while (arc) {
        if (!arc.destination.inTree) {
          // 스택에 형제들을 넣는다.
          stack.push(arc.destination); // 꺼낸 것과 연결된 버텍스들을 스택에 넣음
          arc.destination.inTree = true;
        }
        arc = arc.nextArc;
      }
    }
  };
}

const graph = new DfsGraph();

graph.insertVertex("A");
graph.insertVertex("X");
graph.insertVertex("G");
graph.insertVertex("H");
graph.insertVertex("P");
graph.insertVertex("E");
graph.insertVertex("Y");
graph.insertVertex("M");
graph.insertVertex("J");
insertTwoWayArc(graph, 1, "A", "X");
insertTwoWayArc(graph, 1, "X", "G");
insertTwoWayArc(graph, 1, "X", "H");
insertTwoWayArc(graph, 1, "G", "H");
insertTwoWayArc(graph, 1, "G", "P");
insertTwoWayArc(graph, 1, "H", "E");
insertTwoWayArc(graph, 1, "H", "P");
insertTwoWayArc(graph, 1, "E", "M");
insertTwoWayArc(graph, 1, "E", "Y");
insertTwoWayArc(graph, 1, "Y", "M");
insertTwoWayArc(graph, 1, "M", "J");
graph.dfs();
