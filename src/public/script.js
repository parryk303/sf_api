// Get the access token from the URL hash
const accessToken = new URLSearchParams(window.location.hash.substring(1)).get('access_token');

// Display the access token on the page
document.getElementById('accessToken').innerText = accessToken;
