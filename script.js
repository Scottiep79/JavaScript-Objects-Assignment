//creating an array to hold our food objects
let foodList = [];

//creating our first food object
let food1 = {
  name:'tacos',
  price:3
};

//adding the first food object to the end of the array
foodList.push(food1);

//creating our second food object
let food2 = {
  name:'sandwich',
  price:7
};


//adding the second food object to the end of the array
foodList.push(food2);

let food3 = {
  name:'spaghetti',
  price:5
};

foodList.push(food3);

let food4 = {
  name:'salad',
  price:8
};

foodList.push(food4);

let food5 = {
  name:'fish',
  price:9
};

foodList.push(food5);

//TODO: add 3 more food objects to the array.  You decide the name and price.


//printing all food names from the array to the console
//TODO: change the loop to print out the names AND the prices to the console
for(x=0;x<foodList.length;x++){
  console.log('name: '+foodList[x].name)
  console.log('price: '+foodList[x].price)
  console.log('\n');
  //add the price here
}
//TODO: create a loop that will add the names and prices of each food to the <div id='menu'>

for(x=0;x<foodList.length;x++){
  let newnode = document.createElement('p');
  let newnode1 = document.createElement('p');
    newnode.innerHTML = ('name: '+foodList[x].name);
    newnode1.innerHTML = ('price: '+foodList[x].price);
    document.getElementById('menu').appendChild(newnode);
    document.getElementById('menu').appendChild(newnode1);
  
  //add the price here
}

