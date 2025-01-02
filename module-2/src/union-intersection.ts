type NoobDeveloper = {
  name: string
}

// type JuniorDevelper = {
//   name: string,
//   expertise: string,
//   experience: string
// }

type JuniorDevelper = NoobDeveloper & { // intersection type
  expertise: string,
  experience: string
}

type NextLevelDeveloper = JuniorDevelper & { // intersection type
  leadershipExperience: string;
  level: "junior" | "mid" | "master";
};

const newDeveloper: NoobDeveloper | JuniorDevelper = { // union type
  name: 'XYZ',
  expertise: 'JavaScript',
  experience: '1 year' 
}

const developer: NextLevelDeveloper = {
  name: "ABC",
  expertise: "Java",
  experience: "2 years",
  leadershipExperience: "3 years",
  level: "mid",
};

