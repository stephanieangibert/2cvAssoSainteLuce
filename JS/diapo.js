class Slider{
    constructor(){
        this.index=0;
        this.i=0;
        this.video = null;  
        this.barre=null;    
        this.images = document.querySelectorAll(".slide");
        console.log(this.images);
        this.points=document.querySelectorAll(".point");
        console.log(this.points);
    }
    nextSlide() {
        this.images[this.index].className = 'slide';       
        this.index = (this.index + 1) % this.images.length;
        this.images[this.index].className = 'active';
       
        
      
    }
    
    play() {
        this.nextSlide();
        this.video = setInterval(this.nextSlide.bind(this), 4000);
    }
    init() {
        this.play();
        
       
    }
 
}
var slider = new Slider;
slider.init();

var nIntervId;
function changeColor() {
    nIntervId = setInterval(flashText, 1000);
  }

  function flashText() {
    var oElem = document.querySelectorAll(".point");
    console.log(oElem);
    oElem.style.color = oElem.style.color == 'red' ? 'black' : 'red';
    // oElem.style.color == 'red' ? 'blue' : 'red' is a ternary operator.
  }
