function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

let animated = document.querySelectorAll(".animated");

document.querySelector('.contact-form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
      e.preventDefault();
      alert('Please fill in all the fields before submitting.');
    }
  });