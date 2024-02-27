//getting the button element 

const btn = document.querySelector('button');

// adding event 
// let i=1;
// btn.addEventListener('click',()=>{
//     console.log('Click :',i++)
// })


//Add strike through to the list item that is clicked

//select all list items
// const items = document.querySelectorAll('li');

//looping through each item to add event 'click' to each list item
// items.forEach(listItems => {
//     listItems.addEventListener('click', e => {
//         // console.log(listItems)
//         // console.log(e.target)
//         // e.target.style.textDecoration = 'line-through'
//         // e.stopPropagation() // it stops event propagation
//         //removing clicked element
//         e.target.remove();
//     })
// })



//ADDING AND REMOVING ELEMENTS
//For example: 
// const ul = document.querySelector('ul');
// ul.remove(); // this line will remove the element from dom  

//adding element 
//adding new li element of btn click
// btn.addEventListener('click',()=>{
//     ul.innerHTML+='<li>Something New...</li>'
// })


//another way of adding new element or create new element

btn.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'Something New to do...';
    ul.append(li); // appending newly created li (child of ul) to parent after the elements
    // ul.prepend(li); // appending newly created li (child of ul ) to parent before the elements
})

//Issue here, when we try to delete the newly created elements we cant, to solve this issue we have a concept of 
//event delegation





// EVENT Bubbling(event delegation)
// In event bubbling, the innermost element's event is handled first, and then the event propagates up through its ancestors.


// Event delegation is a programming pattern in which a single event listener is attached to a common ancestor 
// (usually a parent) rather than attaching individual event listeners to multiple child elements.

//ul is a parent of all li's
ul.addEventListener('click', (e) => {
    // console.log(e.target)
    if(e.target.tagName==='LI'){
        e.target.remove();
    }
})