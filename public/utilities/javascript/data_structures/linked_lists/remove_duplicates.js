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

    // a standard to string method for my demo
    toString() {
        let return_string = "";
        if (this.head) {
            let current = this.head;
            while (current) {
                return_string += "element " + current.data + " data\n"
                current = current.next;
            }
            return return_string;
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

let demo_list_one;
let demo_list_two;

function demoOneGenerate() {
    let target_div = document.getElementById('test1_output');
    demo_list_one = populateList();
    let generated_text = demo_list_one.toString();
    target_div.innerText = generated_text;
}

function demoOneFilter() {
    let target_div = document.getElementById('test1_output');
    removeDuplicates1(demo_list_one);
    let generated_text = demo_list_one.toString();
    target_div.innerText = generated_text;
}

function demoTwoGenerate() {
    let target_div = document.getElementById('test2_output');
    demo_list_two = populateList();
    let generated_text = demo_list_two.toString();
    target_div.innerText = generated_text;
}

function demoTwoFilter() {
    let target_div = document.getElementById('test2_output');
    removeDuplicates1(demo_list_two);
    let generated_text = demo_list_two.toString();
    target_div.innerText = generated_text;
}

const subtract = (a,b) => a - b;

module.exports = {
    simpleMessage: "Hello World",
    minus: subtract
}