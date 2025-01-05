
// example-1
const arrayOfNumbers = [1, 2, 3]
const arrayOfStrings = arrayOfNumbers.map((number) => number.toString())
console.log(arrayOfStrings);

type Volume = {
  height: number;
  width: number;
  depth: number;
}

type Area = {
  [key in keyof Volume]: Volume[key];
};

// example-2
type Area2<T> = {
  readonly [key in keyof T]: T[key];
};

const area1: Area2<{ height: string; width: number }> = {
  height: "Leo",
  width: 10,
};

// example-3
type AreaNumber = {
  height: number;
  width: number;
};

type AreaString = {
  width: string;
  height: string;
};

type AreaReadOnly = {
  readonly height: number;
  readonly width: number;
};

const rectangularArea: AreaReadOnly = {
  height: 5,
  width: 10,
};

// rectangularArea.width = 12

type A = AreaNumber['height']
type B = keyof AreaNumber // 'width' / 'height'

