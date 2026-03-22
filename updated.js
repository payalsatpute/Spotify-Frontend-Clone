const slide = document.querySelector('.Slide-bar');

// create humbergun button
let humbergun = document.createElement('button');
humbergun.id = "humbergun_id"; 
humbergun.className = "menu-btn1";
humbergun.innerHTML = "&#9776;";


// creating cross btn
let closebtn = document.createElement('button');
closebtn.id = "closebtn_id";
closebtn.className = "menu-btn2";
closebtn.innerHTML = "&#10006";

// document.body.insertBefore(humbergun, document.body.firstChild);
//or
const body = document.querySelector('body');
body.insertBefore(humbergun, body.firstChild);  // -> we can write above line through this way also

slide.insertBefore(closebtn, slide.firstChild);

// add event on humbergun button
humbergun.addEventListener("click", ()=>{
slide.classList.add("open");
humbergun.style.display = "none";
closebtn.style.display = "inline-block";
});

closebtn.addEventListener("click", ()=>{
slide.classList.remove("open");
closebtn.style.display = "none";
humbergun.style.display = "inline-block";
});


function handleResize() {
    if (window.innerWidth > 760) {

        // desktop: show slide, hide buttons
        slide.classList.remove("open");
        humbergun.style.display = "none";
        closebtn.style.display = "none";
    } else {
        // mobile: slide hidden by default
        humbergun.style.display = "inline-block";
        closebtn.style.display = "none";
    }
}


//resize is the event occure only when screen resizing and used only when something want to resize
window.addEventListener("resize", handleResize)

// initialize on load
handleResize();



let space = document.querySelector('.space');
