const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropDowmMenu = document.querySelector('.dropdown_menu')
const signUp = document.querySelector('.sign-up');
const dropDowmMenuBtn = document.querySelector('.dropdown_menu action-btn');

dropDowmMenu.onclick = function(){
    signUp.classList.toggle('signUp')
    
}
toggleBtn.onclick = function(){
    dropDowmMenu.classList.toggle('active')
}

console.log(toggleBtn)
console.log('dropdown mwnu >>>', dropDowmMenu);

// toggleBtn.addEventListener('click', () => {
//     dropDowmMenu.classList.toggle('active')
// })

const availableCars = [
    {
        name: "Bugatti",
        features:{
        model: "Veyron",
        year: "2023",
        price: "2.6M",
        image: "/carIndustryimages/pexels-dante-juhasz-62201650-12964186.jpg",
        horsePower:"1479hp",
        maxSpeed:"267mph"
    }
},
{
    name: "Audi",
    features:{
        model: "R8",
        year: "2021",
        price: "3.5M",
        image: "/carIndustryimages/pexels-jay-johnson-3719210-6335848.jpg",
        horsePower:"3600hp",
        maxSpeed:"280mph"
    }
},
{
    name: "Ferrari",
    features:{
        model: "Enzo",
        year: "2022",
        price: "$1.1M",
        image: "/carIndustryimages/pexels-lynxexotics-3954444.jpg",
        horsePower:"789hp",
        maxSpeed:"220mph"
    }
},
{
    name: "Chevrolet",
    features:{
        model: "Corvette",
        year: "2021",
        price: "2.8M",
        image: "/carIndustryimages/pexels-jonathan-s-1623206-15677090.jpg",
        horsePower:"3600hp",
        maxSpeed:"280mph"
    }
},
{
    name: "Toyota",
    features:{
        model: "Camry",
        year: "2021",
        price: "2.2M",
        image: "/carIndustryimages/pexels-introspectivedsgn-27639778.jpg",
        horsePower:"2700hp",
        maxSpeed:"240mph"
    }
},
{
    name:"Rolls-Royce",
    features:{
        model: "Phantom",
        year: "2022",
        price: "$4M",
        image: "/carIndustryimages/pexels-abdul-rahman-2669315-5046305.jpg",
        horsePower:"563hp",
        maxSpeed:"150mph"
    }
},
{
    name: "Rolls-Royce",
    features:{
        model: "Phantom Tempus",
        year: "2022",
        price: "$500k",
        image: "/carIndustryimages/car-17.jpg",
        horsePower:"563hp",
        maxSpeed:"155mph"
    }
},
    {
     name:"Rolls-Royce",
     features:{
        model: "Phantom Dreamster",
        year: "2022",
        price: "$1M",
        image: "/carIndustryimages/pexels-lynxexotics-3764984.jpg",
        horsePower:"563hp",
        maxSpeed:"150mph"
     }   
    },
{
    name:"Rolls_Royce",
    features:{
        model: "Black Badge",
        year: "2020",
        price: "$3M",
        image: "/carIndustryimages/pexels-zepps-project-837783-6445342.jpg",
        horsePower:"600hp",
        maxSpeed:"155mph"
    }
 },

{
    name: "Ford",
    features:{
        model: "Mustang",
        year: "2021",
        price: "2.8M",
        image: "/carIndustryimages/pexels-jonathan-s-1623206-15677090.jpg",
        horsePower:"3600hp",
        maxSpeed:"280mph"
    }
},
{
    name: "Maserati",

    features:{
        model: "Quattroporte",
        year: "2021",
        price: "$520K",
        image: "/carIndustryimages/pexels-mikebirdy-977003.jpg",
        horsePower:"540hp",
        maxSpeed:"230mph"
    }
},
{
    name: "Tesla",
    features:{
        model: "Model S",
        year: "2022",
        price: "$850k",
        image: "/carIndustryimages/pexels-onbab-26546824.jpg",
        horsePower:"750hp",
        maxSpeed:"280mph",
        Electric: 'true',
    }
},
{
    name: "Lamborghini",
    features:{
        model: "Aventador",
        year: "2022",
        price: "$1.3M",
        image: "/carIndustryimages/pexels-maximilian-misera-627772628-17420994.jpg",
        horsePower:"5900hp",
        maxSpeed:"260mph"
    }
},

{
    name: "McLaren",
    features:{
        model: "P1",
        year: "2021",
        price: "$1.5M",
        image: "/carIndustryimages/pexels-lynxexotics-5050536.jpg",
        horsePower:"5900hp",
        maxSpeed:"260mph"
    }
}, 
{
    name: "Porsche",
    features:{
        model: "911",
        year: "2021",
        price: "$2.5M",
        image: "/carIndustryimages/pexels-wavyvisuals-377312923-17304859.jpg",
        horsePower:"5900hp",
        maxSpeed:"260mph"
    }
},
{
    name: "Nissan",
    features:{
        model: "Leaf",
        year: "2021",
        price: "1.8M",
        image: "/carIndustryimages/pexels-introspectivedsgn-27258881.jpg",
        horsePower:"3000hp",
        maxSpeed:"220mph"
    }
},
{
    name: "Jaguar",
    features:{
        model: "F-Type",
        year: "2022",
        price: "$1.8M",
        image: "/carIndustryimages/pexels-mikebirdy-16626639.jpg",
        horsePower:"5600hp",
        maxSpeed:"260mph"
    }
},
{
    name: "Mercedes-Benz",
    features:{
        model: "E-Class",
        year: "2022",
        price: "$2.3M",
        image: "/carIndustryimages/pexels-kampratt-3457780.jpg",
        horsePower:"3600hp",
        maxSpeed:"240mph"
    }
},
{
    name: "BMW",
    features:{
        model: "X5",
        year: "2022",
        price: "$3.2M",
        image: "/carIndustryimages/pexels-mikebirdy-100653.jpg",
        horsePower:"5400hp",
        maxSpeed:"250mph"
    }
},
{
    name: "Volkswagen",
    features:{
        model: "Golf",
        year: "2022",
        price: "$2.2M",
        image: "/carIndustryimages/pexels-yoshi-lye-1597507927-27412642.jpg",
        horsePower:"2200hp",
        maxSpeed:"220mph"
    }
},
{
    name:"Toyota",
    features:{
        model: "Corolla",
        year: "2023",
        price: "$3.2M",
        image: "/carIndustryimages/pexels-introspectivedsgn-25955746.jpg",
        horsePower:"2200hp",
        maxSpeed:"220mph"
    }
},
{
    name: "Hyundai",
    features:{
        model: "Kona",
        year: "2023",
        price: "$2.9M",
        image: "/carIndustryimages/pexels-hyundaimotorgroup-11194510.jpg",
        horsePower:"3000hp",
        maxSpeed:"230mph"
    }
    
},
{
    name:"Lexus",
    features:{
        model: "lexus LC 500",
        Year: "2022" ,
        Price: "$93K" ,
        image: "/carIndustryimages/pexels-garvin-st-villier-719266-5581195.jpg" ,
        horsePower:"471hp",
        max_speed:"168mph"
    }
},
{
    name:"Toyota",
    features:{
        model: "Venza",
        year: "2022",
        price: "$200k",
        image: "/carIndustryimages/pexels-murdashots-611021625-20681346.jpg",
        horsePower:"3000hp",
        maxSpeed:"230mph"
    }
}
]

  
const searchInput = document.getElementById("search-input");
const carResults = document.getElementById("car-results");
// const starRate = document.getElementById("star-rate");

