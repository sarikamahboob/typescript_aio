
const isAdult = age >= 18 ? "Yes" : "No"
console.log(isAdult)

const isAuthenticatedUser = null
const useName = isAuthenticatedUser ?? 'Guest'

type Manush = {
  name: string;
  age: number;
  address: {
    city: 'No city',
    road: 'No road',
    home?: ""
  }
}

const manush1: Manush = {
  name: "Manush",
  age: 22,
  address: {
    city: "No city",
    road: "No road",
  },
};

const home = manush1?.address?.home ?? "No home";