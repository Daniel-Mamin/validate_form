const form = document.querySelector('.form');
const email = document.querySelector('[name="email"]');
const password = document.querySelector('[name="password"]');
const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

const removeClassElems = () => Array.from(form.elements).forEach(elem => elem.classList.remove('error'));

const checkField = (elem) => {
    if (elem.name === 'fname' || elem.name === 'lname' || 
        elem.name === 'tname' || elem.name === 'password' || 
        elem.name === 'verification_password') {
        if (elem.value.length < 5) {
            elem.classList.add('error');
        }
    }

    if ( (elem.name === 'verification_password' && elem.value !== password.value) ||
        (elem.name === 'verification_email' && elem.value !== email.value)) {
            elem.classList.add('error');
        }

    if (elem.name === 'email' || elem.name === 'verification_email') {
        if  (!regEmail.test(elem.value)) 
            elem.classList.add('error');
    }
};

const sendData = ({fname, lname, tname, email, password}) => {
    
    console.log(
        `
        Ваше имя - ${fname.value}
        Ваша фамилия - ${lname.value}
        Ваше отчество - ${tname.value}
        Ваш Email - ${email.value}
        Ваш пароль - ${password.value}
        `
    );
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let flag = false;

    removeClassElems();

    for (const elem of form.elements) {
        if (elem.tagName !== 'BUTTON') {
            checkField(elem)
        }
    }

    for (const elem of form.elements) {
        if (!elem.classList.contains('error')) {
            flag = true;
        } else {
            flag = false;
            break;
        }
    }

    if (flag) sendData(form.elements);
});