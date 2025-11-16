interface Product{
    name:string;
    category:'electronics' | 'grocery' | 'clothing';
    price:number;
    inStock:boolean;
}

const product:Product ={
    name:'mobile',
    category:'electronics',
    price:50000,
    inStock:true
}

function discountCalculator(product:Product):number{
    const {name,category,price,inStock} =product;
    if(!inStock){
        return 0
    }
    let discount =0;

    switch(category){
        case 'electronics':discount=0.1;
        break;
        case 'clothing' : discount=0.2;
        break;
        case 'grocery' : discount =0.05;
        break;
    }
    return price - (price*discount)
}

console.log(discountCalculator(product))