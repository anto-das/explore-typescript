

// nullable type primitive

const getUser = (input:string |null)  =>{
    if(input){
        console.log('this user from DB',input)
    }else{
        console.log('fetch all user from database')
    }
}

// getUser(null)

const discountCalculator = (value:unknown) =>{
    if(typeof value === 'number'){
        console.log(value*0.1)
    } else if(typeof value === 'string'){
        const [splitValue] = value.split(' ')
        console.log(Number(splitValue) * 0.1)
    } else{
        console.error('not found a value')
    }
} 

discountCalculator(100)
discountCalculator('100 tk')
discountCalculator(null)