console.log(searchInput);

DispayCars(availableCars); // Initial display of all cars


function DispayCars(cars) {
    carResults.innerHTML = "";
    if (cars.length === 0) {
      carResults.innerHTML = "<p>No results found for your search.</p>";
      return;
    }
    
    cars.forEach((car, index) => {
      carResults.innerHTML += `
        <div class="car-container" style="position: absolute; top: 50%; transform: translateY(-50%)">
          <div class="car-image">
            <img src="/images/${car.features.image}" alt="car-${index + 1}">
          </div>
          <div class="bottom">
            <h3><span>Brand:</span> ${car.name}</h3>
            <h3><span>Model:</span> ${car.features.model}</h3>
            <h3><span>Year:</span> ${car.features.year}</h3>
            <h3><span>Price:</span> ${car.features.price}</h3>
            <h3><span>Horse Power:</span> ${car.features.horsePower}</h3>
            <h3><span>Speed:</span> ${car.features.maxSpeed}</h3>
          </div>
        </div>
      `;
    });
  
    // Animate car containers
    const carContainers = document.querySelectorAll('.car-container');
    let containerLeft = 0;
    function moveContainers() {
      carContainers.forEach((container, index) => {
        container.style.left = `${containerLeft + index * 300}px`;
        container.style.marginTop='400px';
        container.style.gap="20px";
      });
      containerLeft -= 5;
      if (containerLeft < -carResults.offsetWidth) {
        containerLeft = window.innerWidth;
      }
      requestAnimationFrame(moveContainers);
    }
    moveContainers();
  }
  
  
  



