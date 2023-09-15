function searchGames() {
    // Get the search input element
    var input = document.querySelector('.search-txt');
    // Get the game cards
    var gameCards = document.querySelectorAll('.swiper-slide');
    // Get the element where you want to display the "No results found" message
    var noResultsMessage = document.querySelector('.no-results-message');
    // Get the copyright div
    var copyrightDiv = document.querySelector('.copyright.container');

    // Convert the search input value to lowercase for case-insensitive search
    var searchTerm = input.value.toLowerCase();

    var resultsFound = false; // Flag to track if any results were found

    // Loop through all game cards
    gameCards.forEach(function(card) {
        var title = card.querySelector('h2').textContent.toLowerCase(); // Get the game title

        // Check if the game title contains the search term
        if (title.includes(searchTerm)) {
            card.style.display = 'block'; // Show the card if it matches the search term
            resultsFound = true; // Set the flag to true since a result was found
        } else {
            card.style.display = 'none'; // Hide the card if it doesn't match
        }
    });

    // Hide or show the "No results found" message based on the flag
    if (resultsFound) {
        noResultsMessage.style.display = 'none'; // Hide the message if results were found
        copyrightDiv.style.display = 'block'; // Show the copyright div if results were found
    } else {
        noResultsMessage.style.display = 'block'; // Show the message if no results were found
        copyrightDiv.style.display = 'none'; // Hide the copyright div if no results were found
    }

    // Hide the pagination if there is text in the search input
    var pagination = document.querySelector('.pagination');
    if (input.value.length > 0) {
        pagination.style.display = 'none';
    } else {
        pagination.style.display = 'block';
    }
}

// Add an event listener to the search input
var searchInput = document.querySelector('.search-txt');
searchInput.addEventListener('input', searchGames);

// Initially hide the copyright div
var copyrightDiv = document.querySelector('.copyright.container');
copyrightDiv.style.display = 'none';

// Function to reset search and show all elements
function resetSearch() {
    var gameCards = document.querySelectorAll('.swiper-slide');
    gameCards.forEach(function(card) {
        card.style.display = 'block'; // Show all game cards
    });
    var noResultsMessage = document.querySelector('.no-results-message');
    noResultsMessage.style.display = 'none'; // Hide the "No results found" message
    var pagination = document.querySelector('.pagination');
    pagination.style.display = 'block'; // Show the pagination
    var viewMoreLinks = document.querySelectorAll('.view-more a');
    viewMoreLinks.forEach(function(link) {
        link.style.display = 'block'; // Show the "View more" links
    });
    var specialElements = document.querySelectorAll('.fa-solid.fa-star, h2:contains("Sports"), h2:contains("Shooter"), h2:contains("Grind"), h2:contains("Emulations"), h2:contains("Misc"), h2:contains("IO Games"), h2:contains("Pizzeria"), h2:contains("Flash")');
    specialElements.forEach(function(element) {
        element.style.display = 'block'; // Show the special elements
    });
}

// Add an event listener to reset the search
var resetButton = document.querySelector('.reset-button');
resetButton.addEventListener('click', function() {
    searchInput.value = ''; // Clear the search input
    resetSearch();
});





