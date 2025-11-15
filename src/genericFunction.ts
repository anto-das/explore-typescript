// genericks funciton

const genericFuncOfNum =  (input:number) =>[input];
const genericFunc = <T> (input:T) =>[input];

const user ={
    name:'mr.x',
    skill:'web dev'
}

// console.log(genericFunc(user))

// const arrNum = genericFuncOfNum(2)
// console.log(arrNum)

// generic array of tuple

const genericFunctionWithTuple = <X,Y> (param1:X,param2:Y) =>[param1,param2];

const result1 = genericFunctionWithTuple({name:'hello',age:23},{title:'hi'})
// console.log(result1)


const addStudentToCourse = <T> (studentInfo:T) =>{
    return {
        course:'next level',
        ...studentInfo
    }
}

const user1 = {
    name:'anto',
    age:23,
    hasPen:false
}

const user2={
    name:"ahir",
    age:23,
    hasPen:true,
    hasMarried:true
}

const result = addStudentToCourse({user})
console.log(result)