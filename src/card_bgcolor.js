const card = document.querySelector('.card');
const banner = document.querySelector('.banner');
const inputUserNameBg = document.querySelector('.input_user-name');

const bgColors = ['#f57c00', 'tomato', '#bb4d00', '#7b1fa2'];

const randNum = Math.floor(Math.random() * bgColors.length);

banner.style.backgroundColor = bgColors[randNum];
// inputUserNameBg.style.opacity = '0.5';
// inputUserNameBg.style.color = 'balck';
// console.dir(inputUserNameBg.color)
