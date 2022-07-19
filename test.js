// Get slider items
var sliderItems = Array.from(document.querySelectorAll('.slider-container img'));
// console.log(sliderItems);

//start slider 
var currentSlide = 1;

// Next and Previous buttons
var nextbtn = document.getElementById("next");
var prevbtn = document.getElementById("prev");


// Slide Number
var slideNumber = document.querySelector(".slide-number");

// Handle events on buttons
nextbtn.onclick = nextFunction;
prevbtn.onclick =prevFunction ;



// Trigger cheker function
// checker();




function prevFunction() {
    if (prevbtn.classList.contains("disabled")) {

    }
    else {
        currentSlide--;
        checker();
    }
}



function checker() {
    slideNumber.textContent = "slide # " + (currentSlide) + "of " + sliderItems.length;
    // remove all active classes form imgs and li
    removeActiveClasses();
    // set active class on currentSlide
    sliderItems[currentSlide - 1].classList.add("active");


    // disabled the Previous buttons if the slide 1
    if (currentSlide == 1) {
        prevbtn.classList.add("disabled");
    }
    else {
        prevbtn.classList.remove("disabled");
    }

    // check if currentSlide the last
    if (currentSlide == sliderItems.length) {
        nextbtn.classList.add("disabled");
    }
    else {
        nextbtn.classList.remove("disabled");
    }
}



function removeActiveClasses() {
    sliderItems.forEach(el => el.classList.remove("active"));

    
}