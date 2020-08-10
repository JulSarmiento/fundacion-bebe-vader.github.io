let allDogs = [];
let aviableDogs = [];
let inAdoptionProcessDogs = [];
let adopetdDogs = [];
const results = document.querySelector('.cards-container');
const form = document.querySelector("#inscription");

class Dog {
    /**
     * 
     * @param {*} name string
     * @param {*} age number from a select
     * @param {*} sex string from a select
     * @param {*} breed string from a select 
     * @param {*} specialCondition string form a select
     * @param {*} size string from a select
     * @param {*} behavior string from a select
     * @param {*} status string from a select 
     */
    constructor(name, age, sex, breed, specialCondition, size, behavior, status){
        this.name = name
        this.age = age 
        this.sex = sex
        this.breed = breed
        this.specialCondition = specialCondition
        this.size = size
        this.behavior = behavior
        this.status = status
    }

}

function addDog(name, age, sex, breed, specialCondition, size, behavior, status) {
    let newDog = new Dog(name, age, sex, breed, specialCondition, size, behavior, status);
    allDogs.push(newDog)
    results.insertAdjacentHTML = printDogCard(newDog);
}

function addAviableDog() {
        
}

function addAdoptionInProcess() {
    
}

function addAdoptedDog() {
   
}

function printDogCard(dog) {
    return `        
        <div class="card">
            <img class="card-picture" src="assets/images/perro1.jpeg" alt="foto del perro 1">
            <aside class="card-information">
                <h3 class="card-information-name">Nombre: <span> ${dog.name}</span> </h3>
                <p class="card-information-text">Edad: <span>${dog.age}</span> </p>
                <p class="card-information-text">Sexo:  <span>${dog.sex}</span> </p>
                <p class="card-information-text">Raza: <span>${dog.breed}</span>  </p>
                <p class="card-information-text">Condiciones especiales: <span>${dog.specialCondition}</span>  </p>
                <p class="card-information-text">Tamaño:  <span>${dog.size}</span></p>
                <p class="card-information-text">Temperamento:  <span>${dog.behavior}</span> </p>
                <p class="card-information-text">Estado: <span>${dog.status}</span></p>
            </aside>
        </div>`
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);

    const name = data.get('name');
    const age = data.get('age');
    const sex = data.get('sex');
    const breed = data.get('breed');
    const specialCondition =  data.get('special');
    const size = data.get('size');
    const behavior = data.get('personality');
    const status = data.get('status'); 

    addDog(name, age, sex, breed, specialCondition, size, behavior, status);



})
