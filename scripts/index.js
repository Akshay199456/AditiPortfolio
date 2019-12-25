// console.log("connected");

//====================================
// Variables
//====================================

// Keep track of previously clicked
let previousSpan = null;


//====================================
// Event Listeners
//====================================

// Setting up event listener on the navbar

const navbarListener = document.getElementById("navbar");
console.log(navbarListener);
navbarListener.addEventListener("click",function(e){
	// Activated only if span element is clicked
	if(e.target !== e.currentTarget){

		// Add class to current selection
		e.target.classList.add("spanOnClick");
		if(previousSpan && e.target!==previousSpan){
			// Removes class from previous selection
			previousSpan.classList.remove("spanOnClick");
		}

		// Store previous selection
		previousSpan = e.target;
	}
});