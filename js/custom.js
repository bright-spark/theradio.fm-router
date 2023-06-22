// Get necessary DOM elements
const openViewButton = document.getElementById('open-view');
const iframe = document.getElementById('iframe-1046');

// Open the iframe with the specified website URL
openViewButton.addEventListener('click', () => {
    const websiteUrl = 'https://external-navigator.carrd.co'; // Replace with the desired website URL
    iframe.src = websiteUrl;
});
