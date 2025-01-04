const createArray1 = (param: string):string[] => {
  return [param]
}

const createArray2 = <T>(param: T): T[] => {
  return [param];
};

const result1 = createArray2<string>("Hello");
const result2 = createArray2<boolean>(true);

type Name = {
  name: string;
};
const result3 = createArray2<Name>({ name: "Bangladesh" });

// const createArray3 = <X, Y>(param1: X, param2: Y): [X, Y] => {
//   return [param1, param2];
// };
function createArray3<X, Y>(param1: X, param2: Y): [X, Y] {
  return [param1, param2];
};
const result4 = createArray3<string, string>("Lionel", "Messi");
const result5 = createArray3<boolean, Array<string>>(false, ["Messi"]);


console.log(result1, result2, result3, result4, result5);


// const myInfo = {
//   name: "Sarika",
//   age: 20,
//   salay: 40000
// }

// const addInfo = <T>(myInfo: T) => {
//   const favorites = "Messi";
//   return {...myInfo, favorites };
// }
// const result6 = addInfo(myInfo);
// console.log(result6);