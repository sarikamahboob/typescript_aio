type User = {
  name: string;
  age: number;
}

type extendedUser = User & {
  role: string
}

interface IUser {
  name: string;
  age: number;
}

const userWithTypeAlias: User = {
  name: "Sarika",
  age: 22,
}

const userWithInterface: IUser = {
  name: "Sarika",
  age: 22,
}

interface IExtendedUser extends IUser {
  role: string;
}

const userWithExtendedInterface: IExtendedUser = {
  name: "Sarika",
  age: 22,
  role: "Software Engineer",
};

type roleNumber = number;

// function type alias
type addNumbersType = (num1: number, num2: number) => number
const addNumbersTypeAlias: addNumbersType = (num1, num2) => num1 + num2;


// function interface type
interface IAddNumers {
  (num1: number, num2: number): number
}
const addNumbersInterface: IAddNumers = (num1, num2) => num1 + num2;


// array type alias
type rollNumbersType = number[]
const roleNumbersTypeAlias: rollNumbersType = [11, 3, 5, 7];

// array interface type
interface IRollNumbers {
  [index:number]: string;
}
const roleNumbersInterface: IRollNumbers = ['11', '3', '5', '7'];