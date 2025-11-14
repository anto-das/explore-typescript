// generics type jeta type hisebe function er motu akta array recevied kore

type GenericsType<T> = Array<T> ;

const arr: GenericsType<number> = [2,3,4,5];

const boolean:GenericsType<boolean> =[true,false,true,false]


// object type re jonno generice

const userList:GenericsType<{
    name:string;
    age:number;
    role:string;
}>=[
    {
        name:'a',
        age:23,
        role:'user'
    },
    {
        name:'b',
        age:21,
        role:'admin'
    }
]