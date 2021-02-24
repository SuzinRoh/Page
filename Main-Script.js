
//변수
const navbtn = document.querySelector('.nav-button');

// nva btn cilck event
function handleClick() { 
   let menu = document.querySelector('.nav-items');
   let icon = document.querySelector('.image');
   let NAME = 'clicked';

   if(!navbtn.classList.contains(NAME)){
        menu.style.right = '0px';
        navbtn.classList.add('clicked');
        icon.classList.remove('smile-img');
        icon.classList.add('dizzy-img');
   } else {
        menu.style.right = '-120px';
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

//main text enent 
window.addEventListener('load', function(event) {
     document.querySelector('.main-text-area').style.opacity = '100%';
},false); 

//japanese cherecter event
const txt = document.querySelector('#txt');
const txt_2 = document.querySelector('#txt_2');

function MainClick(){
     txt.style.opacity="0%";
     txt_2.style.opacity="0%";
     setTimeout(function() {
         txt.classList.add('jp');
         txt_2.classList.add('jp_sub');
         txt.innerHTML = "こんにちは、私はノスジンと申します。<br>開発者でデザイナーです。";
         txt_2.innerHTML = "フルスタック開発者になるために努力しています。";
         txt.style.opacity="100%";
         txt_2.style.opacity="100%";
       }, 1000);
     setTimeout(function() {
         txt.style.opacity="0%";
         txt_2.style.opacity="0%";
         setTimeout(function() {
         txt.classList.remove('jp');
         txt_2.classList.remove('jp_sub');
         txt.innerHTML = "Hi,I am SUJIN ROH .<br>developer and designer";
         txt_2.innerHTML = "I'm working hard to be a full stack developer.";
         txt.style.opacity="100%";
         txt_2.style.opacity="100%";
         }, 1000);   
     },3000);
}
txt.addEventListener("click", MainClick, false);


const aboutTxtEn = document.querySelector('.about-con-txt-en');
const aboutTxtJp = document.querySelector('.about-con-txt-jp');
function handleClickAbout(){
     aboutTxtEn.style.opacity="0%";
     setTimeout(function() {
          aboutTxtEn.classList.remove('show');
          aboutTxtEn.classList.add('hide');
          aboutTxtJp.classList.remove('hide');
          aboutTxtJp.classList.add('show');
          aboutTxtJp.style.opacity="0";
          setTimeout(function() {
                aboutTxtJp.style.opacity="100%";
          }, 400);   
       }, 1000);
     
      setTimeout(function() {
          aboutTxtJp.style.opacity="0";
          setTimeout(function() {
               aboutTxtJp.classList.remove('show');
               aboutTxtJp.classList.add('hide');
               aboutTxtEn.classList.remove('hide');
               aboutTxtEn.classList.add('show');
               setTimeout(function() {
                    aboutTxtEn.style.opacity="100%";
               },400);   
         }, 1000);   
     },5000);
}
aboutTxtEn.addEventListener("click", handleClickAbout, false);

