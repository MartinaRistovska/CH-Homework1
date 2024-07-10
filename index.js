const cars = [
    {
      id: 1,
      make: "Tesla",
      model: "Model S",
      year: 2022,
      color: "Red",
      price: "$89,990",
      features: ["Electric", "Autopilot", "Ludicrous Mode"],
      image:
        "https://hips.hearstapps.com/hmg-prod/images/2024-tesla-model-s-107-6572200e43fa1.jpg?crop=0.586xw:0.496xh;0.204xw,0.271xh&resize=700:*",
    },
    {
      id: 2,
      make: "Ford",
      model: "Mustang",
      year: 2021,
      color: "Blue",
      price: "$55,300",
      features: ["V8 Engine", "Rear-Wheel Drive", "Convertible"],
      image:
        "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/media/672263/2017-ford-mustang-in-depth-model-review-car-and-driver-photo-691676-s-original.jpg?crop=0.779xw:0.721xh;0.147xw,0.0745xh&resize=1200:*",
    },
    {
      id: 3,
      make: "Chevrolet",
      model: "Corvette",
      year: 2023,
      color: "Yellow",
      price: "$60,000",
      features: [
        "Mid-Engine",
        "8-Speed Dual-Clutch",
        "Performance Traction Management",
      ],
      image:
        "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/media/672264/2018-chevrolet-corvette-in-depth-model-review-car-and-driver-photo-695008-s-original.jpg?crop=0.809xw:0.751xh;0.0929xw,0.105xh&resize=1200:*",
    },
    {
      id: 4,
      make: "BMW",
      model: "M3",
      year: 2022,
      color: "Black",
      price: "$70,895",
      features: [
        "Twin-Turbo Inline-6",
        "All-Wheel Drive",
        "M Sport Differential",
      ],
      image:
        "https://hips.hearstapps.com/hmg-prod/images/2025-bmw-m3-110-66562ddceaf59.jpg?crop=0.824xw:0.618xh;0.0737xw,0.274xh&resize=1200:*",
    },
    {
      id: 5,
      make: "Audi",
      model: "R8",
      year: 2022,
      color: "White",
      price: "$142,700",
      features: [
        "V10 Engine",
        "Quattro All-Wheel Drive",
        "Carbon Fiber Exterior",
      ],
      image:
        "https://hips.hearstapps.com/hmg-prod/images/2023-audi-r8-gt-front-three-quarters-motion-3-1664827965.jpg?crop=0.684xw:0.577xh;0.0321xw,0.281xh&resize=1200:*",
    },
    {
      id: 6,
      make: "Mercedes-Benz",
      model: "S-Class",
      year: 2021,
      color: "Silver",
      price: "$110,850",
      features: ["Luxury Interior", "V8 Engine", "4MATIC All-Wheel Drive"],
      image:
        "https://hips.hearstapps.com/hmg-prod/images/2022-mercedes-benz-s500-4matic-109-1642184016.jpg?crop=0.647xw:0.548xh;0.116xw,0.313xh&resize=1200:*",
    },
    {
      id: 7,
      make: "Porsche",
      model: "911",
      year: 2022,
      color: "Green",
      price: "$99,200",
      features: ["Twin-Turbo Flat-6", "Rear-Wheel Drive", "Sport Chrono Package"],
      image:
        "https://hips.hearstapps.com/hmg-prod/images/2023-porsche-911-dakar-fd-152-1674829952.jpg?crop=0.640xw:0.541xh;0.202xw,0.290xh&resize=1200:*",
    },
    {
      id: 8,
      make: "Lamborghini",
      model: "Huracan",
      year: 2022,
      color: "Orange",
      price: "$261,274",
      features: ["V10 Engine", "All-Wheel Drive", "Lamborghini Dynamic Steering"],
      image:
        "https://hips.hearstapps.com/hmg-prod/images/2023-lamborghini-huracan-sterrato127-6467c8f12dcce.jpg?crop=0.739xw:0.624xh;0.0977xw,0.351xh&resize=1200:*",
    },
    {
      id: 9,
      make: "Ferrari",
      model: "488 GTB",
      year: 2021,
      color: "Red",
      price: "$262,647",
      features: ["Twin-Turbo V8", "Rear-Wheel Drive", "Magnetic Suspension"],
      image:
        "https://hips.hearstapps.com/hmg-prod/images/2019-ferrari-488-pista-125-1528476287.jpg?crop=0.653xw:0.596xh;0.241xw,0.404xh&resize=1200:*",
    },
    {
      id: 10,
      make: "Jaguar",
      model: "F-Type",
      year: 2022,
      color: "Blue",
      price: "$73,400",
      features: ["Supercharged V8", "All-Wheel Drive", "Convertible"],
      image:
        "https://hips.hearstapps.com/hmg-prod/images/2024-jaguar-f-type-r75-convertible-151-edit-660f012e498ef.jpg?crop=0.546xw:0.460xh;0.345xw,0.439xh&resize=1200:*",
    },
    {
      id: 11,
      make: "Aston Martin",
      model: "DB11",
      year: 2022,
      color: "Silver",
      price: "$205,600",
      features: ["Twin-Turbo V12", "Rear-Wheel Drive", "Luxury Interior"],
      image:
        "https://hips.hearstapps.com/hmg-prod/images/2020-aston-martin-db11-amr-106-1589946284.jpg?crop=0.840xw:0.709xh;0.0865xw,0.214xh&resize=1200:*",
    },
    {
      id: 12,
      make: "McLaren",
      model: "720S",
      year: 2022,
      color: "Purple",
      price: "$299,000",
      features: ["Twin-Turbo V8", "Rear-Wheel Drive", "Active Aerodynamics"],
      image:
        "https://hips.hearstapps.com/hmg-prod/images/2019-mclaren-720s-spider-508-1565493374.jpg?crop=0.629xw:0.577xh;0.303xw,0.402xh&resize=1200:*",
    },
    {
      id: 13,
      make: "Bentley",
      model: "Continental GT",
      year: 2022,
      color: "Gold",
      price: "$231,800",
      features: ["W12 Engine", "All-Wheel Drive", "Luxury Interior"],
      image:
        "https://hips.hearstapps.com/hmg-prod/images/2024-bentley-continental-gt-convertible-101-644bd404dcb7e.jpg?crop=0.752xw:0.635xh;0.216xw,0.276xh&resize=1200:*",
    },
    {
      id: 14,
      make: "Rolls-Royce",
      model: "Phantom",
      year: 2022,
      color: "Black",
      price: "$450,000",
      features: ["V12 Engine", "Luxury Interior", "Rear-Wheel Drive"],
      image:
        "https://hips.hearstapps.com/hmg-prod/images/2024-rolls-royce-phantom-102-64bad70ba7661.jpg?crop=0.637xw:0.644xh;0.248xw,0.236xh&resize=1200:*",
    },
    {
      id: 15,
      make: "Mazda",
      model: "MX-5 Miata",
      year: 2022,
      color: "Red",
      price: "$26,830",
      features: ["SkyActiv-G Engine", "Rear-Wheel Drive", "Convertible"],
      image:
        "https://hips.hearstapps.com/hmg-prod/images/2024-mazda-mx5-miata-rf-club-101-66743f51b53e4.jpg?crop=0.527xw:0.446xh;0.215xw,0.368xh&resize=1200:*",
    },
    {
      id: 16,
      make: "Subaru",
      model: "WRX STI",
      year: 2021,
      color: "Blue",
      price: "$37,245",
      features: [
        "Turbocharged Boxer Engine",
        "All-Wheel Drive",
        "Sport-Tuned Suspension",
      ],
      image:
        "https://hips.hearstapps.com/hmg-prod/images/2025-subaru-wrx-ts-102-6675820a4c02b.jpg?crop=0.702xw:0.594xh;0.173xw,0.281xh&resize=1200:*",
    },
    {
      id: 17,
      make: "Volkswagen",
      model: "Golf GTI",
      year: 2021,
      color: "White",
      price: "$28,695",
      features: [
        "Turbocharged Inline-4",
        "Front-Wheel Drive",
        "Sport Suspension",
      ],
      image:
        "https://hips.hearstapps.com/hmg-prod/images/2022-volkswagen-gti-s-lt-1909-edit-1661958354.jpg?crop=0.487xw:0.412xh;0.327xw,0.499xh&resize=1200:*",
    },
    {
      id: 18,
      make: "Nissan",
      model: "GT-R",
      year: 2021,
      color: "Silver",
      price: "$113,540",
      features: ["Twin-Turbo V6", "All-Wheel Drive", "Launch Control"],
      image:
        "https://hips.hearstapps.com/hmg-prod/images/lc2-6634-666c7f8abb2b3.jpg?crop=1.00xw:0.846xh;0,0.116xh&resize=1200:*",
    },
    {
      id: 19,
      make: "Toyota",
      model: "Supra",
      year: 2022,
      color: "Yellow",
      price: "$43,540",
      features: [
        "Turbocharged Inline-6",
        "Rear-Wheel Drive",
        "Adaptive Suspension",
      ],
      image:
        "https://hips.hearstapps.com/hmg-prod/images/2024-toyota-gr-supra-45th-anniversary-edition-106-648cadc57f6f0.jpg?crop=0.839xw:0.709xh;0.103xw,0.134xh&resize=1200:*",
    },
    {
      id: 20,
      make: "Honda",
      model: "Civic Type R",
      year: 2021,
      color: "Red",
      price: "$37,895",
      features: [
        "Turbocharged Inline-4",
        "Front-Wheel Drive",
        "Sport Suspension",
      ],
      image:
        "https://hips.hearstapps.com/hmg-prod/images/2023-lightning-lap-honda-civic-type-r-mu-102-1675451016.jpg?crop=0.492xw:0.416xh;0.202xw,0.391xh&resize=1200:*",
    },
  ];
  
  const users = [
    {
      firstname: "Martina",
      lastname: "Ristovska",
      email: "martinaristovska@email.com",
      password: "martina1234",
    },
  ];
  
  function registerInput(event) {
    event.preventDefault();
  
    let nameInput = document.getElementById("nameInput").value;
    let lastnameInput = document.getElementById("lastnameInput").value;
    let emailInput = document.getElementById("emailInput").value;
    let passwordInput = document.getElementById("passwordInput").value;
  
    let falseName = document.getElementById("falseName");
    let falseLastname = document.getElementById("falseLastname");
    let falseEmail = document.getElementById("falseEmail");
    let falsePassword = document.getElementById("falsePassword");
  
    let proceedInput = true;
  
    // Validate First Name
    if (nameInput.length < 2) {
      falseName.innerText = "Incorrect name input. Name too short!";
      falseName.style.color = "red";
      falseName.style.fontSize = "12px";
      proceedInput = false;
    } else {
      falseName.innerText = "";
    }
  
    // Validate Last Name
    if (lastnameInput.length < 4) {
      falseLastname.innerText = "Incorrect last name input. Last name too short!";
      falseLastname.style.color = "red";
      falseLastname.style.fontSize = "12px";
      proceedInput = false;
    } else {
      falseLastname.innerText = "";
    }
  
    // Validate Email
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    if (!emailRegex.test(emailInput)) {
      falseEmail.innerText = "Invalid email format!";
      falseEmail.style.color = "red";
      falseEmail.style.fontSize = "12px";
      proceedInput = false;
    } else {
      falseEmail.innerText = "";
    }
  
    // Validate Password
    if (passwordInput.length < 8) {
      falsePassword.innerText =
        "Password too short. Minimum 8 characters required!";
      falsePassword.style.color = "red";
      falsePassword.style.fontSize = "12px";
      proceedInput = false;
    } else {
      falsePassword.innerText = "";
    }
  
    if (proceedInput) {
      document.getElementById("regitarMessage").innerText =
        "You have successfully registered. Thank you for your registration!";
      document.getElementById("regitarMessage").style.color = "green";
      document.getElementById("regitarMessage").style.fontSize = "12px";
  
      let userInfo = {
        firstname: nameInput,
        lastname: lastnameInput,
        email: emailInput,
        password: passwordInput,
      };
      users.push(userInfo);
      document.querySelector("form").reset();
    } else {
      document.getElementById("regitarMessage").innerText =
        "Failed registration. Please try again!";
      document.getElementById("regitarMessage").style.color = "red";
      document.getElementById("regitarMessage").style.fontSize = "12px";
    }
  }
  
  function loginInput(event) {
    event.preventDefault();
  
    const loginEmail = document.getElementById("emailLogin").value;
    const loginPassword = document.getElementById("passwordLogin").value;
    const loginMessage = document.getElementById("loginMessage");
  
    const userLogin = users.find(
      (user) => user.email === loginEmail && user.password === loginPassword
    );
  
    if (userLogin) {
      document.getElementById("loginModal").style.display = "none";
      document.querySelector(".modal-backdrop").style.display = "none";
      document.getElementById("buttonRegistrate").style.display = "none";
      document.getElementById("buttonLogin").style.display = "none";
      document.getElementById("carCard").style.display = "flex";
      document.getElementById("cardModels").style.display = "block";
      document.querySelector(".modal-open").style.overflow = "visible";
    } else {
      loginMessage.innerText = "Failed to login. Try again!";
      loginMessage.style.color = "red";
      loginMessage.style.fontSize = "12px";
    }
  }
  
  function displayCars(carsShow) {
    const carCard = document.getElementById("carCard");
    carCard.innerHTML = "";
    carsShow.forEach((car) => {
      carCard.innerHTML += `
        <div class="col-mb-5 w-25 mb-1">
          <div class="card" style="width: 18rem;">
             <img src="${car.image}" class="card-img-top" alt="${car.model}">
             <div class="card-body">
               <h5 class="card-title">${car.make}</h5>
               <p class="card-text">${car.model}</p>
               <p class="card-text">${car.year}</p>
               <p class="card-text">${car.color}</p>
               <p class="card-text">${car.features.join(", ")}</p>
               <p class="card-text">${car.price}</p>
               <button class="btn btn-primary"> Purchase car</button>
              </div>
          </div>
        </div>
        `;
    });
  }
  displayCars(cars);
  
  const highToLowBtn = document.getElementById("highToLow");
  highToLowBtn.addEventListener("click", sortHL);
  function parsePrice(price) {
    return parseFloat(price.replace(/[$,]/g, ""));
  }
  
  function sortHL() {
    cars.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    displayCars(cars);
  }
  
  const lowToHighBtn = document.getElementById("lowToHigh");
  lowToHighBtn.addEventListener("click", sortLH);
  
  function sortLH() {
    cars.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    displayCars(cars);
  }
  
  function searchByModel() {
    const searchModelInput = document
      .getElementById("searchInput")
      .value.toLowerCase();
    console.log("Search Input:", searchModelInput);
    const filteredCars = cars.filter((car) =>
      car.model.toLowerCase().includes(searchModelInput)
    );
    console.log("Filtered Cars:", filteredCars);
    displayCars(filteredCars);
  }
  document.getElementById("searchInput").addEventListener("keyup", searchByModel);
  
  
  
  let allFeatures = [];
  for (let i = 0; i < cars.length; i++) {
    allFeatures = allFeatures.concat(cars[i].features);
  }
  
  let separateFeatures = [];
  for (let i = 0; i < allFeatures.length; i++) {
    if (separateFeatures.indexOf(allFeatures[i]) === -1) {
      separateFeatures.push(allFeatures[i]);
    }
  }
  console.log(separateFeatures); //lista na el.bez povtoruvanje
  
  function filterByFeatures() {
    let feature = document.getElementById("featureFilter").value;
    if (feature === "") {
      displayCars(cars);
    } else {
      const carsList = cars.filter((car) => car.features.includes(feature));
      displayCars(carsList);
    }
  }
  document
    .getElementById("featureFilter")
    .addEventListener("change", filterByFeatures);