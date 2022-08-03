//Task 1
    document.write(`<h1>Task 1</h1>`);
for (let i = 0; i < 10; i++) {
    document.write(`<div>Number</div>`);
}
//Task 2
document.write(`<h1>Task 2</h1>`);
let clothes = [
    {name:'Dress'},
    {name:'Jeans'},
    {name:'Skirts'},
    {name:'T-Shirts'},
    {name:'Blazers'},
    {name:'Shoes'},
    {name:'Bag'},
    {name:'Accessories'},
    {name:'Bodysuits'},
    {name:'Jackets'},
];
for (const cloth of clothes){
    document.write(`<div>Show: ${cloth.name}</div>`);
}
//Task 3
document.write(`<h1>Task 3</h1>`);
let num = 0;
while (num <20){
    document.write(`<h2>Num</h2>`);
    num ++;
}
//Task 4
document.write(`<h1>Task 4</h1>`);
let ind =0;
while (ind <20){
   document.write(`<h2>Show: ${ind}</h2>`);
    ind++;
}
//Task 5
document.write(`<h1>Task 5</h1>`);
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (const list of listOfItems) {
    document.write(`<ul>
<li>${list}</li>
                    </ul>`);
}
//Task 6
document.write(`<h1>Task 6</h1>`);
let products = [
    {
        title: 'Milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'Juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'Tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'Tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (const product of products){
   document.write(`<div class="product-card">
        <h3 class="product-title">${product.title} ${product.price}</h3>
        <img src="${product.image}" alt="images" class="product-image">
</div>`)
}
//Task 7
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
for (const user of users){
    if (user.status){
        console.log(user);
    }
}
for (const user of users){
    if (!user.status){
        console.log(user);
    }
}
for (const user of users){
    if (user.age>30){
        console.log(user);
    }
}