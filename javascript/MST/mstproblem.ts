namespace MstGraph{


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
    public inTree : boolean;
    constructor(key : string){
        this.key = key;
        this.inTree;
    }
}
 class Arc{
    public nextArc : Arc; 
    public destination : Vertex;
    // Arc의ㅣ 데이터는 나중에 가중치(weight)로 사용됩니다. 
    public data : number;
    public capacity : number;
    public inTree : boolean;
    constructor(data: number,destination :Vertex , capacity : number){
        this.nextArc = null;
        this.destination = destination;
        this.data = data;
        this.capacity = capacity;
        this.inTree;
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
class MstGraph extends Graph{

        public mst() : void{
            let resultWeight = 0;
            let first: Vertex = this.first;
            let inTreeCount = 0;
            while(first){
                // 모든 버텍스의 inTree를 false로 초기화
                first.inTree = false;
                let arc = first.arc;
                while(arc){
                    // 각 간선의 inTree를 false로 초기화
                    arc.inTree = false;
                    arc = arc.nextArc;
                }
                first = first.next;
            }
            //this.first.inTree를 true로 하면서 첫 번째 버텍스를 기준으로 카운트 시작
            this.first.inTree = true;
            inTreeCount ++;
            console.log(`${this.first.key}버텍스가 추가되었습니다.`);
            let temp = this.first;
            let current;
            let minArc;
            let minTemp;
            // 프림 알고리즘의 간선의 수는 반드시 노드-1이다.
            while(inTreeCount != this.count){
                // 모든 버텍스에 대해서 진행
                // inTreeCount는 순차적으로 올라가고 this.count와 달라지는 시점 직전이 간선의 수 = 노드-1이다.
                while(temp){
                    // 모든 버텍스에 대해 실행
                    current = temp;
                    temp = temp.next;
                    // 만약 현재 inTree가 false이면 다음 반복문 수행
                    // 해당 temp의 intree가 true이면 실행
                    // 객체이기 때문에 서로 참조로 데이터를 주고받아 공유한다.
                    if(!current.inTree) continue;
                    // 현재 버텍스의 아크를 값을 받음
                    let arc = current.arc;
                    // 현재 버텍스와 연결된 모든 버텍스에 대해서 진행
                    while(arc){
                        if(!arc.destination.inTree){
                            //minArc가 없다면 arc를 추가
                            if (!minArc) minArc = arc;
                            //minAr의 데이터보다 현재 아크의 가중치가 더 작으면
                            // minArc를 arc로 바꾸고, minTemp에는 현재 버텍스를 넣음
                            if (minArc.data > arc.data) { // 기존 최솟값보다 더 작은 값을 찾았을 때 
                            minArc = arc; // 최소 아크를 찾음
                            minTemp = current; // 최소 아크의 출발 버텍스 저장
                            }
                        }
                    // 모든 아크에 대해서 실행
                    arc = arc.nextArc;
                    }
                }
                    //inTree가 true가 된 겂들 MST에 포함되는 버텍스들
                    resultWeight +=minArc.data;
                    //minArc.destination의 버텍스의 inTree를 true로 해서 다음 사이클에 동작하도록 함
                    minArc.destination.inTree = true;
                    //inTree가 true가 된 것들이 MST에 포함되는 아크들 
                    minArc.inTree = true;
                    // mst카운팅을 올려줌
                    inTreeCount++;
                    console.log(`${minTemp.key} 버텍스에서 ${minArc.destination.key} 버텍스로 향하는 가중치 ${minArc.data}의 아크가 추가되었습니다.`);
                    minArc = null;
                    temp = this.first;
             }
             console.log(`총 가중치는 ${resultWeight}입니다.`);
        };
        static insertTwoWayArc(graph: MstGraph, weight: number , fromKey: string, toKey: string) : void{
            console.log(`MST그래프 가중치 설정:  ${weight}을 ${fromKey}에서 ${toKey}까지`);
            graph.insertArc(weight, fromKey, toKey);
            graph.insertArc(weight, toKey, fromKey);
        }
    }

    const mstGraph : MstGraph = new MstGraph();
    mstGraph.insertVertex('A');
    mstGraph.insertVertex('B');
    mstGraph.insertVertex('C');
    mstGraph.insertVertex('D');
    mstGraph.insertVertex('E');
    mstGraph.insertVertex('F');
    MstGraph.insertTwoWayArc(mstGraph, 6, 'A', 'B');
    MstGraph.insertTwoWayArc(mstGraph, 3, 'A', 'C');
    MstGraph.insertTwoWayArc(mstGraph, 2, 'B', 'C');
    MstGraph.insertTwoWayArc(mstGraph, 5, 'B', 'D');
    MstGraph.insertTwoWayArc(mstGraph, 3, 'C', 'D');
    MstGraph.insertTwoWayArc(mstGraph, 4, 'C', 'E');
    MstGraph.insertTwoWayArc(mstGraph, 2, 'D', 'E');
    MstGraph.insertTwoWayArc(mstGraph, 3, 'D', 'F');
    MstGraph.insertTwoWayArc(mstGraph, 5, 'E', 'F');
    mstGraph.mst();

}