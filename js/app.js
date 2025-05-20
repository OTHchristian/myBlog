const side_menu = document.getElementById('side-menu');
const side_button = document.getElementById('side-button');
const image = document.getElementById('image');
const logo = document.getElementById('logo')

image.style.transform = 'translateX(0)';
logo.style.transform = 'translateY(0)';
side_button.addEventListener('click',()=>{
    if(side_menu.style.width == '70%'){
        side_menu.style.width = '0px';
    }else{
        side_menu.style.width = '70%';
    }
});

const swiper = new Swiper('.swiper', {
    effect:'coverflow',
    grabCursor:true,
    centeredSlides:true,
    loop:true,
    slidesPerView:'auto',
    coverflowEffect:{
        depth:100,
        modifier:2.5,
        rotate:0,
        slideShadows:true,
        stretch:0,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});
