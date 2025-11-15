
// typescript er utility type


type product ={
    id:23,
    name:'mobile',
    category:'electronic',
    isOfficial:true,
    stock:23
}

// pick method
type pickSomeProduct = Pick<product,'name'|'category'|'isOfficial'>

// omit method
 
type omitSomeProduct = Omit<product,'stock' | 'category'>

// partial method

type partialSomeProduct = Partial<product>

// required method
type requiredSomeProduct = Required<product>

// readonly method 

type readonlySomeProduct = Readonly<product>

// record method

type recordSomeProduct = Record<string,unknown>

const obj:recordSomeProduct ={
    2:'hello'
}