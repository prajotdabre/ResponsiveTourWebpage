const travelCardInfo = document.querySelector('.destination-container');

locations.destinations.forEach(destinations => {

                     
    const card = document.createElement('div');
    card.className = 'travel-card';

    const imgDiv = document.createElement('div');
    imgDiv.className = 'img-container';

    const img = document.createElement('img');
    img.src = destinations.image;
    imgDiv.appendChild(img);

    const locationDiv = document.createElement('div');
    locationDiv.className = 'location';
    locationDiv.innerHTML = `<h2>${destinations.name}</h2>`;

    imgDiv.appendChild(locationDiv);

    const description = document.createElement('p');
    description.className = 'description';
    description.textContent = destinations.description;
    imgDiv.appendChild(description);

    const tourCost = document.createElement('p');
    tourCost.className = 'tour-cost';
    tourCost.textContent = `${destinations.cost}`;
    imgDiv.appendChild(tourCost);

    card.appendChild(imgDiv)
    
    travelCardInfo.appendChild(card)
    
});