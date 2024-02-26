const article = document.querySelector('article');

//getting children
// console.log(article.children)

//Converting HTMLCollection To Array
//and adding class to all the childern nodes of article
Array.from(article.children).forEach(child=>{
    child.classList.add('article-items');
});


//getting parent element
const title = document.querySelector('h2');
console.log(title.parentElement)

//getting nextElementSibling
console.log(title.nextElementSibling)

//getting previousElementSibling
console.log(title.previousElementSibling)

