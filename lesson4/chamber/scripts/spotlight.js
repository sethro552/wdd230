const spotlightRequestURL = 'https://jonatantroche.github.io/wdd230/09_lesson_9/directory/json/data.json';


fetch(spotlightRequestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const spotlightCompanies=jsonObject["companies"];
    // jsonObject.companies
    let lenght = Object.keys( spotlightCompanies ).length; 
    for (let i = 1; i < 4; i++) {
      const spotlightCard = document.querySelector(`.spotlight_${i}`);
      console.log(Math.random());
      spotlightCard.innerHTML = displayspotlightCompanies(spotlightCompanies [Math.floor(Math.random()*lenght)]);
      console.log(spotlightCard);
      console.log('.spotlight_'+i);
    }
    
    // let spotlightLenght = object.keys( spotlightCompanies.lenght)
    // spotlightCompanies.forEach(displayspotlightCompanies);
  });

  function displayspotlightCompanies(companie){
    return `<h2>${companie.name}</h2>
            <img src="${companie.logourl}" alt="">
            <hr>
            <p>${companie.location}</p>
            <p>${companie.website}</p>
            <p>${companie.telf}</p>`;
  }