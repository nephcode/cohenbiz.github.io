// ∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴
// ∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ DID ∴∵ -WE ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴
// ∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ARE ∴∵ ƸӜƷ ∴

(function () {
    "use strict";
  
    // define variables
    var items = document.querySelectorAll(".timeline article");
  
    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("nephpoint");
        }
      }
    }
  
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  })();

// Date actuelle (Aujourd'hui du jour de maintenant)
 const currentDate = new Date();

 // Dates de référence
 const nagaDAY = new Date("2020-02-02");
 const nephelimDID = new Date("2022-01-09");
 const nephelimBDAY = new Date("1995-11-10");
 // Calcul du nombre de jours entre les deux dates
 const nagaCount = Math.floor((currentDate - nagaDAY) / (1000 * 60 * 60 * 24));
 const nephBbayCount = Math.floor((currentDate - nephelimBDAY ) / (1000 * 60 * 60 * 24));
 const nephDidCount = Math.floor((currentDate - nephelimDID) / (1000 * 60 * 60 * 24));
 // Affichage du résultat dans le footer
 document.getElementById("nagadayprint").textContent ='Naga : ' + nagaCount + ' days';
document.getElementById("wedidprint").textContent ='Did : ' + nephDidCount + ' days';
document.getElementById("bdayprint").textContent ='Neph : ' + nephBbayCount + ' days';

//∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴
//∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴∵ ƸӜƷ ∴
console.log(nagaCount);




