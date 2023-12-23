function gatunek() {
    var animalType = document.getElementById(`animalType`)
    var send = document.getElementById('send')

    animalType.addEventListener(`change`, ()=> {
        var selectedValue = animalType.value
        var dependencyArray = getDependencyArray(selectedValue)

        hideAllSelects()

        if (dependencyArray.length > 0) {
            createSection(dependencyArray);
        }
    })
    sendData(send)
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
    var url = 'index.html'

    var rodzaj = document.querySelector('#animalType').value
    var gatunek = document.querySelector('#gatunek')
    
    button.addEventListener("click", ()=> {
        var formData = new FormData(document.getElementById('myForm'))

        xhr.open("POST", url, true)
        xhr.onreadystatechange = ()=> {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(rodzaj)
                console.log(gatunek.value)
            }
        }
        xhr.send(formData)
    })
}


