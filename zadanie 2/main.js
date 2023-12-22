function gatunek() {
    var animalType = document.getElementById(`animalType`)
    animalType.addEventListener(`change`, ()=> {
        var selectedValue = animalType.value
        var dependencyArray = getDependencyArray(selectedValue)

        hideAllSelects()

        if (animalType.value === `pies`){
            createSection(dependencyArray)
        }
        if (animalType.value === `kot`){
            createSection(dependencyArray)
        }
        if (animalType.value === `papuga`){
            createSection(dependencyArray)
        }
        if (animalType.value === `jaszczurka`){
            createSection(dependencyArray)
        }
        if (animalType.value === `zolw`){
            createSection(dependencyArray)
        }
    })
}

function createSection(optionsArray) {
    var section = document.createElement('select');

    for (let index = 0; index < optionsArray.length; index++) {
        var optionsElement = document.createElement('option')
        optionsElement.value = optionsArray[index]
        optionsElement.text = optionsArray[index]
        section.appendChild(optionsElement)
    }

    var article = document.querySelector('#select-container')
    article.appendChild(section);
}

function hideAllSelects() {
    var selects = document.querySelectorAll('#select-container select');
    selects.forEach(function (select) {
        select.remove()   
    });
}

function getDependencyArray(animalType) {
    var dependencyMap = {
        'kot': ['cat1', 'cat2', 'cat3'],
        'pies': ['dog1', 'dog2', 'dog3'],
        'papuga': ['papuga1', 'papuga2', 'papuga3'],
        'jaszczurka': ['lizard1', 'lizard2', 'lizard3'],
        'zolw': ['turtle1', 'turtle2', 'turtle3'],
    };

    return dependencyMap[animalType] || [];
}

gatunek();

