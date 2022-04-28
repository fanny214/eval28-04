console.log("hello");

var submit = document.buttonSelector
var result = document.getRandomInt
var button = document.querySelector('button');

// demarer le jeux


// générer un nombre aléatoirement 
function nbm() {
 nmb= Math.floor(Math.random() * 500);
 console.log(nmb)
  }



//  verrifier si le prix donner est le bon  
function testnmb() {
    enterNumber = document.getElementById('test1').value;
    console.log(enterNumber)
    if(enterNumber == nmb){
        document.getElementById("p1").textContent= "C'est le juste prix !"
       
    }else if(enterNumber < nmb) {
        document.getElementById("p1").textContent= "C'est plus! "
    }else {
        document.getElementById("p1").textContent= "C'est moins! "
    }
}

function btn2()

// function buttonSelector() {
//     // si la valeur du champ est vide
//     if() {
//       // alors on envoie le formulaire
//       document.formSaisie.submit();
//     }
//     else {
//       // sinon on affiche un message
//       alert("Saisir la reponce");
//     }
//   }
  

