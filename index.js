generatedPassword = document.getElementById('generated-password');
passLen = document.getElementById('pass-len').value;
displayLen = document.getElementById('display-len');
render()

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

function render() {
    displayLen.textContent = "Length: " + passLen;
}
render()