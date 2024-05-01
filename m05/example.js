var table = prompt("Enter a number for the multiplication table:");
var operator = 'multiple'; // Type of calculation
var i = 1;                 // Set counter to 1
var msg = '<h2>Multiplication Table</h2>';

if (isNaN(table)) {
    alert("Please enter a valid number.");
} 

else {
    // Do multiplication
    while (i < 11) {
        msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
        i++;
    }
}
7
// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
