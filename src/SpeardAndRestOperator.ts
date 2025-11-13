// তোমার কাছে দুইটা array আছে —
// একটাতে even number, আরেকটাতে odd number।
// তুমি একটা নতুন array বানাবে যেখানে even আর odd সংখ্যা দুইটাই থাকবে,
// তারপর সেই array–এর সব সংখ্যার যোগফল (sum) বের করবে।

const evenNumbers:number[] = [2, 4, 6];
const oddNumbers:number[] = [1, 3, 5];

const sumOfNumber:number[] = [...evenNumbers,...oddNumbers]

const sum:number = sumOfNumber.reduce((cur,acc) =>cur + acc,0)


// const sumOfArray = (evenNumbers:number[],oddNumbers:number[]):number =>{
//     const map = new Map();
//     map.set('',sumOfNumber.reduce((cur,acc) =>{return cur+acc},0))
//     return map.values()
// }

// console.log(sumOfArray(evenNumbers,oddNumbers))

// const numbers:(number|number[])[]= [...evenNumbers,oddNumbers]
// console.log(numbers)


// Rest 


const invitation =(friend1:string,friend2:string,friend3:string) =>{
    console.log('dear friend',friend1)
}

invitation('tinko','pinko','rinko')

const invitationFriends = (...friends:string[]) =>{
    // console.log(`my dear friend${friends}`)
    // console.log(`my dear friend${friends}`)
    friends.forEach((friend:String) =>{
        console.log(`dear friend:${friend}`)
    })
}

invitationFriends('tinko','pinko','chinko')