// const apri = document.querySelector(".fas.fa-bars");

// apri.addEventListener("click", function (){ 
//     document.querySelector(".hamburger-menu").style.display = "block";}
// )

// const chiudi = document.querySelector(".fas.fa-times");

// chiudi.addEventListener("click", function (){ 
//     document.querySelector(".hamburger-menu").style.display = "none";
//     }
// )


const apri = document.querySelector(".fas.fa-bars");

apri.addEventListener("click", function (){ 
    let ham = document.querySelector(".hamburger-menu");
    ham.className = ham.classList + " active";
    }
)
const chiudi = document.querySelector(".fas.fa-times");

chiudi.addEventListener("click", function (){ 
    let ham = document.querySelector(".hamburger-menu");
    ham.classList.remove("active");
    }
)
