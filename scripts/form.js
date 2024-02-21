
const scriptURL = 'https://script.google.com/macros/s/AKfycbyIublMQ3xBNFkb5tDF2Jclc1xAFDgMvndnZbY_4cqD7-hyrPpL1R0EMHeJPLr9Qq6w/exec'
const form = document.forms['submitGoogleSheets']
form.addEventListener('submit', e => {
  e.preventDefault()
  if (getSituation() != "false") {
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        form.reset()
        alreadySendData()
        const button = document.getElementById('verify')
        button.disabled = true;
        button.innerHTML = "✔";
      })
      .catch(error => {
        console.error('Error!', error.message)
        alert("OPS!! Ocorreu um erro ao enviar o formulário, tente novamente")
      })
  }
})

function alreadySendData() {
  localStorage.setItem('isValid', "false");
}

function getSituation() {
  return localStorage.getItem('isValid');
}




