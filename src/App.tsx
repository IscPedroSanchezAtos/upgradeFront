import React from 'react';
import './App.css';

let name: string;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

let printName:(name: string) => never;

/*type Person = {
  name: string;
  age?: number;
}

let person: Person= {
  name: "Pedro",
  
};

let lotsOfPeople: Person[];*/

let personName: unknown;
function App() {
  return (
    <div className="App">
     Hello
    </div>
  );
}

export default App;
