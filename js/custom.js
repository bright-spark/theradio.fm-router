// Get necessary DOM elements
const openPopupButton = document.getElementById('open-popup');
const closePopupButton = document.getElementById('close-popup');
const popupContainer = document.getElementById('popup-container');
const popup = document.getElementById('popup');
const iframe = document.getElementById('website-iframe');

// JavaScript function to read the value of "link" from the query string
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  return null;
}

// Function to update the iframe source
function updateIframeSource() {
  var linkValue = getQueryVariable('link');
  if (linkValue) {
    var iframe = document.getElementById('website-iframe');
    iframe.src = 'https://' + linkValue;
  }
}

// Event listener to update the iframe source when the query string changes
window.onpopstate = function() {
  updateIframeSource();
};

// Initial update of the iframe source
updateIframeSource();

// Open the popup with the specified website URL
openPopupButton.addEventListener('click', () => {
const websiteUrl = 'https://bio.to/navigator'; // Replace with the desired website URL
iframe.src = websiteUrl;
//openPopupButton.classList.add('hidden');
//closePopupButton.classList.remove('hidden');
});

// Close the popup
closePopupButton.addEventListener('click', () => {
iframe.src = 'https://bio.to/navigator'; // Clear the iframe source
//openPopupButton.classList.remove('hidden');
//closePopupButton.classList.add('hidden');
});

