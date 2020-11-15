function toggleMenu(){
    document.getElementById('primaryNav').classList.toggle('hide')
}

const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
const resultElement = document.getElementById("cards");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject);  // temporary checking for valid response and data parsing
  
  
  const towns = jsonObject['towns'];

  for (let i = 0; i < towns.length; i++ ) {
    let card = document.createElement('section');
    let h1 = document.createElement('h1');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let p2 = document.createElement('p2');
    let p3 = document.createElement('p3');

    h1.textContent = towns[i].name;
    h3.textContent = towns[i].motto; 
    p.textContent = "Year Founded: " + towns[i].yearFounded;
    p2.textContent = "Population: " + towns[i].currentPopulation;
    p3.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;

    let image = document.createElement('img');
    image.setAttribute('src', towns[i].photo);

    card.appendChild(h1);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(image);

    resultElement.appendChild(card);
  }


});