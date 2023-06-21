// Get necessary DOM elements
//const openPopupButton = document.getElementById('open-popup');
//const closePopupButton = document.getElementById('close-popup');
//const popupContainer = document.getElementById('popup-container');
//const popup = document.getElementById('popup');
const iframe = document.getElementById('website-iframe');

// Open the popup with the specified website URL
openPopupButton.addEventListener('click', () => {
const openUrl = 'https://bio.to/navigator'; // Replace with the desired website URL
iframe.src = openUrl;
//openPopupButton.classList.add('hidden');
//closePopupButton.classList.remove('hidden');
});

// Close the popup
closePopupButton.addEventListener('click', () => {
const closeUrl = 'https://bio.to/navigator';
iframe.src = closeUrl; // Clear the iframe source
//openPopupButton.classList.remove('hidden');
//closePopupButton.classList.add('hidden');
});

