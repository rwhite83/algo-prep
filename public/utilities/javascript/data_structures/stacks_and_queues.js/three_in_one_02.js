class MultiStack {

    constructor(numberOfStacks, defaultSize) {

        class StackInfo {

            constructor(start, capacity) {
                this.size;
                this.start = start;
                this.capacity = capacity;
            }
        
            isWithinStackCapacity(index) {
                if(index < 0 || index >= values.length) {
                    return false
                }
                const virtualIndex = index < start ? index + values.length : index
                const end = this.start + this.capacity;
                return this.start <= virtualIndex && virtualIndex < end;
            }
        
            lastCapacityIndex() {
                return adjustIndex(this.start + this.capacity - 1);
            }

            lastElementIndex() {
                return adjustIndex(this.start + this.size -1);
            }

            isFull() {
                return this.size == this.capacity;
            }

            isEmpty() {
                return this.size == 0;
            }

        }

        this.values = new Array(numberOfStacks * defaultSize);
        this.info = new Array (numberOfStacks);

        for(let i = 0; i < numberOfStacks; i++) {
            this.info[i] = new StackInfo(defaultSize * i, defaultSize)
        }
    }

    push(stackNum, value) {
        if(this.allStacksAreFull()) {
            alert("A push was attempted on Stack " + stackNum + " but it is full.");
        } else {
            let stack = this.info[stackNum];
            if(stack.isFull) {
                this.expand(stackNum);
            }
            stack.size++;
            values[stack.lastElementIndex()] = value;
        }
    }

    pop(stackNum) {
        let stack = info[stackNum];
        if(stack.isEmpty()) {
            alert("A pop was attempted on Stack " + stackNum + " but it is empty.");
        }

        let value = this.values[stack.lastElementIndex()];
        this.values[stack.lastElementIndex()] = 0;
        stack.size--;
        return value;
    }

    peek(stackNum) {
        let stack = info[stackNum];

        if(stack.isEmpty()) {
            alert("A peek was attempted on Stack " + stackNum + " but it is empty.");
        }

        return this.values[stack.lastElementIndex()]
    }

    shift(stackNum) {
        console.log("shifting stack " + stackNum);
        let stack = this.info[stackNum];

        if(stack.size > stack.capacity) {
            let nextStack = (stackNum + 1) % this.info.length;
            this.shift(nextStack);
            stack.capacity++;
        }

        let index = stack.lastCapacityIndex();
        while (stack.isWithinStackCapacity(index)) {
            this.values[index] = values[previousIndex(index)];
            index = previousIndex(index);
        }

        this.values[stack.start] = 0;
        stack.start = nextIndex(stack.start);
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
}


let stacksOfStacks = new MultiStack(3, 3);
stacksOfStacks.push(0, "wubbalubbadubdub");