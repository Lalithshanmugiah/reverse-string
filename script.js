//reverse string using built method

function reverseString(str){

    const arrayStrings = str.split("");
    const reverseArray = arrayStrings.reverse();
    const joinArray = reverseArray.join("");
    return joinArray;
}

const string = prompt('enter a string');
const result =reverseString(string);
console.log(result);
