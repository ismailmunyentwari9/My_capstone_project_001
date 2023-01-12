/* menu dropdown codes....... */
const openHambuger = document.querySelector('.hambuger img');
const menu = document.querySelector('.hide-menu');
const closeButton = document.querySelector('.closeButton');
/* open button */
openHambuger.addEventListener('click', () => {
  menu.style.display = 'block';
  openHambuger.style.display = 'none';
  closeButton.style.display = 'block';
});

/* clossing button ... */
closeButton.addEventListener('click', () => {
  menu.style.display = 'none';
  openHambuger.style.display = 'block';
  closeButton.style.display = 'none';
});

/* menu dropdown codes for about page....... */
const openHambugerAbout = document.getElementById('hambuger_about  img');
const menuAbout = document.getElementById('hide_menu_about');
const closeButtonAbout = document.getElementById('closeButtonAbout');
/* open button */
openHambugerAbout.addEventListener('click', () => {
  menuAbout.style.display = 'block';
  openHambugerAbout.style.display = 'none';
  closeButtonAbout.style.display = 'block';
});

/* clossing button ... */
closeButton.addEventListener('click', () => {
  menuAbout.style.display = 'none';
  openHambugerAbout.style.display = 'block';
  closeButtonAbout.style.display = 'none';
});
