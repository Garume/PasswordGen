MicroModal.init({
    openClass: 'is-open'
});

const passwordListElement = document.getElementById('passwordList')
const baseExcludeTexts = ['o', 'O', '0', 'I', 'l', '1']
document.getElementById('excludeText').value = baseExcludeTexts.join(',')

document.getElementById('generateButton').addEventListener('click', e => {
    e.preventDefault();

    const isIncludeNum = document.forms.inputs.includeNumber.checked,
        isIncludeEngLower = document.forms.inputs.includeEnglishLower.checked,
        isIncludeEngUpper = document.forms.inputs.includeEnglishUpper.checked;

    if (isIncludeNum || isIncludeEngLower || isIncludeEngUpper) {

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

        let passwordLength = document.forms.inputs.stringLength.value,
            isOutofRange = false;
        if (passwordLength === 'custom') {
            passwordLength = document.forms.inputs.customLength.value;
            if (passwordLength < 1 || passwordLength > 100) {
                isOutofRange = true;
                MicroModal.show('modal-2');
            }
        }

        let generateNumberOfTimes = document.forms.inputs.numberOfPasswords.value;
        if (generateNumberOfTimes === 'custom'){
            generateNumberOfTimes = document.forms.inputs.customnumberOfPasswordInput.value;
            if (generateNumberOfTimes < 1 || generateNumberOfTimes > 100) {
                isOutofRange = true;
                MicroModal.show('modal-2');
            }
        }
        if (!isOutofRange) {
            passwordListElement.innerHTML = '';
            for (let index = 0; index < generateNumberOfTimes; index++) {
                let passwords = '';
                for (let index = 0; index < passwordLength; index++) {
                    passwords += excludePasswordTexts[Math.floor(Math.random() * excludePasswordTexts.length)];
                }
                const li = document.createElement('li'),
                    input = document.createElement('input'),
                    copyButton = document.createElement('a');
                input.value = passwords;
                li.appendChild(input);

                copyButton.textContent = "コピーする";
                copyButton.classList.add('copyButton');

                copyButton.addEventListener('click',()=>{
                    const textarea = document.createElement('textarea');
                    textarea.textContent = passwords;

                    const body = document.querySelector('body');
                    body.appendChild(textarea);

                    textarea.select();
                    document.execCommand("copy");

                    body.removeChild(textarea);
                    MicroModal.show('modal-3');
                    document.getElementById('modal-3-content').children[0].textContent = passwords;
                })
                li.appendChild(copyButton);
                passwordListElement.appendChild(li);
            }
        }
    } else {
        MicroModal.show('modal-1');
    }
})