let signup = document.querySelector('#signup');
let deleteForm = document.querySelector('#delete-account');
let card = document.querySelector('#card');

//Input DOM Selection

let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');
let phone = document.querySelector('#phone');
let selectedCountry = document.querySelector('#select-country');
let selectedCity = document.querySelector('#select-city');
let adress = document.querySelector('#adress');
let selectedDate = document.querySelector('#select-date'); 

//Output DOM Selection
let cardTitle = document.querySelector('#title');
let img = document.querySelector('img');
let userName = document.querySelector('#userName');
let country = document.querySelector('#country');
let city = document.querySelector('#city');
let dob = document.querySelector('#dob');

document.addEventListener('DOMContentLoaded', function(){
  if(localStorage.getItem('localCard') !== null){
    signup.style.marginLeft = "-500px";
    card.style.opacity = "1";
    
    //Making array from localCard data
    var localData = JSON.parse(localStorage.getItem('localCard')); 
    
    //Setting output values
    cardTitle.innerHTML = "Hola"+localData[1]+" "+localData[2];
    userName.innerHTML = localData[1]+" "+localData[2];
    country.innerHTML = localData[3];
    city.innerHTML = localData[4];
    dob.innerHTML = localData[5];  
  }
});

signup.addEventListener('submit', function(e){
  e.preventDefault();
  signup.style.marginLeft = "-500px";
  card.style.opacity = "1";
  
  //Setting output values
  cardTitle.innerHTML = "Hola Bienvenid@ "+firstName.value+" "+lastName.value;
  userName.innerHTML = firstName.value+" "+lastName.value;
  country.innerHTML = selectedCountry.value;
  city.innerHTML = selectedCity.value;
  dob.innerHTML = selectedDate.value;
  
  var storeData = [firstName.value, lastName.value, phone.value,selectedCountry.value, selectedCity.value, adress.value, selectedDate.value];
  localStorage.setItem('localCard',JSON.stringify(storeData));  
});

deleteForm.addEventListener('submit', function(e){
  e.preventDefault();
  signup.style.marginLeft = "0px";
  card.style.opacity = "0";
  localStorage.removeItem('localCard');
  //resetting input values
  firstName.value = "";
  lastName.value = "";
  phone = "";
  selectedCountry.value = "";
  selectedCity.value = "";
  adress = "";
  selectedDate.value = "";
});

