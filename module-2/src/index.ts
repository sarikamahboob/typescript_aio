let course: string = "front-end";
course = "back-end";
const age: number = 20
const isAdmin : boolean = false
console.log(course)

// primitive types - bigint, boolean, string, number, undefined, null, symbol 

// array types
const primitiveTypes: string[] = ["bigint", "boolean", "string"]
const rollNumbers:number[] = [2,3,4,5]

// tuple types
const person: [number, string] = [4, "sarika"]
const player: [string, boolean] = ["malinga", true]

// object types
const user : {
  readonly company: string, //readonly
  name: "sarika", // literal types
  age: number,
  isTechLead: boolean,
  wife?: string, // optional chaining
} = {
  company: "barikoi",
  name: "sarika",
  age: 52,
  isTechLead: false,
  wife: "sarika"
}
