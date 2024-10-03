/*****************************
 ** Destructuring assigment **
 *****************************/

const user = {
  name : 'John',
  age : 30,
  children : [
    {
      name: 'Bob',
      age: 6
    },
    {
      name: 'Alice',
      age: 3
    }
  ]
}

const userName = user.name;
const userAge = user.age;
const userChildren = user.children;

console.log(userName, userAge, userChildren);

// Autre méthode ?


/*__________Création d'alias__________*/


// ???


/*______________Tableaux______________*/


const toto = ["un", "deux", "trois"];

// sans utiliser la décomposition
const un = toto[0];
const deux = toto[1];
const trois = toto[2];

// En utilisant la décomposition
// ???

// Récupérer uniquement le 2ème élément du tableau
// ???


/*________Valeurs par défaut_________*/


let a, b;

[a = 5, b = 7] = [1];
// A) a = 5 ; b = 7
// B) a = 1 ; b = 7
// C) a = 5 ; b = 1
// D) a = 1 ; b = 1

// [a = 5, b = 7] = [1, 2, 3];
// console.log(a,b)
