

let openBtn        = document.querySelector('#openBtn');
let closeBtn       = document.querySelector('#closeBtn');
let skillItems     = document.querySelector('#skillItems');


closeBtn.classList = 'offbtn';
skillItems.style.display = 'none';

openBtn.addEventListener('click', () => {
         document.querySelector('#skillItems').style.display = 'block';
         closeBtn.classList = 'none';
         openBtn.classList  = 'offbtn';
});


closeBtn.addEventListener('click', () => {
        document.querySelector('#skillItems').style.display = 'none';
        closeBtn.classList = 'offbtn';
        openBtn.classList  = 'none';
});