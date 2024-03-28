const like1 = document.getElementById('like1');
const like2 = document.getElementById('like2');
const like3 = document.getElementById('like3');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');


let local_clicked1 = localStorage.getItem('clicked1');
let local_clicked2 = localStorage.getItem('clicked2');
let local_clicked3 = localStorage.getItem('clicked3');
let clicked1 = false;
let clicked2 = false;
let clicked3 = false;


if (local_clicked1 == 'true') {
  img1.setAttribute('src','../images/liked.svg');
  like1.innerHTML = localStorage.getItem('like1');
  clicked1 = true;

}
if (local_clicked2 == 'true') {
  img2.setAttribute('src','../images/liked.svg');
  like2.innerHTML = localStorage.getItem('like2');
  clicked2 = true;

}
if (local_clicked3 == 'true') {
  img3.setAttribute('src','../images/liked.svg');
  like3.innerHTML = localStorage.getItem('like3');
  clicked3 = true;
}

img1.addEventListener('click',function(){
  if (!clicked1) {
    clicked1 = true;
    
    img1.setAttribute('src','../images/liked.svg');
    
    localStorage.setItem('like1',Number(like1.innerHTML) + 1);
    localStorage.removeItem('clicked1');
    
    localStorage.setItem('clicked1',true);
    
    like1.innerHTML = Number(like1.innerHTML) + 1;


  }else{
    clicked1 = false;
    
    img1.setAttribute('src','../images/like.svg');
    
    localStorage.setItem('like1',Number(like1.innerHTML) - 1);
    localStorage.removeItem('clicked1');
    localStorage.setItem('clicked1',false);

    like1.innerHTML = Number(like1.innerHTML) - 1;
  }
  localStorage.setItem('like1',like1.innerHTML);
  localStorage.setItem('like2',like2.innerHTML);
  localStorage.setItem('like3',like3.innerHTML);
})
img2.addEventListener('click',function(){
  if (!clicked2) {
    clicked2 = true;
    
    img2.setAttribute('src','../images/liked.svg');
    
    localStorage.setItem('like2',Number(like1.innerHTML) + 1);
    localStorage.removeItem('clicked2');
    
    localStorage.setItem('clicked2',true);
    
    like2.innerHTML = Number(like2.innerHTML) + 1;


  }else{
    clicked2 = false;
    
    img2.setAttribute('src','../images/like.svg');
    
    localStorage.setItem('like2',Number(like2.innerHTML) - 1);
    localStorage.removeItem('clicked2');
    localStorage.setItem('clicked2',false);

    like2.innerHTML = Number(like2.innerHTML) - 1;
  }
  localStorage.setItem('like1',like1.innerHTML);
  localStorage.setItem('like2',like2.innerHTML);
  localStorage.setItem('like3',like3.innerHTML);
})
img3.addEventListener('click',function(){
  if (!clicked3) {
    clicked3 = true;
    
    img3.setAttribute('src','../images/liked.svg');
    
    localStorage.setItem('like3',Number(like3.innerHTML) + 1);
    localStorage.removeItem('clicked3');
    
    localStorage.setItem('clicked3',true);
    
    like3.innerHTML = Number(like3.innerHTML) + 1;


  }else{
    clicked3 = false;
    
    img3.setAttribute('src','../images/like.svg');
    
    localStorage.setItem('like3',Number(like3.innerHTML) - 1);
    localStorage.removeItem('clicked3');
    localStorage.setItem('clicked3',false);

    like3.innerHTML = Number(like3.innerHTML) - 1;
  }
  localStorage.setItem('like1',like1.innerHTML);
  localStorage.setItem('like2',like2.innerHTML);
  localStorage.setItem('like3',like3.innerHTML);
})