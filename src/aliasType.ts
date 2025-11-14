type User ={
    id:number,
    name:{
        firstName:string,
        middleName:string,
        lastName:string
    },
    favoriteSong:{
        banglaSong:string,
        englishSong:string,
    },
    socialPlatForm:string[],
    passionateAbout:string
    student:boolean
}


const userData1:User={
    id:123,
    name:{
        firstName:'Anto',
        middleName:'Das',
        lastName:'ahir'
    },
    favoriteSong:{
        banglaSong:'shorer duita gan',
        englishSong:'wind by bob dylan'
    },
    socialPlatForm:['facebook','youtube'],
    passionateAbout:'programming',
    student:true
}
const userData2:User ={
    id:123,
    name:{
        firstName:'Anto',
        middleName:'Das',
        lastName:'ahir'
    },
    favoriteSong:{
        banglaSong:'shorer duita gan',
        englishSong:'wind by bob dylan'
    },
    socialPlatForm:['facebook','youtube'],
    passionateAbout:'programming',
    student:true
}
const userData3:User ={
    id:123,
    name:{
        firstName:'Anto',
        middleName:'Das',
        lastName:'ahir'
    },
    favoriteSong:{
        banglaSong:'shorer duita gan',
        englishSong:'wind by bob dylan'
    },
    socialPlatForm:['facebook','youtube'],
    passionateAbout:'programming',
    student:true
}

type Add = (num1:number,num2:number) =>number

const add :Add = (num1,num2) =>num1+num2;