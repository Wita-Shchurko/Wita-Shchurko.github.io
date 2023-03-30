'use strict';

const ul = document.querySelector('#parent'),
      lis = ul.getElementsByTagName("li"),
      numberOfChildren = lis.length,
      overlayNav = document.querySelector('.overlay-navigation'),
      openOverlay = document.querySelector('.open-overlay'),
      openPopup = document.querySelectorAll('.popup-opener'),
      popupButton = document.querySelector('.popup__button'),
      form = document.querySelector('.form'),
      thanks = document.querySelector('.thanks'),
      popupClose = document.querySelectorAll('.popup__close'),
      anchors = document.querySelectorAll('a[href*="#"]');

openOverlay.addEventListener('click', () => {
    overlayNav.classList.toggle('activeMenu');
    overlayNav.classList.toggle('inactiveMenu');
});


for (let i = 0; i < numberOfChildren; i++) {
    const li = lis[i];
    const marginRight = 80 - (i * (80 / (numberOfChildren - 1)));
    li.style.marginRight = `${marginRight}px`;
}

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href').substring(1)
      
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
        overlayNav.classList.toggle('activeMenu');
        overlayNav.classList.toggle('inactiveMenu');
    })
}

const fadeIn = (el, timeout, display) => {
    el.style.opacity = 0;
    el.style.display = display || 'block';
    el.style.transition = `opacity ${timeout}ms`;
    setTimeout(() => {
      el.style.opacity = 1;
    }, 10);
  };

const fadeOut = (el, timeout) => {
    el.style.opacity = 1;
    el.style.transition = `opacity ${timeout}ms`;
    el.style.opacity = 0;

    setTimeout(() => {
        el.style.display = 'none';
    }, timeout);
};

for (let link of openPopup) {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    
        fadeIn(form, 500, 'block');
    })
}
    

for (let link of popupClose) {
    link.addEventListener('click', () => {
        fadeOut(form, 500, 'none');
        fadeOut(thanks, 500, 'none');
    })
}

popupButton.addEventListener('click', (e) => {
    e.preventDefault();

    fadeOut(form, 500, 'none');
    fadeIn(thanks, 500, 'block');
    setTimeout(() => {
        thanks.style.display = `none`;
    }, '5000')
})





