/*
연결리스트
- 여러 개의 노드들이 각 노드에 데이터와 다음 노드가 뭔지 알려주는 주소를 가지는 자료구조.
- 또한 연결 리스트는 새로운 데이터를 추가하거나, 데이터 위치를 찾거나, 제거하는 기능이 있어야 합니다.
- 자바스크립트에서는 배열이 연결리스트를 구현해주기도 합니다.
- 하지만, 자바스크립트를 사용해서 연결리스트를 구현해보겠습니다.
*/
/*
즉시 호출 함수 표현식(IIFE)를 통해서 비공개 변수를 생성하는 패턴을 이용한다.
*/
/*
자바스크립트의 객체 지향 프로그래밍에서 function을 쓴 후 대문자로 시작하는 것은 생성자(constructor)입니다.
생성자로 만들어진 객체는 new라는 키워드를 통해 호출 할 수 있습니다.
프로토타입 | prototype
prototype 객체는 같은 생성자로부터 만들어진 객체들은 모두 이 객체를 공유합니다.
Person의 prototype 객체에 sayHello라는 메소드를 넣으면 Person 생성자로 만든 모든 객체는 이 메소드를 사용이 가능합니다.
공유하고 있기 때문입니다.
*/
/* 생성자 함수 */
/* 생성자 함수 안에서 즉시 호출 함수 표현식을 통해 비공개 변수를 사용하는 패턴으로 private 클래스를 구현한다.*/
var LinkedList = (function () {
    // new LinkedList() 하면 실행되는 생성자 함수
    function LinkedList() {
        this.length = 0;
        this.head = null;
    }
    ;
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    ;
    // LinkedList 끼리는 prototype을 통해 add를 공유
    LinkedList.prototype.add = function (value) {
        var node = new Node(value);
        var current = this.head;
        if (!current) {
            this.head = node; // 현재 노드가 없으면 head에 새 노드를 추가, 객체는 어차피 주소를 변수명에 할당하기 때문에 가능한 것인가?
            this.length++; // Linked List의 length를 늘리ㅣㅁ
            return node;
        }
        else {
            while (current.next) {
                current = current.next;
            }
            current.next = node; // current.next가 false인 node의 next에 추가된 node를 삽입하다.
            this.length++; // this.length++를 통해 해당 Linked List의 길이를 늘려준다.
            return node; // 생성된 node를 반환한다.
        }
    };
    LinkedList.prototype.search = function (position) {
        var current = this.head; // current 는 this.head이다. 즉 , LinknedList 내부의 head이다.
        var count = 0; // search를 하기 위한 변수, 연결리스트의 위치에 해당하는 값을 찾는다.
        while (count < position) {
            current = current.next;
            count++;
        }
        return current.data; // 해당 노드의 데이터를 반환한다.
    };
    LinkedList.prototype.remove = function (position) {
        var current = this.head; // this의 head 참조
        var before;
        var remove;
        var count = 0;
        if (position == 0) {
            remove = this.head; // this의 head는 반드시 첫번재 노드를 가르킨다.
            this.head = this.head.next; // this.head(첫번째노드)의 next를 this.의 head로 바꾼다.
            this.length--; // length 감소
        }
        else {
            while (count < position) {
                before = current;
                count++;
                current = current.next;
            }
            remove = current; // 해당 current를 삭제
            before.next = remove.next; // 그 전 노드를 다음 노드에 연결
            this.length--; // length를 지워줌
            return remove; // 제거된 값 반환
        }
    };
    return LinkedList;
})();

var linkedlist = new LinkedList();

linkedlist.add(1);
linkedlist.add(3);
linkedlist.add(7);
linkedlist.add(4);
linkedlist.add(2);
linkedlist.add(1);

console.log(linkedlist.length);

linkedlist.remove(3);

console.log(linkedlist.length);

console.log(linkedlist.search(3));