type CrushType = {
  name: string,
  age?: number, // optional type
  profession: string,
  address: string,
}

const crush: CrushType = {
  name: "sarika",
  age: 27,
  profession: "software engineer",
  address: "barikoi, dhaka",
};

const crush2: CrushType = {
  name: "chandler",
  profession: "actor",
  address: "paris, france",
};

type CrushMarriedType = boolean;

const isCrushMarried: CrushMarriedType = false;

type CourseNameType = string;

const courseName: CourseNameType = "web development";

type OperationType = (x: number, y: number) => number;

const calculate = (
  number1: number,
  number2: number,
  operation: OperationType
) => {
  return operation(number1, number2);
};
const plus = calculate(10,20, (x,y)=> x+y)
const minus = calculate(10, 20, (x, y) => x - y)
console.log(plus,minus);