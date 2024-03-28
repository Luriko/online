const radius = 50; // Define the radius for the hover effect

document.querySelectorAll('.comment p').forEach((comment) => {
    const textContent = comment.textContent.trim();
    comment.textContent = '';

    textContent.split('').forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.classList.add('hidden');

        comment.appendChild(span);

        span.addEventListener('mouseover', () => {
            span.classList.remove('hidden');
        });


    });

    function checkVisibility() {
        const rect = comment.getBoundingClientRect();

        if (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        ) {
            comment.querySelectorAll('span').forEach((span, index) => {
                setTimeout(() => {
                    span.classList.remove('hidden');
                    span.classList.add('neonize');
                }, index * 250);
            });

            window.removeEventListener('scroll', checkVisibility);
        }
    }

    window.addEventListener('scroll', checkVisibility);
    window.dispatchEvent(new Event('scroll'));

    comment.addEventListener('mousemove', (e) => {
        const { top, left } = comment.getBoundingClientRect();

        comment.querySelectorAll('span').forEach(span => {
            const rect = span.getBoundingClientRect();
            const spanCenterX = rect.left - left + rect.width / 2;
            const spanCenterY = rect.top - top + rect.height / 2;

            const dx = e.clientX - spanCenterX;
            const dy = e.clientY - spanCenterY;

            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < radius) {
                span.classList.remove('hidden');
            }
        });
    });
});