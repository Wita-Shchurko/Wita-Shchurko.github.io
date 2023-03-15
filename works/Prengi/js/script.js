//carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: true,
    items:1,
    responsive:{
      768:{
        nav:true,
        dots: true,
      }
    }
});

$('.owl-carousel2').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    navText: ["<img src='icons/left_arrow.png'>","<img src='icons/right_arrow.png'>"],
    items:1,
    dots: true,
    responsive:{
      576:{
        nav:true,
        dots: false,
      }
    }
});



//плавна прокрутка
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}



//modal

$('[data-modal=consultation]').on('click', function() {
  $('.overlay, #consultation').fadeIn();
});
$('.modal__close').on('click', function() {
  $('.overlay, #consultation').fadeOut();
});

function validateForms(form) {
  $(form).validate({
      rules: {
          name: {
              required: true,
              minlength: 2,
          },
          phone: "required",
          email: {
              required: true,
              email: true,
          },
      },
      messages: {
          name: {
              required: "Введите Ваше имя",
              minlength: jQuery.validator.format("Введите не менее {0} символов"),
          },
          phone: "Введите Ваш телефон",
          email: {
            required: "Введите Ваш email",
            email: "Неверный адрес",
          }
      }
  });
};
validateForms("#consultation-form");
validateForms("#order form");
validateForms("#consultation form");

$('input[name=phone]').mask("+38(999) 999-99-99");



// dropdown menu

$(function() {

  $('.drop-box').click (function() {
    $('#ul')
      .fadeToggle();
  });
  
  $(".drop-box").click(function(){
      $('.rotate').toggleClass("down"); 
  });
  
});



function menuFunction() {
  if($(window).width() < 576)
  {   
    $('.drop-box').fadeIn();
    $('nav#dropMenu').addClass('menu');
    $('.header__link a').addClass('marked');
    $('.header__link a').click (function() {
      $('#ul').fadeToggle();
    });
  }
  else
  {
    $('.drop-box').fadeOut();
    $('nav#dropMenu').removeClass('menu');
    $('.header__link a').removeClass('marked');
  }
}

//вызываем
menuFunction();

//ну и при ресайзе перепроверяем
$(window).resize(function() {
  menuFunction();
});
