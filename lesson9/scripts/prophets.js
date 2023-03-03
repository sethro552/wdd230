const requestURL = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getData(requestURL) {
    const response = await fetch(requestURL);
    if (response.ok) {
        const data = await response.json();

        const prophets = data['prophets'];
        prophets.forEach(prophet => {
            displayCards(prophet);
        });
    }
}

getData(requestURL);

function displayCards(prophet) {
    let card = document.createElement('section');
    
    let h2 = document.createElement('h2');
    h2.textContent = prophet.name + ' ' + prophet.lastname;
    card.appendChild(h2);

    let birthdate = document.createElement('p');
    birthdate.textContent = 'Date of Birth: ' + prophet.birthdate;
    card.appendChild(birthdate);

    let birthplace = document.createElement('p');
    birthplace.textContent = 'Place of Birth: ' + prophet.birthplace;
    card.appendChild(birthplace);

    let image = document.createElement('img');
    image.setAttribute('src', prophet.imageurl);
    image.setAttribute('alt', `${prophet.name} ${prophet.lastname} ${prophet.order}`);
    card.appendChild(image);

    document.querySelector('div.cards').appendChild(card);
}