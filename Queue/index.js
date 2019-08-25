var Queue = (function(){
    function Queue(){
        this.count = 0;     // Queue안의 데이터의 수
        this.head = null;   // 맨 처음을 가르키는 head
        this.rear = null;   // 멘 마지막을 가르키는 rear
    };
    function Node(data){
        this.data = data;
        this.next = null;
    };
    Queue.prototype.enq = function(data){
        const node = new Node(data);
        // node는 하나의 캡슐로 이를 참조하는 하나의 변수가 바끼면 다른 값에서의 값도 바뀐다.
        // 자바스크립트의 객체는 메모리 주소를 변수명에 저장해주기 때문에, 해당 객체를 변수에 할당하여도 
        // 내부적인 속성을 공유한다. (Shallow Copy)
        if(!this.head){
            this.head = node;               // this.head => node 1
        }
        else {                              // this.head가 있다면, 2번째 이후 부터
            this.rear.next = node;          // 시작할 때 넣은 rear의 next에 새로운 node를 넣어 head1 -> node1 -> node2 -> node3 <- rear 구조를 만든다.
        }                                   // head => node1 => node2 <=rear 의 구조로 데이터가 늘어나는 구조
        this.rear = node;                   // 시작할 때는 head와 rear에 모두 node가 들어가 있다.
        return ++ this.count;
    };
    Queue.prototype.deq = function(){
        if(!this.head){
            return false;
        }
        const data = this.head.data;
        this.head = this.head.next;         // head => node1 => node2 => node3 <= rear 순서이기에 node1의  
        return data;
    };
    Queue.prototype.front = function(){
        return this.head && this.head.data;
        //retunr this.rear.next = this.haed로 구현할 수 있습니다. 
    };
    return Queue;
})();

const que = new Queue();

console.log(que.enq(1));
console.log(que.enq(2));
console.log(que.enq(3));
console.log(que.enq(4));
console.log(que.enq(5));
console.log(que.deq());
console.log(que.deq());
console.log(que.deq());
console.log(que.deq());