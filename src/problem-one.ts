type User={
    name:string;
    age:number;
    isPremium:boolean;
}

const user:User ={
    name:'mr.x',
    age:14,
    isPremium:true
}

function greetUser(user:User){
    if(user.isPremium){
        return `Welcome premium user ${user.name}, age ${user.age}!`
    } else{
        return `Welcome regular user ${user.name}!`
    }
}

console.log(greetUser(user))