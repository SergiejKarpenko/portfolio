const hamburger = document.querySelector('.hamburger');
    menu = document.querySelector('.menu');
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active')
});
closeElem.addEventListener('click', () => {
    menu.classList.remove('active')
});

const ratings = document.querySelectorAll('.rating'),
      lines = document.querySelectorAll('.skill__interest_item-scale_off')

ratings.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});


