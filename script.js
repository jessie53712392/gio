if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then( () => {
    console.log('Service Worker Registered')
})
})
}

document.getElementById('fetchDog').addEventListener('click', function () {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        document.getElementById('dogImageContainer').innerHTML = `<img src="${data.message}" alt="Dog Image">`;
      })
      .catch(error => console.error('Error fetching data:', error));
  });