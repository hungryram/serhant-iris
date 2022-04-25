function hideIntro() {
    var element = document.querySelector(".splash-video");
    element.classList.add("hide-intro");
 }


// When the window is loaded....
if (typeof window !== `undefined`){
window.addEventListener("load", function() {

// Check to see if the cookie indicates a first-time visit

// 7 seconds later, hide the splashhugo
setTimeout(function(){
    document.querySelector(".splash-video").style.display = "none";
    }, 8000);
});
}