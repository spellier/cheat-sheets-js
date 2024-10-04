# Cheat Sheets JS

## Basics

* [Promises](PROMISES.md)
* [Appels HTTP avec fetch](HTTP_WITH_FETCH.md)
* TODO [Dates](DATES.md)

## Tips 

* [Comment éviter les structures if/else ennuyeuses](tips/AVOID_IF_ELSE.md)
* [Manipulation d'objets et de tableaux](tips/OBJECT_MANIPULATION.md)


## Pour aller plus lien

* [Grafikart - Apprendre le JS](https://grafikart.fr/formations/formation-javascript)
* [State of Javascript](https://stateofjs.com/en-US)
* [Most Demanded Frontend FW](https://www.devjobsscanner.com/blog/the-most-demanded-frontend-frameworks/)


## Principes généraux

Il est important de respecter un certain nombre de principes pour développer des applications de qualité, évolutives et maintenables. Voici quelques principes clés à respecter :

1. **KISS** (Keep It Simple, Stupid) : Il est important de garder le code aussi simple que possible, pour faciliter la compréhension et la maintenance.
2. **DRY** (Don't Repeat Yourself) : Il faut éviter de dupliquer le code autant que possible, pour réduire la complexité et faciliter la maintenance.
3. **SOLID** : Les principes SOLID (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) sont importants à respecter pour créer des composants et des services modulaires et facilement réutilisables.
4. Respect des **conventions de nommage** : Il est important de respecter les conventions de nommage pour les composants, les services et les fichiers, pour faciliter la compréhension et la maintenance du code.
5. Utilisation de l'**injection de dépendances** : L'injection de dépendances est un concept clé d'Angular, qui permet de rendre les composants et les services facilement testables et modulaires.
6. Utilisation des **observables** : Les observables sont un concept clé de la programmation réactive en Angular, qui permettent de créer des flux de données asynchrones et de gérer efficacement les événements dans l'application.
7. Utilisation des **directives** : Les directives sont un moyen puissant de manipuler le DOM et de créer des comportements dynamiques dans l'application.
8. Utilisation des **pipes** : Les pipes sont un moyen efficace de transformer les données et de les présenter de manière appropriée à l'utilisateur.

### Définitions

#### SOLID

SOLID est un acronyme qui représente cinq principes de programmation orientée objet et qui sont les suivants :

1. **SRP (Single Responsibility Principle)** : Le principe de responsabilité unique stipule qu'un composant ou une classe ne doit avoir qu'une seule responsabilité.
> En Angular, cela signifie que chaque composant ou service ne devrait avoir qu'une seule raison de changer, ce qui facilite la maintenance et l'évolutivité de l'application.
___
2. **OCP (Open/Closed Principle)** : Le principe ouvert/fermé stipule qu'une classe doit être ouverte à l'extension, mais fermée à la modification.
>En Angular, cela signifie que vous devez concevoir vos composants et services pour qu'ils soient facilement extensibles sans nécessiter de modification du code existant.
---
3. **LSP (Liskov Substitution Principle)** : Le principe de substitution de Liskov stipule qu'un objet doit pouvoir être remplacé par une instance de sa sous-classe sans altérer le comportement de l'application.
>En Angular, cela signifie que les sous-classes de composants et services doivent pouvoir être utilisées de manière interchangeable avec leurs superclasses.
---
4. **ISP (Interface Segregation Principle)** : Le principe de ségrégation de l'interface stipule qu'une classe ne doit pas être obligée de dépendre d'interfaces qu'elle n'utilise pas.
>En Angular, cela signifie que les interfaces et les contrats doivent être bien définis et limités aux fonctionnalités spécifiques nécessaires pour éviter les dépendances inutiles.
---
5. **DIP (Dependency Inversion Principle)** : Le principe d'inversion de la dépendance stipule qu'un composant ou une classe ne doit pas dépendre directement d'autres composants ou classes, mais plutôt d'abstractions.
>En Angular, cela signifie que vous devez utiliser l'injection de dépendances pour permettre aux composants et services de dépendre d'interfaces abstraites plutôt que de dépendre directement d'implémentations concrètes.
___