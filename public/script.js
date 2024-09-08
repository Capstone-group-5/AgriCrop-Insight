// Function to handle navigation with Axios
function navigateWithAxios(url) {
    axios.get(url)
        .then(function(response) {
            // Simulate redirection after successful request
            window.location.href = url;
        })
        .catch(function(error) {
            console.error('Error during navigation:', error);
        });
}

// Feature click handlers using Axios
document.getElementById('crop-analysis').addEventListener('click', function() {
    // Use Axios to simulate navigation to Crop Analysis page
    navigateWithAxios('crop-analysis.index.html');
});

document.getElementById('machinery-analysis').addEventListener('click', function() {
    navigateWithAxios('machinery-analysis.index.html');
});

document.getElementById('profile').addEventListener('click', function() {
    // Simulate an Axios request that returns a "coming soon" response for the profile page
    axios.get('/api/profile')
        .then(function(response) {
            alert(response.data.message); // Display the response message (if available)
        })
        .catch(function(error) {
            alert("Profile feature coming soon!");
            console.error('Profile feature is not available yet:', error);
        });
});

document.getElementById('task-appointment').addEventListener('click', function() {
    // Simulate API call for Task Appointment feature
    axios.get('/api/task-appointment')
        .then(function(response) {
            alert(response.data.message); // Task Appointment success
        })
        .catch(function(error) {
            alert("Task Appointment feature coming soon!");
            console.error('Task Appointment feature is not available yet:', error);
        });
});

document.getElementById('crop-inventory').addEventListener('click', function() {
    // Simulate API call for Crop Inventory feature
    axios.get('/api/crop-inventory')
        .then(function(response) {
            alert(response.data.message); // Crop Inventory success
        })
        .catch(function(error) {
            alert("Crop Inventory feature coming soon!");
            console.error('Crop Inventory feature is not available yet:', error);
        });
});

document.getElementById('placeholder').addEventListener('click', function() {
    // Simulate API call for Placeholder feature
    axios.get('/api/placeholder')
        .then(function(response) {
            alert(response.data.message); // Placeholder success
        })
        .catch(function(error) {
            alert("Placeholder feature coming soon!");
            console.error('Placeholder feature is not available yet:', error);
        });
});

// Add event listener for the "Back" button on the crop-analysis page
if (document.getElementById('back-btn')) {
    document.getElementById('back-btn').addEventListener('click', function() {
        // Redirect to the main index page using Axios
        navigateWithAxios('public/index.html');
    });
}
