let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    listItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    listItem.classList.remove('active');
}

let listItem = document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () => {
    listItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    listItem.classList.remove('active');
}