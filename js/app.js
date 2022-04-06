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


let buttonSendOrder = document.querySelectorAll('.send-order');
console.log(buttonSendOrder);

buttonSendOrder.forEach(buttonOrder => {
    buttonOrder.addEventListener('click', countClick);
});

let huis;

function countClick() {


    console.log(localStorage.getItem("count"));


    if (!localStorage.getItem("count")) {
        let userClick = 1;
        localStorage.setItem('count', userClick);
        console.log(userClick);
    } else {
        userClick = Number(localStorage.getItem('count')) + 1;
        localStorage.setItem('count', userClick);
    };

    localStorage.setItem('dateLastOrder', new Date());
    console.log(localStorage.getItem('dateLastOrder'));
};



if(Number(localStorage.getItem('count')) > 5){

    huis = document.querySelectorAll('.huy');

    huis.forEach(item => {
        item.classList.add('active');
    });

    console.log(huis);

    let wrapForms = document.querySelectorAll('.wrap-form');

    wrapForms.forEach(item => {
        item.classList.add('show-hide');
    })
}

dateLastOrder = new Date();