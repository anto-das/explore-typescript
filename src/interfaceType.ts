
// type of alias

type User = {
    name:string;
    age:number;
}

type Role ={
    role:'admin' | 'user'
}

type UserWithRole = User & Role;

const user:UserWithRole = {
    name:'x',
    age:12,
    role:'admin'
}

// type of interface

interface IUser{
    name:string;
    age:number;
}

// object interface extends type

interface IUserWithRole extends IUser{
    role:string | boolean
}

const Iuser:IUserWithRole = {
    name:'x',
    age:23,
    role:false
}

// interface with function

type Add =(num1:number,num2:number) => number;

interface IAdd{
    (a:number,b:number):number
}

const add:IAdd = (x,y) =>x+y

// interface object method 

type Arr=string[]

interface IArr{
    [index:number]:string
}

const arr:Arr =['a','b','c']