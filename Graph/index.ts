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
}


const graph = new Graph();
graph.insertVertex("A");
graph.insertVertex('B');
graph.insertVertex('C');
graph.insertVertex('D');
graph.insertVertex('E');
graph.insertVertex('F');
graph.insertArc(1, 'A', 'B');
graph.insertArc(1, 'B', 'C');
graph.insertArc(2, 'B', 'E');
graph.insertArc(1, 'C', 'E');
graph.insertArc(1, 'C', 'D');
graph.insertArc(1, 'E', 'D');
graph.insertArc(1, 'E', 'F');
console.log(graph.getVertex('B'));

