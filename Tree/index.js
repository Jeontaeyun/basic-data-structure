/*
이진 검색 트리를 구현할 것입니다.
Binary Search Tree(BTS)라고도 한다. 
헤딩 이진 검색 트리는 균형 트리가 아니기 때문에 처음 입력되는 데이터에 영향을 받는다.
이를 해결하긱 위해 AVL트리가 있다.
*/

const binarySearchTree = (function(){
    //생각해보니 이렇게 구현하면 내부적으로 같은 this를 공유하는 군
    function BinaryTree(){
        this.count = 0;
        this.root;
    };
    function Node(data){
        this.data = data;
        this.left = null;
        this.right = null;
    };
    //재귀를 위해 만들어주는 함수 
    function _insert(root,node){
        if(!root) return node;
        if(node.data < root.data){
            //재귀 함수를 통해 계속 값을 비교하여 배치한다. 
            root.left = _insert(root.left, node);
            return root;
        }else{
            root.right = _insert(root.right, node);
            return root;
        }
    };
    BinaryTree.prototype.add = function(data){
        const node = new Node(data);
            if(this.count === 0) {
                this.root = node;
            }
            else{
                _insert(this.root, node);
            }
            return ++this.count;
    };
    function _get(data,node){
        if(node){
            if(data < node.data){
                return _get(data, node.left);
            }
            else if(data > node.data){
                return _get(data, node.right);
            }
            else{
                return node;
            }
        }else{
            return null;
        }
    };  
    BinaryTree.prototype.get = function(data){
        if(this.root){
            return _get(data, this.root);
        }else return null;
    };
    /*
    삭제의 3가지 꼉우의 수
    01. 왼쪽 자식 노드가 없을 때
    02. 오른쪽 자식 노드가 없을 때
    03. 그리고 왼쪽, 오른쪽 자식 노드 둘 다 있을 때
    이진 검색 트리의 삭제 기능은 노드의 자식 위치와 개수에 따라 분기 처리를 해주어야 해서 조금 더 복잡한 감이 있습니다. 
    */
    function _remove(root, data){
        const newRoot, exChange, temp;
        if(!root) return false;
        if(data < root.data){
            root.left = _remove(root.left, data);
        } else if (data > root.data){
            root.right = _remove(root.right, data);
        } else {
            if(!root.left){
                newRoot = root.right;
                return newRoot;
            } else if(!root.right){
                newRoot = root.left;
                return newRoot;
            } else {
                exChange = root.left;
                while(exChange.right) exChange = exChange.right;
                temp = root.data;
                root.data = exChange.data;
                exChange.data= temp;
                root.left = _remove(root.left, exChange.data);
            }
        }
        return root;
    };
    BinaryTree.prototype.remove = function(key){
        const node = _remove(this.root, key);
        if(node){
            this.root = node;
            this.count--;
            if(this.count === 0) this.root = null;
        }
        return true;
    };
    return BinaryTree
})();

const tree = new binarySearchTree();

tree.add(5);
tree.add(1);
tree.add(2);
tree.add(3);
tree.add(4);
tree.add(6);
tree.add(7);
tree.add(8);
tree.add(9);
tree.add(10);
tree.add(11);
tree.add(12);
tree.add(13);
tree.add(14);
console.log(tree.root);