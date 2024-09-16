document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields');
  } else {
    alert('Thank you for your message, ' + name + '! We will be in touch soon.');
    document.getElementById('contactForm').reset();
  }
});
