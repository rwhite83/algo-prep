class StackInfo {

    constructor(multistack, start, capacity) {
        this.size = 0;
        this.parent = multistack;
        this.start = start;
        this.capacity = capacity;
    }

    isWithinStackCapacity(index) {
        if (index < 0 || index >= this.parent.values.length) {
            return false
        }
        const virtualIndex = index < this.start ? index + this.parent.values.length : index
        const end = this.start + this.capacity;
        return this.start <= virtualIndex && virtualIndex < end;
    }

    lastCapacityIndex() {
        return this.parent.adjustIndex(this.start + this.capacity - 1);
    }

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

    constructor(numberOfStacks, defaultSize) {
        this.values = new Array(numberOfStacks * defaultSize);
        this.info = new Array(numberOfStacks);

        for (let i = 0; i < numberOfStacks; i++) {
            this.info[i] = new StackInfo(this, defaultSize * i, defaultSize)
        }
    }

    push(stackNum, value) {
        if (this.allStacksAreFull()) {
            alert("A push was attempted on Stack " + stackNum + " but it is full.");
        } else {
            let stack = this.info[stackNum];
            if (stack.isFull) {
                this.expand(stackNum);
            }
            stack.size++;
            this.values[stack.lastElementIndex()] = value;
        }
    }

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

    peek(stackNum) {
        let stack = this.info[stackNum];

        if (stack.isEmpty()) {
            alert("A peek was attempted on Stack " + stackNum + " but it is empty.");
        }

        return this.values[stack.lastElementIndex()]
    }

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

    expand(stackNum) {
        this.shift((stackNum + 1) % this.info.length);
        this.info[stackNum].capacity++
    }

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
        newParagraph.innerText = "Stack " + (i+1) + " (Capacity: " + testMultiStack.info[i].capacity + "):";
        visualDiv.append(newParagraph)
        for (let j = 0; j < testMultiStack.info[i].size; j++) {
            let newButton = document.createElement('button')
            newButton.disabled = true
            newButton.classList.add("no_text_button")
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

    testMultiStack = new MultiStack(stackCount, defaultCount);
    updateVisualStack();
    alert("" + stackCount + " stacks with default capacity of " + defaultCount + " created.")
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