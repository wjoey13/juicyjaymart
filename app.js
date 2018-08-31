// const apiUrl = 'https://juicyjbackend.herokuapp.com/api/v2/items';
// (function initializePage() {
//     fetch(apiUrl)
//       .then(response => response.json())
//       .then(response => response.data)
//       .then(data => response.data(data));
//     console.log(items(data));
//   })();

  let stuff = document.getElementById('stuff')
const apiUrl = 'https://juicyjbackend.herokuapp.com/api/v2/items'

function initializePage() {
    fetch(apiUrl)
    .then(function(response){
        return response.json()
    })
    .then(function(myJson){
        console.log(JSON.stringify(myJson))
    })
    
    
    
    //   .then(response => response.json())
    //   .then(response => response)
  
   
  }

  initializePage()
  

//   {
//     "items": [
//     {
//     "id": 1,
//     "title": "Snickers Bar",
//     "img": "password",
//     "category": "Candy",
//     "description": "You aren't yourself when you're hungry. Grab a Snickers",
//     "quantity": 10,
//     "price": 3
//     }
//     ]
//     }