// var laDivision = document.getElementById("ok");
// var laClasse = document.getElementsByClassName("classe1");


// laDivision.innerHTML = "Hello World!";
// laClasse.innerHTML = "j'aime le code !";


// var desApprenants = ["Fabien", "Edains", "Quentin"];
// console.log(desApprenants);
// desApprenants.push("Christophe");
// console.log(desApprenants);




//----------------------------------------

// var box = document.getElementById("test");
// function agrandir() {
//     document.getElementById("test").innerHTML = resizeTo(500, 500);
// }

// document.addEventListener("click", agrandir(){
//     getElementById("click").style.
// });

//------------------------------------------

// document.addEventListener("click", function(){
//     document.getElementById("test").style.width = 500;
// });

// ---------------------------------------------
// var zone;
// var isActivated = false;

// document.getElementById("test").addEventListener("click"), function() {
//     if (isActivated == false) {
//     document.getElementById("test").style.width = "500px";
//     }
//     else if (isActivated != false){
//     document.getElementById("test").style.width = "500px";
//     }
// }

//-------------------------------------------------------------------
var rose = document.getElementById("rose");
var isActivated = false;

rose.addEventListener("click", function (){
    if (isActivated == false){
        rose.style.backgroundColor ="red";
        rose.style.width = "500px";
        rose.style.height = "500px";
        isActivated = true;
    } else {
        rose.style.backgroundColor ="deeppink";
        rose.style.width = "250px";
        rose.style.height = "250px";
        isActivated = false;
    }
}
)

