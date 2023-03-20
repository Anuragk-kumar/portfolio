var navMenuAnchorTags = document.querySelectorAll(".nav-menu a");
for(var i =0; i< navMenuAnchorTags.length; i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
         var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);


         var interval = setInterval(function(){
         var targetSectonCoordinates = targetSection.getBoundingClientRect();
             if(targetSectonCoordinates.top <= 0 ){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);

         },20);
 
    });
}
//  Handle Scroll event on window 
//  check that skill section container is varible or Not
//  ensure that iital width of colored skill dive is zero 

var progressBar = document.querySelectorAll(".skill-progress > div");
var skillContainer = document.getElementById("skills-container");
window.addEventListener("scroll",checkScroll);
var animationDone = false;


function initialiseBars(){
    for(let bar of progressBar){
        bar.style.width = 0 +'%';
    }
}
initialiseBars();
function fillBars(){
    for(let bar of progressBar){
        let targetWidth =bar.getAttribute("data-bar-width");
        let currentWidth = 0;
        let interval = setInterval(function(){
            if(currentWidth > targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + `%`;
        },7);

    }

}





function checkScroll(){
    // you have to heck wether check container is visible
    var coordinates = skillContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top <window.innerHeight){
        animationDone= true;
        console.log("skills section visible");
         fillBars();
    }
    else if(coordinates.top> window.innerHeight){
        animationDone = false;
        initialiseBars();
    }
}
