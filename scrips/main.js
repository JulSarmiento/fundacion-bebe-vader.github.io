const results = document.querySelector('.cards-container');
const form = document.querySelector("#inscription");
const filters = document.querySelectorAll('.filter');
let allDogs = [];

/**
 * Añade un perrito y lo guarda en el localstorange convertido a JSON.
 */
function addDog(name, age, sex, breed, specialCondition, size, behavior, status) {
    let newDog = new Dog(name, age, sex, breed, specialCondition, size, behavior, status);
    allDogs.push(newDog)
    results.insertAdjacentHTML('beforeend', printDogCard(newDog));

    localStorage.setItem('Cards', JSON.stringify(allDogs));
}

/**
 * Esta funcion filtra los perros segundo el parametro del status (adoptado, en adopción y en proceso de adopción.)
 */
function filterDog(status) {
    return allDogs.filter((dog) => {
        return dog.status === status 
    });
}

/**
 * Este foEach acomoda el parametro para cada evento de botón segund su ID (status)
 */
filters.forEach((filter) => {
    filter.addEventListener('click', (event) => {
        const iD = event.target.id;
        let itemToFilter;
        if(iD === 'all-dogs'){
            itemToFilter = allDogs;
        }else if(iD === 'in-adoption') {
            itemToFilter = filterDog('En adopción');
        }else if(iD === 'in-process'){
            itemToFilter = filterDog('En proceso de adopción');
        }else {
            itemToFilter = filterDog('Adoptado');
        }
        results.innerHTML = '';
        itemToFilter.forEach((dog) => {
            results.insertAdjacentHTML('beforeend', printDogCard(dog))
        })
        console.log(itemToFilter)
        console.log(`Le di click a ${iD}`)
    })
   
})

/**
 *Esta funcion imprime la carda del perro con sus respectivas propiedades. 
    */
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

/**
 * Este es el evento del boton submit del formulario y se organizan los datos recibidos de cada casilla en su respectiva varible acorde a las propiedades del obejto perrito.
 */
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

/**
 * Este evento carga el localstorage cuando la pantalla vuelve a cargar para mostrar las cards guardadas de los perritos.
 */
window.addEventListener('load', () => {
    const dataStored = localStorage.getItem('Cards');
    
    if(dataStored) {
        allDogs = JSON.parse(dataStored);
        allDogs.forEach((dog) => {
            results.insertAdjacentHTML('beforeend', printDogCard(dog))
        })
        
    }
   //results.innerHTML = localStorage.getItem('Cards');
})