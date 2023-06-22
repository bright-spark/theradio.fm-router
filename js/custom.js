// Get necessary DOM elements
const openPopupButton = document.getElementById('open-popup');
const closePopupButton = document.getElementById('close-popup');
const popupContainer = document.getElementById('popup-container');
const popup = document.getElementById('popup');
const iframe = document.getElementById('website-iframe');

// Open the popup with the specified website URL
openPopupButton.addEventListener('click', () => {
  const websiteUrl = 'https://lnk.to/navigator'; // Replace with the desired website URL
  iframe.src = websiteUrl;
  popup.classList.remove('hidden');
  popupContainer.style.overflow = 'hidden'; // Prevent scrolling of the main page
});

// Close the popup
closePopupButton.addEventListener('click', () => {
  iframe.src = ''; // Clear the iframe source
  popup.classList.add('hidden');
  popupContainer.style.overflow = 'auto'; // Restore scrolling of the main page
});
