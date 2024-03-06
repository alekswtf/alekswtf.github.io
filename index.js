/* let spoiler = document.querySelectorAll(".site");
let activeIndex = null;
console.log(spoiler);


spoiler.forEach((el, index) => {
    el.addEventListener("click", () => {
        activeIndex = index;
        
        spoiler[activeIndex].calssList.toggle("active");
    });
}); */





let label = document.querySelector(".dropdown-label");
let options = document.querySelector(".dropdown-options");
let option = document.querySelector(".option");
let labelValue = document.querySelector(".contacts-span");

/* option.forEach((el) => {
    el.addEventListener("click", () => {
        labelValue.innerHTML = el.innerHTML;
        options.classList.remove("open");
    });
}); */

label.addEventListener("click", () => {
    options.classList.toggle("open");

});


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

