//TO-DO

//ADD OPTIONS FOR CHAR/SPECIALCHAR

const generatedPassword = document.getElementById('generated-password');
const passLen = document.getElementById('pass-len');
const displayLen = document.getElementById('display-len');
const generateButton = document.getElementById('generate')

passLen.oninput = (() => {
    let value = passLen.value;
    displayLen.textContent = "Length: " + value;
});

// Toggles for used char
const upperChar = document.getElementById('uppercase')
const lowerChar = document.getElementById('lowercase')
const specialcharSwitch = document.getElementById('special-char')

// Func generating password string
function generatePass() {
    let str = 'ABCDEGFHIGKLMNOPQRSTUVWXYZ' //alphabet for gen
    let specialChar = '!@#$%^&*?=-' //special chars for gen
    let pass = '' // empty variable for pass

    function randomInt(max) {
        return Math.floor(Math.random() * max)
    }

    //Looping to get the password
    for(i = 0; i < passLen.value; i++) {
        strorSpecial = randomInt(3)
        if (strorSpecial == 1){ //Uppercase char (0.33)
            char = randomInt(str.length) + 1;
            pass += str.charAt(char);
        }
        else if (strorSpecial == 2) { //Lowercase char (0.33)
            char = randomInt(str.length) + 1;
            pass += str.charAt(char).toLowerCase();
        }
        else if (strorSpecial == 0) { //Special char (0.33)
            char = randomInt(specialChar.length) + 1;
            pass += specialChar.charAt(char);
        }
    }
    return pass
}

//Displaying newely generated password
function displayPass() {
    generateButton.onclick = () => {
        generatedPassword.textContent = generatePass()
    }
}
displayPass()