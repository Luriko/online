const block2 = document.getElementById('block2');
block2.style.transition = 'background-position 0.5s ease';

const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2');
const s3 = document.getElementById('s3');

const image1 = '../images/happy-couple-gamers-with-controllers-vr-headsets-isolated-dark-background.png';
const image2 = '../images/block2.png';
const image3 = '../images/happy-couple-gamers-with-controllers-vr-headsets-isolated-dark-backgroundsolo.png';

let s1box = false;
let s2box = true;
let s3box = false;  

function autoSlider() {

  if (s1.checked == false && s2.checked == true && s3.checked == false) {
    s1.checked = false;
    s2.checked = false;
    s3.checked = true;

    s1box = false;
    s2box = false;
    s3box = true;

    block2.style.backgroundPosition = '0% 0%';
    setTimeout(() => {
      block2.style.backgroundImage = `url(${image3})`;
      block2.style.backgroundPosition = 'center';
    }, 500);
  }
  else if(s1.checked == false && s2.checked == false && s3.checked == true){
    s1.checked = true;
    s2.checked = false;
    s3.checked = false;

    s1box = true;
    s2box = false;
    s3box = false;

    block2.style.backgroundPosition = '0% 0%';
    setTimeout(() => {
      block2.style.backgroundImage = `url(${image1})`;
      block2.style.backgroundPosition = 'center';
    }, 500);
  }
  else if (s1.checked == true && s2.checked == false && s3.checked == false){
    s1.checked = false;
    s2.checked = true;
    s3.checked = false;

    s1box = false;
    s2box = true;
    s3box = false;

    block2.style.backgroundPosition = '0% 0%';
    setTimeout(() => {
      block2.style.backgroundImage = `url(${image2})`;
      block2.style.backgroundPosition = 'center';
    }, 500);
  }
}
let autoclick = setInterval(autoSlider,3000);



let s = [s1, s2, s3];

s.forEach(element => {
  element.addEventListener('click', function(e){
    clearInterval(autoclick);

    if (e.target.id == 's1' && s1box == false) {
        s1box = true;
        s2box = false;
        s3box = false;

      block2.style.backgroundPosition = '0% 0%';
      setTimeout(() => {
        block2.style.backgroundImage = `url(${image1})`;
        block2.style.backgroundPosition = 'center';
      }, 500);
      clearInterval(autoclick);
    } else if (e.target.id == 's2'  && s2box == false) {
        s1box = false;
        s2box = true;
        s3box = false;
      block2.style.backgroundPosition = '0% 0%';
      setTimeout(() => {
        block2.style.backgroundImage = `url(${image2})`;
        block2.style.backgroundPosition = 'center';
      }, 500);
      clearInterval(autoclick);

    } else if (e.target.
      id == 's3' && s3box == false) {
        s1box = false;
        s2box = false;
        s3box = true;
      block2.style.backgroundPosition = '0% 0%';
      setTimeout(() => {
        block2.style.backgroundImage = `url(${image3})`;
        block2.style.backgroundPosition = 'center';
      }, 500);
      clearInterval(autoclick);

    }
  });
});
