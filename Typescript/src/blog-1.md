Union Type: It allows a variable to hold one of several types Data. Think of it as an "or" option. Union types use the | symbol. Union types (|) offer flexibility, allowing a value to be one type or another.

Union Type Example: 
let value: string | number;
value = "Muvin"; 
value = 22;      


Intersection Type: It combines multiple types into a single, composite type that includes all properties types. It is definng using the & symbol. Intersection types (&) offer completeness, requiring a value to include properties of all types.

Intersection Type Example:
interface Player1 {
  name: string;
  age: number;
}

interface Player2 {
  Id: number;
  address: string;
}

type Player = Player1 & Player2;

const player: Player = {
  name: "muvin",
  age: 30,
  Id: 1234,
  address: "dhaka",
};

The Two types are safe flexibility and enhance the quality of code development experience.