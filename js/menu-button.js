const btn = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const toggleBtn = document.getElementById('theme-toggle');
const mq = window.matchMedia("(max-width: 600px)");

mq.addEventListener("change", (e) => {
    if (e.matches) {
        document.querySelector("main").prepend(menu);
    } else {
        document.querySelector(".header-text").appendChild(menu);
    }
})

btn.addEventListener('click', () => {
    btn.classList.toggle('toggle');
    menu.classList.toggle('visible');
});

if (mq.matches) {
    document.querySelector("main").prepend(menu);
} else {
    document.querySelector(".header-text").appendChild(menu);
}