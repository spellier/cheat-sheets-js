/******************************
 ** Manipulation de tableaux **
 ******************************/

let someArr = [1, 2, 3];


/*_________Doubler les éléments_________*/

const doubleArr = [];
// ❌ Utilise une variable intermédiaire i
// ❌ Effet de bord avec l'extérieur
// ❌ Traitement supérieur à 1 ligne
// ❌ Pas de valeur de retour

for(let i = 0; i < someArr.length ; i++) {
  doubleArr.push(someArr[i] * 2);
}

// someArr.forEach(e => doubleArr.push(e * 2));

console.log(doubleArr);

/*_________Récupérer les éléments pairs/impairs_________*/

const evenArr = [];
const oddArr = [];

for (let i=0 ; i < someArr.length ; i++) {
  if (someArr[i]%2 === 0) evenArr.push(someArr[i])
}

for (let i=0 ; i < someArr.length ; i++) {
  if (someArr[i]%2 !== 0) oddArr.push(someArr[i])
}

console.log(evenArr, oddArr)


/*_________Récupérer la valeur max/min et la somme_________*/

someArr = [1, 2, 4, 3, 5, -9, 0, 2];
let maxValue;

for (let i=0 ; i < someArr.length ; i++) {
  if (!maxValue) {
    maxValue = someArr[i];
    continue;
  }
  if (someArr[i] > maxValue) {
    maxValue = someArr[i];
  }
  // ou maxValue = (!maxValue || someArr[i] > maxValue) ? someArr[i] : maxValue;
}
console.log(maxValue)


/*__________Un élément actif ?__________*/

let someArr2 = [
  {value: 1, active: false}, 
  {value: 2, active: false}, 
  {value: 3, active: true}, 
  {value: 4, active: true},
  {value: 5, active: false}
];

let isActive = false;

for (let i=0 ; i < someArr2.length ; i++) {
  if (someArr2[i].active) {
    isActive = true;
    break;
  }
}

console.log(isActive)

isActive = false;

someArr2.forEach(elt => {
  if(elt.active) {
    isActive = true;
  }
})

console.log(isActive)

// console.log(isOneElementActiveWith...)
// console.log(isOneElementActiveWith...)
// console.log(isOneElementActiveWith...)
// console.log(isOneElementActiveWith...)
// console.log(isOneElementActiveWith...)
// console.log(isOneElementActiveWith...)

someArr2 = [
  {value: 1, active: false},
  {value: 2, active: false},
  {value: 3, active: false},
  {value: 4, active: false},
  {value: 5, active: false}
];


/*___________Exercice complet___________*/

const userList = [
  { name: "John", gender: 'M', salary: 35000},
  { name: "Jade", gender: 'F', salary: 42000},
  { name: "Joe", gender: 'M', salary: 32000},
  { name: "Jane", gender: 'F', salary: 38000}
]

// Question : Combien les hommes gagneraient au total s'ils étaient augmentés de 1000€ chacun ?

let menSalaryTotal = 0;

for (let i=0 ; i < userList.length ; i++) {
  if (userList[i].gender === 'M') {
    menSalaryTotal += userList[i].salary + 1000;
  }
}

console.log(menSalaryTotal);

// Autre possibilité
menSalaryTotal = 0;
userList.forEach(user => {
  if (user.gender === 'M') {
    menSalaryTotal += user.salary + 1000;
  }
})

console.log(menSalaryTotal);
