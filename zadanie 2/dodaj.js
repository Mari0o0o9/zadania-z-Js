function gatunek() {
    var animalType = document.getElementById(`animalType`)
    var imie = document.getElementById('imie')
    var inputRasa = document.querySelectorAll('.rasa')
    var rasa = document.querySelector('#rasa')
    var send = document.getElementById('send')
    
    animalType.addEventListener(`change`, ()=> {
        inputRasa.forEach(element => {
            element.style.display = 'flex'
        });
    })

    
    send.addEventListener('click', ()=> {
        if (imie.value == '' || rasa.value == '') {
            alert('Wypełnij wszytskie pola')
        }
        else {
            saveFormData()
        }
    })

}
gatunek()


function saveFormData() {
    var imie = document.querySelector('#imie')
    var gatunek = document.querySelector('#animalType')
    var rasa = document.querySelector('#rasa')

    var formData = {
        'imie': imie.value,
        'gatunek': gatunek.value,
        'rasa': rasa.value
    }

    var jsonString = JSON.stringify(formData)

    localStorage.setItem('formData', jsonString)

    displayFormData(formData)
}

function displayFormData(formData) {
    var displayDiv = document.querySelector('#displayDiv')

    displayDiv.innerHTML =  '<div>Imie: '  
                            +'<p>' + formData.imie + '</p>'+
                            +'<p>' + formData.gatunek + '</p>'+
                            +'<p>' + formData.rasa + '</p>'+
                            '</div>'
}




