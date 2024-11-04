# DE-WebTech-Lab-JavaScript | JavaScript Lab Project for Data Engineer Class

## Overview
This repository contains the solutions for a JavaScript lab project completed as part of the Data Engineer class. The lab involves two main tasks:

1. **Toggle Button Function**: A function that displays a message when a button is clicked and hides it when clicked again.
2. **Product and Store Classes**: Classes that handle product creation and management in a store, demonstrating object-oriented programming in JavaScript.

## Task 1: Toggle Button
### Description
A JavaScript function that toggles the display of a message when a button is clicked.

### How to Run
1. Open `Task1.html` in a web browser.
2. Click the button to display or hide the message.

### Code Structure
- **HTML**: Contains a button and a `div` for displaying the message.
- **JavaScript**: The `toggleMessage()` function controls the visibility of the message.

### Latest Code
```html
<script>
// Task 1: Toggle function for button
function toggleMessage() {
    const messageElement = document.getElementById("message");
    if (messageElement.style.display === "none" || !messageElement.style.display) {
        messageElement.style.display = "block";
        messageElement.textContent = "Lab JavaScript";
    } else {
        messageElement.style.display = "none";
    }
}
</script>
<button onclick="toggleMessage()">Click Me</button>
<div id="message" style="display: none;"></div>
```

## Task 2: Product and Store Classes
### Description
JavaScript classes that simulate a product inventory system. The `Product` class holds the details of a product, while the `Store` class manages an array of products and provides methods to add and list products.

### How to Run
1. Include `Task2.js` in an HTML file or run it in a Node.js environment.
2. Instantiate the `Product` and `Store` classes, add products, and use `console.log()` to display the product list.

### Latest Code
```javascript
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
```

### Expected Output
```
Name: Water, Price: 10 Bath, Quantity: 50
Name: Bread, Price: 15 Bath, Quantity: 30
Name: Cookie, Price: 30 Bath, Quantity: 20
```

## Files Included
- `Lab JavaScript.pdf`: Original lab assignment details.
- `Task1.html`: HTML file for the toggle button task.
- `Task2.js`: JavaScript file for the `Product` and `Store` classes.

<!--
## How to Use Git Commands
To push the changes to a remote repository, use the following commands:

1. **Add remote**:
   ```bash
   git remote add origin <repository-URL>
   ```

2. **Push changes**:
   ```bash
   git push -u origin main
   ```
-->

## License
This project is open-source and available under the [MIT License](LICENSE).
