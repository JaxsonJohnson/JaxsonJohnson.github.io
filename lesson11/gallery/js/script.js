let date = new Date();
let lastmodif = document.lastModified;
document.getElementById('lastmodif').textContent = lastmodif;

function toggleMenu(){
    document.getElementById('primaryNav').classList.toggle('hide')
}

if (date.getDate()==5){
    document.getElementById("banner").style.display="block";
}

    const dow = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const month = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    
    let output = dow[date.getDay()] + ', ' + date.getDate() + ', ' + month[date.getMonth()] + ', ' + date.getFullYear();

    document.getElementById('current-date').innerText = output;

    