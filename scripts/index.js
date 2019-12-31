// console.log("connected");


// Initializing AOS. This makes it act like an event listener listening for the scroll position on 
// which you have defined the effects. Here we are defining the base settings for each of the 
// properties defined in it

AOS.init();
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1200, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});



//====================================
// Variables
//====================================

// Keep track of previously clicked
let previousSpan = null;


//====================================
// Event Listeners
//====================================


// Event listener on the navbar to see if it has scrolled a certain amount ; if so change
// the background color

/*
window.onscroll = () =>{
	const nav = document.getElementById("navbar");
	if(this.scrollY <=400)
		nav.classList.remove('scroll');
	else
		nav.classList.add('scroll');
};
*/

// Setting up event listener on the navbar
const navbarListener = document.getElementById("navbar");
// console.log(navbarListener);
navbarListener.addEventListener("click",function(e){
	// Activated only if span element is clicked
	if(e.target !== e.currentTarget){

		/*

		Used to create effect when the navbar spans are clicked
		
		*/

		// Add class to current selection
		e.target.classList.add("spanOnClick");
		if(previousSpan && e.target!==previousSpan){
			// Removes class from previous selection
			previousSpan.classList.remove("spanOnClick");
		}

		// Store previous selection
		previousSpan = e.target;


		// Code to jump to different sections of the page on clicking the span
		window.location = '#'+e.target.id+'Section';
	}
});