let navbarLinkElements = document.getElementsByClassName('navbar-a');

for (let index = 0; index < navbarLinkElements.length; index++) {
  const element = navbarLinkElements[index];
  element.addEventListener('mouseenter', GiveId);
  element.addEventListener('mouseleave', RemoveId);

  function GiveId() {
    // element.setAttribute('id', 'special');
    element.id = 'special';
  }
  function RemoveId() {
    element.removeAttribute('id');
  }
}
