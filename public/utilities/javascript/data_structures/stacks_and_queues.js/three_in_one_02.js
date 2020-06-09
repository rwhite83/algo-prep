// class to handle values and functions for individual stacks
class StackInfo {

    // initializes a stack, links to parent multistack, 
    // and initializes values
    constructor(multistack, start, capacity) {
        this.size = 0;
        this.parent = multistack;
        this.start = start;
        this.capacity = capacity;
    }

    // checks if an index is within stack capacity 
    // by comparing given index to virtual index
    isWithinStackCapacity(index) {
        if (index < 0 || index >= this.parent.values.length) {
            return false
        }
        const virtualIndex = index < this.start ? index + this.parent.values.length : index
        const end = this.start + this.capacity;
        return this.start <= virtualIndex && virtualIndex < end;
    }

    // returns the index of last capacity space of the stack
    lastCapacityIndex() {
        return this.parent.adjustIndex(this.start + this.capacity - 1);
    }

    // returns the index of the last occupied element of the stack
    lastElementIndex() {
        return this.parent.adjustIndex(this.start + this.size - 1);
    }

    isFull() {
        return this.size == this.capacity;
    }

    isEmpty() {
        return this.size == 0;
    }

}

class MultiStack {

    // initializes a multistack, creating an array of stackinfo objects
    constructor(numberOfStacks, defaultSize) {
        this.values = new Array(numberOfStacks * defaultSize);
        this.info = new Array(numberOfStacks);

        for (let i = 0; i < numberOfStacks; i++) {
            this.info[i] = new StackInfo(this, defaultSize * i, defaultSize)
        }
    }

    // checks if a push is possible on a given stack, then adds if possible
    // rejects if all stacks are full, otherwise expands designate stack if necessary
    push(stackNum, value) {
        if (this.allStacksAreFull()) {
            alert("A push was attempted on Stack " + stackNum + " but all stacks are full.");
        } else {
            let stack = this.info[stackNum];
            if (stack.isFull) {
                this.expand(stackNum);
            }
            stack.size++;
            this.values[stack.lastElementIndex()] = value;
        }
    }

    // checks if stack is empty, alerts if so
    // otherwise gets last element index for designated stack,
    // sets element to zero, and returns value
    pop(stackNum) {
        let stack = this.info[stackNum];
        if (stack.isEmpty()) {
            alert("A pop was attempted on Stack " + stackNum + " but it is empty.");
        }

        let value = this.values[stack.lastElementIndex()];
        this.values[stack.lastElementIndex()] = 0;
        stack.size--;
        return value;
    }

    // checks if stack is empty, alerts if so
    // otherwise gets last element index for designated 
    // stack, and returns value
    peek(stackNum) {
        let stack = this.info[stackNum];

        if (stack.isEmpty()) {
            alert("A peek was attempted on Stack " + stackNum + " but it is empty.");
        }

        return this.values[stack.lastElementIndex()]
    }

    // if required, this function expands a stack into another
    // iterates through and adjusts all other values
    shift(stackNum) {
        console.log("shifting stack " + stackNum);
        let stack = this.info[stackNum];

        if (stack.size > stack.capacity) {
            let nextStack = (stackNum + 1) % this.info.length;
            this.shift(nextStack);
            stack.capacity++;
        }

        let index = stack.lastCapacityIndex();
        while (stack.isWithinStackCapacity(index)) {
            this.values[index] = this.values[this.previousIndex(index)];
            index = this.previousIndex(index);
        }

        this.values[stack.start] = 0;
        stack.start = this.nextIndex(stack.start);
        stack.capacity--;
    }

    // expands a stack if necessary
    expand(stackNum) {
        this.shift((stackNum + 1) % this.info.length);
        this.info[stackNum].capacity++
    }

    // returns number of elements in virtual stack
    numberOfElements() {
        let running_size = 0;
        for (let sd in this.info) {
            running_size += sd.size;
        }
        return running_size;
    }

    allStacksAreFull() {
        return this.numberOfElements() == this.values.length;
    }

    // adjusts index relative to length of array
    adjustIndex(index) {
        const max = this.values.length;
        return ((index % max) + max) % max;
    }

    nextIndex(index) {
        return this.adjustIndex(index + 1);
    }

    previousIndex(index) {
        return this.adjustIndex(index - 1);
    }

    getOneStackCount(stack) {
        return this.info[stack].size;
    }
}

let testMultiStack;

function updateVisualStack() {
    let visualDiv = document.getElementById('visual_stack');
    visualDiv.innerHTML = "";
    for (let i = 0; i < testMultiStack.info.length; i++) {
        let newParagraph = document.createElement('p');
        newParagraph.classList.add("card-text")
        newParagraph.innerText = "Stack " + i + " (Capacity: " + testMultiStack.info[i].capacity + "):";
        visualDiv.append(newParagraph)
        for (let j = 0; j < testMultiStack.info[i].size; j++) {
            let newButton = document.createElement('button')
            newButton.disabled = true
            newButton.classList.add("occupied_button")
            visualDiv.append(newButton)
        }
        for (let j = 0; j < testMultiStack.info[i].capacity - testMultiStack.info[i].size; j++) {
            let newButton = document.createElement('button')
            newButton.disabled = true
            newButton.classList.add("free_button")
            visualDiv.append(newButton)
        }
        let new_line = document.createElement("br")
        visualDiv.append(new_line)
    }
}

function stackSizeSelector() {

    let stackCount = prompt("Please enter required number of stacks");
    let stackCountInt = parseInt(stackCount);
    while (!Number.isInteger(stackCountInt)) {
        stackCount = prompt("An integer value is required.  Please try again.")
        stackCountInt = parseInt(stackCount);
    }

    let defaultCount = prompt("Please enter default stack size");
    let defaultCountInt = parseInt(defaultCount);
    while (!Number.isInteger(defaultCountInt)) {
        defaultCount = prompt("An integer value is required.  Please try again.")
        defaultCountInt = parseInt(defaultCount);
    }

    testMultiStack = new MultiStack(stackCountInt, defaultCountInt);
    updateVisualStack();
    alert("" + stackCount + " stacks with default capacity of " + defaultCount + " created.")
}

function demoPush() {
    if (!testMultiStack) {
        alert("Please create a multi stack before attempting to push.")
    } else {
        let pushString = document.getElementById('push_string').value
        let pushStackNum = document.getElementById('push_stack_num').value
        testMultiStack.push(pushStackNum, pushString);
        updateVisualStack();
        alert('"' + pushString + '"' + " added to stack " + pushStackNum)
    }
}

function demoPop() {
    if (!testMultiStack) {
        alert("Please create a multi stack before attempting to pop.")
    } else {
        let popStackNum = document.getElementById('pop_stack_num').value
        let poppedData = testMultiStack.pop(popStackNum);
        if (poppedData) {
            alert("Data '" + poppedData + "' popped from stack " + popStackNum);
            updateVisualStack();
        }
    }
}

function demoPeek() {
    if (!testMultiStack) {
        alert("Please create a multi stack before attempting to peek.")
    } else {
        let peekStackNum = document.getElementById('peek_stack_num').value
        let peekedData = testMultiStack.peek(peekStackNum);
        if (peekedData) {
            alert("Data '" + peekedData + "' peeked from stack " + peekStackNum);
            updateVisualStack();
        }
    }
}