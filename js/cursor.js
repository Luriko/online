// const cursor = document.getElementById('cursor');
// const path_img = '../images/_cursor.png';
// const path_img2 = '../images/stick2.png';


// // Hide default cursor
// document.body.style.cursor = 'none';

// // Custom cursor movement function
// const moveCursor = (e) => {
//     const mouseY = e.clientY + window.scrollY;
//     const mouseX = e.clientX + window.scrollX;
     
//     cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
//     if (e.target.matches('a') || e.target.matches('button')) {
//         cursor.style.backgroundImage = `url(..'${path_img2}')`;
        
//     }else{

//         cursor.style.backgroundImage = `url(..'${path_img}')`;
//     }
// }

// // Event listeners for custom cursor movement
// window.addEventListener('mousemove', moveCursor);
// window.addEventListener('scroll', moveCursor);

// // Override default pointer cursor for all links
// document.querySelectorAll('a').forEach(link => {
//     link.style.cursor = 'none'; // Hide default pointer cursor for links
//     cursor.style.backgroundImage = `url(..'${path_img2}')`;
// });
// document.querySelectorAll('button').forEach(link => {
//     link.style.cursor = 'none'; // Hide default pointer cursor for links
//     cursor.style.backgroundImage = `url(..'${path_img2}')`;

// });
