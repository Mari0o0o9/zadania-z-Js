var animalType = document.getElementById(`animalType`)
animalType.addEventListener(`change`, ()=> {
    if (animalType.value === `pies`){
        document.querySelector(`#gatunekPsa`).style.display = `flex`;
    }

})