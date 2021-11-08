const apri = document.querySelector(".fas.fa-bars");

apri.addEventListener("click", function (){ 
    document.querySelector(".hamburger-menu").style.display = "block";}
)

const chiudi = document.querySelector(".fas.fa-times");

chiudi.addEventListener("click", function (){ 
    document.querySelector(".hamburger-menu").style.display = "none";
    }
)

