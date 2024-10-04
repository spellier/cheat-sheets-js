# Promises

TODO 

https://grafikart.fr/tutoriels/javascript-promise-2067#autoplay

Exemple simple

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
