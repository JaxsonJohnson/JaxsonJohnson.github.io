function input(){
    let temperature = parseFloat(document.getElementById("temp").innerText);
    let ws = parseFloat(document.getElementById("speed").innerText);
    let chill = windChill(temperature, ws);
    if(temperature>50 && ws>2){
        document.getElementById("wc").innerText = "";
    }
    else{
        document.getElementById("wc").innerText = chill;
    }
}

function windChill(t,s){
let power = Math.pow(s,.16);
let outputws = 35.75 + 0.6215 * t - 35.75 * power + 0.4275 * t * power; 
let d = 2;
let mult = Math.pow(10, d);
end = Math.round(outputws*mult) / mult;
return end;
} 

input();