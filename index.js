generatedPassword = document.getElementById('generated-password')
passLen = document.getElementById('pass-len')

function generatePass() {
    let str = 'ABCDEGFHIGKLMNOPQRSTUVWXYZ'
    let specialChar = '!@#$%^&*?=-'

    for(i=0; i < passLen; i++) {
        let char = Math.floor(Math.random()
                              * str.length + 1)
    }
}