/*****************************
 ********** Clonage **********
 *****************************/

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


/*__________Clonage naïf : "="__________*/

const newUser = user;

newUser.name = 'Jack';
// A) user.name = 'John'
// B) user.name = 'Jack'
// console.log(user.name)

/*const newUser1 = newUser2 = newUser3 = user;
newUser2.name = 'Jake'
console.log(newUser.name)*/

// console.log(user === newUser);


/*___________Spread operator____________*/

const newUserSO = {...user};
// console.log(user === newUserSO);

newUserSO.name = 'Jack';
// A) user.name = 'John'
// B) user.name = 'Jack'
// console.log(user.name)

newUserSO.children[0].name = 'Carol'
// A) user.children[0].name = 'Alice'
// B) user.children[0].name = 'Carol'
// console.log(user.children[0].name);

// console.log(user.children === newUserSO.children);


/*_________La méthode stringify_________*/

const newUserSy = JSON.parse(JSON.stringify(user));
// console.log(user === newUserSy); 
// console.log(user.children === newUserSy.children);

newUserSy.name = 'Jack'
newUserSy.children[0].name = 'Carol'
// A) user.name = 'John'
// B) user.name = 'Jack'
// console.log(user.name);

// A) user.children[0].name = 'Alice'
// B) user.children[0].name = 'Carol'
// console.log(user.children[0].name); 


/*___________structuredClone____________*/

const newUserSC = structuredClone(user);
// console.log(user === newUserSC); 
// console.log(user.children === newUserSC.children); 

newUserSC.name = 'Jack'
newUserSC.children[0].name = 'Carol'
// A) user.name = 'John'
// B) user.name = 'Jack'
// console.log(user.name);

// A) user.children[0].name = 'Alice'
// B) user.children[0].name = 'Carol'
// console.log(user.children[0].name); 


/*______L'historique Object.assign______*/

const newUserOA = Object.assign({}, user)
// console.log(user === newUserOA); 
// console.log(user.children === newUserOA.children); 

newUserOA.name = 'Jack'
newUserOA.children[0].name = 'Carol'
// A) user.name = 'John'
// B) user.name = 'Jack'
// console.log(user.name);

// A) user.children[0].name = 'Alice'
// B) user.children[0].name = 'Carol'
// console.log(user.children[0].name);
