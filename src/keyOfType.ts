
type TypeUser = typeof user
const user ={
    name:'ahir',
    age:23,
    role:'student',
    passion:'coding',
}

// keyOf type er constraint and generick type use kore key get korar function

const getKey = <X, Y extends keyof X> (obj:X,key:Y ) =>{
    return obj[key]
}

const result = getKey(user,"passion")
console.log(result)

const result2 = getKey({name:'hello',id:2,age:'12'},'id')
console.log(result2)