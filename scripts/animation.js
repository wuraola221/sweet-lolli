document.addEventListener('DOMContentLoaded', function () {
 const section2 = document.querySelector('.section-2');

 function isInViewport(element) {
     const rect = element.getBoundingClientRect();
     return (
         rect.top >= 0 &&
         rect.left >= 0 &&
         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
     );
 }

 function onScroll() {
     if (isInViewport(section2)) {
         section2.classList.add('animate');
         window.removeEventListener('scroll', onScroll);
     }
 }

 window.addEventListener('scroll', onScroll);
});