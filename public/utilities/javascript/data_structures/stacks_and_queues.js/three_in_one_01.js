class FixedMultiStack {

    // constructor used to declare and set class variables
    constructor(stackSize) {
        this.numberOfStacks = 3;
        this.stackCapacity = stackSize;
        this.values = new Array(stackSize * this.numberOfStacks);
        this.sizes = new Array(this.numberOfStacks).fill(0);
    }

    // check if full
    // otherwise push onto appropriate stack
    // offsets to designated stack
    push(stackNum, value) {
        if (this.isFull(stackNum)) {
            alert("The stack is full and a push was attempted.");
        } else {
            this.sizes[stackNum]++;
            this.values[this.indexOfTop(stackNum)] = value;
        }
    }

    // check if empty
    // otherwise pop from appropriate stack
    // offsets to designated stack
    // sets value on stack to zero
    // decrements stack's 'top index'
    // returns value
    pop(stackNum) {
        if (this.isEmpty(stackNum)) {
            alert("The stack is empty and a pop was attempted");
        } else {
            let topIndex = this.indexOfTop(stackNum);
            let value = this.values[topIndex]
            this.values[topIndex] = 0;
            this.sizes[stackNum]--;
            return value;
        }
    }

    // check if empty
    // otherwise return value from appropriate stack
    peek(stackNum) {
        if (this.isEmpty(stackNum)) {
            alert("The stack is empty and a peek was attempted");
        } else {
            return this.values[this.indexOfTop(stackNum)]
        }
    }

    // checks if designated stack is empty
    isEmpty(stackNum) {
        return this.sizes[stackNum] == 0;
    }

    // checks if designated stack is full
    isFull(stackNum) {
        return this.sizes[stackNum] == this.stackCapacity;
    }

    // processes offset to top of specified stack
    // returns the offset
    indexOfTop(stackNum) {
        let offset = stackNum * this.stackCapacity;
        let size = this.sizes[stackNum];
        return offset + size - 1;
    }
}

let testMultiStack;

function stackSizeSelector() {
    let stackCount = prompt("Please enter required stack size");
    let stackCountInt = parseInt(stackCount);
    while (!Number.isInteger(stackCountInt)) {
        stackCount = prompt("An integer value is required.  Please try again.")
        stackCountInt = parseInt(stackCount);
    }
    testMultiStack = new FixedMultiStack(stackCount);
    alert("Three stacks of " + stackCount + " created.")
}

function pushStackZero() {
    if (!testMultiStack) {
        alert("Please create a multi stack before attempting to push.")
    } else {
        let pushableData = prompt("Please enter text to push as data.");
        testMultiStack.push(0, pushableData);
    }
}

function pushStackOne() {
    if (!testMultiStack) {
        alert("Please create a multi stack before attempting to push.")
    } else {
        let pushableData = prompt("Please enter text to push as data.");
        testMultiStack.push(1, pushableData);
    }
}

function pushStackTwo() {
    if (!testMultiStack) {
        alert("Please create a multi stack before attempting to push.")
    } else {
        let pushableData = prompt("Please enter text to push as data.");
        testMultiStack.push(2, pushableData);
    }
}

function popStackZero() {
    if (!testMultiStack) {
        alert("Please create a multi stack before attempting to pop.")
    } else {
        let poppedData = testMultiStack.pop(0);
        if (poppedData) {
            alert("Data '" + poppedData + "' popped from stack 0");
        }
    }
}

function popStackOne() {
    if (!testMultiStack) {
        alert("Please create a multi stack before attempting to pop.")
    } else {
        let poppedData = testMultiStack.pop(1);
        if (poppedData) {
            alert("Data '" + poppedData + "' popped from stack 1");
        }
    }
}

function popStackTwo() {
    if (!testMultiStack) {
        alert("Please create a multi stack before attempting to pop.")
    } else {
        let poppedData = testMultiStack.pop(2);
        if (poppedData) {
            alert("Data '" + poppedData + "' popped from stack 2");
        }
    }
}

function peekStackZero() {
    if (!testMultiStack) {
        alert("Please create a multi stack before attempting to pop.")
    } else {
        let peekedData = testMultiStack.peek(0);
        if (peekedData) {
            alert("Data '" + peekedData + "' peeked from stack 0");
        }
    }
}

function peekStackOne() {
    if (!testMultiStack) {
        alert("Please create a multi stack before attempting to pop.")
    } else {
        let peekedData = testMultiStack.peek(1);
        if (peekedData) {
            alert("Data '" + peekedData + "' peeked from stack 0");
        }
    }
}

function peekStackTwo() {
    if (!testMultiStack) {
        alert("Please create a multi stack before attempting to pop.")
    } else {
        let peekedData = testMultiStack.peek(2);
        if (peekedData) {
            alert("Data '" + peekedData + "' peeked from stack 0");
        }
    }
}