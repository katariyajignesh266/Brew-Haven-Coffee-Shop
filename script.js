// Welcome Message

window.onload = function () {

    console.log("Welcome to Brew Haven Coffee Shop");

};


// Explore Menu Button Animation

const menuButton = document.querySelector(".btn");

if(menuButton){

    menuButton.addEventListener("click", function(){

        console.log("Menu Section Opened");

    });

}


// Menu Cards Hover Effect

const menuCards = document.querySelectorAll(".menu-card");

menuCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});


// Review Cards Click Event

const reviews = document.querySelectorAll(".review-card");

reviews.forEach(review => {

    review.addEventListener("click", () => {

        alert("Thank you for reading customer reviews!");

    });

});


const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll("#nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        document
            .getElementById("nav-links")
            .classList.remove("active");

    });

});


