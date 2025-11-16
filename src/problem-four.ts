
function formatString(str:string, toUpper?:boolean):string{
    if(str && toUpper){
        return str.toUpperCase()
    } else{
        return str.toLowerCase()
    }
}




console.log(formatString("Hello"));          // Output: "HELLO"
console.log(formatString("Hello", true));   // Output: "HELLO"
console.log(formatString("Hello", false));  // Output: "hello"