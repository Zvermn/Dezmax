let popupBg = document.querySelector('.pop-up-bg');
let popUp = document.querySelector('.pop-up');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-form');


openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popUp.classList.add('active');
    })
});

closePopupButton.addEventListener('click', () => {
    popupBg.classList.remove('active');
    popUp.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
        popupBg.classList.remove('active');
        popUp.classList.remove('active');
    }
});



// localStorage.setItem('count', 0);
let buttonSendOrder = document.querySelectorAll('.send-order');
buttonSendOrder.forEach(buttonOrder => {
    buttonOrder.addEventListener('click', countClick);
});
function countClick() {

    if (localStorage.getItem("count") == 0) {
        let userClick = 1;
        localStorage.setItem('count', userClick);
        console.log(userClick);
    } else {
        userClick = localStorage.getItem('count') + 1;
        localStorage.setItem('count', userClick);
    };

    // userClick = userClick + 1;

    // userClick = localStorage.getItem("count");

};