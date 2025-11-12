// function 
// normal function 
// arrow function

function addNormal(num1:number,num2:number):number{
    return num1 + num2
}

const addArrow = (num1:number,num2:number):number=>{
    return num1+num2;
}

// object => function => method

const userData:{
    name:string,
    balance:number,
    addBalance:(value:number)=>number
} ={
    name:'ahir',
    balance:0,
    addBalance(value:number) : number{
        return value+this.balance
    }
}

// callback function

const arr:number[] = [1,2,3];

const squArr = arr.map((num:number):number => num*num);

console.log(squArr)
