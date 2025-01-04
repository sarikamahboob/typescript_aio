type MyInfoType = {
  name: string;
  age: number;
  salary: number;
  married: boolean;
};

const myInfo: MyInfoType = {
  name: "Sarika",
  age: 20,
  salary: 40000,
  married: false
};

type MandatoryInfoType = {
  name: string,
  age: number,
  salary: number
}

const addInfo = <T extends MandatoryInfoType>(myInfo: T) => {
  const favorites = "Messi";
  return { ...myInfo, favorites };
};

const result6 = addInfo(myInfo);
console.log(result6);
