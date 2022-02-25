const form= document.getElementById ('form');
const fullname= document.getElementById ('fullname');
const email= document.getElementById ('email');
const password= document.getElementById ('pass');
const password2= document.getElementById ('pass2');
const number= document.getElementById ('num');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const fullnameValue= fullname.value.trim();
    const emailValue= email.value.trim();
    const passwordValue= password.value.trim();
    const password2Value= password2.value.trim();
    const numValue= num.value.trim();


    if (fullnameValue === '') {
        setErrorFor(fullname,'Name cannot be blank')
    }
    else if(!isfullname(fullnameValue)){
        setErrorFor(fullname,'Enter full name')
    }
    else{setSuccessFor(fullname);
    }

    if (emailValue==='') {
        setErrorFor(email,'Enter valid email')
    }
    else if( !isEmail(emailValue)){
        setErrorFor(email, 'Email not valid')
    }
    else{setSuccessFor(email);
    }

    if (passwordValue ==='') {
        setErrorFor(password,'Password cannot be blank')
    }
    else if(passwordValue.length <6){
        setErrorFor(password,'Passwords needs 6 characters or more')
    }
    else{setSuccessFor(password);
    }

    if (password2Value ==='') {
        setErrorFor(password2,'Confirm Password cannot be blank')
    }
    else if(passwordValue !==password2Value){
        setErrorFor(password2,'Passwords do not match')
    }
    else{setSuccessFor(password2);
    }

    if (numValue ==='') {
        setErrorFor(num, 'Enter mobile number')   
    }
    else if(!isNum (numValue)){
        setErrorFor(num, 'Mobile number not valid')
    }
    else{setSuccessFor(num);
    }



}
function setErrorFor(input, message){
    const box = input.parentElement;
    const small= box.querySelector('small');

    small.innerText = message;

    box.className= 'box error';
}
function setSuccessFor(input){
    const box = input.parentElement;
    box.className= 'box success';
}
function isEmail(email){
    return  /^([a-zA-Z0-9\ .-_]+)@([a-zA-z\ -]+).([a-z]{2,10})$/.test(email);
}
function isNum(num){
    return /^[07|+4][0-9]{10}$/.test(num);
}
function isfullname(fullname){
    return /^[a-zA-Z]{3,}$/.test(fullname);
}
