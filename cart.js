//@ts-ignore
const prompt = require("prompt-sync")();

let cart = [];

function showMenu() {
    console.log("\n=====SHOPPING CART MENU=====");
    console.log("1. Add Item");
    console.log("2. View Cart");
    console.log("3. Update Item");
    console.log("4. Remove Item");
    console.log("5. Show Total");
    console.log("6. Clear Cart");
    console.log("7. Search Item");
    console.log("8. Show Item Count")
    console.log("9. Exit");
}

let keepRunning = true;
while (keepRunning) {
    showMenu()

    const choice = prompt("Choose an option (1 - 6): ");

    if (choice === "1") {
        addItem();
    } else if (choice === "2") {
        viewCart();
    } else if (choice === "3") {
        updateItem();
    } else if (choice === "4") {
        removeItem();
    } else if (choice === "5") {
        showTotal();
    } else if (choice === "6") {
        clearCart();
    } else if (choice === "7") {
        searchItem();
    } else if (choice === "8") {
        showItemCount();     
    } else if (choice === "9") {
        console.log("Exit. Goodbye!");
        keepRunning = false;
    } else {
        console.log("Invalid entry. Please select between 1 and 7.")
    }
        
}

function addItem() {
    
    const name = prompt("Enter item name: ").trim();
    if (name === "") {
        console.log("Item name cannot be empty.");
        return;
    }
    const priceInput = prompt("Enter item price: ");
    const price = parseFloat(priceInput);

    if (isNaN(price) || price <= 0 ) {
        console.log("Invalid price. Price must be a number greater than zero.");
        return;
    }
    const quantityInput = prompt("Enter item quantity: ");
    const quantity = parseFloat(quantityInput);

    if (isNaN(quantity) || quantity <= 0) {
        console.log("Invalid quantity. Quantity must be a whole number greater than zero.");
        return;
    }

    const item = {
        name: name,
        price: price,
        quantity: quantity
    };
    cart.push(item);
    console.log(`"${name}" (₦${price} x ${quantity}) added to cart successfully`);
}

function viewCart() {
    console.log("\n=====YOUR CART=====");
    
    if (cart.length === 0) {
        console.log("Your cart is empty.");
        return;
    }

    cart.forEach((item, index) => {
        const subtotal = item.price * item.quantity;
        console.log(`${index + 1}. ${item.name} - ₦${item.price} x ${item.quantity} = ₦${subtotal}`);
    });
}

function updateItem() {
    if (cart.length === 0) {
        console.log("Cart is empty. Nothing to update.");
        return;
    }

    console.log("\n===== UPDATE ITEM =====");
    cart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - ₦${item.price} x ${item.quantity}`);
    });

    const input = prompt("Enter the number of item to update: ");
    const index = parseInt(input) - 1;

    if (isNaN(index) || index < 0 || index >= cart.length) {
        console.log("Invalid item number.");
        return;
    }

    const item = cart[index];

    const updateChoice = prompt("What do you want to update? (price/quantity/both): ").toLowerCase();

    if (updateChoice === "price" || updateChoice === "both") {
        const newPriceInput = prompt("Enter new price: ");
        const newPrice = parseFloat(newPriceInput);

        if (!isNaN(newPrice) && newPrice > 0) {
            item.price = newPrice;
        } else {
            console.log("Invalid price. Price not updated.");
        }
    }

    if (updateChoice === "quantity" || updateChoice === "both") {
        const newQuantityInput = prompt("Enter new quantity: ");
        const newQuantity = parseInt(newQuantityInput);

        if (!isNaN(newQuantity) && newQuantity > 0) {
            item.quantity = newQuantity;
        } else {
            console.log("Invalid quantity. Quantity not updated.");
        }
    }

    console.log(`"${item.name}" has been updated successfully.`);
}

function removeItem() {
    if (cart.lenght === 0) {
        console.log("Cart is empty. No item to remove.");
        return;
    }

    console.log("\n=====REMOVE ITEM=====");

    cart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - ₦${item.price} x ${item.quantity}`);
    });

    const input = prompt("Enter the number of item to remove: ");
    const index = parseInt(input) - 1;

    if (isNaN(index) || index < 0 || index >= cart.length) {
        console.log("Invalid item number. Please try again.");
        return;
    }

    const confirm = prompt(`Are you sure you want to remove "${cart[index].name}" yes/no: `).toLowerCase();
    if (confirm === "yes") {

    const removed = cart.splice(index, 1)[0];
    console.log(`"${removed.name}" removed from cart.`);
    } else {
        console.log("Action cancelled.")
    }
}

function showTotal(){
    if (cart.length === 0) {
        console.log("Your cart is empty. No total to show.");
        return
    }

    let total = 0;

    console.log("\n=====CART TOTAL=====");

    cart.forEach((item, index) => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        console.log(`${index + 1}. ${item.name} - ₦${item.price} x ${item.quantity} = ₦${subtotal}`);
    });

    console.log(`\nTOTAL: ₦${total.toFixed(2)}`);
}

function clearCart() {
    if (cart.length === 0) {
        console.log("Your cart is empty. Nothing to clear.");
        return;
    }

    const confirm = prompt("Are you sure that you want to clear your cart? (yes/no): ").toLowerCase();
    if (confirm === "yes") {
        cart = [];
        console.log("Your cart is cleared successfully.");
    } else {
        console.log("Action is cancelled. Cart not cleared.")
    }
}

function searchItem() {
    if (cart.length === 0) {
        console.log("Your cart is empty. No item to search.");
        return;
    }

    const searchItem = prompt("Enter the name of the item to search: ").trim().toLowerCase();
    
    const foundItem = cart.find(item => item.name.toLowerCase() === searchItem);

    if (foundItem) {
        const subtotal = foundItem.price * foundItem.quantity;
        console.log(`FOUND: ${foundItem.name} - ₦${foundItem.price} x ${foundItem.quantity} = ₦${subtotal}`);
    } else {
        console.log(`"${searchItem}" not found in cart`);
    }
}

function showItemCount() {
    if (cart.length === 0) {
        console.log("Cart is empty");
        return;
    }

    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    console.log(`\nTotal items in Cart: ${itemCount}`);
}