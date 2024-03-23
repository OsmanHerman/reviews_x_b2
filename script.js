const mediaQuery_1 = window.matchMedia('(max-width: 1300px)');
const mediaQuery_2 = window.matchMedia('(max-width: 650px)');

const blockTextHTML = document.querySelector('.reviews-block-text')

const nameHTML = [
    "Isaac Newton",
    "Erwin Schrodinger",
    "Richard Feynman",
    "Friedrich Nietzsche",
    "Albert Einstein"
]

const descriptionHTML = [
    "Isaac Newton: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mauris augue, fringilla convallis facilisis in, varius ut nisi. Nulla nec lectus ac lectus feugiat bibendum. Lorem ipsum dolor sit amet, consectetur.",

    "Erwin Schrodinger: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mauris augue, fringilla convallis facilisis in, varius ut nisi. Nulla nec lectus ac lectus feugiat bibendum. Lorem ipsum dolor sit amet, consectetur.",

    "Richard Feynman: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mauris augue, fringilla convallis facilisis in, varius ut nisi. Nulla nec lectus ac lectus feugiat bibendum. Lorem ipsum dolor sit amet, consectetur.",

    "Friedrich Nietzsche: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mauris augue, fringilla convallis facilisis in, varius ut nisi. Nulla nec lectus ac lectus feugiat bibendum. Lorem ipsum dolor sit amet, consectetur.",
    
    "Albert Einstein: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mauris augue, fringilla convallis facilisis in, varius ut nisi. Nulla nec lectus ac lectus feugiat bibendum. Lorem ipsum dolor sit amet, consectetur."
]

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 70,
    centeredSlides: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }/*,
    

    on: {
        slideChange: function () {
            var currentPosition = this.realIndex; // Obtiene el índice del slide actual
            blockTextHTML.querySelector('h4').textContent = nameHTML[currentPosition];
            blockTextHTML.querySelector('p').textContent = descriptionHTML[currentPosition];

            /*if (window.innerWidth <= mediaQuery_2) {
                Array.from(document.querySelectorAll('.swiper-slide img')).forEach(function (img) {
                    img.style.width = '80px';
                });
                this.slides[currentPosition].querySelector('img').style.width = '140px';
            } else {
                Array.from(document.querySelectorAll('.swiper-slide img')).forEach(function (img) {
                    img.style.width = '110px';
                });
                this.slides[currentPosition].querySelector('img').style.width = '233px';
            }
            Array.from(document.querySelectorAll('.swiper-slide img')).forEach(function (img) {
                img.style.width = '110px';
            });
          
            // Aplica un ancho diferente al slide actual
            this.slides[currentPosition].querySelector('img').style.width = '233px';
        }
    }*/
});



function handleMaxWidthChange1(mediaQuery) {
  if (mediaQuery.matches) {
        swiper.params.slidesPerView = 3;
        swiper.params.spaceBetween = 50;
        swiper.update(); //Actualiza el swiper
  } else {
        swiper.params.slidesPerView = 5;
        swiper.params.spaceBetween = 70;
        swiper.update(); //Actualiza el swiper
  }
}

function handleMaxWidthChange2(mediaQuery) {
    if (mediaQuery.matches) {
        swiper.params.spaceBetween = 30;
        swiper.update(); //Actualiza el swiper
        
    } else {
        swiper.params.spaceBetween = 50;
        swiper.update(); //Actualiza el swiper
    }
  }

  function handleSlideChange() {
    var currentPosition = swiper.realIndex; // Obtiene el índice del slide actual
    blockTextHTML.querySelector('h4').textContent = nameHTML[currentPosition];
    blockTextHTML.querySelector('p').textContent = descriptionHTML[currentPosition];
    
    Array.from(document.querySelectorAll('.swiper-slide img')).forEach(function (img) {
        if (swiper.params.spaceBetween === 30) {
            //img.style.width = '80px';

            if (window.innerWidth <= "380"){
                img.style.width = '70px';
            } else {
                img.style.width = '80px';
            }
        } else {
            img.style.width = '110px';
        }
    });
    
    // Aplica un ancho diferente al slide actual
    var currentImg = swiper.slides[currentPosition].querySelector('img');
    if (swiper.params.spaceBetween === 30) {
        //currentImg.style.width = '140px';

        if (window.innerWidth <= "380"){
            currentImg.style.width = '110px';
        } else {
            currentImg.style.width = '140px';
        }
    } else {
        currentImg.style.width = '233px';
    }
}

swiper.on('slideChange', handleSlideChange);
window.addEventListener('resize', handleSlideChange);

handleMaxWidthChange1(mediaQuery_1);
handleMaxWidthChange2(mediaQuery_2);
mediaQuery_1.addListener(handleMaxWidthChange1); //Detecta cambios en el estado de la condición
mediaQuery_2.addListener(handleMaxWidthChange2);