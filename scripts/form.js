const scriptURL = 'https://script.google.com/macros/s/AKfycbyLNX1WSXXnuumMIgHKsxXvrjR2lTjdTlN0S5msax7sdjg-lmGFK1h1Dgi_Dl0sLJMgCw/exec'
      const form = document.forms['submitGoogleSheets']
    
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => console.log('Success!', response))
          .catch(error => console.error('Error!', error.message))
      })