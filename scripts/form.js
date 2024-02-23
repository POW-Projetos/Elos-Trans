
const scriptURL = 'https://script.google.com/macros/s/AKfycbyIublMQ3xBNFkb5tDF2Jclc1xAFDgMvndnZbY_4cqD7-hyrPpL1R0EMHeJPLr9Qq6w/exec'
const form = document.forms['submitGoogleSheets']
let isAvailable = true

form.addEventListener('submit', e => {
  const spinner = document.getElementById('loader')
  const button = document.getElementById('verify')
  if (isAvailable) {
    
    this.isAvailable = false
    spinner.style.display = "block"
    button.style.display = "none"

    e.preventDefault()

    if (getSituation() != "false") {
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
          form.reset()
          spinner.style.display = "none"
          button.style.display = "block"
          alreadySendData()
          button.disabled = true
          button.innerHTML = "✔"
        })

        .catch(error => {
          console.error('Error!', error.message)
          alert("OPS!! Ocorreu um erro ao enviar o formulário, tente novamente")
          spinner.style.display = "none"
          button.style.display = "block"
          this.isAvailable = true
        })
    }
  }
})

function alreadySendData() {
  localStorage.setItem('isValid', "false");
}

function getSituation() {
  return localStorage.getItem('isValid');
}




