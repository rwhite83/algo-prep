class Node {
    constructor(data = null, next = null) {
        this.data = data,
            this.next = next
    }
}

class LinkedList {

    constructor() {
        this.head = null;
    }

    addNode(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
}

function populateList() {
    let list = new LinkedList()
    for (let i = 0; i < 5; i++) {
        list.addNode(i);
    }
    for (let i = 0; i < 5; i++) {
        list.addNode(i);
    }
    return list;
}

function printList(list) {
    if (!list.head) {
    } else {
        let current = list.head;
        while (current) {
            console.log("element " + current.data + " data")
            current = current.next;
        }
    }
}

function removeDuplicates1(testList) {

    // first need to check if both head and next exist
    if (testList.head && testList.head.next) {
        let previous = testList.head;
        let current = testList.head.next;

        // then check if those two heads are the same
        if (previous.data == current.data) {
            previous.next = null;

        // otherwise create a set
        // check if each value in list exists in set
        // add to set if it does not, otherwise continue
        } else {
            let testSet = new Set();
            testSet.add(previous.data)
            while (current) {
                if (testSet.has(current.data)) {
                    previous.next = current.next;
                } else {
                    testSet.add(current.data);
                    previous = current
                }
                current = current.next;
            }
        }
    } else {
        console.log("first or second node not present");
    }
}

function removeDuplicates2(testList) {

    // check if both head and next element exist
    if (testList.head && testList.head.next) {
        let current = testList.head;

        // for each element, set runner as next
        while (current.next) {
            let runner = current.next;

            // run runner to the end
            // remove runner values found to match current
            while (runner.next) {
                if (current.data == runner.next.data) {
                    runner.next = runner.next.next;
                } else {
                    runner = runner.next;
                }
            }
            current = current.next
        }
    } else {
        console.log("first or second node not present");
    }
}

function listTest() {
    console.log("first algo:");
    let newList1 = populateList();
    printList(newList1);
    removeDuplicates1(newList1);
    console.log("NEW PRINTOUT")
    printList(newList1)
    console.log("second algo:");
    let newList2 = populateList();
    printList(newList2);
    removeDuplicates2(newList2);
    console.log("NEW PRINTOUT")
    printList(newList2)
}

listTest();