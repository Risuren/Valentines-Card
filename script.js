const back = document.querySelector('.back');
const noBtn = document.querySelector('.no-btn');

const backRect = back.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random(50,50) * (backRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random(50,50) * (backRect.height - noBtnRect.height)) + 1;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});