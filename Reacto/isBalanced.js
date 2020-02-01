// Complete the isBalanced function below.
function isBalanced(s) {
    // Create a stack arr.
    let stack = [];
    // Iterate through the string.
    for(let i = 0; i < s.length; i++) {
    // Set bracket 
        let bracket = s[i];
            // check if bracket is {, (, or  [
        if(bracket === '('||bracket === '['  ||bracket === '{') {
        // Add to stack           
            stack.push(bracket);
        }
        // if bracket is }, ), ] and last in stack is the correct opening.
        if(stack[stack.length - 1] === '(' && bracket === ')') {
            // Pop off the stack    
            stack.pop();
        }
        else if(stack[stack.length - 1] === '[' && bracket === ']') {
            stack.pop();
        }
        else if(stack[stack.length - 1] === '{' && bracket === '}') {
            stack.pop();
        }
    }

    console.log("STACK ", stack);
    // check if the stack has length
    if(stack.length) {
    // return NO.
        return 'NO';
    }
    // Else return YES.
    return 'YES';
}


// console.log(isBalanced('{(([])[])[]}'));//YES
console.log(isBalanced('{(([])[])[]]}') === "NO");
// console.log(isBalanced('{(([])[])[]}[]')); //YES