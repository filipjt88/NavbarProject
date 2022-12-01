let bars         = document.querySelector(".bars");
let nav           = document.querySelector("nav");
let navToggle = document.querySelector(".nav-toggle");


bars.addEventListener("click", () => {
       if(navToggle.style.display === "") {
        navToggle.style.display = "flex";
        navToggle.style.paddingLeft = "10px";
        bars.style.transform = "rotate(90deg)";
        bars.style.transition = "1s";
        navToggle.style.backgroundColor = "#ddd";
       } else if(navToggle.style.display === "flex") {
        navToggle.style.display = "";
        bars.style.transform = "rotate(0deg)";
        bars.style.transition = "1s";
       }
});







