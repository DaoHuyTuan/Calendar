const Slide = function contructors() {
    let currentPosition = 0;
    const month_main = document.getElementById("month_main");
    const preButton = document.getElementById("backBtn");
    const nextButton = document.getElementById("nextBtn");
    const backSlide = function slideBack() {
        currentPosition += 400;
        month_main.style.transform = "translateX(" + currentPosition + "px)";
    }
    const nextSlide = function slideNext() {
        currentPosition += -400;
        month_main.style.transform = "translateX(" + currentPosition+ "px)";
    }
    const createClone = function createCloneDOM() {
        //the left clone
        const firstClone = document.createElement("DIV");
        firstClone.classList = "titleMonth__text";
        const spanFirstClone = document.createElement("SPAN");
        spanFirstClone.textContent = "December 2019";
        firstClone.appendChild(spanFirstClone)
        //the last clone
        const lastCLone = document.createElement("DIV");
        lastCLone.classList = "titleMonth__text";
        const spanLastClone = document.createElement("SPAN")
        spanLastClone.textContent = "January 2019";
        lastCLone.appendChild(spanLastClone)
        
        month_main.insertBefore(firstClone,month_main.childNodes[0])
        month_main.appendChild(lastCLone)
    }
    this.addEventsListeners =  function addEventForButton() {
        preButton.addEventListener("click",backSlide,false);
        nextButton.addEventListener("click",nextSlide,false);
        createClone();
    }
}
Slide.prototype.init = function initial() {
    this.addEventsListeners();
}
const myslide = new Slide();
console.log(myslide);
myslide.init();

