// const navBar = document.querySelector(".navbar")
// const hamburgerIcon = document.querySelector(".hamburger-icon")

// hamburgerIcon.addEventListener("click",toggleHamburger);

// function toggleHamburger(){
//   navBar.classList.toggle("showNav")
//   hamburgerIcon.classList.toggle("showClose")
// }

// const menuLinks = document.querySelectorAll(".menuLink")
// menuLinks.forEach(
//   function(menuLinks){
//     menuLinks.addEventListener("click",toggleHamburger)
//   }
// )

function buttonToggle(x) {
  x.classList.toggle("toggle-button-change");
  
  var sidebarMenu=document.getElementById("sidebarMenu")
  sidebarMenu.classList.toggle("sidebarMenu-open");
  console.log(sidebarMenu)
}