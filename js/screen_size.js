const sections = document.querySelectorAll('.section');
const margin1 = document.getElementById('margin1');
const margin2 = document.getElementById('margin2');
const margin3 = document.getElementById('margin3');

const margin5 = document.getElementById('margin5');

const arrow = document.getElementById('arrow');

window.addEventListener('load', function(){
    sections.forEach(element => {
        if (window.innerHeight < 900) {
            element.style.height = 900 + 'px';
            
        }
        else{

            element.style.height = window.innerHeight + 'px';
        }
    });
    if (window.innerHeight < 1000) {
        margin1.style.marginTop = 0 + 'px';
        margin2.style.marginTop = 0 + 'px';
        margin3.style.marginTop = 0 + 'px';
    
        margin5.style.marginTop = 0 + 'px';
        arrow.style.top = 800 + 'px';

    }
    else{
        margin1.style.marginTop = (window.innerHeight) / 8 + 'px';
        margin2.style.marginTop = (window.innerHeight) / 8 + 'px';
        margin3.style.marginTop = (window.innerHeight) / 8 + 'px';
        
        margin5.style.marginTop = (window.innerHeight) / 8 + 'px';

        arrow.style.top = window.innerHeight - 100 + 'px';
    }


})
window.addEventListener('resize', function(){
    sections.forEach(element => {
        if (window.innerHeight < 900) {
            element.style.height = 900 + 'px';
        }
        else{
            element.style.height = window.innerHeight + 'px';
        }
    });
    if (window.innerHeight < 1000) {
        margin1.style.marginTop = 0 + 'px';
        margin2.style.marginTop = 0 + 'px';
        margin3.style.marginTop = 0 + 'px';
    
        margin5.style.marginTop = 0 + 'px';
        arrow.style.top = 800 + 'px';

    }
    else{
        margin1.style.marginTop = (window.innerHeight) / 8 + 'px';
        margin2.style.marginTop = (window.innerHeight) / 8 + 'px';
        margin3.style.marginTop = (window.innerHeight) / 8 + 'px';
        
        margin5.style.marginTop = (window.innerHeight) / 8 + 'px';

        arrow.style.top = window.innerHeight - 100 + 'px';
    }
})