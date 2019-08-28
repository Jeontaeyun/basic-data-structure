// 타입스크립트는 자바와 비슷하게 클래스를 사용할 수 있으며 private, public등의 멤버 변수에 대한 조건을 정할 수 있다.
const Stack = (function (){
    // new LinkedList() 하면 실행되는 생성자 함수
    function Stack() : void {
        this.top = undefined;
        this.count = 0;
    }
    ;
    function Node(data : Number) : void {
        this.data = data;
        this.next = undefined;
    }
    ;
    // LinkedList 끼리는 prototype을 통해 add를 공유
    Stack.prototype.push = function (value : Number) : Number {
        var node = new Node(value);
        node.next = this.top;
        this.top = node;
        return ++this.count;
    };
    Stack.prototype.pop = function () : Boolean | Number {
        if(!this.top) {
            return false;                   //Stack underflow
        }
        const data : Number = this.top.data;
        this.top = this.top.next;
        // this.top을 다음 노드로 지정
        this.count--;
        return data;
    };
    Stack.prototype.stackTop = function() : Number{
        return this.top.data;
    };
    return Stack;
})();

const stack : any = new Stack();

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