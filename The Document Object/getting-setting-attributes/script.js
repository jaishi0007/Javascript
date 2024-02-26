//Getting attribute and it's value
const link = document.querySelector('a');
console.log(link.getAttribute('href'))

// Setting or Changing The Arrribute Value
link.setAttribute('href','https://facebook.com');

//Changing Inner Text 
link.innerText='Link to facebook'

//We can also add set attribute that doesnot already exists in the html element,
//for example, a style attribute that doesnot exist in p element to change it's color from black to green

const p = document.querySelector('p');
p.setAttribute('style','color:green');