class Heap {
    private arr : number[] = [];
    // 싱글톤 패턴으로 생성하는 것을 해보려 했으나 아직까진 왜 싱글톤이 필요한지 모르겠다.
    public static getInstance(){
        let instance = null;
            if(instance === null){
                instance = new Heap;
            }
            return instance;
    }
    private reheapUp(idx : number) : void{
        if(idx){
            const parent:number = Math.floor((idx-1)/2);
            if(this.arr[idx] > this.arr[parent]){
                const temp: number = this.arr[idx];
                this.arr[idx] = this.arr[parent];
                this.arr[parent] = temp;
                this.reheapUp(parent);
            }
        }
    }
    private reheapDown(idx : number){
        let left:number = 0;
        let right:number = 0;
        let large:number;
        if (idx * 2 + 1 < this.arr.length) {
            left = this.arr[idx * 2 + 1];
            if (idx * 2 + 2 < this.arr.length - 1) {
              right = this.arr[idx * 2 + 2];
            }
            if (left > right) {
              large = idx * 2 + 1;
            } else {
              large = idx * 2 + 2;
            }
            if (this.arr[idx] < this.arr[large]) {
              const temp:number = this.arr[idx];
              this.arr[idx] = this.arr[large];
              this.arr[large] = temp;
              this.reheapDown(large);
            }
          }
    }
    insert(data : number) : boolean{
        const last : number = this.arr.length;
        this.arr[last] = data;
        this.reheapUp(last);
        return true;
    }
    delete() : any{
        if(this.arr.length === 0){
            return false;
        }
        const del : number = this.arr[0];
        this.arr[0] = this.arr.pop();
        this.reheapDown(0);
        return del;
    }
    sort() : number[] {
        const sort : number[] = [];
        const count : number = this.arr.length;
        for(let i:number = 0; i < count ; i++){
            sort.push(this.delete());
        }
        return sort;
    }
}

const heap = new Heap();

heap.insert(5);
heap.insert(3);
heap.insert(7);
heap.insert(4);
heap.insert(2);
heap.insert(6);
heap.insert(1);
console.log(heap.sort()); 