const passwordListElement = document.getElementById('passwordList')

document.getElementById('generateButton').addEventListener('click',e =>{
    e.preventDefault();

    passwordListElement.innerHTML = '';

    const passwordLength = 6;
    let passwords = '';
    for (let index = 0; index < passwordLength; index++) {
        passwords += Math.floor(Math.random() * 10);
    }
    const li = document.createElement('li'),
        input = document.createElement('input');
    input.value = passwords;
    li.appendChild(input);
    passwordListElement.appendChild(li);
})