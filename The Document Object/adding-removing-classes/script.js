const div = document.querySelector('div');
console.log(div.classList); //=> initially there is no class in div so, output is 0


//adding classs
div.classList.add('error')
//so, where does it get's classes? answer is from style.css file
// style.css is linked to index.html

//removing class
div.classList.remove('error');

//Task: Add 10 paragraphs 
// add a random word error in 3 of p and succes in 2 and leave remaining 
// task is to, give class name error / success with the text provided to each p, leave blank
// to those p where no error/succes word is present

const paras = document.querySelectorAll('p');
// paras.forEach(text=>{
//     const innerText = text.innerText;
//     const isSuccess = innerText.includes('success');
//     const isError  = innerText.includes('error');
//     if(isSuccess){
//         text.classList.add('success');
//     }

//     if(isError){
//         text.classList.add('error')
//     }
// })


paras.forEach(p=>{
    if(p.textContent.includes('error')){
        p.classList.add('error')
    }

    if(p.textContent.includes('success')){
        p.classList.add('success')
    }
})


//toggling class
const title = document.querySelector('.title');
title.classList.toggle('test'); // add test class , when test class does not exist
title.classList.toggle('test'); // remove text class, when test class is already exists