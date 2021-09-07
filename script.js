MicroModal.init({
    openClass: 'is-open'
});

const passwordListElement = document.getElementById('passwordList')
const baseExcludeTexts = ['o', 'O', '0', 'I', 'l', '1']
document.getElementById('excludeText').value = baseExcludeTexts.join(',')

const passwordLength = 6,
    generateNumberOfTimes = 3;

document.getElementById('generateButton').addEventListener('click', e => {
    e.preventDefault();

    const isIncludeNum = document.forms.inputs.includeNumber.checked,
        isIncludeEngLower = document.forms.inputs.includeEnglishLower.checked,
        isIncludeEngUpper = document.forms.inputs.includeEnglishUpper.checked;

    if (isIncludeNum || isIncludeEngLower || isIncludeEngUpper) {
        passwordListElement.innerHTML = '';

        const passwordTexts = [];
        if (isIncludeEngLower) {
            for (let i = 0; i < 26; i++) {
                passwordTexts.push(String.fromCharCode('a'.charCodeAt(0) + i));
            }
        }
        if (isIncludeEngUpper) {
            for (let i = 0; i < 26; i++) {
                passwordTexts.push(String.fromCharCode('A'.charCodeAt(0) + i));
            }
        }
        if (isIncludeNum) {
            for (let index = 0; index < 10; index++) {
                passwordTexts.push(index);
            }
        }

        const excludeTexts = document.forms.inputs.excludeText.value.split(','),
            excludePasswordTexts = passwordTexts.filter(text => !(excludeTexts.includes(String(text))));

        for (let index = 0; index < generateNumberOfTimes; index++) {
            let passwords = '';
            for (let index = 0; index < passwordLength; index++) {
                passwords += excludePasswordTexts[Math.floor(Math.random() * excludePasswordTexts.length)];
            }
            const li = document.createElement('li'),
                input = document.createElement('input');
            input.value = passwords;
            li.appendChild(input);
            passwordListElement.appendChild(li);
        }
    } else {
        MicroModal.show('modal-1');
    }
})