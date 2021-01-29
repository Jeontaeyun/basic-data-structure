/*
그래프는 이차원 배열을 이용하는 방법과 연결리스트를 이용하는 방법 두 가직 ㅏ있다.
이차원 배열은 구현이 쉽지만 공간을 많이 차지하고
연결리스트는 공간은 적게 차지하지만 복잡하다.
버텍스의 개수가 많으면 연결리스트
버텍스의 개수가 적으면 배열을 사용하는 것이 유용하다. 

연결리스트를 이용한 구현은 모든 버텍스(노드)를 연결리스트로 연결하고
각 노드의 연결관계 아크(간선)을 따로 연결리스트로 연결해주는 것을 말한다.

*/

// 방향 그래프를 나타낸다. 
namespace Dijkstra{


interface GraphClass {
    insertVertex(key: string) : void;
    deleteVertex(key: string) : void;
    insertArc(data:number, fromKey:string, toKey:string, capacity?): void;
    deleteArc(fromKey:string, toKey:string) : void;
    getVertex(key:string) : Vertex;
}
 class Vertex {
    public next : Vertex; 
    public arc : Arc;
    public key : string;
    public inTree : any ;
    public distance : number ;
    constructor(key : string){
        this.key = key;
    }
}
 class Arc{
    public nextArc : Arc; 
    public destination : Vertex;
    // Arc의ㅣ 데이터는 나중에 가중치(weight)로 사용됩니다. 
    public data : number;
    public capacity : number;
    public inTree : any;
    constructor(data: number,destination :Vertex , capacity : number){
        this.nextArc = null;
        this.destination = destination;
        this.data = data;
        this.capacity = capacity;
        this.inTree = null;
    }
}

 class Graph implements GraphClass {
    protected count : number;
    protected first : Vertex;
    constructor(){
        console.log("그래프가 생성되었습니다.");
        this.count = 0;
        this.first = null;
    }
    public insertVertex(key: string){
        console.log("버텍스가 생성되었습니다. 이름: " + key);
        const vertex = new Vertex(key);
        let last : Vertex = this.first;
        if(last){
            while(last.next !== undefined){
                last = last.next;
            }
            last.next = vertex;
        } else {
            this.first = vertex;
        }
        this.count ++ ;
    }
    public deleteVertex(key:string){
        let vertex : Vertex = this.first;
        let prev : Vertex = null;
        while(vertex.key !== key){
            prev = vertex;
            vertex = vertex.next;
        }
        if(!vertex) return false;
        if(!vertex.arc) return false;
        if(prev){
            prev.next = vertex.next;
        } else {
            this.first = vertex.next;
        }
        this.count--;
    }
    public insertArc(data:number, fromKey:string, toKey:string, capacity?){
        let from : Vertex = this.first;
        let to : Vertex = this.first;
        while(from && from.key !== fromKey){
            from = from.next;
        }
        while(to && to.key !== toKey){
            to = to.next;
        }
        if(!from || !to) return false;
        const arc: Arc = new Arc(data,to, capacity);
        let fromLast : Arc = from.arc;
        if(fromLast){
            while(fromLast.nextArc !== null){
                fromLast = fromLast.nextArc;
            }
            fromLast.nextArc = arc;
        } else {
            from.arc = arc;
        }
    }
    public deleteArc(fromKey:string, toKey:string){
        let from : Vertex = this.first;
        while(from.key !== fromKey){
            from = from.next;
        }
        if(!from) return false;
        let fromArc : Arc = from.arc;
        let preArc : Arc;
        while(fromArc.destination.key !== toKey){
            preArc = fromArc;
            fromArc = fromArc.nextArc;
        }
        if(!fromArc) return false;
        if(preArc){
            preArc.nextArc = fromArc.nextArc;
        } else {
            from.arc = fromArc.nextArc;
        }
    }
    public getVertex(key: string){
        let vertex : Vertex = this.first;
        while(vertex.key !== key){
            vertex = vertex.next;
        }
        return vertex;
    }
    public shortest(key: string){
        let temp = this.first;
        while(temp.key !==key){
            temp = temp.next;
        }
        console.log(`시작점은 ${temp.key}입니다.`);
        temp = this.first;
        let current;
        let arc;
        // 모든 버텍스에 대해서 무한대 값으로 초기화
        while(temp){
            temp.distance = Infinity;
            temp = temp.next;
        }
        temp = this.first;
        temp.distance = 0;
        // arc.destination.distance는 기준 노드부터의 거리이다. 그것이 현재 노드와의 거리와 그 노드까지의 가중치의 합보다 작을때 
        while(temp){
            current = temp;
            temp = temp.next;
            arc = current.arc;
            while(arc){
                if(arc.destination.distance > current.distance + arc.data){
                    arc.destination.distance = current.distance + arc.data;
                }
                arc = arc.nextArc;
            }
        }
        // 위에 모든 버텍스와 간선에 대해서 연산을 수행ㅓㄴ
        temp = this.first;
            while(temp){
                console.log(`${temp.key}까지의 최단 거리는 ${temp.distance}입니다.`);
                temp = temp.next;
            }
    }
    static insertTwoWayArc(graph: Graph, weight: number , fromKey: string, toKey: string) : void{
        console.log(`다익스트라 그래프 가중치 설정:  ${weight}을 ${fromKey}에서 ${toKey}까지`);
        graph.insertArc(weight, fromKey, toKey);
        graph.insertArc(weight, toKey, fromKey);
    }

}


const graph = new Graph();
graph.insertVertex('A');
graph.insertVertex('B');
graph.insertVertex('C');
graph.insertVertex('D');
graph.insertVertex('E');
graph.insertVertex('F');
Graph.insertTwoWayArc(graph, 6, 'A', 'B');
Graph.insertTwoWayArc(graph, 3, 'A', 'C');
Graph.insertTwoWayArc(graph, 2, 'B', 'C');
Graph.insertTwoWayArc(graph, 5, 'B', 'D');
Graph.insertTwoWayArc(graph, 3, 'C', 'D');
Graph.insertTwoWayArc(graph, 4, 'C', 'E');
Graph.insertTwoWayArc(graph, 2, 'D', 'E');
Graph.insertTwoWayArc(graph, 3, 'D', 'F');
Graph.insertTwoWayArc(graph, 5, 'E', 'F');
graph.shortest('A');

}