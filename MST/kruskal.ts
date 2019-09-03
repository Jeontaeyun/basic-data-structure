namespace MstGraphKruskal{
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
    
            public mst() : void {
                // 사이클 테이블의 원리를 기억하자 
                // 각 노드에 할당하는 값을 넣은 뒤 두 노드가 연결되면 같은 값을 가지게 만든다.
                // 새로운 간선이 들어왔을 때 이미 두 노드가 같은 부모값을 가지면 사이클이 발생하는 것이다. 
                let cycleTable = [];
                let arcList = [];
                let temp = this.first;
                let i = 0;
                let resultWeight : number = 0;
                while(temp){
                    let arc = temp.arc;
                    while(arc){
                        arcList.push({temp, arc});
                        arc = arc.nextArc;
                    }
                    cycleTable[i++] = [temp.key, i];
                    temp = temp.next;
                }
                arcList.sort((a,b)=>a.arc.data-b.arc.data);
                for(let i = 0; i<arcList.length ; i ++){
                    const {arc, temp} = arcList.shift();
                    const [firstFactor] = cycleTable.filter(i => i[0] === temp.key);
                    const [secondFactor] = cycleTable.filter(i=> i[0] === arc.destination.key);
                    if(firstFactor[1] !== secondFactor[1]){
                        secondFactor[1] = firstFactor[1];
                        resultWeight += arc.data;
                        console.log(`${temp.key}버텍스에서 ${arc.destination.key} 버텍스로 가는 가중치 ${arc.data} 아크 추가.`)
                    }

                    
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