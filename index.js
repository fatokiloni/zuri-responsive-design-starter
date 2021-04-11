function scrollToAbout(event) {
  event.preventDefault();
  let elment = document.getElementById('js-about');

  elment.scrollIntoView(true);
}

function scrollToGallery(event) {
  event.preventDefault();
  let elment = document.getElementById('js-gallery');

  elment.scrollIntoView(true);
}

function scrollToContact(event) {
  event.preventDefault();
  let elment = document.getElementById('js-contact');
  
  elment.scrollIntoView(true);
}