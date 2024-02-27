const ul = document.querySelector('ul');
const lists = document.querySelectorAll('li');

lists.forEach(list => {
    list.addEventListener('click', (e) => {
        console.log(e.target, ' Event from LI')
    })
})


//Event delegation is a programming pattern in which a single event listener is attached to a common ancestor 
//  (usually a parent) rather than attaching individual event listeners to multiple child elements. 
ul.addEventListener('click', (e) => {
    console.log(e.target, ' Event from UL');
})


//Event Bubbling , initially event attached to li is fired then event attached to it's parent, ul, is fired
//Events gets propagated to it's parent nodes from child node.

// the innermost element's event is handled first   : li event
// and then the event propagates up through its ancestors   : ul events