// starRate.addEventListener('click', (e)=>{
// if(e.target){
//     // starRate.style.color ='gold';
//     starRate.classList.toggle('active')
// }
// })

searchInput.addEventListener("input", searchCar);

// function searchCar() {
//     const searchTerm = searchInput.value.trim().toLowerCase();
//     const filteredCars = availableCars.filter(car => 
//         car.name.toLowerCase().includes(searchTerm) ||
//         car.features.model.toLowerCase().includes(searchTerm)
//     );
//     DispayCars(filteredCars);
// }


function searchCar() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    carResults.innerHTML = ""; // Clear the previous results
  
    let resultsFound = false; // Flag to check if any car matches the search
  
    for (let i = 0; i < availableCars.length; i++) {
      const car = availableCars[i];
      const carName = car.name.toLowerCase();
      const carModel = car.features.model.toLowerCase();
  
      if (carName.includes(searchTerm) || carModel.includes(searchTerm)) {
        // If a match is found, display the car
        carResults.innerHTML += `
          <div class="car-container">
            <div class="car-image">
              <img src="/images/${car.features.image}" alt="${car.name}">
            </div>
            <div class="bottom">
              <h3><span>Brand:</span> ${car.name}</h3>
              <h3><span>Model:</span> ${car.features.model}</h3>
              <h3><span>Year:</span> ${car.features.year}</h3>
              <h3><span>Price:</span> ${car.features.price}</h3>
              <h3><span>Horse Power:</span> ${car.features.horsePower}</h3>
              <h3><span>Speed:</span> ${car.features.maxSpeed}</h3>
            </div>    
          </div>
        `;
        resultsFound = true;
        carResults.style.marginTop ='-220vh';
        // carResults.style.justifyContent = 'center'; 
        // carResults.style.alignItems = 'center';
        // carResults.style.marginLeft = '50vh';
        // carResults.style.display = 'block';
        
        
      }
    }
  
    if (!resultsFound) {
      // If no car matches the search term, display a "no results" message
      carResults.innerHTML = `
        <p id='no-result'>No results found for "${searchTerm}"</p>
      `;
    }
  }
//   const typewriterParagraph = document.getElementById("typewriter-paragraph");
// let i = 0;

// function typewriterEffect() {
//   if (i < paragraph.length) {
//     typewriterParagraph.textContent += paragraph[i];
//     i++;
//   } else {
//     clearInterval(intervalId);
//   }
// }

// const intervalId = setInterval(typewriterEffect, 50); // adjust speed
// Get the car container element


