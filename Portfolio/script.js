// Ensure footer is at the bottom of the page
const body = document.querySelector('body');
const footer = document.querySelector('footer');
if (body.offsetHeight + footer.offsetHeight < window.innerHeight) {
    footer.style.position = 'absolute';
    footer.style.bottom = '0';
    footer.style.width = '100%';
}
