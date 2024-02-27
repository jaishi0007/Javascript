const ul = document.querySelector('ul');
const lists = document.querySelectorAll('li');

lists.forEach(list => {
    list.addEventListener('click', (e) => {
        console.log(e.target, ' Event from LI')
    })
})

ul.addEventListener('click', (e) => {
    console.log(e.target, ' Event from UL');
})


//Event Bubbling , initially event attached to li is fired then event attached to it's parent, ul, is fired
//Events gets propagated to it's parent nodes from child node.

// the innermost element's event is handled first   : li event
// and then the event propagates up through its ancestors   : ul events