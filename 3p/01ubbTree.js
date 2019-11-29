class Nodo {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.padre=null;
        this.data = data;
    }
}
class ubbTree { 
    constructor() {
        this.root = null;
        this.matriz=[[0]]
    }
    insertar(numero){
        let newNode = new Nodo(numero);
        var derecha=false
        if (this.root === null) {
            this.root = newNode;
        }
        else{
            agregar(this.root)
            function agregar(nodo){
                if(nodo.left==null){
                    nodo.left=newNode
                    newNode.padre=nodo
                }
                else if(nodo.right==null){
                    nodo.right=newNode
                    newNode.padre=nodo
                }else if(nodo.left!=null && derecha==false){
                    derecha=true
                    agregar(nodo.left)
                    
                }
                else if(derecha==false && nodo!=this.root){
                    agregar(nodo.padre.right)
                }else if(derecha==true && nodo.padre.padre.right!=nodo){
                    agregar(this.root.right)
                }else{
                    derecha=false
                    agregar(this.root.left)
                    
                }
            }
            /*
            count veces
            n=0
            Math.pow(2,n)
            bool derecho=false
            */
        }
    }
    remove(nodo){
        nodo.root = null
        nodo.left = null
        nodo.right = null
    }

    preOrder(tree = this.root){//N,L,R.  
        console.log(tree.data);
            if(tree.left != null)
            {
                this.preOrder(tree.left)
            }
            if(tree.right != null){
                this.preOrder(tree.right)
            }
        
    }
    bft(tree = this.root){
        console.log(tree);
        if(tree === null){
            return;
        }
        let queue = [];
        queue.push(tree);

        while(queue.length > 0){
            let currentNode = queue[0];

            if(currentNode.left !== null){
                queue.push(currentNode.left);
            }
            if(currentNode.right !== null){
                queue.push(currentNode.right);
            }
            queue.shift();
        }
    }
}

let tree = new ubbTree();

tree.insertar(1);
tree.insertar(2)
tree.insertar(3)
tree.insertar(4)
tree.insertar(5)
tree.preOrder()