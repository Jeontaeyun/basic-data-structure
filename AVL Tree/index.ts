/*
이진 검색트리는 노드보다 큰 값은 오른쪽, 작은 값은 왼쪽으로 이진트리를 구성하는 것이다.
하지만 이렇게 구현하면 데이터가 들어오는 것에 따라서 한쪽으로 치우침이 발생할 수 있습니다. 
AVL트리는 이런 한계를 방지하기 위해 이진 균형 검색 트리를 말합니다.
LL : 우회전을 한 번 해줌
RR : 좌회전을 한 번 해줌
RL : 두번째 노드를 좌회전 한 번 후 전체 노드를 우회전 한 번
LR : 두번째 노드를 우회전 한 번 후 전체 노드를 좌회전 한 번
*/
class TreeNode {
    constructor(public data:number, public left?: TreeNode, public right?: TreeNode ,public balanceFactor? : number){}
}
class AVLTree {
    private count : number = 0;
    private root : TreeNode;
    private taller ;
    private shorter ;
    private success ;
    public insert(data: number){
        this.taller = false;
        const node = new TreeNode(data);
        this.root = this._insert(this.root, node);
        this.count++;
    }
    public delete(data: number) : boolean{
        this.shorter = false;
        this.success = false;
        const newRoot = this._delete(this.root, data);
        if(this.success){
            this.root = newRoot;
            this.count--;
            return true;
        }
        return false;
    }
    // 재귀를 이용해서 탐색을 실행한다. 
    public search(key: number){
        if(this.root){
            return this._search(this.root, key);
        }
        return false;
    }
    private _insert(root: TreeNode, node : TreeNode) : TreeNode{
        // Create Root
        if(!root){
            root = node;
            this.taller = true;
            console.log('no Root', root);
            return root;
        }
        if(node.data < root.data){
            root.left = this._insert(root.left, node);
            console.log('go left', this.taller, root.balanceFactor);
            if(this.taller){
                switch(root.balanceFactor){
                    case 1  :   root = this._insertLeftBal(root); break;
                    case 0  :   root.balanceFactor = 1; break;
                    case -1 :   root.balanceFactor = 0; this.taller = false; break;
                }
            }
        }else if(node.data > root.data){
            root.right = this._insert(root.right, node);
            console.log('go right', this.taller, root.balanceFactor)
            if(this.taller){
                switch(root.balanceFactor){
                    case 1  :   root.balanceFactor = 0; this.taller = false; break;
                    case 0  :   root.balanceFactor = 1; break;
                    case -1 :   root = this._insertRightBal(root); break;
                }
            }
        }
        return root;
    }
    private _insertRightBal(root: TreeNode){
        const right = root.right;
        console.log('insRightBal', right.balanceFactor);
        switch(right.balanceFactor){
            // RR의 경우
            case -1:
                root.balanceFactor = 0;
                right.balanceFactor = 0;
                root = this._rotateLeft(root);
                this.taller = false;
                break;
            // 균형이니 경우    
            case 0:
                throw new Error('불가능 한 경우');
            // RL의 경우
            case 1: 
                const left = right.left;
                switch(left.balanceFactor){
                    case 1 : 
                        root.balanceFactor = -1;
                        right.balanceFactor = 0;
                        break;
                    case 0 : 
                        root.balanceFactor = 0;
                        right.balanceFactor = 1;
                    case -1: 
                        root.balanceFactor = 0;
                        right.balanceFactor = 1;
                        break;
                }
                left.balanceFactor = 0;
                root.right = this._rotateRight(right);
                root = this._rotateLeft(root);
                this.taller = false;
        }
    }
    private _insertLeftBal(root: TreeNode){
        const left = root.left;
        console.log('insLeftBal', left.balanceFactor);
        switch(left.balanceFactor){
            // LL의ㅣ 경우
            case 1:
                root.balanceFactor = 0;
                left.balanceFactor = 0;
                root = this._rotateRight(root);
                this.taller = false;
                break;
            // 균형이니 경우    
            case 0:
                throw new Error('불가능 한 경우');
            // RL의 경우
            case -1: 
                const right = left.right;
                switch(right.balanceFactor){
                    case 1 : 
                        root.balanceFactor = -1;
                        left.balanceFactor = 0;
                        break;
                    case 0 : 
                        root.balanceFactor = 0;
                        left.balanceFactor = 1;
                    case -1: 
                        root.balanceFactor = 0;
                        left.balanceFactor = 1;
                        break;
                }
                right.balanceFactor = 0;
                root.left = this._rotateLeft(left);
                root = this._rotateRight(root);
                this.taller = false;
        }
    }
    private _delete(root: TreeNode, key : number) : TreeNode{
        return;
    }
    private _deleteRightBal(){

    }
    private _deleteLeftBal(){

    }
    // root를 체크하고, root의 데이터보다 크면 왼쪽, 작은면 오른쪽 노드로 다시 검사하는 재귀 알고리즘
    private _search(root: TreeNode, key : number){
        if(root){
            if(key < root.data){
                return this._search(root.left, key);
            } else if(key > root.data){
                return this._search(root.right, key);
            }else{
                return root;
            }
        }
    }

    private _rotateLeft(root : TreeNode) : TreeNode{
        const temp : TreeNode = root.right;
        temp.left = root;
        return temp;
    }

    private _rotateRight(root : TreeNode) : TreeNode{
        const temp : TreeNode = root.left;
        temp.right = root;
        //temp를 리턴하면 root = temp가 된다. 
        return temp;
    }
};

const avlTree = new AVLTree();
avlTree.insert(8);
avlTree.insert(12);
avlTree.insert(14);
avlTree.insert(18);
avlTree.insert(20);
avlTree.insert(23);
avlTree.insert(44);
avlTree.insert(52);
avlTree.delete(20);