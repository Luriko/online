const loader = document.getElementById('loader');
const preloder = document.getElementById("preloader");
(function() {
    document.addEventListener('DOMContentLoaded', () => {
        fadeOut(loader);
        
        setTimeout(() => {
            fadeOut(preloder);
        }, 500);
        
    });
})();

function fadeOut (el, timeout = 1000){
    el.style.opacity = 1;
    el.style.transition = `opacity ${timeout}ms`;
    el.style.opacity = 0;
  
    setTimeout(() => {
      el.style.display = 'none';
    }, timeout);
  };