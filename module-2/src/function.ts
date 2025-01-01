// normal function
function add(num1: number, num2: number = 10):number {
  return num1 + num2;
}

const r = add(2);
console.log({r})

const addArrow = (num1: number, num2: number):number => num1 + num2

const arr = [1,4,5]
const newArray = arr.map(elem=> elem*elem)


const persons: {
  name: string,
  balance: number,
  addBalance(money: number):string
} = {
  name: "sarika",
  balance: 5,
  addBalance(money: number){
    return `My new balance is ${this.balance + money}`
  }
}

const users: {
  name: string,
  balance: number,
  addBalance(money: number):void
} = {
  name: "sarika",
  balance: 5,
  addBalance(money: number){
    console.log(`My new balance is ${this.balance + money}`)
  }
}

//spread operator

const myFriends = ["chandler", "parth", "john"]
const newFriends = ["messi", "neymar", "bappe"]
const result = myFriends.push(...newFriends)
console.log({ result, myFriends });

// rest operator

const greetFriends = (...friends: string[]): void => {
  friends.forEach(element => {
     console.log(`Hi ${element}`);
  });
 
}
greetFriends("andres", "leo", "messi")

// destructuring
const love = {
  playerName: "messi",
  number: 10
}

const { playerName, number } = love;
console.log({ playerName, number });