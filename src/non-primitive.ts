let bazarList:string[] = ['eggs','milk']



// reference type => object type

const userName: {
    firstName:string,
    middleName?:string, //optional
    lastName:string
} = {
    firstName:'anto',
    middleName:'das', 
    lastName:'ahir'
}

// let userData:{
//     name:'ahir';   //value => type:literal type
//     userId:number;
//     data:boolean;
// } ={
//     name:'ahir',
//     userId:23,
//     data:true,
// }

let userData:{
   readonly name:string;   //value => type:access modifier
    userId:number;
    data:boolean;
} ={
    name:'ahir',
    userId:23,
    data:true,
}
console.log(userData)