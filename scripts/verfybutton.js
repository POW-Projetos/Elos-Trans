
function getSituation() {

    return localStorage.getItem('isValid');

}

function verifyButton() {
    console.log("getSituation() == false",getSituation() == "false")
    if (getSituation() == "false") {
        
        const button = document.getElementById('verify')
        button.disabled = true;
        button.innerHTML = "✔";
    } 
}

verifyButton();