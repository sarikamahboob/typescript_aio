let anything: any;
anything = "Hello";
(anything as string).length;
<string>anything.length;

function kgToGrm(param: string | number): string | number | undefined{
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000
    return `The converted result is ${value}`
  }
  if (typeof param === "number") {
    return param * 1000;
  }
}

const resultToBeNumber =<number>kgToGrm(200)
const resultToBeString = kgToGrm("200") as string;
console.log({ resultToBeNumber, resultToBeString });

type CustomErrorType = {
  message: string;
}
try {
} catch (error) {
  console.log((error as CustomErrorType).message);
}