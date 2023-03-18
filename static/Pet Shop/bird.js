let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');
let listProducts = [
    {
        id: 1,
        name: 'Parakeets yellow,sky-blue,light-green',
        city: 'kolkata,garia,700050',
        price: 2000,
        quantity: 10,
        image: 'assets4/bird1.jpeg',
        nature: {
            sex: ['male','female'],
            type: 'Parakeets',
            location: ['kolkata']
        }
    },
    {
        id: 2,
        name: 'Cockatiels yellow-grey',
        city: 'delhi,chadni chock',
        price: 3000,
        quantiy: 30,
        image: 'assets4/bird2.jpeg',
        nature: {
            sex: ['male'],
            
            type: 'Cockatiels',
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
        newTitle.classList.add('title');
        newTitle.innerText = item.name;
        newItem.appendChild(newTitle);
         // create name location
         let newCity = document.createElement('div');
         newCity.classList.add('city');
         newCity.innerText = item.city;
         newItem.appendChild(newCity);
        // create price
        let newPrice = document.createElement('div');
        newPrice.classList.add('price');
        newPrice.innerText ='Rs '+ item.price.toLocaleString();
        newItem.appendChild(newPrice);

        list.appendChild(newItem);
    });
}
filter.addEventListener('submit', function(event){
    event.preventDefault();
    let valueFilter = event.target.elements;
    productFilter = listProducts.filter(item => {
        // check category
        if(valueFilter.breed.value != ''){
            if(item.nature.type != valueFilter.breed.value){
                return false;
            }
        }
        // check sex
        if(valueFilter.sex.value != ''){
            if(!item.nature.sex.includes(valueFilter.sex.value)){
                return false;
            }
        }
        // check name
        if(valueFilter.name.value != ''){
            if(!item.name.includes(valueFilter.name.value)){
                return false;
            }
        }
        //  check max price
        if(valueFilter.maxPrice.value != ''){
            if(item.price > valueFilter.maxPrice.value){
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