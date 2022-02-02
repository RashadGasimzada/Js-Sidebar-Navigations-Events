let btn = document.querySelector(".fa-playstation");
let sidebar = document.querySelector(".sidebar");

btn.onclick = function() {
    sidebar.classList.remove("close");
  
}
let btn2 = document.querySelector(".fa-times");
btn2.onclick = function() {
    sidebar.classList.add("close");
 
}