type GenericTuple<X, Y> = [X, Y]
const relation: GenericTuple<string, string> = ["Sarika", "Messi"];
const relationWithNumber1: GenericTuple<object, string> = [ // not good practice
  {
    name: "Sarika",
    number: 10
  },
  'Lionel Messi'
]
// type RelationWithNUmberType = {
//   name: string, number: number
// }
interface RelationWithNumberInterface {
  name: string, number: number
}
const relationWithNumber2: GenericTuple<RelationWithNumberInterface, string> = [
  {
    name: "Sarika",
    number: 10,
  },
  "Lionel Messi",
];


type GenericArray<T> = Array<T>;

const rollNumbers1: GenericArray<number> = [44, 66, 88];
const rollNumbers2: GenericArray<string> = ["44", "66", "88"];
const rollNumbers3: Array<boolean> = [true, false];

type NameRollType = {
  name: string;
  roll: number;
};

const userNameAndRollNumbers: GenericArray<NameRollType> = [
  {
    name: "Sarika",
    roll: 123,
  },
  {
    name: "Malinga",
    roll: 456,
  },
];
