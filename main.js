// Get slider items
var sliderItems = Array.from(document.querySelectorAll('.slider-container img'));
// console.log(sliderItems);

//start slider 
var currentSlide = 1;

// Slide Number
var slideNumber = document.querySelector(".slide-number");

// Next and Previous buttons
var nextbtn = document.getElementById("next");
var prevbtn = document.getElementById("prev");


// Handle events on buttons
nextbtn.onclick = nextFunction;
prevbtn.onclick =prevFunction ;


// Create main UL element
var paginationUl = document.createElement("ul");
paginationUl.setAttribute("id", "pagination-ul")


// Add LIs to UL
for (var i = 1; i <= sliderItems.length; i++) {

    var paginationItem = document.createElement("li");
    paginationItem.setAttribute("data-index", i);
    paginationItem.appendChild(document.createTextNode(i));
    paginationUl.appendChild(paginationItem);
}

// Add the list of items to indicaters
 document.getElementById("indicaters").appendChild(paginationUl);



// Get the ULINdicaters
var ulIndicaters =document.getElementById("pagination-ul");

var paginationCreatesUL= Array.from(document.querySelectorAll("#pagination-ul li"));

// change between indicaters
for(var i=0; i<paginationCreatesUL.length;i++){
    paginationCreatesUL[i].onclick=function(){
        currentSlide=parseInt(this.getAttribute("data-index"));
checker();
        
    }
}
// Trigger cheker function
checker();



function removeActiveClasses() {
    sliderItems.forEach(el => el.classList.remove("active"));

    paginationCreatesUL.forEach(function (bu){
bu.classList.remove("active");
    })
}

// Functions of events
function nextFunction() {

    if (nextbtn.classList.contains("disabled")) {

    }
    else {
        currentSlide++;
        checker();
    }
}

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

    // set active class to an aitem in ULINdicaters
    ulIndicaters.children[currentSlide - 1].classList.add("active");

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