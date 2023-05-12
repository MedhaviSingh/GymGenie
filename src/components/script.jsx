import React from 'react'

const script = () => {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwXWFaQ9FQE1U9grnIyjpWCkqV_OpEQNcZ3N_y0oyHo9sogkbfrEPdizunybBDF3u6E/exec'
        const form = document.forms['google-sheet']

        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => alert("Thanks for Choosing our bank..! Your money is safe with us"))
                .catch(error => console.error('Error!', error.message))
        })
  
}

export default script
