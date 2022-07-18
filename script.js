const hamburger = document.querySelector(".Hamburger");
const navlink = document.querySelector(".navMenu");


hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    navlink.classList.toggle("active");
})

document.querySelectorAll(".navlink").forEach(n=>n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navlink.classList.remove("active");

}))