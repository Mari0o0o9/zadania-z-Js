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
gatunek()

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


