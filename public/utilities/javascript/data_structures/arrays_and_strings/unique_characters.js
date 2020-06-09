function uniqueCharacters1(testString) {

    // if the string is more than 128 characters, they cannot all be unique
    if (testString.length > 128) return false;
    
    // create an array and fill it with boolean false
    let testArray = new Array(128).fill(false);
    
    // iterate through the test string
    // if true found, return true, otherwise change array boolean and continue
    for (i = 0; i < testString.length; i++) {
            let val = testString.charAt(i)
            if(testArray[val]) return false;
            else testArray[val] = true;
        }
    
    return true;
}

function uniqueCharacters2(testString) {

    // create set
    let testSet = new Set();

    // iterate through test string
    // check if value exists, return false if so, otherwise continue
    for (i = 0; i < testString.length; i++) {
        if(!testSet.has(testString.charAt(i))) testSet.add(testString.charAt(i))
        else return false;
    }
    return true;
}

function uniqueCharacters1Test() {
    let input = document.getElementById('test1_input');
    let output = document.getElementById('test1_output')
    output.innerText = uniqueCharacters1(input.value)

}

function uniqueCharacters2Test() {
    let input = document.getElementById('test2_input');
    let output = document.getElementById('test2_output')
    output.innerText = uniqueCharacters2(input.value)

}

console.log("uniqueCharacters1 'wubbalubbadubdub' false test \nArray test should be false: it is " + uniqueCharacters1("wubbalubbadubdub"));
console.log("uniqueCharacters1 'wublife' true test \nArray test should be true: it is " + uniqueCharacters1("wublife"));
console.log("uniqueCharacters2 'wubbalubbadubdub' false test \nSet test should be false: it is " + uniqueCharacters2("wubbalubbadubdub"));
console.log("uniqueCharacters2 'wublife' true test \nSet test should be true: it is " + uniqueCharacters2("wublife"));

const subtract = (a,b) => a - b;

module.exports = {
    simpleMessage: "Hello World",
    minus: subtract
}