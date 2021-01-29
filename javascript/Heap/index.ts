class Heap {
    private arr : number[] = [];
    // 싱글톤 패턴으로 생성하는 것을 해보려 했으나 아직까진 왜 싱글톤이 필요한지 모르겠다.
    // 이렇게 클래스로 지정해주는 것을 반환 값으로 할 수 있다. class로 선언하면 새로운 타입이 된다.
    public static getInstance() : Heap{
        let instance : Heap = null;
            if(instance === null){
                instance = new Heap;
            }
            return instance;
    }
    private reheapUp(idx : number) : void{
        // 첫 번째는 맨 마지막 idx가 들어오고
        if(idx){
            // 부모 인덱스로 last인덱스 외에 맨 각운데 갚으로 가진다.
            // Math.floor()는 주어진 숫자와 깥거나 작은 정수 중에 가장 큰 수를 반환한다.
            // 순서대로 배열을 나열하기 때문에 부모는 반드시 맨 마지막 값을 2로 나눈 수의 반내림 값이 된다.
            const parent:number = Math.floor((idx-1)/2);
            // 현재 마지막 들어온 데이터가 부모 데이터 보다 크다면 바꿔주고 재귀적으로 수행함
            if(this.arr[idx] > this.arr[parent]){
                const temp: number = this.arr[idx];
                this.arr[idx] = this.arr[parent];
                this.arr[parent] = temp;
                // 부모에 대해 재귀적으로 진행해서 마지막 노드까지 확인한다
                this.reheapUp(parent);
            }
        }
    }
    private reheapDown(idx : number) : void{
        let left:number = 0;
        let right:number = 0;
        let large:number;
        // 아래에 자식 노드가 있으면
        if (idx * 2 + 1 < this.arr.length) {
            // 왼쪽 노드의 데이터
            left = this.arr[idx * 2 + 1];
            // 왼쪽 노드와 오른쪽 노드 외에 자식 노드가 있을 때에나 둘 중 더 큰 값을 비교하여 내린다.
            // 완전 이진트리여야하기 때문이다.
            // 매 하단 노드를 엎앤 후 idx*2+2<length-1이라는 것은 다른 요소가 더 있다는 것이고 적어도
            // 왼쪽이 다 안채워졌을 경우 반드시 왼쪽에 넣어야 한다.
            if (idx * 2 + 2 < this.arr.length - 1) {
                right = this.arr[idx * 2 + 2];
            }
            // 큰 값의 인덱스를 반환함
            if (left > right) {
              large = idx * 2 + 1;
            } else {
              large = idx * 2 + 2;
            }
            // 부모 노드가 자식노드의 large값 보다 작으면 부모 노드와 자식노드 중 큰 값을 바꿔줌
            if (this.arr[idx] < this.arr[large]) {
              const temp:number = this.arr[idx];
              this.arr[idx] = this.arr[large];
              this.arr[large] = temp;
              // 내려가면서 바뀐 인덱스를 기준으로 실행
              this.reheapDown(large);
            }
          }
    }
    insert(data : number) : boolean{
        const last : number = this.arr.length;
        // 맨 마지막에 data를 먼저 추가함
        this.arr[last] = data;
        // Heapify Algorithm을 돌린다.
        this.reheapUp(last);
        return true;
    }
    delete() : any{
        if(this.arr.length === 0){
            return false;
        }
        // 최상단의 값을 del에 넣고 반환한다.
        const del : number = this.arr[0];
        // 배열의 마지막 요소를 맨 앞으로 가져온다.
        this.arr[0] = this.arr.pop();
        this.reheapDown(0);
        return del;
    }
    sort() : number[] {
        // 힙 노드에서 최 상단값을 delete하면 제일 큰 값이 계속해서 빠져나온다.
        const sort : number[] = [];
        const count : number = this.arr.length;
        for(let i:number = 0; i < count ; i++){
            //delete를 반복하면 최댓값만 나온다.
            sort.push(this.delete());
        }
        return sort;
    }
}

const heap = Heap.getInstance();

heap.insert(5);
heap.insert(3);
heap.insert(7);
heap.insert(4);
heap.insert(2);
heap.insert(6);
heap.insert(1);
// heap.reheapUp(3); -> Private 변수이기에 외부 참조가 안된다.
console.log(heap.sort()); 

