let anything :any

anything = "hello";

const convertKgToGram = (input:string | number ):string | number |undefined  =>  {
    if(typeof input === 'number'){
      return input * 1000
    } else if(typeof input === 'string'){
        const [value] = input.split(' ')
       return (Number(value))*1000
    }
}

const result1 = convertKgToGram (2) as number
 convertKgToGram('2 kg')

type CustomError ={
    message:string;
}

try{

}catch(err ) {
    console.log((err as CustomError).message)
}
