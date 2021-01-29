// 이중 연결리스트
// 장점 : 단순 연결리스트의 단점인 순차적 접근을 더 효과적으로 해준다. 시간 복잡도 감소
// 단점 : 메모리를 더 사용해야 한다. 공간 복잡도 증가 | 구현이 조금 복잡해진다.

const BinLinked = (function(){
    function BinLinked(){
        this.head = { next: null , prev: null}
        this.tail= { next: null , prev: null}
        this.length = 0;
    }
    function Node(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
    BinLinked.prototype.add = function(data){
        const node = new Node(data);
        let current = this.head;
        if(!current.next){
            this.head.next = node;
            this.tail.prev = node;
            node.prev = this.head;
            node.next = this.tail;
            this.length ++;
            return node;
        }else{
            while(current.next.next){
                current = current.next;
            }
            current.next = node;
            node.prev = current;
            this.tail.prev = node;
            node.next = this.tail;
            this.length ++;
            return node;
        }
    }
    BinLinked.prototype.insert = function (data, index){
        const node = new Node(data);
        if(index > this.length/2){
            let current = this.tail;
            let position = this.length-index;
            let count = 0;
            while(count++ < position){
                current = current.prev;
            }
            node.prev = current.prev;
            node.next = current;
            current.prev.next = node;
            current.prev = node;
            this.length ++;
            return current.data;
        }
        else{
            let current = this.head;
            let position = index+1;
            let count = 0;
            while(count ++ < position){
                current = current.next;
            }
            node.prev = current.prev;
            node.next = current;
            current.prev.next = node;
            current.prev = node;
            this.length ++;
            return current.data;
        }
    }
    BinLinked.prototype.remove = function (index){
            // 데이터의 인덱스에 따라 양방향에서 접근할 수 있어 데이터를 순차접근해야 할 때 유용하다.
            // 결국 연결리스트는 삭제, 수정, 삽입등이 모두 순차적으로 이루어져야한다.
            if(index > this.length/2){
                let current = this.tail;
                let position = this.length-index;
                let count = 0;
                while(count++ < position){
                    current = current.prev;
                }
                current.prev.next = current.next;
                current.next.prev = current.prev;
                this.length --;
                return current.data;
            }
            else{
                let current = this.head;
                let position = index+1;
                let count = 0;
                while(count ++ < position){
                    current = current.next;
                }
                current.prev.next = current.next;
                current.next.prev = current.prev;
                this.length --;
                return current.data;
            }
    }
    BinLinked.prototype.get = function(index){
        // 데이터의 인덱스에 따라 양방향에서 접근할 수 있어 데이터를 순차접근해야 할 때 유용하다.
        if(index > this.length/2){
            let current = this.tail;
            let position = this.length-index;
            let count = 0;
            while(count++ < position){
                current = current.prev;
            }
            return current.data;
        }
        else{
            let current = this.head;
            let position = index+1;
            let count = 0;
            while(count ++ < position){
                current = current.next;
            }
            return current.data;
        }
    }
        BinLinked.prototype.entries = function(){
            let count = 0;
            let array = [];
            let current = this.head;
                while(count++ < this.length){
                    current = current.next;
                    array = array.concat(current.data);
                }

            return array;
     }
    return BinLinked;
})();

const binlinked = new BinLinked();

binlinked.add(1);
binlinked.add(2);
binlinked.add(3);
binlinked.add(4);
binlinked.add(5);
binlinked.add(6);
binlinked.add(7);
binlinked.remove(1);
binlinked.add(8);
binlinked.remove(1);
binlinked.add(9);
console.log(binlinked.get(6));
binlinked.add(10);
binlinked.add(11);
binlinked.add(12);
binlinked.add(13);
binlinked.remove(10);
binlinked.insert(13,1);
binlinked.insert(21,7);
console.log(binlinked.entries());

// 양방향 연결리스트를 구현 | 양방향에서 접근할 수 있으므로 접근 속도는 빠르나 메모리 사용량(공간복잡도)이 증가한다. 