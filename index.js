const generatedPassword = document.getElementById('generated-password');
const passLen = document.getElementById('pass-len');
const displayLen = document.getElementById('display-len');

passLen.oninput = (() => {
    let value = passLen.value;
    displayLen.textContent = "Length: " + value;
});

function generatePass() {
    let str = 'ABCDEGFHIGKLMNOPQRSTUVWXYZ'
    let specialChar = '!@#$%^&*?=-'
    let char = ''
    let pass = ''

    function randomInt(max) {
        return Math.floor(Math.random() * max)
    }

    for(i = 0; i < passLen; i++) {
        strorSpecial = randomInt(2)
        if (strorSpecial == 1){
            char = randomInt(str.length) + 1;
            pass += str.charAt(char);
        }
        else if (strorSpecial == 0) {
            char = randomInt(specialChar.length) + 1;
            pass += specialChar.charAt(char);
        }
    }
    return pass
}

generateButton = document.getElementById('generate')
function displayPass() {
    generateButton.onclick = () => {
        generatedPassword.textContent = generatePass()
    }
}
displayPass()