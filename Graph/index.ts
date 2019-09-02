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

class Graph {
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
            while(last.next !==null){
                last = last.next;
            }
            last.next = vertex;
        } else {
            this.first = vertex;
        }
        this.count ++ ;
    }
    public deleteVertax(key){
        const vertex = this.first;

    }
    public insertArc(){

    }
    public deleteArc(){

    }
}

const graph = new Graph();
graph.insertVertex("A");