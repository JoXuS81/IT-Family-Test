/* 

Table of Contents

- Create Effect for Hamburger Menu Lines
- Transform Menu after Click

*/


// Create Effect for Hamburger Menu Lines
const header = document.querySelector (".header-area");
const menuIcon = document.querySelector (".mobile-menu-ellipse");

menuIcon.addEventListener("click", () => 
{
    console.log("Clicked");
    header.classList.toggle("change-menu");
});


// Transform Menu after Click 
/*$(document).ready(function() 
{
    $(".phoneLink").on("click", function() 
    {
        $(".header").removeClass("changeMenu");
    });
}); */