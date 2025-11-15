

const user ={
    id:2,
    name:'morsed',
    age:34,
    isAdmin:false
}

type User ={
    id:number;
    name:string;
    age:number,
    isAdmin:boolean
}

type UserData<T> ={
    [key in keyof T]?:T[key]
}


const userInfo : UserData<User>  ={
    id:23,
    name:'mr',
    age:23,
    isAdmin:true,
}


// option method in mapped type

// type OptionalPerson = {
//   [K in keyof Person]?: Person[K];
// };
