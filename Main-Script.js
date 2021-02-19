//<i class="far fa-dizzy"></i> 

function handleClick() { 
   let btn = document.querySelector('.nav-button');
   let menu = document.querySelector('.nav-items');
   var NAME = 'clicked';
  
   if(!btn.classList.contains(NAME)){
        menu.style.right = '0';
        btn.style.right = '0';
        btn.style.color = 'rgb(94, 66, 255)';
        btn.classList.add('clicked');
        btn.innerHTML = '<span><i class="far fa-dizzy fa-lg"></i></span>';
   } else{
        menu.style.right = '-90px';
        btn.style.color = 'black';
        btn.style.right = '-90px';
        btn.classList.remove('clicked');
        btn.innerHTML = '<span ><i class="far fa-smile fa-lg"></i></span>';
   }
}

document.addEventListener('click' , handleClick);