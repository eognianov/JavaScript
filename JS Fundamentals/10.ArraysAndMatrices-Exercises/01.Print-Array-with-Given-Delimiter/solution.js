function solve(array) {
    let delimiter = array.pop();
    console.log(array.join(delimiter));
}

solve(['One', 'Two', 'Three', 'Four', 'Five', '-']);
solve(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']);