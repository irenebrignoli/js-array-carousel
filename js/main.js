//imposto il carousel inserendo gli elementi div ocn array

const imgCarousel = [
  'img/1.webp',
  'img/2.webp',
  'img/3.webp',
  'img/4.webp',
  'img/5.webp'
];

const imgListDom = document.querySelector('.img-list');

let sliderContent = ''; //creo un contenuto per la mia lista di img

for(let i = 0; i < imgCarousel.length; i++){

  const newImgBox = `<div class="img-box">
                  <img src="${imgCarousel[i]}" class="image" alt="image-1">
                  </div>`;

  sliderContent += newImgBox; //il cotnenuto dento img-list è uguale al nuovo elemento div

}

imgListDom.innerHTML = sliderContent;

const imgsBoxDom = document.getElementsByClassName('img-box');

//attiviamo le img nel carousel

let imageOn = 0; //creo una variabile per andare a modificare lo stato attivo dell img
imgsBoxDom [imageOn].classList.add('show'); //se è in ON gli do la classe show

const prevDom = document.querySelector('#prev-up'); //collego i pulsanti al dom
const nextDom = document.querySelector('#next-down');

//creo l'evento click per far girare le img

nextDom.addEventListener('click',

  function(){

    if (imageOn < imgsBoxDom.length - 1 ){ //se il valore di imagOn è minore della lunghezza totale raggiunta

      imgsBoxDom [imageOn].classList.remove('show'); //nascondi img
      
      imageOn++;

      imgsBoxDom [imageOn].classList.add('show'); //mostra prossima img

      prevDom.classList.remove('hide'); //mostra pulsante per tornare indietro

      if (imageOn == imgsBoxDom.length - 1){ //se il valore di imagOn è uguale alla lunghezza totale della lista 
        nextDom.classList.add('hide'); //nascondi pulsante next
      }

    }

  }

);

prevDom.addEventListener('click',

  function(){

    if(imageOn > 0){

      imgsBoxDom [imageOn].classList.remove('show');

      imageOn--;

      imgsBoxDom [imageOn].classList.add('show');

      nextDom.classList.remove('hide');

      if (imageOn == 0){
        prevDom.classList.add('hide');
      }
    }
  }


)