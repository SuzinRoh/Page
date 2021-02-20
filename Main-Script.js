
//변수
const navbtn = document.querySelector('.nav-button');

// nva btn cilck event
function handleClick() { 
   let menu = document.querySelector('.nav-items');
   let icon = document.querySelector('.image');
   let NAME = 'clicked';

   if(!navbtn.classList.contains(NAME)){
        menu.style.right = '10px';
        navbtn.classList.add('clicked');
        icon.classList.remove('smile-img');
        icon.classList.add('dizzy-img');
   } else {
        menu.style.right = '-110px';
        navbtn.classList.remove('clicked');
        icon.classList.remove('dizzy-img');
        icon.classList.add('smile-img');
   }
}
navbtn.addEventListener('click' , handleClick);


//btn scrolling event
let isScrolling;
// Listen for scroll events
window.addEventListener('scroll', function ( event ) {
    navbtn.classList.remove('showBtn');
    navbtn.classList.add('hideBtn');
	// Clear our timeout throughout the scroll
	window.clearTimeout( isScrolling );
	// Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function() {
        navbtn.classList.remove('hideBtn');
        navbtn.classList.add('showBtn');
		// Run the callback
		//console.log( 'Scrolling has stopped.' );
	});

}, false);
/*var scrollStop = function (callback) {
   
}
scrollStop(function () {
    
    console.log( 'Scrolling has stopped.' );
});*/
