const URL = 'https://byui-cit230.github.io/weather/data/towndata.json'; 

fetch(URL)
    .then(function (response) {
        return response.json(); 
    })
    .then(function (jsonObject) {
        console.log(jsonObject); 

        const towns = jsonObject['towns']; 
        for (let i = 0; i < towns.length; i++) {

            let pagetitle = document.getElementById("page").innerHTML; 

            let card = document.createElement("section"); 
            card.setAttribute("id", "event-display"); 
            let h2 = document.createElement('h2'); 
            let event_one = document.createElement('p'); 
            let event_two = document.createElement('p'); 
            let event_three = document.createElement('p');

            if (pagetitle == "Preston, Idaho" &&  towns[i].name == "Preston") {
                event_one.textContent = towns[i].events[0]; 
                event_one.setAttribute("class", "events"); 

                card.appendChild(event_one); 

                event_two.textContent = towns[i].events[1]; 
                event_two.setAttribute("class", "events"); 

                card.appendChild(event_two); 

                event_three.textContent = towns[i].events[2]; 
                event_three.setAttribute("class", "events"); 

                card.appendChild(event_three); 

                document.querySelector("div.town-events").appendChild(card); 

            } else if (pagetitle == "Soda Springs" &&  towns[i].name == "Soda Springs") {
                event_one.textContent = towns[i].events[0]; 
                event_one.setAttribute("class", "events"); 

                card.appendChild(event_one); 

                event_two.textContent = towns[i].events[1]; 
                event_two.setAttribute("class", "events"); 

                card.appendChild(event_two); 

                event_three.textContent = towns[i].events[2]; 
                event_three.setAttribute("class", "events"); 

                card.appendChild(event_three); 

                document.querySelector("div.town-events").appendChild(card); 
            } else if (pagetitle == "Fish Haven, Idaho" &&  towns[i].name == "Fish Haven") {
                event_one.textContent = towns[i].events[0]; 
                event_one.setAttribute("class", "events"); 

                card.appendChild(event_one); 

                event_two.textContent = towns[i].events[1]; 
                event_two.setAttribute("class", "events"); 

                card.appendChild(event_two); 

                event_three.textContent = towns[i].events[2]; 
                event_three.setAttribute("class", "events"); 

                card.appendChild(event_three); 

                document.querySelector("div.town-events").appendChild(card); 

                }
            }

}); 