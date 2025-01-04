// Promise<string> Promise<boolean> Promise<object>

const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Data is fetched";
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch data!");
    }
  });
};
const getPromiseData = async (): Promise<string> => {
  const result = await makePromise();
  return result;
};

const makePromiseBoolean = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const data: boolean = true;
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch data!");
    }
  });
};
const getPromiseDataBoolean = async (): Promise<boolean> => {
  const result = await makePromiseBoolean();
  return result;
};

type DataType = {
  data: string
}
const makePromiseObject = (): Promise<DataType> => {
  return new Promise<DataType>((resolve, reject) => {
    const data: DataType = {
      data: "Data is fetched",
    };
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch data!");
    }
  });
};
const getPromiseDataObject = async (): Promise<DataType> => {
  const result = await makePromiseObject();
  return result;
};

// using json placeholder data
interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const getTodo = async (): Promise<ITodo> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json()
  return data
}
const getTodoData = async ():Promise<void> => {
  const result = await getTodo()
  console.log(result)
}
getTodoData()