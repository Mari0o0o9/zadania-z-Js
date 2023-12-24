function gatunek() {
    var animalType = document.getElementById(`animalType`)
    var send = document.getElementById('send')

    sendData(send)
    
    animalType.addEventListener(`change`, ()=> {
        var selectedValue = animalType.value
        var dependencyArray = getDependencyArray(selectedValue)

        hideAllSelects()

        if (dependencyArray.length > 0) {
            createSection(dependencyArray);
        }
    })
}

function createSection(optionsArray) {
    var section = document.createElement('select')
    section.setAttribute('id', 'gatunek')

    var label = document.createElement('label')
    
    for (let index = 0; index < optionsArray.length; index++) {
        var optionsElement = document.createElement('option')
        optionsElement.value = optionsArray[index]
        optionsElement.text = optionsArray[index]
        section.appendChild(optionsElement)
    }

    var article = document.querySelector('#select-container')

    article.appendChild(label).innerHTML = 'Gatunek: <br>'
    article.appendChild(section)
}

function hideAllSelects() {
    var selects = document.querySelectorAll('#select-container select')
    var label = document.querySelectorAll('#select-container label')

    selects.forEach((select)=> {
        select.remove()   
    })

    label.forEach((select)=> {
        select.remove()   
    })
}

function getDependencyArray(animalType) {
    var dependencyMap = {
        'pies': ['Owczarek niemiecki', 'Beagle', 'Golden Retriever'],
        'kot': ['Pers', 'Maine Coon', 'Szkocki Fold'],
        'papuga': ['Amazonka żółtogłowa', 'Kakadu różowy', 'Agapornis'],
        'jaszczurka': ['Legwan zielony', 'Krótkoogonowy agama', 'Szklarniak'],
        'zolw': ['Żółw grecki', 'Żółw skryty', 'Żółw wodny czerwonolicy']
    };

    return dependencyMap[animalType] || []
}
gatunek()


function sendData(button) {
    var xhr = new XMLHttpRequest()

    var imie = document.querySelector('#imie').value
    var rodzaj = document.querySelector('#animalType').value
    var gatunek = document.querySelector('#gatunek')
    
    button.addEventListener("click", ()=> {
        let formData = new FormData(document.getElementById('myForm'))
        
        xhr.onreadystatechange = ()=> {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let res = JSON.parse(xhr.responseText)
                let text = ''

                console.log(imie)
                console.log(rodzaj);
                console.log(gatunek);
            }
        }

        xhr.open("POST", 'baza.json', true)
        xhr.send(formData)
    })
}


