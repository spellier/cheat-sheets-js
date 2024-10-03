# Manipulation d'objets et de tableaux

<!-- TOC -->
* [Manipulation d'objets et de tableaux](#manipulation-dobjets-et-de-tableaux)
  * [Syntaxe de décomposition (Spread syntax)](#syntaxe-de-décomposition-spread-syntax)
  * [Affectation par décomposition (Destructuring assignment)](#affectation-par-décomposition-destructuring-assignment)
  * [Clonage](#clonage)
    * [Clonage naïf : "="](#clonage-naïf--)
    * [Spread operator](#spread-operator)
    * [La méthode stringify](#la-méthode-stringify)
    * [structuredClone](#structuredclone)
    * [L'historique Object.assign](#lhistorique-objectassign)
    * [Résumé](#résumé)
  * [Manipulation de tableaux](#manipulation-de-tableaux)
    * [Map](#map)
    * [Filter](#filter)
    * [Reduce](#reduce)
    * [Autres opérateurs](#autres-opérateurs)
    * [Comment choisir ?](#comment-choisir-)
    * [Exemple complet](#exemple-complet)
  * [Documentation](#documentation)
<!-- TOC -->

## Syntaxe de décomposition (Spread syntax)

> Exercices disponibles en suivant [ce lien](https://jsbin.com/tenogacesi/edit?js,console).

La **syntaxe de décomposition** permet d'extraire des valeurs d'objets ou de tableaux de manière concise en utilisant une syntaxe simplifiée.  
Cela permet de déclarer rapidement des variables en extrayant des valeurs à partir de structures de données complexes.  

*Exemple*
```typescript
const user = {name: "Doe", firstName: "John"};
const copyUser = {...user};

const numbers = [1, 2, 3];
const copyNumbers = [...numbers]; // [1, 2, 3]
const newNumbers = [0, ...numbers, 4, 5, 6]; // [0, 1, 2, 3, 4, 5, 6]

var articulations = ["épaules", "genoux"];
var corps = ["têtes", ...articulations, "bras", "pieds"]; // ["têtes", "épaules", "genoux", "bras", "pieds"]

var arr1 = [4, 5, 6];
var arr2 = [1, 2, 3];
arr1 = [...arr2, ...arr1]; // [1, 2, 3, 4, 5, 6]
// Il y a une différence avec unshift() : ici, on crée un nouveau tableau qui est affecté à arr1, le tableau original de arr1 n'est pas modifié "sur place".
// arr1.unshift(...arr2) // [1, 2, 3, 4, 5, 6]
```
> **Note** :  
> Lorsqu'on utilise la décomposition pour copier un tableau, celle-ci ne s'applique qu'au premier niveau de profondeur. 
> Par conséquent, il peut ne pas convenir pour la copie des tableaux multidimensionnels (des tableaux imbriqués dans d'autres tableaux).

*Décomposition dans les appels de fonction*
```typescript
function f1(x, y, z) {
  console.log(x, y, z); // 0 ; 1 ; 2
}
var args = [0, 1, 2];
f1(...args);

____________________________

function f2(v, w, x, y, z) {
  console.log(v, w, x, y, z); // -1 ; 0 ; 1 ; 2 ; 3
}
var args = [0, 1];
f2(-1, ...args, 2, ...[3]);
```

*Fusion*
```typescript
var profil = { prenom: "Sarah", profilComplet: false };
var profilMisAJour = { nom: "Dupont", profilComplet: true };

var fusion = { ...profil, ...profilMisAJour }; // Object { prenom: 'Sarah', nom: 'Dupont', profilComplet: true };
```

## Affectation par décomposition (Destructuring assignment)

> Exercices disponibles en suivant [ce lien](https://jsbin.com/qadumiyiwe/edit?js,console).

L'**affectation par décomposition** (destructuring en anglais) est une expression JavaScript 
qui permet d'extraire (unpack en anglais) des données d'un tableau ou d'un objet grâce à une syntaxe dont la forme ressemble à la structure du tableau ou de l'objet.

*Exemple*
```typescript
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

const {name, age, ...rest} = user;
// name = "John"
// age = 30
// rest = children: [object Object]
```

*Création d'alias sur les variables extraites*

```typescript
const {name: newName, ...rest} = user;
// newName = 'John'

name = 'Mallory'
// name = 'Mallory'
// newName = 'John'

newName = 'Mallory' // => Error
```

*Décomposition d'un tableau*

```typescript
//Décomposition d'un tableau
const toto = ["un", "deux", "trois"];

// sans utiliser la décomposition
const un = toto[0];
const deux = toto[1];
const trois = toto[2];

// en utilisant la décomposition
const [one, two, three] = toto;

// Je souhaite seulement récupérer le 2ème élément de mon tableau
const [, newTwo, ] = toto; // Good
const{ 1: newTwoTwo } = toto // Better
```

*Affecter des valeurs par défaut*
```typescript
let a, b;

[a = 5, b = 7] = [1];
// a=1 ; b=7
```

## Clonage

> Exercices disponibles en suivant [ce lien](https://jsbin.com/lenonufeso/edit?js,console).

Nous allons essayer dans les exemples ci-dessous de cloner cet objet :   
```typescript
const user = {
  name : 'John',
  age : 30,
  children : [
    {
      name: 'Alice',
      age: 6
    },
    {
      name: 'Bob',
      age: 3
    }
  ]
}
```

### Clonage naïf : "="

L'opérateur `=` n'effectue **pas** de copie d'un objet ou d'un array à proprement parler, mais uniquement de la **référence** de cet objet en question.  
La modification de l'un va modifier l'autre.

```typescript
const newUser = user;
console.log(user === newUser); // true

user.name = 'Jack';
console.log(newUser.name) // 'Jack' ==> newUser a récupéré le name de user
```

### Spread operator

Une solution consiste à utiliser le **spread operator**. 
Combiné aux accolades `{}` pour déclarer un nouvel objet, le spread operator `...` permet de copier tous les champs de l'objet `user`. 
Très efficace si l'on a un paquet de champs à copier d'un coup !

```typescript
const newUser = {...user};
console.log(user === newUser); // false

user.name = 'Jack';
console.log(newUser.name) // 'John' ==> newUser a conservé son name
```

Sauf que cette technique a des limites... En effet, le spread operator souffre du même défaut que l'opérateur `=` : 
il ne clone pas réellement les champs qui sont de type objets et arrays 😟

```typescript
const newUser = {...user};
console.log(user === newUser); // false
console.log(user.children === newUser.children); // true

user.children[0].name = 'Carol'
console.log(newUser.children[0].name); // 'Carol' ==> newUser a récupéré le name de l'enfant de user
```

### La méthode stringify

Une solution consiste à transformer un objet en string, puis le re-parser successivement.

```typescript
const newUser = JSON.parse(JSON.stringify(user));
console.log(user === newUser); // false
console.log(user.children === newUser.children); // false

user.name = 'Jack'
user.children[0].name = 'Carol'
console.log(newUser.name); // 'John'
console.log(newUser.children[0].name); // 'Alice'
```

Cela peut paraître empirique, pourtant dans beaucoup de cas, c'est le meilleur équilibre entre fiabilité et rapidité d'exécution dans la catégorie du clonage en profondeur.

> **Warning** : Du fait de la transformation intermédiaire en string, les types correctement pris en charge sont très limités. 
> Les `Date`, `RegExp`, `Set`, `Map`, ou fonctions par exemple seront tout simplement perdues !

### structuredClone

La fonction `structuredClone` est une nouveauté supportée par tous les principaux navigateurs depuis début 2022. 
Elle permet de cloner automatiquement et en profondeur tout le contenu d'un objet.

```typescript
const newUser = structuredClone(user);
console.log(user === newUser); // false
console.log(user.children === newUser.children); // false

user.name = 'Jack'
user.children[0].name = 'Carol'
console.log(newUser.name); // 'John'
console.log(newUser.children[0].name); // 'Alice'
```

> L'avantage par rapport au `JSON.stringify`, c'est qu'elle prend en charge plus d'objets spéciaux comme les `Date`, `RegExp`, `Map` ou `Set`, 
> mais toujours pas de prise en charge de types spéciaux comme les fonctions. [Voir ici la liste exhaustive des types supportés](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types).  
> 
> Toute puissance ayant un coût, c'est également la méthode standard la plus lente à exécuter pour le clonage.

### L'historique Object.assign

Parce qu'il faut respecter les anciens, terminons cette liste en évoquant `Object.assign`.

Très similaire au spread operator, il a l'avantage de pouvoir modifier un objet déjà instancié tout en se conformant au type d'origine et à ses méthodes lorsque c'est une classe.  
Avec Typescript cette méthode a moins de cas d'usage, car on va utiliser des types (comme l'`interface`) qui vont déjà nous aider à garantir la conformité d'une structure de données avec ses attributs et ses fonctions.

```typescript
const newUser = Object.assign({}, user)
console.log(user === newUser); // false
console.log(user.children === newUser.children); // true

user.name = 'Jack'
user.children[0].name = 'Carol'
console.log(newUser.name); // 'John'
console.log(newUser.children[0].name); // 'Carol'
```

> Tout comme le spread operator, il ne clone qu'au premier niveau, et ne copie que les références des objets et arrays.

### Résumé

De manière générale, il ne faut cloner que s'il y a un réel besoin. Si par défaut le clonage des objets et arrays n'est pas automatique, c'est qu'il y a une raison : l'**optimisation**.

Mais dans le cas où le clonage est nécessaire, il vaut mieux choisir :

- le spread operator pour une **copie à un seul niveau** (sans objets ou arrays)
- l'Object.assign pour une **assignation à un seul niveau** (sans objets ou arrays) plutôt pour des classes 
- le JSON parse/stringify pour une **copie en profondeur rapide** (mais sans objets spéciaux)
- le structuredClone pour une **copie en profondeur plus complète** mais plus lente

Comme toujours, il faut s'adapter à chaque situation...

## Manipulation de tableaux

> Exercices disponibles en suivant [ce lien](https://jsbin.com/fekasozile/edit?js,console).

### Map

La méthode `map()` crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.  

*Exemple : Doubler tous les éléments d'un tableau*

*BAD*
```typescript
const someArr = [1, 2, 3];
const doubleArr = [];
// ❌ Utilise une variable intermédiaire i
// ❌ Effet de bord avec l'extérieur
// ❌ Traitement supérieur à 1 ligne
// ❌ Pas de valeur de retour
for(let i = 0; i < someArr.length ; i++) {
  doubleArr.push(someArr[i] * 2);
}
```

*GOOD*
```typescript
const someArr = [1, 2, 3];
const doubleArr = someArr.map(e => e * 2);
```

### Filter

La méthode `filter()` crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction `callback`.

*BAD*
```typescript
const someArr = [1, 2, 3];
const evenArr = [];
const oddArr = [];

for (let i=0 ; i < someArr.length ; i++) {
  if (someArr[i]%2 === 0) evenArr.push(someArr[i])
  if (someArr[i]%2 !== 0) oddArr.push(someArr[i])
}

console.log(evenArr, oddArr) // [2] ; [1, 3]
```

*GOOD*
```typescript
const someArr = [1, 2, 3];
const evenArr = someArr.filter(e => e % 2 === 0); // [2] 
const oddArr = someArr.filter(e => e % 2 !== 0);  // [1, 3]
```

### Reduce

La méthode `reduce(accumulator, currentValue)` applique une fonction qui est un « accumulateur » et qui traite chaque valeur d'une liste (de la gauche vers la droite) afin de la réduire à une seule valeur.  
Une bonne pratique est de nommer son accumulateur de manière cohérente avec la donnée de sortie (voir exemples ci-dessous).  
Il existe également la méthode `reduceRight()` qui traite les valeurs de la droite vers la gauche.

L'idée est donc de comparer chaque valeur du tableau "2 à 2" afin d'avoir une valeur finale (un maximum, un minimum, une somme, etc...).

*BAD*
```typescript
const someArr = [1, 2, 4, 3, 5, -9, 0, 2];
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
console.log(maxValue) // 5
```

*GOOD*
```typescript
const someArr = [1, 2, 4, 3];
const maxValue = someArr.reduce((max, e) => Math.max(max, e)); // On compare 1 et 2, on garde 2. On compare 2 et 4, on garde 4. On compare 4 et 3, on garde 4. Résultat final : 4 
const minValue = someArr.reduce((min, e) => Math.min(min, e));  // On compare 1 et 2, on garde 1. On compare 1 et 4, on garde 1. On compare 1 et 3, on garde 1. Résultat final : 1 
const sumValue = someArr.reduce((sum, e) => sum + e);  // 1(sum) + 2(e) = 3(sum), 3(sum) + 3(e) = 6. Résultat final : 6 
// With initiale value = 10
const sumValueWithInitValue = someArr.reduce((sum, e) => sum + e, 10); // 10(sum) + 1(e), 11(sum) + 2(e) = 13(sum), 13(sum) + 3(e) = 16. Résultat final : 16 
```

> **Note :**  
> L'objectif était de montrer le `reduce`, mais on peut faire encore mieux pour le min/max avec la syntaxe de décomposition.  
> ```typescript
> const someArr = [1, 2, 4, 3];
> const maxValue = Math.max(...someArr); 
> const minValue = Math.min(...someArr);
> ```

### Autres opérateurs

Il existe une multitude d'opérateurs possibles sur les tableaux ([Lien vers la page de doc sur les Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)).  
Il est même possible d'effectuer une même action avec plusieurs opérateurs.

Attention cependant à ne pas tomber dans certains pièges.

_Exemple_
```typescript
const someArr = [
  {value: 1, active: false}, 
  {value: 2, active: false}, 
  {value: 3, active: true}, 
  {value: 4, active: true},
  {value: 5, active: false}
];

const isOneElementActiveWithFilter = someArr.filter(e => e.active).length != 0; // true
const isOneElementActiveWithReduce = someArr.reduce((isActive, e) => isActive || e.active, false); // true
const isOneElementActiveWithFind = someArr.find(e => e.active).length != 0; // true
const isOneElementActiveWithAnotherFind = !!someArr.find(e => e.active) // true
const isOneElementActiveWithSome = someArr.some(e => e.active); // true
const isOneElementActiveWithEvery = !someArr.every(e => !e.active); // true
```

```typescript
const someArr = [
  {value: 1, active: false},
  {value: 2, active: false},
  {value: 3, active: false},
  {value: 4, active: false},
  {value: 5, active: false}
];

const isOneElementActiveWithFilter = someArr.filter(e => e.active).length != 0; // false
const isOneElementActiveWithReduce = someArr.reduce((isActive, e) => isActive || e.active, false); // false
const isOneElementActiveWithFind = someArr.find(e => e.active).length != 0; // ERROR
const isOneElementActiveWithAnotherFind = !!someArr.find(e => e.active) // false
const isOneElementActiveWithSome = someArr.some(e => e.active); // false
const isOneElementActiveWithEvery = !someArr.every(e => !e.active); // false
```

### Comment choisir ?

Globalement, `map`, `filter` et `reduce` sont capables de répondre à 95% des besoins.  
C'est pourquoi maitriser ces 3 opérateurs est indispensable.

_"Oui, mais comment choisir ?"_
- Mon tableau de sortie est différent, mais fait la même longueur ? → `map`
- Mon tableau de sortie est plus petit en longueur ? → `filter`
- Mon "tableau de sortie" est une valeur ? → `reduce`

### Exemple complet

```typescript
const userList = [
  { name: "John", gender: 'M', salary: 35000},
  { name: "Jade", gender: 'F', salary: 42000},
  { name: "Joe", gender: 'M', salary: 32000},
  { name: "Jane", gender: 'F', salary: 38000}
]
```
_Question : Combien les hommes gagneraient au total s'ils étaient augmentés de 1000€ chacun ?_

*BAD*
```typescript
let menSalaryTotal = 0;

for (let i=0 ; i < userList.length ; i++) {
  if (userList[i].gender === 'M') {
    menSalaryTotal += userList[i].salary + 1000;
  }
}

// Autre possibilité
menSalaryTotal = 0;
userList.forEach(user => {
  if (user.gender === 'M') {
    menSalaryTotal += user.salary + 1000;
  }
})
```

*GOOD*
```typescript
const menSalaryTotal = userList
  .filter(user => user.gender === 'M') 
  .map(user => user.salary + 1000)
  .reduce((menSalaryTotal, manSalary) => menSalaryTotal + manSalary)
```

## Documentation

[Expressions et opérateurs JS](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators)  
[Objet Array JS](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)
