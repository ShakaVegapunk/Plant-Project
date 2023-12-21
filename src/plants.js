const plantsDiv = document.querySelector('.plants');

export const plants = {
    'Aloe Vera': {
        name: 'Aloe Vera',
        image: '',
        description: 'Aloe vera is a succulent plant species of the genus Aloe. An evergreen perennial, it originates from the Arabian Peninsula, but grows wild in tropical, semi-tropical, and arid climates around the world. It is cultivated for agricultural and medicinal uses.',
        hydrate: 'Once a month',
        color: 'Blue'
    },
    'Snake Plant': {
        name: 'Snake Plant',
        image: '',
        description: 'Sansevieria trifasciata is a species of flowering plant in the family Asparagaceae, native to tropical West Africa from Nigeria east to the Congo. It is most commonly known as the snake plant, Saint George\'s sword, mother-in-law\'s tongue, and viper\'s bowstring hemp, among other names.',
        hydrate: 'Once a month',
        color: 'Red'
       
    },
    'Monstera Deliciosa': {
        name: 'Monstera Deliciosa',
        image: '',
        description: 'Monstera deliciosa, the ceriman, is a species of flowering plant native to tropical forests of southern Mexico, south to Panama. It has been introduced to many tropical areas, and has become a mildly invasive species in Hawaii, Seychelles, Ascension Island and the Society Islands.',
        hydrate: 'Once a week',
        color: 'Green'
    },

}

export function renderPlantInfo() {
    for (const plant in plants) {
        const plantDiv = document.createElement('div');
        plantDiv.classList.add('plant');
        plantDiv.innerHTML = `
            <p>${plants[plant].name}</p>
            <img src="${plants[plant].image}" alt="${plants[plant].name}" />
            <p>${plants[plant].description}</p>
            <p>${plants[plant].hydrate}</p>
        `;
        plantsDiv.appendChild(plantDiv);
    }
}

export function renderPlantColor() {
    for (const plant in plants) {
        const plantDiv = document.createElement('div');
        plantDiv.classList.add('plant');
        plantDiv.innerHTML = `
            <p>${plants[plant].name} <button @Click="changeColor" class="changeColor">${plants[plant].color} </button></p>
        `;
        plantsDiv.appendChild(plantDiv);
    }
    
}

