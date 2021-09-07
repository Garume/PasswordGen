const passwordListElement = document.getElementById('passwordList')
const passwordTexts = [],
    passwordLength = 6,
    generateNumberOfTimes = 3;

for (let i = 0; i < 26; i++) {
    passwordTexts.push(String.fromCharCode('a'.charCodeAt(0) + i));
    passwordTexts.push(String.fromCharCode('A'.charCodeAt(0) + i));
}
for (let index = 0; index < 10; index++) {
    passwordTexts.push(index);
}
console.log(passwordTexts);

document.getElementById('generateButton').addEventListener('click', e => {
    e.preventDefault();

    passwordListElement.innerHTML = '';
    for (let index = 0; index < generateNumberOfTimes; index++) {
        let passwords = '';
        for (let index = 0; index < passwordLength; index++) {
            passwords += passwordTexts[Math.floor(Math.random() * passwordTexts.length)];
        }
        const li = document.createElement('li'),
            input = document.createElement('input');
        input.value = passwords;
        li.appendChild(input);
        passwordListElement.appendChild(li);
    }
})