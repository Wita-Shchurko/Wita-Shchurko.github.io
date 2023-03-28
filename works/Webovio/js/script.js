'use strict';

const ul = document.querySelector('#parent'),
      lis = ul.getElementsByTagName("li"),
      numberOfChildren = lis.length,
      overlayNav = document.querySelector('.overlay-navigation'),
      openOverlay = document.querySelector('.open-overlay'),
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
      
      const blockID = anchor.getAttribute('href').substr(1)
      
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
        overlayNav.classList.toggle('activeMenu');
        overlayNav.classList.toggle('inactiveMenu');
    })
  }