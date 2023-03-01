const Api_key= `6aee9fc938162b96b97d710b586634b0`


const loadTemperature= city=>{

const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}&units=metric`
 fetch(url)
 .then(res=> res.json())
 .then(data=>displayData(data)); 

}


const displayData = data=>{

// const displayTemperature = document.getElementById('temper');
// console.log(data.main.temp)
// displayTemperature.innerText=data.main.temp

setInnerTextByID("temper", data.main.temp);
setInnerTextByID('condition', data.weather[0].main);
console.log(data.weather[0].main);

}

const setInnerTextByID=(id, text)=>{

const temperature= document.getElementById(id);
temperature.innerText=text;

}

document.getElementById('btn-search').addEventListener('click', function(){

const loadData = document.getElementById('search-filed');
const city = loadData.value;
// set city
document.getElementById('city').innerText= city;
loadTemperature(city);




})




loadTemperature('Dhaka')

