let manu_bar = document.getElementById('btn') 
let nav = document.querySelector('nav');

// nav bar function 

function openmanu(){
  nav.classList.toggle('open');
  if(nav.classList=='open'){
  manu_bar.childNodes[1].style.display='none' 
  manu_bar.childNodes[1].style.transfrom='roate(deg90)' 
  manu_bar.childNodes[3].style.display='inline-block'
  }
  else{
      manu_bar.childNodes[1].style.display='inline-block' 
      manu_bar.childNodes[3].style.display='none'
  }
}
 // apply functon 
manu_bar.addEventListener('click',openmanu);
nav.childNodes[1].childNodes[1].childNodes[0].addEventListener("click",openmanu);
nav.childNodes[1].childNodes[3].childNodes[0].addEventListener("click",openmanu);
nav.childNodes[1].childNodes[5].childNodes[0].addEventListener("click",openmanu);
nav.childNodes[1].childNodes[7].childNodes[0].addEventListener("click",openmanu);


//====================slider ========================
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const sr = ScrollReveal({
    origin:'top',
    distance:'80px',
    duration:2500,
    delay:400,
    //reset:true
  })
  sr.reveal(`.home-text`);
  sr.reveal(`.homeh3`,{delay:500});
  sr.reveal(`.video`,{ delay:800,origin:'bottom'});
  sr.reveal(`.services-imgsection`,{ delay:800,origin:'bottom'});
  sr.reveal(`.services-text`,{ delay:400,origin:'top'});
  sr.reveal(`.from-section`,{ delay:400,origin:'left'});
  sr.reveal(`.contact-option`,{ delay:400,origin:'right'});
  sr.reveal(`.beautician-imgsection`,{ delay:600,origin:'top'});
  sr.reveal(`.beautician-text`,{ delay:400,origin:'top'});


// ========================footer=================
let icon = document.querySelectorAll(".fa-chevron-down");
let ul = document.querySelectorAll(".ul");
console.log(ul);
for(let i=0;i<icon.length;i++){
    icon[i].addEventListener('click',function(){
        if( ul[i].style.display=="block"){
            ul[i].style.display="none";
            icon[i].style.transform='rotate(0deg)';   
        }
        else{
            ul[i].style.display="block";
            icon[i].style.transform='rotate(-180deg)';
        }
})
}