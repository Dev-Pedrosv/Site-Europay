const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll("nav .toggle")


for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })

};

// quado clicar em um item do menu, escoder o menu

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
};