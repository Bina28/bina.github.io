//#region account-dropdown
var accountDropdown = document.getElementById("account-dropdown"); // Get the "My account" dropdown item
var dropdownContent = accountDropdown.querySelector(".dropdown-content"); // Get the dropdown content

// Toggle the dropdown menu when "My account" is clicked
accountDropdown.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default action (navigation)
    event.stopPropagation(); // Prevent the click event from bubbling up to the document
    
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block"; // Toggle the display of the dropdown content
});

// Hide the dropdown menu when clicking outside of it
document.addEventListener("click", function(event) {
    if (!dropdownContent.contains(event.target) && event.target !== accountDropdown) {
        dropdownContent.style.display = "none";
    }
});
//#endregion account-dropdown



