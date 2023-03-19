let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');
// create a new button element
var button = document.createElement('button');

var cards = document.getElementsByClassName('container');
for (var i = 0; i < cards.length; i++) {
  cards[i].appendChild(button);
}
let listProducts = [
    {
        id: 1,
        city: 'kolkata',
        image: 'assets11/ngopic.jpg',
        
        nature: {
            Authorisation: [ 'NonAuth'],
            PrftORloss: ['Profit'],
            location: ['kolkata']
        }
    },
    {
        id: 2,
        city: 'chennai',
        image: 'assets11/ngopic.jpg',
        nature: {
            Authorisation: ['GovAuth'],
            PrftORloss: ['Profit'],
            location: ['chennai']
        }
    },
    {
        id: 3,
        city: 'delhi',
        image: 'assets11/ngopic.jpg',
        nature: {
            Authorisation: [ 'NonAuth'],
            PrftORloss: ['Loss'],
            location: ['delhi']
        }
    },
    {
        id: 4,
        city: 'mumbai',
        image: 'assets11/ngopic.jpg',
        nature: {
            Authorisation: ['GovAuth'],
            PrftORloss: ['Profit'],
            location: ['mumbai']
        }
    },
    {
        id: 5,
        city: 'bangalore',
        image: 'assets11/ngopic.jpg',
        nature: {
            Authorisation: ['NonAuth'],
            PrftORloss: ['Profit'],
            location: ['bangalore']
        }
    },
    {
        id: 6,
        city: 'delhi',
        image: 'assets11/ngopic.jpg',
        nature: {
            Authorisation: [ 'NonAuth'],
            PrftORloss: ['Loss'],
            location: ['delhi']
            
        }
    },


];
let productFilter = listProducts;
showProduct(productFilter);
function showProduct(productFilter){
    count.innerText = productFilter.length;
    list.innerHTML = '';
    productFilter.forEach(item => {
        let newItem = document.createElement('div');
        newItem.classList.add('item');

        // create image
        let newImage = new Image();
        newImage.src = item.image;
        newItem.appendChild(newImage);

         // create name location
         let newCity = document.createElement('div');
         newCity.classList.add('city');
         newCity.innerText = item.city;
         newItem.appendChild(newCity);
        list.appendChild(newItem);
        //button
        var images = document.querySelectorAll('.item');
for (var i = 0; i < images.length; i++) {
  var image = images[i];
  var button = document.createElement('button');
}
button.innerHTML = 'DONATE HERE';
button.style.width= "100px";
button.style.backgroundColor= "#0000";
button.style.borderRadius="10px";
button.style.background = "#f3000057";
button.style.marginTop ="6px";
  image.appendChild(button);
    });
}
filter.addEventListener('submit', function(event){
    event.preventDefault();
    let valueFilter = event.target.elements;
    productFilter = listProducts.filter(item => {
       // check location
       if(valueFilter.Authorisation.value != ''){
        if(!item.nature.Authorisation.includes(valueFilter.Authorisation.value)){
            return false;
        }
    }
        // check location
        if(valueFilter.PrftORloss.value != ''){
            if(!item.nature.PrftORloss.includes(valueFilter.PrftORloss.value)){
                return false;
            }
        }
        // check location
        if(valueFilter.location.value != ''){
            if(!item.nature.location.includes(valueFilter.location.value)){
                return false;
            }
        }


        return true;
    })
    showProduct(productFilter);
})