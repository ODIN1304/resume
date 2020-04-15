window.addEventListener("load", callNav, false);


function callNav () {
    navBtn.addEventListener("click", function(){
        let nav = document.getElementById("nav");
        if(nav.classList == "called") {
            nav.classList.remove("called");
        } else {
            nav.classList.add("called");
        }
    });
}