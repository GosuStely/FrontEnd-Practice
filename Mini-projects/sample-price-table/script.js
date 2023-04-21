let basicCardElement = document.getElementById('basic');
let proCardElement = document.getElementById('pro');
let premiumCardElement = document.getElementById('premium');

let usersBarElement = document.getElementById('users-bar');
let gbBarElement = document.getElementById('gb-bar');
let projectBarElement = document.getElementById('project-bar');

basicCardElement.addEventListener('mouseenter', mouseoverListener);
proCardElement.addEventListener('mouseenter', mouseoverListener);
premiumCardElement.addEventListener('mouseenter', mouseoverListener);

basicCardElement.addEventListener('mouseleave', reset);
proCardElement.addEventListener('mouseleave', reset);
premiumCardElement.addEventListener('mouseleave', reset);

function mouseoverListener(e) {
  if (e.target.id === 'basic') {
    usersBarElement.style.width = '30px';
    gbBarElement.style.width = '50px';
    projectBarElement.style.width = '40px';
  } else if (e.target.id === 'pro') {
    usersBarElement.style.width = '210px';
    gbBarElement.style.width = '260px';
    projectBarElement.style.width = '230px';
  } else if (e.target.id === 'premium') {
    usersBarElement.style.width = '460px';
    gbBarElement.style.width = '460px';
    projectBarElement.style.width = '460px';
  }
}
function reset() {
  usersBarElement.style.width = '0px';
  gbBarElement.style.width = '0px';
  projectBarElement.style.width = '0px';
}
