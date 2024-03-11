main();

// TODO: Using index means editing the page will throw checkmarks out of order

// The main things to do on page load
function main() {
    addClickHandlers();
    loadItems();
}

// Return a date stamped string so that todo's reset every day.
function getDayKey() {
    let date = new Date().toISOString().slice(0, 10); // Like: 2024-02-02
    let key = "todo-" + date;
    console.log(key);
    return key;
}

// Save all the items in the list
function saveItems() {
    let key = getDayKey();
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    // Loop through all the checkboxes saving them to localStorage by index
    checkboxes.forEach(function(checkbox, index) {
        localStorage.setItem(key + "-" + index, checkbox.checked);
        console.log(index + " " + checkbox.checked);
    });
}

// Load all the items in the list
function loadItems() {
    let key = getDayKey();
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    // Loop through all the checkboxes loading them from localStorage by index
    checkboxes.forEach(function(checkbox, index) {
        let storedString = localStorage.getItem(key + "-" + index);
        if (storedString == "true") {
            checkbox.checked = true;
        } else {
            checkbox.checked = false;
        }
        console.log(key + "-" + index + " " + checkbox.checked);
    });
}

// Set a click handler (onclick) for each checkbox
function addClickHandlers() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox, index) {
        checkbox.addEventListener('click', saveItems);
    });
}
