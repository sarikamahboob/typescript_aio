//example-1
type a1 = string;
type a2 = a1 extends string ? string : null;
type a3 = undefined;
type a4 = number;

type d = a1 extends null
  ? null
  : a3 extends number
  ? number
  : a4 extends null
  ? null
  : number;

//example-2
type H = {
  x1: string;
  x2: string;
};

// type checkProperty<T> = T extends {x1: string} ? true : false;
type checkProperty<T, K> = K extends keyof H ? true : false;
type CheckWife1 = checkProperty<H, "x1">;

//example-3
type Friends1 = "Chandler" | "Rachel" | "Phebi";
type RemoveFriend1<T> = T extends 'Rachel' ? never : T
type RemainingFriends1 = RemoveFriend1<Friends1>;

//example-4
type Friends2 = "Chandler" | "Rachel" | "Phebi";
type RemoveFriend2<T,K> = T extends K ? never : T;
type RemainingFriends2 = RemoveFriend2<Friends2, "Phebi">;