//Capture data or information from users

// 1. Submit Event

const form = document.querySelector('form');
const username = document.querySelector('#username');
const feedback = document.querySelector('#feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
    e.preventDefault(); //prevents default page reload behavior

    //get form fields
    // console.log(username.value);
    //another way of getting form field's value is using dot (.) with form
    //condition is must have (name and id) given to the form field
    const username = form.username.value;
    if(usernamePattern.test(username)){
        feedback.textContent='Valid Input';
        // feedback.style.color='black';
    }else{
        feedback.textContent='Username must contains upper and lower case letters between 6 to 12 characters';
        feedback.style.color='red'
    }
});

username.addEventListener('keyup',e=>{
    // console.log(e.target.value,'vv')
    if(usernamePattern.test(e.target.value)){
        form.username.setAttribute('class','success');
        console.log('pass');
    }else{
        form.username.setAttribute('class','error');
        console.log('failed');

    }
}); 

