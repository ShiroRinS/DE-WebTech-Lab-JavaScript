// Task 2: Create Product and Store classes
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getInfo() {
        return `Name: ${this.name}, Price: ${this.price} Bath, Quantity: ${this.quantity}`;
    }
}

class Store {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    listAllProducts() {
        return this.products.map(product => product.getInfo()).join('\n');
    }
}

// Calling (Use the classes)
const store = new Store();
const product1 = new Product("Water", 10, 50);
const product2 = new Product("Bread", 15, 30);
const product3 = new Product("Cookie", 30, 20);
store.addProduct(product1);
store.addProduct(product2);
store.addProduct(product3);

console.log(store.listAllProducts());
