/******TRACK NAV SECTION */
const navLinkEls = document.querySelectorAll('.menu-links');
const sectionEls = document.querySelectorAll('.section');
const navHeaders = document.querySelector('.nav');

let currentSection = 'about';
window.addEventListener('scroll', () =>{
  sectionEls.forEach(sectionEl => {
    if (window.scrollY >= (sectionEl.offsetTop - sectionEl.clientHeight /2)){
      currentSection = sectionEl.id;
  }
});
navLinkEls.forEach(navLink =>{
  if (navLink.href.includes(currentSection)){
    document.querySelector('.active').classList.remove('active');
    navLink.classList.add('active');
  }
});
});

document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('active');
});