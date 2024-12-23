// normal function
function add(num1: number, num2: number):number {
  return num1 + num2;
}

const addArrow = (num1: number, num2: number):number => num1 + num2

const arr = [1,4,5]
const newArray = arr.map(elem=> elem*elem)

add(2,2)

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


