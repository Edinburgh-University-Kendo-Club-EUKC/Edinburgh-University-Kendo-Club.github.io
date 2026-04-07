const contactFormNextField = document.getElementById('contact-form-next');

if (contactFormNextField) {
  contactFormNextField.value = new URL(
    'contact-success.html',
    window.location.href
  ).href;
}
