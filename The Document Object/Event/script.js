//getting the button element 

const btn = document.querySelector('button');

// adding event 
let i=1;
btn.addEventListener('click',()=>{
    console.log('Click :',i++)
})


//Add strike through to the list item that is clicked

//select all list items
const items = document.querySelectorAll('li');

//looping through each item to add event 'click' to each list item
items.forEach(listItems => {
    listItems.addEventListener('click', e => {
        // console.log(listItems)
        // console.log(e.target)
        // e.target.style.textDecoration = 'line-through'

        //removing clicked element
        e.target.remove();
    })
})



//ADDING AND REMOVING ELEMENTS
//For example: 
// const ul = document.querySelector('ul');
// ul.remove(); // this line will remove the element from dom  

//adding element
