var Stack = (function () {
    // new LinkedList() 하면 실행되는 생성자 함수
    function Stack() {
        this.top = null;
        this.count = 0;
    }
    ;
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    ;
    // LinkedList 끼리는 prototype을 통해 add를 공유
    Stack.prototype.push = function (value) {
        var node = new Node(value);
        node.next = this.top;
        this.top = node;
        return ++this.count;
    };
    Stack.prototype.pop = function () {
        if(!this.top) {
            return false;                   //Stack underflow
        }
        var data = this.top.data;
        this.top = this.top.next;
        // this.top을 다음 노드로 지정
        this.count--;
        return data;
    };
    Stack.prototype.stackTop = function(){
        return this.top.data;
    };
    return Stack;
})();

var stack = new Stack();

stack.push(3);
stack.push(2);
stack.push(7);
stack.push(8);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.stackTop());          // pop하지 않고 최상위 데이터만 확인하는 함수
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());               // Stack underflow