// const apri = document.querySelector(".fas.fa-bars");

// apri.addEventListener("click", function (){ 
//     document.querySelector(".hamburger-menu").style.display = "block";}
// )

// const chiudi = document.querySelector(".fas.fa-times");

// chiudi.addEventListener("click", function (){ 
//     document.querySelector(".hamburger-menu").style.display = "none";
//     }
// )



// seconda opzione 


const apri = document.querySelector(".fas");

apri.addEventListener("click", function() {
    // alert();
    let ham = document.querySelector(".hamburger-menu");
    if (ham.style.display == "block") {
        ham.style.display = "none";
        } 
    else {
        ham.style.display = "block";
        }
    }    
)
  