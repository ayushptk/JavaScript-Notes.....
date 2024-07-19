//main class 
class LibraryItem {
    constructor(title, author) {
        this.title = title; 
        this.author = author;
    }

    // Method to display the library item
    display() {
        return `${this.title} by ${this.author}`; // Return a data with the title and author
    }
}
// Subclassis book which is inheriting from LibraryItem
class Book extends LibraryItem {
    constructor(title, author) // yo constructor chaii book ko ho
    {
        super(title, author); //super is used to  call the constructor of the parent class i.e libraryitem
        this.type = 'Book'; // Set the type property to 'Book'
    }
    display() {
        return `${this.type}: ${super.display()}`; // Call the display method of the parent class.
    }
}
// Subclass representing a magazine, inheriting from LibraryItem
class Magazine extends LibraryItem {
    constructor(title, author) {
        super(title, author); // Call the constructor of the parent class (LibraryItem)
        this.type = 'Magazine'; // Set the type property to 'Magazine'
    }

    display() {
        return `${this.type}: ${super.display()}`; // Call the display method of the parent class and prepend the type
    }
}

// Subclass representing a DVD, inheriting from LibraryItem
class DVD extends LibraryItem {
    constructor(title, author) {
        super(title, author); // Call the constructor of the parent class (LibraryItem)
        this.type = 'DVD'; // Set the type property to 'DVD'
    }

    // Override the display method to include the type
    display() {
        return `${this.type}: ${super.display()}`; // Call the display method of the parent class and prepend the type
    }
}

// Get the HTML elements needed for interactivity
const libraryList = document.getElementById('library-list');
const addItemButton = document.getElementById('add-item');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const typeInput = document.getElementById('type');

// Array to store library items
let libraryItems = [];

// Add event listener to the "Add Item" button
addItemButton.addEventListener('click', () => {
    const title = titleInput.value; // Get the value of the title input
    const author = authorInput.value; // Get the value of the author input
    const type = typeInput.value.toLowerCase(); // Get the value of the type input and convert it to lowercase

    let item;
    // Create a new library item based on the type
    if (type === 'book') {
        item = new Book(title, author); // Create a new Book object
    } else if (type === 'magazine') {
        item = new Magazine(title, author); // Create a new Magazine object
    } else if (type === 'dvd') {
        item = new DVD(title, author); // Create a new DVD object
    } else {
        alert('Invalid type. Please enter "Book", "Magazine", or "DVD".'); // Show an alert if the type is invalid
        return; // Exit the function
    }

    libraryItems.push(item); // Add the new item to the libraryItems array
    displayLibraryItems(); // Update the displayed list of items
    clearInputs(); // Clear the input fields
});

// Function to display the library items
function displayLibraryItems() {
    libraryList.innerHTML = ''; // Clear the current list
    libraryItems.forEach((item, index) => {
        const li = document.createElement('li'); // Create a new list item element
        li.textContent = item.display(); // Set the text content to the display result of the item

        const deleteButton = document.createElement('button'); // Create a new delete button element
        deleteButton.textContent = 'Delete'; // Set the text content of the delete button

        // Add event listener to the delete button
        deleteButton.addEventListener('click', () => {
            deleteLibraryItem(index); // Delete the item when the button is clicked
        });

        li.appendChild(deleteButton); // Append the delete button to the list item
        libraryList.appendChild(li); // Append the list item to the list
    });
}

// Function to delete a library item
function deleteLibraryItem(index) {
    libraryItems.splice(index, 1); // Remove the item at the specified index from the array
    displayLibraryItems(); // Update the displayed list of items
}

// Function to clear the input fields
function clearInputs() {
    titleInput.value = ''; // Clear the title input
    authorInput.value = ''; // Clear the author input
    typeInput.value = ''; // Clear the type input
}
