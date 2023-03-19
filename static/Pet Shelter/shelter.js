let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');
let listProducts = [
    {
        id: 1,
        name: 'Pet Ka Ghar',
        city: 'kolkata,garia',
        quantity: 10,
        image: 'assets8/shelter1.jpeg',
        nature: {
            category: ['dog'],
            type: 'Pet Ka Ghar',
            location: ['kolkata']
        }
    },
    {
        id: 2,
        name: 'Chota Neighbours',
        city: 'delhi,chadni chock',
        quantiy: 30,
        image: 'assets8/shelter2.jpg',
        nature: {
            category: ['dog','cat'],
            
            type: 'Chota Neighbours',
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
        // create name product
        let newTitle = document.createElement('div');
        newTitle.classList.add('category');
        newTitle.innerText = item.name;
        newItem.appendChild(newTitle);
         // create name location
         let newCity = document.createElement('div');
         newCity.classList.add('city');
         newCity.innerText = item.city;
         newItem.appendChild(newCity);

        //  button

        list.appendChild(newItem);
    });
}
filter.addEventListener('submit', function(event){
    event.preventDefault();
    let valueFilter = event.target.elements;
    productFilter = listProducts.filter(item => {
       
        // check category
        if(valueFilter.category.value != ''){
            if(!item.nature.category.includes(valueFilter.category.value)){
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

