// piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }
    push(val){

      let newNode = new Node(val)
    if (this.head == null)
      {
        this.head = newNode
        this.length++
      }
    else{
      let curr = this.head
      while(curr.next){
        curr = curr.next    
        }
        curr.next=newNode
        this.length++
        }
        return this
      }

      
      
     

    insertFront(val){
      let newNode = new Node(val)
      if (this.head==null)
      {
        this.head = newNode
      }
      else{
         newNode.next = this.head
         this.head = newNode
       }
    
      return this.head
    }


  


}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList()
console.log(list.push(1))
console.log(list.push(2))
console.log(list.push(3))
console.log(list.push(5))
console.log(list.insertFront(5))
console.log(list.insertFront(4))
// console.log(list)

