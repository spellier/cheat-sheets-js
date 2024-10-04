# Dates

<!-- TOC -->
* [Dates](#dates)
  * [Résumé](#résumé)
  * [Lecture](#lecture)
    * [Date seule](#date-seule)
    * [Date-time locale](#date-time-locale)
    * [Date-time localisation forcée](#date-time-localisation-forcée)
  * [Manipulation](#manipulation)
  * [Récupération de la timezone locale](#récupération-de-la-timezone-locale)
  * [Pour aller plus loin](#pour-aller-plus-loin)
<!-- TOC -->

## Résumé

Il existe 3 types de dates :
- La date seule indépendante de toute notion de temps (Date d'anniversaire).
- La date-time locale, qui correspond à un événement dans le fuseau de l'utilisateur (Date d'un événement sportif).
- La date-time avec localisation forcée, qui correspond à un événement dans un fuseau défini.

Pour la gestion des dates, nous allons selon le contexte, soit utiliser l'objet **Date**, soit la librairie **dayjs**.

| Type                          | Lecture | Formulaire            | Écriture              | Manipulation |
|-------------------------------|---------|-----------------------|-----------------------|--------------|
| Date seule                    | Date    | string (DateTime ISO) | string (Date ISO)     | dayJS        |
| Date-time locale              | Date    | string (DateTime ISO) | string (DateTime ISO) | dayJS        |
| Date-time localisation forcée | dayJS   | string (DateTime ISO) | string (DateTime ISO) | dayJS        |

*DateTime ISO = YYYY-MM-DDTHH:mm:ssZ*  
*Date ISO = YYYY-MM-DD*


Imaginons les données suivantes :

```javascript
const demoDate = {
    birthDate: "1980-03-15",
    landingDate: "2024-03-16T02:00:00.000Z",
    matchDate: "2024-03-17T04:00:00.000Z",
    startingDate: "2024-03-15T11:00:00.000Z"
};
```

## Lecture

### Date seule

```javascript
function formatDate(dateString) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'  };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

const birthDateFormatted = formatDate(demoDate.birthDate);
console.log(`Date de naissance : ${birthDateFormatted}`);
```
>Résultat > Date de naissance : samedi 15 mars 1980

### Date-time locale

```javascript
function formatDateTime(dateString, timezone) {
    const options = {
        timeZone: timezone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

const matchDateFormattedParis = formatDateTime(demoDate.matchDate, 'Europe/Paris');
const matchDateFormattedPhoenix = formatDateTime(demoDate.matchDate, 'America/Phoenix');
console.log(`Superbowl : ${matchDateFormattedParis}`);
console.log(`Superbowl : ${matchDateFormattedPhoenix}`);

```

>Résultat (Europe/Paris) > Superbowl : 17/03/2024 05:00  
>Résultat (America/Phoenix) > Superbowl : 16/03/2024 21:00

### Date-time localisation forcée

Récupération de la date dans le fuseau demandé
```javascript
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

dayjs.extend(utc);
dayjs.extend(timezone);

const startingTime = dayjs(demoDate.startingDate)
    .tz('Europe/Paris')
    .format('DD/MM/YYYY HH:mm');
const landingTime = dayjs(demoDate.landingDate)
    .tz('America/Los_Angeles')
    .format('DD/MM/YYYY HH:mm');

console.log(`Départ Paris : ${startingTime}`);
console.log(`Arrivée Las Vegas : ${landingTime}`);

```

>Résultat (Europe/Paris) > Départ Paris : 15/03/2024 12:00  
>Résultat (Europe/Paris) > Arrivée Las Vegas : 15/03/2024 19:00  
>Résultat (America/Phoenix) > Départ Paris : 15/03/2024 12:00  
>Résultat (America/Phoenix) > Arrivée Las Vegas : 15/03/2024 19:00

## Manipulation

Il est possible de manipuler les dates avec *Date* et *dayjs*.  
Il est cependant **vivement recommandé de n'utiliser que dayjs**, l'objet Date étant peu intuitif.

```javascript
const birthDate = dayjs(this.demoDate.birthDate); // "birthDate": "1980-03-15"
console.log(birthDate.hour()); // 0
console.log(birthDate.utc().hour()); // 23 (Europe/Paris)
this.afterBirthday = birthDate.add(1, 'd');
console.log(this.afterBirthday.format('YYYY-MM-DD')); // 1980-03-16
```

```typescript
const startingDate: Date = new Date(this.demoDate.startingDate);
const startingDayJS = dayjs(startingDate).tz('Europe/Paris').add(3, 'h');
console.log(startingDayJS.format('YYYY-MM-DDTHH:mm')); // 2024-03-15T15:00
console.log(startingDayJS.toISOString()); // 2024-03-15T14:00:00.000Z
```


```typescript
const matchDate: Date = new Date(this.demoDate.matchDate);
const matchDayJS = dayjs(matchDate).add(3, 'h');
console.log(matchDayJS.toDate()); // Date Sun Mar 17 2024 08:00:00 GMT+0100 (heure normale d’Europe centrale)
console.log(matchDayJS.toISOString()); // 2024-03-17T05:00:00.000Z
```

## Récupération de la timezone locale

Les navigateurs fournissent les notions de timezones et d'offset.
Ces notions se basent sur le système hôte du navigateur (Windows) pour fournir cette information.

```typescript
this.timeZoneIntl = new Intl.DateTimeFormat().resolvedOptions().timeZone; // Avec Intl
this.timeZoneDayJS = dayjs.tz.guess(); // Avec dayjs
```

## Pour aller plus loin

[MDN Web Docs](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date)
Pour plus d'informations sur les capacités de dayJS, aller voir la [Doc officielle](https://day.js.org/docs/en/installation/installation).
