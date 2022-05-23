const showcase = document.querySelector('.showcase')

window.addEventListener("scroll", (event) => {
    if (this.scrollY > showcase.clientHeight - 20) {
        document.querySelector('#header').classList.add('border-bottom');
    } else {
        document.querySelector('#header').classList.remove('border-bottom');
    }
});