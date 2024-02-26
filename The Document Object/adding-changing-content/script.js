// const paragraph = document.querySelector('p');

const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(paragraph=>{
    console.log(paragraph.innerText)
    paragraph.innerText+=' Good to meet you!'
});

