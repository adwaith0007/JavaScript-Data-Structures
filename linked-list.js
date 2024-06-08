class Node {
    constructor(value){
        this.value=value;
        this.next=null;
    }
}


class LinkedList{
    constructor(){
        this.head=null;
        this.size=0
    }

    isEmpty(){
    return this.size==0
    }

    getSize(){
        return this.size
    }

    prepend (value){
        const node = new Node (value)
        

        if(this.isEmpty()){
            this.head= node
        }else{
            node.next=this.head;
            this.head=node

        }

        this.size++


    }


    append (value){
        const node = new Node (value)

        if(this.isEmpty()){
            this.head=node
        }else{
            let current = this.head
            
            while(current.next){
                current=current.next
            }

            current.next= node
        }

        this.size++

    }


    // fgh





    print() {
        if (this.isEmpty()) {
          console.log("List is empty");
        } else {
          let curr = this.head;
          let list = "";
          while (curr) {
            list += `${curr.value}->`;
            curr = curr.next;
          }
          console.log(list);
          
        }
      }
    




}






const list = new LinkedList()

console.log('Lost is empty? :', list.isEmpty());

console.log('List size:',list.getSize());

list.append(2)

list.append(3)


list.prepend(1)

list.prepend(3)
list.prepend(4)
console.log('Lost is empty? :', list.isEmpty());

console.log('List size:',list.getSize());


list.print()



// traverseLinkedList(list);

// // Function to traverse the linked list
// function traverseLinkedList(list) {
//   let current = list.head;
//   while (current !== null) {
//     console.log(current.value);
//     current = current.next;
//   }
// }