// Add event listeners for feature clicks
document.getElementById('crop-analysis').addEventListener('click', function() {
    // Redirect to Crop Analysis page
    window.location.href = 'crop-analysis.index.html';
});

document.getElementById('machinery-analysis').addEventListener('click', function() {
    window.location.href = 'machinery-analysis.index.html';
});

document.getElementById('settings').addEventListener('click', function() {
    alert("Settings feature coming soon!");
});

document.getElementById('task-appointment').addEventListener('click', function() {
    alert("Task Appointment feature coming soon!");
});

document.getElementById('crop-inventory').addEventListener('click', function() {
    alert("Crop Inventory feature coming soon!");
});

document.getElementById('placeholder').addEventListener('click', function() {
    alert("Placeholder feature coming soon!");
});

// Add event listener for the "Back" button on the crop-analysis page
if (document.getElementById('back-btn')) {
    document.getElementById('back-btn').addEventListener('click', function() {
        // Redirect to the main index page
        window.location.href = 'public/index.html';
    });
}
