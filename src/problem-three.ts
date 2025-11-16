interface Product{
    id:number
    name:string;
    price:number;
    category:'electronics' | 'clothing' | 'grocery';
}

interface ProductCart{
    product:Product;
    quantity:number
}

const product1:ProductCart={
    product:{
        id:12,
        name:'mobile',
        price:15000,
        category:'electronics',
    },
    quantity:2
}
const product2:ProductCart={
    product:{
        id:12,
        name:'shirt',
        price:1500,
        category:'clothing',
    },
    quantity:4
}
const product3:ProductCart={
    product:{
        id:12,
        name:'apple,orange',
        price:350,
        category:'electronics',
    },
    quantity:2
}

function calculator(cart:ProductCart[]):number{
    let total =0;
    cart.map(item =>{
    const {quantity,product} = item;
    const {category,price} =product;
    let discount =0;
    switch(category){
        case('electronics'): discount=10/100;
        break;
        case('clothing') : discount=20/100;
        break;
        case('grocery') : discount=5/100;
        break;
    }
    const discountedPrice = price - (price*quantity*discount)
     total = total + discountedPrice
   })
   return total
}

calculator([product1,product2,product3])