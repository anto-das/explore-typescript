
// constraint type implement some must need field in object
type Student={
    name:string;
    age:number
}

const addStudentToCourse = <T extends Student> (studentInfo:T) =>{
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

const user3 ={
    name:'das',
    age:21,
    hasPen:true
}

const result = addStudentToCourse(user3)
console.log(result)