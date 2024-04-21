//#region register-account  


//#endregion register-account



//#region handling cookies

// Setting cookies



// Getting cookies




//#endregion handling cookies



//#region account-dropdown

var accountDropdown = document.getElementById("account-dropdown"); // Get the "My account" dropdown item
var dropdownContent = accountDropdown.querySelector(".dropdown-content"); // Get the dropdown content

// Toggle the dropdown menu when "My account" is clicked
accountDropdown.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default action (navigation)
    event.stopPropagation(); // Prevent the click event from bubbling up to the document
    
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block"; // Toggle the display of the dropdown content
});

// Get rid of dropdown menu when clicking outside of it
document.addEventListener("click", function(event) {
    if (!dropdownContent.contains(event.target) && event.target !== accountDropdown) {
        dropdownContent.style.display = "none";
    }
});

// Lead to their respective pages when clicked on elements inside "My account"
document.addEventListener("DOMContentLoaded", function() {
    const dropdownItems = document.querySelectorAll(".dropdown-item a");

    dropdownItems.forEach(item => {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            const url = this.getAttribute("href");
            window.location.href = url;
        });
    });
});

// Perform logout functionality and redirect the user back to the main page, e.g. index.html
document.addEventListener("DOMContentLoaded", function() {
    const logoutLink = document.getElementById("logout");

    logoutLink.addEventListener("click", function(event) {
        event.preventDefault();

        window.location.href = "index.html";
    });
});

//#endregion account-dropdown



//#region slideshow

let slideIndex = 1;
showSlides(slideIndex);

// next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("drinkSlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

//#endregion slideshow


// NO TOUCH PLEASE, SPØR SHAILA
let popUp = document.getElementById("cookiePopup");
// When user clicks the accept button
document.getElementById("acceptCookie").
addEventListener("click", () => {})


  // Function to check if the cookie is present
  function checkCookie() {
    return document.cookie.includes("myCookieName=");
  }

  console.log("Cookie present:", checkCookie());

  // Check if the cookie is present on page load
  if (checkCookie()) {
    console.log("Cookie found. Hiding popup.");
    popUp.classList.add("hide");
    popUp.classList.remove("show");
  } else {
    console.log("Cookie not found. Showing popup.");
  }

  // Accept button click event listener
  document.getElementById("acceptCookie").addEventListener("click", () => {
    let d = new Date();
    d.setMinutes(2 + d.getMinutes());
    document.cookie = "myCookieName=thisIsMyCookie; expires=" + d + ";";
    popUp.classList.add("hide");
    popUp.classList.remove("show");
    console.log("Cookie accepted and popup hidden.");
  });
