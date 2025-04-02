// Function to load HTML content from a file
function loadHTML(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML:', error));
}

// Load the header and navbar
loadHTML('header-container', 'header.html');
loadHTML('navbar-container', 'navbar.html');

// Load the services and footer sections
loadHTML('services-container', 'service.html');
loadHTML('footer-container', 'footer.html');
