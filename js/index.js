// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
const swiper = new Swiper(".lgSwiper", {
    slidesPerView: 1,
    slidesPerGroup:1,
    spaceBetween: 24,
    loop: true,
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev"
    },
    pagination: {
      el: ".swiper-pagination-featured",
      type: "fraction"
    },
    
    breakpoints:{
        767:{
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 24,
        }
    }
  });

  const fclgswiper = new Swiper(".fclgswiper",{
    slidesPerView:4,
    slidesPerGroup:4,
    spaceBetween:2,
    loop: true
    
  }); 

  const fcswiper = new Swiper(".fcswiper",{
    slidesPerView:1,
    slidesPerGroup:1,
    spaceBetween:24,
    loop: true
  }); 
  const lifeswiper = new Swiper(".lifeswiper",{
    slidesPerView:2,
    slidesPerGroup:2,
    spaceBetween:24,
    loop: true,
    navigation: {
      nextEl: ".lifeswiper-next",
      prevEl: ".lifeswiper-prev"
    },
    breakpoints:{
      992:{
        slidesPerView:3,
        slidesPerGroup:3,
      }
    }
  }); 

  const rcswiper = new Swiper(".rcswiper",{
    slidesPerView:1,
    slidesPerGroup:1,
    spaceBetween:24,
    loop: true
  }); 
