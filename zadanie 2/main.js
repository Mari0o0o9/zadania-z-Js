function gatunek() {
    var animalType = document.getElementById(`animalType`)
    animalType.addEventListener(`change`, ()=> {
    if (animalType.value === `pies`){
        document.querySelector(`#gatunekPsa`).style.display = `flex`;
    }
    if (animalType.value === `kot`){
        document.querySelector(`#gatunekKot`).style.display = `flex`;
    }
    if (animalType.value === `papuga`){
        document.querySelector(`#gatunekPapuga`).style.display = `flex`;
    }
    if (animalType.value === `jaszczurka`){
        document.querySelector(`#gatunekJaszczurka`).style.display = `flex`;
    }
    if (animalType.value === `zolw`){
        document.querySelector(`#gatunekZolw`).style.display = `flex`;
    }
})
}
gatunek();

