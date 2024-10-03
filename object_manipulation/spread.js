/*******************
 ** Spread syntax **
 *******************/

const user = {name: "Doe", firstName: "John"};
const copyUser = {...user};

console.log(copyUser);


/*____________Tableaux________________*/


const numbers = [1, 2, 3];
// const copyNumbers = ???; // [1, 2, 3]
// const newNumbers = ???; // [0, 1, 2, 3, 4, 5, 6]
// console.log(copyNumbers, newNumbers);

var articulations = ["épaules", "genoux"];
// var corps = ???; // ["têtes", "épaules", "genoux", "bras", "pieds"]
// console.log(corps);

var arr1 = [4, 5, 6];
var arr2 = [1, 2, 3];
// arr1 = ???; // [1, 2, 3, 4, 5, 6]
// console.log(arr1);
// Quelle différence avec unshift ?


/*_________Appels de fonction_________*/


function f1(x, y, z) {
  console.log(x, y, z); // 0 ; 1 ; 2
}
var args = [0, 1, 2];
// f1(???);
   
   
function f2(v, w, x, y, z) {
  console.log(v, w, x, y, z); // -1 ; 0 ; 1 ; 2 ; 3
}
var args = [0, 1];
// f2(???);


/*_______________Fusion________________*/


var profil = { prenom: "Sarah", profilComplet: false };
var profilMisAJour = { nom: "Dupont", profilComplet: true };

var fusion = { ...profil, ...profilMisAJour };
// A quoi s'attend t'on ?
// A) [ { prenom: "Sarah", profilComplet: false }, { nom: "Dupont", profilComplet: true } ];
// B) { prenom: 'Sarah', nom: 'Dupont', profilComplet: true };
// C) { prenom: 'Sarah', nom: 'Dupont', profilComplet: false };
// D) { prenom: 'Sarah', nom: 'Dupont', profilComplet: [true, false] };
// console.log(fusion)


var profilsSourceA = [{ firstName: "Alice", name: "Doe" }, { firstName: "Bob", name: "Doe" }];
var profilsSourceB = [{ firstName: "John", name: "Doe", role: "Parent" }];
var profilsSourceC = [{ firstName: "Dave", name: "Smith", role: "Uncle" }, { firstName: "Carol", name: "Smith", role: "Aunt" }];
//var profilsSourceD = [{ firstName: "John", name: "Doe", role: "Parent" }, { firstName: "Jane", name: "Doe", role: "Parent" }];

var familyFusion = [ ...profilsSourceA, ...profilsSourceB, ...profilsSourceC ];
// console.log(familyFusion);

