
function getSituation() {

    return localStorage.getItem('isValid');

}

function verifyButton() {
    
    if (getSituation() == "false") {
        const button = document.getElementById('verify')
        button.disabled = true;
        button.innerHTML = "✔";
    } 
}

verifyButton();