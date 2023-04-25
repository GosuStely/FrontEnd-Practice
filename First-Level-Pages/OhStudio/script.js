const navbarLinkElements = document.querySelectorAll('.navbar-a');

navbarLinkElements.forEach(links => {
  links.addEventListener('mouseenter', () => (links.id = 'special'));
  links.addEventListener('mouseleave', () => links.removeAttribute('id'));
});
