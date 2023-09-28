"use strict";
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numericChars = '0123456789';
const specialChars = '!@#$%^&*()-=_+[]{}|;:,.<>?';
const password_input = document.getElementById('password_input');
const generation_button = document.getElementById('generation_button');
const characterlength = document.getElementById('character_value');
const slidevalue = document.getElementById('slidevalue');
const uppercasebox = document.getElementById('uppercase');
const lowercasebox = document.getElementById('lowercase');
const numberbox = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');
const bar4 = document.getElementById('bar4');
function password_generator(passwordlength = slidevalue.value) {
    let base = '';
    let password = [];
    let basearray = [];
    if (uppercasebox.checked) {
        basearray.push(uppercaseChars);
    }
    if (lowercasebox.checked) {
        basearray.push(lowercaseChars);
    }
    if (numberbox.checked) {
        basearray.push(numericChars);
    }
    if (symbols.checked) {
        basearray.push(specialChars);
    }
    for (let i = 0; i < passwordlength; i++) {
        let mix = basearray.join('').split('');
        password.push(mix[Math.floor(Math.random() * (mix.length + 1))]);
    }
    if (passwordlength > 10 && numberbox.checked && symbols.checked) {
        bar1.classList.add('hard');
        bar2.classList.add('hard');
        bar3.classList.add('hard');
        bar4.classList.add('hard');
    }
    if (passwordlength > 10 && numberbox.checked || symbols.checked) {
        bar1.classList.add('ideal');
        bar2.classList.add('ideal');
        bar3.classList.add('ideal');
    }
    if (passwordlength > 10) {
        bar1.classList.add('medium');
        bar2.classList.add('medium');
    }
    else {
        bar1.classList.add('easy');
    }
    return password.join('');
}
generation_button.addEventListener('click', () => {
    password_input.value = password_generator(slidevalue.value);
});
slidevalue.addEventListener('click', () => {
    characterlength.innerHTML = slidevalue.value;
});
