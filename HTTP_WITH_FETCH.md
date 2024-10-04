# Appels HTTP avec fetch()

<!-- TOC -->
* [Appels HTTP avec fetch()](#appels-http-avec-fetch)
  * [Définition](#définition)
  * [Syntaxe de base](#syntaxe-de-base)
  * [Options de fetch()](#options-de-fetch)
  * [Exemples d'utilisation](#exemples-dutilisation)
    * [GET Request](#get-request)
    * [POST Request](#post-request)
    * [PUT Request](#put-request)
    * [DELETE Request](#delete-request)
  * [Gestion des erreurs](#gestion-des-erreurs)
  * [Utilisation de async/await](#utilisation-de-asyncawait)
  * [Pour aller plus loin](#pour-aller-plus-loin)
<!-- TOC -->

## Définition

La méthode `fetch()` est utilisée pour effectuer des requêtes HTTP. Elle renvoie une **Promise** qui résout la réponse de la requête.

## Syntaxe de base

```javascript
fetch(url, options)
    .then(response => {
        // Gérer la réponse
    })
    .catch(error => {
        // Gérer les erreurs
    });
```

## Options de fetch()

| Option          | Type     | Description                                                                                 |
|-----------------|----------|---------------------------------------------------------------------------------------------|
| **method**      | `string` | Méthode HTTP (GET, POST, PUT, DELETE, etc.).                                                |
| **headers**     | `object` | En-têtes de la requête (JSON, Auth, etc.).                                                  |
| **body**        | `string` | Corps de la requête (pour POST, PUT, etc.).                                                 |
| **mode**        | `string` | Mode de la requête (cors, no-cors, same-origin).                                            |
| **credentials** | `string` | Spécifie si les cookies doivent être envoyés (same-origin, include, omit).                  |
| **cache**       | `string` | Contrôle le comportement du cache (default, no-cache, reload, force-cache, only-if-cached). |
| **redirect**    | `string` | Gère les redirections (follow, error, manual).                                              |
| **referrer**    | `string` | Définit la valeur du champ `Referrer`.                                                      |


## Exemples d'utilisation

### GET Request

```javascript
fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Transforme la réponse en JSON
    })
    .then(data => {
        console.log(data); // Affiche les données
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

```

### POST Request

```javascript
fetch('https://api.example.com/data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ key: 'value' }) // Corps de la requête
})
.then(response => response.json())
.then(data => {
    console.log(data); // Affiche la réponse
})
.catch(error => {
    console.error('Error:', error);
});

```

### PUT Request

```javascript
fetch('https://api.example.com/data/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ key: 'updatedValue' })
})
.then(response => response.json())
.then(data => {
    console.log(data); // Affiche la réponse
})
.catch(error => {
    console.error('Error:', error);
});

```

### DELETE Request

```javascript
fetch('https://api.example.com/data/1', {
    method: 'DELETE'
})
.then(response => {
    if (response.ok) {
        console.log('Item deleted successfully');
    } else {
        throw new Error('Failed to delete the item');
    }
})
.catch(error => {
    console.error('Error:', error);
});

```

## Gestion des erreurs

```javascript
fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });

```

## Utilisation de async/await

```javascript
const fetchData = async () => {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data); // Affiche les données
    } catch (error) {
        console.error('Fetch error:', error);
    }
};

fetchData();

```

## Pour aller plus loin

[MDN Web Docs](https://developer.mozilla.org/fr/docs/Web/API/Window/fetch)
[Grafikart - Appel HTTP avec fetch()](https://grafikart.fr/tutoriels/javascript-promise-2068#autoplay)