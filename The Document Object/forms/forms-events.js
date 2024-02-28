//Capture data or information from users

// 1. Submit Event

const form = document.querySelector('form');
const username = document.querySelector('#username');
form.addEventListener('submit', e => {
    e.preventDefault(); //prevents default page reload behavior

    //get form fields
    // console.log(username.value);
    //another way of getting form field's value is using dot (.) with form
    //condition is must have (name and id) given to the form field
    console.log(form.username.value);
})