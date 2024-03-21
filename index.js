
let hamburger = document.querySelector('.hamburger');
let hamburgerLines = document.querySelectorAll('.line');
let mobileMenuPanel = document.querySelector('.mobile-menu');
let mobileMenuLinks = document.querySelectorAll ('.link');

hamburger.addEventListener('click', () => {
    hamburgerLines.forEach((el, index) => {
        el.classList.toggle(`active-line-${index + 1}`)
    })
    
    mobileMenuPanel.classList.toggle('active');
})

mobileMenuLinks.forEach(el => {
    el.addEventListener('click', () => {
        hamburgerLines.forEach((el, index) => {
            el.classList.remove(`active-line-${index + 1}`)
        })

        mobileMenuPanel.classList.remove('active')
    })
})



document.querySelectorAll('.smooth-scroll').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});








const buttons = document.querySelectorAll('.service-button');
const cards = document.querySelectorAll('.service-item');

let activeButtons = [];

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const serviceName = button.dataset.service;

        if(activeButtons.includes(serviceName)) {
            button.classList.remove('active');
            activeButtons = activeButtons.filter(name => name !== serviceName);
        } else {
            if (activeButtons.length < 2) {
                button.classList.add('active');
                activeButtons.push(serviceName);
            }
        }

        cards.forEach(card => {
            if (!activeButtons.length) {
                card.classList.remove('blur');
            } else if (activeButtons.includes(card.dataset.service)) {
                card.classList.remove('blur');
            } else {
                card.classList.add('blur');
            }
        });
    });
});






/* let spoiler = document.querySelectorAll(".site");
let activeIndex = null;

spoiler.forEach((el, index) => {
    el.addEventListener("click", () => {
        activeIndex = index;
        
        spoiler[activeIndex].classList.toggle("active");
    });
});
 */





/* let label = document.querySelector(".dropdown-label");
let options = document.querySelector(".dropdown-options");
let option = document.querySelectorAll(".option");
let labelValue = document.querySelector(".contacts-span");

const cities = [
    {
        name: 'Canandaigua, NY',
        phone: '+1	585	393 0001',
        adress: '151 Charlotte Street'
    },
    {
        name: 'New York City',
        phone: '+1	212	456 0002',
        adress: '9 East 91st Street'
    },
    {
        name: 'Yonkers, NY',
        phone: '+1	914	678 0003',
        adress: '511 Warburton Ave'
    },
    {
        name: 'Sherrill, NY',
        phone: '+1	315	908 0004',
        adress: '14 WEST Noyes BLVD'
    },
];

option.forEach((el) => {
    el.addEventListener("click", () => {
        labelValue.innerHTML = el.innerHTML;
        options.classList.remove("open");
    });
});

label.addEventListener("click", () => {
    options.classList.toggle("open");

});
 */





const label = document.querySelector(".dropdown-label");
const options = document.querySelector(".dropdown-options");
const option = document.querySelectorAll(".option");
const labelValue = document.querySelector(".contacts-span");
const cityInfo = document.querySelector('.city-info');
const cityName = document.querySelector('.city-name');
const cityPhone = document.querySelector('.city-phone');
const cityAddress = document.querySelector('.city-address');
const selectedCity = document.querySelector('.selected-city');
const callUsLink = document.querySelector('.call-us-link');
const imageToHide = document.querySelector('.contact-woman');

const cities = [
  {
    name: 'Canandaigua, NY',
    phone: '+1	585	393 0001',
    adress: '151 Charlotte Street'
  },
  {
    name: 'New York City',
    phone: '+1	212	456 0002',
    adress: '9 East 91st Street'
  },
  {
    name: 'Yonkers, NY',
    phone: '+1	914	678 0003',
    adress: '511 Warburton Ave'
  },
  {
    name: 'Sherrill, NY',
    phone: '+1	315	908 0004',
    adress: '14 WEST Noyes BLVD'
  },
];

const btnContact = document.querySelector('.btn-contact');

btnContact.addEventListener("click", () => { 
  options.classList.toggle("open");

  const icon = label.querySelector('img');
  icon.classList.toggle('active-icon');
  icon.src = icon.classList.contains('active-icon')
    ? '/icons/drop_btn.svg'
    : './icons/accordion_btn.svg';

  label.classList.toggle("active");
  
});


option.forEach((el) => {
  el.addEventListener("click", (event) => {
    event.stopPropagation();
    selectedCity.innerHTML = el.innerHTML;
    const selectedCityData = cities.find(
      (city) => city.name === el.getAttribute("data-city")
    );
    cityName.innerHTML = `<div class="city-label"> City: </div> ${selectedCityData.name}`;
    cityPhone.innerHTML = `<div class="phone-label"> Phone: </div> ${selectedCityData.phone}`;
    cityAddress.innerHTML = `<div class="address-label"> Office address: </div> ${selectedCityData.adress}`;
    cityInfo.classList.remove("hidden");


    callUsLink.href = `tel:${selectedCityData.phone}`;


    label.querySelector('.btn-contact span').innerHTML = selectedCity.innerHTML;
    label.classList.add("active");
    label.querySelector('.btn-contact').classList.add("selected"); 


    const icon = label.querySelector('.btn-contact img');
    icon.classList.add('active-icon');
    icon.src = '/icons/drop_btn.svg'; 

    options.classList.remove("open");
    label.classList.remove("active");
    label.querySelector('.btn-contact').classList.remove("active");

    if (window.matchMedia("(max-width: 767px)").matches) {
      imageToHide.classList.add("hidden");
    }
  });
});


document.querySelector('.btn-contact img').addEventListener('click', (e) => {
  e.stopPropagation(); 
  options.classList.remove("open");
  label.classList.remove("active");
});

document.addEventListener("click", (e) => {
    if (!label.contains(e.target) && !options.contains(e.target)) {
      options.classList.remove("open");
      label.classList.remove("active");

    }
});

callUsLink.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = event.currentTarget.href;
});







const pricesButtons = document.querySelectorAll('.prices-button');
const dropdownMenus = document.querySelectorAll('.dropdown-menu');

pricesButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    dropdownMenus.forEach((menu, i) => {
      if (index === i) {
        menu.classList.toggle('open');
      } else {
        menu.classList.remove('open');
      }
    });
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.prices-button') && !e.target.closest('.dropdown-menu')) {
    dropdownMenus.forEach((menu) => {
      menu.classList.remove('open');
    });
  }
});

const dropdownButtons = document.querySelectorAll('.dropdown-button');

dropdownButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const contactsSection = document.getElementById('contacts');
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});