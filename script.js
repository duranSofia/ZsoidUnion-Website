function buttonToggle(x) {
  x.classList.toggle("toggle-button-change");
  
  var sidebarMenu=document.getElementById("sidebarMenu")
  sidebarMenu.classList.toggle("sidebarMenu-open");
  console.log(sidebarMenu)
}