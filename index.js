//TO-DO

//COPY TO CLIPBOARD BUTTON
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

upperCheck = true,
lowerCheck = false,
specialCheck = false,

upperChar.oninput = (() => {
    upperCheck = upperChar.checked
});

lowerChar.oninput = (() => {
    lowerCheck = lowerChar.checked
});

specialcharSwitch.oninput = (() => {
    specialCheck = specialcharSwitch.checked
});

// Func generating password string
function generatePass() {
    let str = 'ABCDEGFHIGKLMNOPQRSTUVWXYZ' //alphabet for gen
    let specialChar = '!@#$%^&*?=-' //special chars for gen
    let pass = '' // empty variable for pass

    function randomInt(max) {
        return Math.floor(Math.random() * max)
    }

    //Looping to get the password
    let i = 0
    while(i < passLen.value) {
        strorSpecial = randomInt(3)
        if (strorSpecial == 1 && upperCheck != false){ //Uppercase char (0.33)
            char = randomInt(str.length) + 1;
            pass += str.charAt(char);
            i++;
        }
        else if (strorSpecial == 2 && lowerCheck != false) { //Lowercase char (0.33)
            char = randomInt(str.length) + 1;
            pass += str.charAt(char).toLowerCase();
            i++;
        }
        else if (strorSpecial == 0 && specialCheck != false) { //Special char (0.33)
            char = randomInt(specialChar.length) + 1;
            pass += specialChar.charAt(char);
            i++;
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