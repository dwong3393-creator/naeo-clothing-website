const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const but_tonPopup = document.querySelector('.but_tonLogin-popup');
const iconClose = document.querySelector('.icon-close');
const form = document.querySelector("form");


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

registerLink.onclick = () => {
    wrapper.classList.add('active');
};

loginLink.onclick = () => {
    wrapper.classList.remove('active');
};

but_tonPopup.onclick = () => {
    wrapper.classList.add('active-popup');
};

iconClose.onclick = () => {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
};

document.getElementById('sweetalert2').addEventListener('click', function () {
    Swal.fire({
        title: "Thank You!",
        text: "Successfull",
        icon: "success"
    });
})

document.getElementById('sweetalert3').addEventListener('click', function () {
    Swal.fire({
        title: "Thank You!",
        text: "Successfull",
        icon: "success"
    });
})


