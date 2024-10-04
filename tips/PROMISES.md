# Promises

<!-- TOC -->
* [Promises](#promises)
  * [Définition](#définition)
  * [États d'une Promise](#états-dune-promise)
  * [Création d'une Promise](#création-dune-promise)
  * [Manipulation d'une Promise](#manipulation-dune-promise)
    * [Utilisation de then(), catch() et finally()](#utilisation-de-then-catch-et-finally)
      * [then()](#then)
      * [catch()](#catch)
      * [finally()](#finally)
      * [Chainer des Promises](#chainer-des-promises)
      * [Promise.all()](#promiseall)
      * [Promise.race()](#promiserace)
      * [Utilisation avec async/await](#utilisation-avec-asyncawait)
  * [Exemple complet](#exemple-complet)
  * [Pour aller plus loin](#pour-aller-plus-loin)
<!-- TOC -->

## Définition

Une **Promise** est un objet qui représente la réussite ou l'échec d'une opération asynchrone.

## États d'une Promise

- **Pending** : État initial, ni résolue ni rejetée.
- **Fulfilled** : Résolue avec succès.
- **Rejected** : Échouée avec une erreur.

## Création d'une Promise

```javascript
const maPromise = new Promise((resolve, reject) => {
    // Simule une opération asynchrone
    const success = true; // Changez à false pour simuler un échec
    if (success) {
        resolve("Opération réussie !");
    } else {
        reject("Opération échouée !");
    }
});
```

## Manipulation d'une Promise

### Utilisation de then(), catch() et finally()

#### then()

```javascript
maPromise
    .then(result => {
        console.log(result); // "Opération réussie !"
    });
```

#### catch()

```javascript
maPromise
    .catch(error => {
        console.error(error); // "Opération échouée !"
    });

```

#### finally()

```javascript
maPromise
    .finally(() => {
        console.log("Opération terminée."); // Toujours exécuté
    });

```

#### Chainer des Promises

```javascript
const maPromiseChaine = new Promise((resolve) => {
    resolve(5);
});

maPromiseChaine
    .then(result => result * 2)
    .then(result => console.log(result)); // Affiche 10

```

#### Promise.all()

Résout plusieurs Promises en parallèle.

```javascript
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise(resolve => setTimeout(resolve, 100, "foo"));

Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log(values); // Affiche [3, 42, "foo"]
    });

```

#### Promise.race()

Résout dès que l'une des Promises est résolue ou rejetée.

```javascript
const promiseA = new Promise(resolve => setTimeout(resolve, 500, "A"));
const promiseB = new Promise(resolve => setTimeout(resolve, 100, "B"));

Promise.race([promiseA, promiseB])
    .then(value => console.log(value)); // Affiche "B"

```

#### Utilisation avec async/await

Déclaration d'une fonction async

```javascript
const maFonctionAsync = async () => {
    try {
        const resultat = await maPromise;
        console.log(resultat); // "Opération réussie !"
    } catch (error) {
        console.error(error); // "Opération échouée !"
    }
};

maFonctionAsync();

```

Chainer avec await

```javascript
const maFonctionAsyncChaine = async () => {
    const result1 = await Promise.resolve(5);
    const result2 = await Promise.resolve(result1 * 2);
    console.log(result2); // Affiche 10
};

maFonctionAsyncChaine();

```

Utilisation avec Promise.all()
```javascript
const maFonctionAsyncAll = async () => {
    const results = await Promise.all([promise1, promise2, promise3]);
    console.log(results); // Affiche [3, 42, "foo"]
};

maFonctionAsyncAll();

```

## Exemple complet

```javascript
console.log('1. Début du script');

async function asyncFunction() {
  console.log('2. Début de asyncFunction');
  
  const promise = new Promise((resolve) => {
    console.log('3. Démarre une promesse');
    setTimeout(() => {
      console.log('4. Résout la promesse après 2 secondes');
      resolve('Promesse résolue');
    }, 2000);
  });

  const result = await promise; // Attend que la promesse soit résolue
  console.log('5. Résultat après await:', result);
  
  console.log('6. Fin de asyncFunction');
}

asyncFunction();

console.log('7. Fin du script');

```

> 1. Début du script
> 2. Début de asyncFunction
> 3. Démarre une promesse
> 7. Fin du script
> 4. Résout la promesse après 2 secondes
> 5. Résultat après await: Promesse résolue
> 6. Fin de asyncFunction


## Pour aller plus loin

[MDN Web Docs](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise)
[Grafikart - Les Promises](https://grafikart.fr/tutoriels/javascript-promise-2067#autoplay)