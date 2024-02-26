// const paragraphs = document.querySelector('p.error');
//To get single element


//To grap multiple elements : querySelectorsAll()
// const paragraphs = document.querySelectorAll('p')

// console.log(paragraphs)
// console.log(paragraphs[1])
// paragraphs.forEach(paragraphs=>{
//     console.log(paragraphs)
// })

//. THESE TWO RETURNS NODELIST WHILE OTHER WAYS RETURNS HTMLCOLLECTION


//SOME OTHER WAYS TO QUERY THE DOCUMENT
//  1. get an element by ID
    const fullName = document.getElementById('full-name');
    console.log(fullName)

//  2. get elements by className
    const errors = document.getElementsByClassName('error');
    console.log(errors)
//  3. get element by tagsname
    const paragraphs = document.getElementsByTagName('p');
    console.log(paragraphs[0])