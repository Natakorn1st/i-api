// Replace this URL with the actual endpoint of your API
const apiUrl = 'http://localhost:5000/';

// Make a GET request to the API
fetch(apiUrl)
  .then(response => {
    // Check if the request was successful (status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    // Parse the JSON response
    return response.json();
  })
  .then(data => {
    // Handle the data from the API
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Fetch error:', error);
  });