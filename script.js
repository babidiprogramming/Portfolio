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


/*-------------Dynamic Text--------------*/
const dynamicText = document.querySelector(".section_text_p2");
const words = ["🎨Design is not just what it looks like and feels like. Design is how it works.",
  "🧠By failing to prepare, you are preparing to fail."];
let wordIndex = 0;
let charIndex = 1;
let isDeleting = false;
const typeEffect = () =>{
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  dynamicText.textContent = currentChar;

  if(!isDeleting && charIndex < currentWord.length){
    charIndex++;
    setTimeout(typeEffect, 30);
  }else if(isDeleting && charIndex > 0){
    charIndex--;
    setTimeout(typeEffect, 30);
  }else{
    isDeleting = !isDeleting;
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, 500);
  }

}
typeEffect();