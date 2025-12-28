class Animal {
    constructor(
        public name:string,
        public sound:string,
        public species:string
    ){

    }
}

const dog = new Animal('dogesh','ghew ghew','dog')

console.log(dog.name)