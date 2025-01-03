interface IPlayer<T, U=null> {
  name: string;
  jerseyNumber: T,
  country?: U
}

const player1: IPlayer<number, string> = {
  name: "Lionel Messi",
  jerseyNumber: 10,
  country: "Argentina",
};

const player2: IPlayer<string> = {
  name: "Ronaldo",
  jerseyNumber: "11",
}

interface IPlayerJerseyNumber {
  color: string;
  number: number;
}

const player3: IPlayer<IPlayerJerseyNumber> = {
  name: "DMaria",
  jerseyNumber: {
    color: "Violet",
    number: 12,
  },
};

interface PersonInterface {
  name: string,
  age: number
}

interface CountryInterface {
  name: string;
  population: number;
}

const player4: IPlayer<PersonInterface, CountryInterface> = {
  name: "Cristiano Ronaldo",
  jerseyNumber: {
    name: "Cristiano",
    age: 32,
  },
  country: {
    name: "Portugal",
    population: 10_700_000,
  },
};