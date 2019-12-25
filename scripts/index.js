console.log("connected");

let previousSpan = null;

const navbarListener = document.getElementById("navbar");
console.log(navbarListener);
navbarListener.addEventListener("click",function(e){
	if(e.target !== e.currentTarget){
		// console.log("Target: " + e.target);
		// console.log("Current Target: " + e.currentTarget);
		e.target.classList.add("spanOnClick");
		if(previousSpan){
			previousSpan.classList.remove("spanOnClick");
		}
		previousSpan = e.target;
	}
});