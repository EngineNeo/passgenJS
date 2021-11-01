generatedPassword = document.getElementById('generated-password')
passLen = document.getElementById('pass-len')

function generatePass() {
    let str = 'ABCDEGFHIGKLMNOPQRSTUVWXYZ'
    let specialChar = '!@#$%^&*?=-'
    let char = ''

    function randomInt(max) {
        return Math.floot(Math.random() * max)
    }

    for(i=0; i < passLen; i++) {
        strorSpecial = randomInt(2)
        if (strorSpecial === 1){
            char = randomInt(str.length) + 1
            return char
        }
        else if (strorSpecial === 0) {
            char = randomInt(specialChar.length) + 1
            return char
        }
    }
}