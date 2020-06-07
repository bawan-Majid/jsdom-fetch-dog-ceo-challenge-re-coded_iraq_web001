<<<<<<< HEAD
document.addEventListener('DOMContentLoaded',  ()=>{ 

function fetchDogImage() {
=======

document.addEventListener('DOMContentLoaded',  ()=>{ 


function fetchDogImg() {
>>>>>>> a4f44fedff2bde91e2f28f559f479b830f0e7283
   return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response){
     return response.json();
      
    })
    .then(function(json){
      appendImages(json);
    })
  }

function fetchDogBreed() {
   return fetch('https://dog.ceo/api/breeds/list/all')
    .then(function(response){
     return response.json();
      
    })
    .then(function(json){
      appendBreed(json);
    })
  }
  
<<<<<<< HEAD
  fetchDogImage();
  fetchDogBreed();
    
function appendImages(data){
  const imagDiv = document.querySelector('#dog-image-container');
  for(const imgsrc of data.message){
    let images = document.createElement('img');
    images.src = imgsrc;
    imagDiv.appendChild(images)
  }
}
let liArr = [];
=======
  fetchDogImg();
  fetchDogBreed();
    
function appendImages(data){
  const imageDiv = document.querySelector('#dog-image-container');
  for(const imgsrc of data.message){
    let images = document.createElement('img');
    images.src = imgsrc;
    imageDiv.appendChild(images)
  }
}
let liArray = [];
>>>>>>> a4f44fedff2bde91e2f28f559f479b830f0e7283

function appendBreed(data){
  const breedUl = document.querySelector('#dog-breeds');
   for(const breeds in data.message){
     
    let lis = document.createElement('li');
    lis.innerHTML = breeds;
<<<<<<< HEAD
    liArr.push(lis);
=======
    liArray.push(lis);
>>>>>>> a4f44fedff2bde91e2f28f559f479b830f0e7283
    lis.addEventListener('click',handleClick);
    breedUl.appendChild(lis);
   
  }
}

function handleClick(e){
<<<<<<< HEAD
  
  e.target.style.color = "green";
=======
  e.target.style.color = "red";
>>>>>>> a4f44fedff2bde91e2f28f559f479b830f0e7283
}

})