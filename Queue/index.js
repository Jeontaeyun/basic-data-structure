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
        }
        this.rear = node;                   // 시작할 때는 head와 rear에 모두 node가 들어가 있다.
        return ++ this.count;
    };
    Queue.prototype.deq = function(){
        if(!this.head){
            return false;
        }
        const data = this.head.data;
        this.head = this.head.next;
        --this.count;
        return data;
    };
    Queue.prototype.frontData = function(){
        return this.head && this.head.data;
    };
    return Queue;
})();