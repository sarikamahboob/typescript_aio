type PersonType = {
  name: string;
  age: number;
  address: string;
};

type newType = 'name' | 'age' | 'address'; //manually

type newTypeUsingKeyOf = keyof PersonType; // using keyof for getting the keys of the type

const a: newType = 'age'
const b: newTypeUsingKeyOf = "age"
  
function getProperty<X,Y extends keyof X>(obj: X, key: Y) {
  return obj[key]
}

const property = getProperty({ name: "Ms. X", age: 20 }, "age")
console.log(property); // output: 20