# Comment éviter les structures if/else ennuyeuses

[*Sources : 10 astuces pour éviter les structures if/else ennuyeuses dans votre code*](https://www.youtube.com/watch?v=rkhgUzW6Hx8)


## Remplacer if/else par un Algorithme de substitut

*Good*
```typescript
if (product.id === '1' || product.id === '2' || product.id === '3') {
    product.image = '';
}
```
*Better*
```typescript
const productIdsWithoutImage = ['1', '2', '3'];
if (productIdsWithoutImage.includes(product.id)) {
    product.image = ''; 
}
```

## Remplacer if/else par une condition

*Good*
```typescript
productHasImage(product) {
    if (product.id === '1' || product.id === '2' || product.id === '3') {
        return true;
    }
    else {
        return false;
    }
}
```

*Better*
```typescript
productHasImage(product) {
    return ['1', '2', '3'].includes(product.id);
}
```

## Remplacer if/else par une Guard Clause

*Good*
```typescript
canRedirectToAdminDashboard() {
    if (wifi) {
        if (login) {
            if (admin) {
                redirectToAdminDashboard();
            }
            else {
                console.log('Must be connected as administrator.')
            }
        }
        else {
            console.error('Must be login first.')
        }
    }
    else {
        console.error('Must be connected first.')
    }
}
```

*Better*
```typescript
canRedirectToAdminDashboard() {
    if (!wifi) {
        console.error('Must be connected first.');
        return;
    }
    if (!login) {
        console.error('Must be login first.');
        return;
    }
    if (!admin) {
        console.log('Must be connected as administrator.');
        return;
    }
    redirectToAdminDashboard();
}
```

## Remplacer if/else par un filtre

*Good*
```typescript
userList.forEach(user => {
    if (user.isConnected) {
        redirectToDashboard();
    }
})
```

*Better*
```typescript
userList
    .filter(user => user.isConnected)
    .forEach(_ => redirectToDashboard())
```

## Remplacer if/else par un opérateur de chainage optionnel

*Good*
```typescript
if (user && user.data && user.data.age) {...}
```

*Better*
```typescript
if (user?.data?.age) {...}
```

## Remplacer if/else par le Constructeur de boolean

*Good*
```typescript
if (user?.isLoggedIn) {
    return true;
}
else {
    return false;
}
```

***Bad***
```typescript
return user?.isLoggedIn;
```
==> 3 valeurs possibles ici : true, false, undefined.

*Better*
```typescript
return !!(user?.isLoggedIn);
```
==> true devient true, false et undefined deviennent false.

## Remplacer if/else par un Opérateur de coalescence nulle

*Good*
```typescript
let age;
if (response.data.age) {
    age = response.data.age;
}
else {
    age = 'Age could not be determinated';
}
```

*Almost Better*
```typescript
const age = response.data.age || 'Age could not be determinated';
```
==> Si age = 0 (response.data.age is falsy) : *'Age could not be determinated'*

*Better*
```typescript
const age = response?.data?.age ?? 'Age could not be determinated';
```
==> Opérateur non nul : check si la réponse est *null* ou *undefined*.

## Remplacer if/else par une extraction de variable

*Good*
```typescript
if (deleteElement !== undefined && isLoading 
     || (user.isConnected && user.element == null)) {
    ...
}
```

*Better*
```typescript
const isNotLoading = ...;
const isUserConnected = ...;
const isCardEmpty = ...;

const isUserCanBuy = isUserConnected && isCardEmpty && isNotLoading;

if (isUserCanBuy) {
    ...
}
```

## Remplacer if/else par un Value Object

*Good*
```typescript
setImage(response) {
    if (['1', '2', '3', '4', '5'].includes(response.id)) {
        this.product.image = 'no_image.jpg';
    }
    else {
        this.product.image = response.image;
    }
}
```

*Better*

```typescript
class Product {
    private productId: string;
    private image: string;

    constructor({id, image}) {...}
    
    private productWithoutImage() {
        return ['1', '2', '3', '4', '5'];
    }
    
    private defaultImage() {
        return 'no_image.jpg';
    }
    
    get hasImage() {
        return this.productWithoutImage.includes(this.productId);
    }
    
    get image()
    {
        return this.image ?? this.defaultImage;
    }}
```

## Remplacer if/else par le Polymorphisme

*Good*
```typescript
getPrice(book) {
    switch (type) {
        case PAPERBACK: 
            return book.basePrice;
        case EBOOK:
            return (book.basePrice - 5.90) * 0.75;
        case AUDIO:
            return hasMemberShip ? 0 : book.basePrice * 0.5;
    }
}
```

*Better*
```typescript
abstract class Book {
    // ...
    abstract getPrice(): number;
}

class Paperback extends Book {
    getPrice(): number {
        return book.basePrice;
    }
}

class Ebook extends Book {
    getPrice(): number {
        return (book.basePrice - 5.90) * 0.75;
    }
}

class Audio extends Book {
    getPrice(): number {
        return hasMemberShip ? 0 : book.basePrice * 0.5;
    }
}
```

## Remplacer if/else par un Mapping Object

*Good*
```typescript
function getEmoji(name) {
    if (name === 'cherry') {
        return '🍒';
    }
    else if (name === 'banana') {
        return '🍌';
    }
    else if (name === 'burger') {
        return '🍔';
    }
    else {
        return '❌';
    }
}
```

*Good*
```typescript
function getEmoji(name) {
    const emojiMapping = {
        'cherry': '🍒',
        'banana': '🍌',
        'burger': '🍔',
    };
    return emojiMapping[name] || '❌';
}
```


