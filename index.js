// index.js - Flatburger Restaurant Scope Lab

// Task 1: burgers array in global scope
const burgers = ['Hamburger', 'Cheeseburger'];

// Task 2: featuredDrink string in global scope
let featuredDrink = 'Strawberry Milkshake';

// Task 3: addBurger() function
function addBurger() {
    // Create a function-scoped variable named newBurger
    const newBurger = 'Flatburger';
    
    // Use .push() to add newBurger to the burgers array
    burgers.push(newBurger);
}

// Task 4: if(true) block with block-scoped variable
if (true) {
    // Create a block-scoped variable named anotherNewBurger
    const anotherNewBurger = 'Maple Bacon Burger';
    
    // Use .push() to add anotherNewBurger to the burgers array
    burgers.push(anotherNewBurger);
}

// Task 5: changeFeaturedDrink() function
function changeFeaturedDrink() {
    // Change the value of the featuredDrink variable
    featuredDrink = 'The JavaShake';
}

// ====================
// TESTING CODE (Optional - to verify everything works)
// ====================

// Test the functions when the page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== Flatburger Restaurant Menu ===');
    console.log('Initial Burgers:', burgers);
    console.log('Initial Drink:', featuredDrink);
    
    // Call addBurger() to add 'Flatburger'
    addBurger();
    console.log('\nAfter addBurger():', burgers);
    
    // Call changeFeaturedDrink() to update drink
    changeFeaturedDrink();
    console.log('After changeFeaturedDrink():', featuredDrink);
    
    // Final menu
    console.log('\n=== Final Menu ===');
    console.log('Burgers:', burgers);
    console.log('Featured Drink:', featuredDrink);
    
    // Display on page (optional)
    const output = document.getElementById('output');
    if (output) {
        output.innerHTML = `
            <h3>Menu Created Successfully!</h3>
            <p><strong>Burgers:</strong> ${burgers.join(', ')}</p>
            <p><strong>Featured Drink:</strong> ${featuredDrink}</p>
            <p>Check browser console for detailed output (F12).</p>
        `;
    }
});
