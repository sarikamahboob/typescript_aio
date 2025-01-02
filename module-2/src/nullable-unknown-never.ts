const searchName = (value: string | null) => { // nullable type
  if (value === null) {
    console.log("there is nothing to search");
  } else {
    console.log("searching")
  }
}

searchName(null)

const getMyCarSpeed = (speed: unknown) => {
  if (typeof speed === "number") {
    const convertedSpeed = (speed * 1000) / 3600
    console.log(`My speed is ${convertedSpeed}`);
  }
  if (typeof speed === "string") { 
    const [value, unit] = speed.split(" ")
    const convertedSpeed = (parseFloat(value) * 1000) / 3600;
    console.log(`My speed is ${convertedSpeed}`);
  }
  else {
    console.log("There is wrong type");
  }
}

getMyCarSpeed(10)
getMyCarSpeed("10 kmh^-1")
getMyCarSpeed(true)


function throwError(message: string):never {
  throw new Error(message);
}
throwError("Error happened")