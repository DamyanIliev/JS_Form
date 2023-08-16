var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var addressError = document.getElementById('address-error');
var submitError = document.getElementById('submit-error');
var checkboxError = document.getElementById('checkbox-error');
var productboxError = document.getElementById('productbox-error');
var langError = document.getElementById('lang-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;  
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;
    if(phone.length = 0){
        phoneError.innerHTML = "Phone number is required";
        return false; 
    }
    if(phone.length !== 10){
        phoneError.innerHTML = "Phone number shuld be 10 digits";
        return false; 
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "Phone number must be only digits";
        return false; 
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length = 0){
        emailError.innerHTML = "Email is required";
        return false;
    } 

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Invalid Email';
        return false;  
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
    
}

function validateAddress(){
    var address = document.getElementById('contact-address').value;
    var requaired = 20;
    var left = requaired - address.length;

    if(left > 0){
        addressError.innerHTML = left + 'more characters required'
        return false; 
    }

    addressError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateCheckbox(){
    let checkbox = document.getElementById('accept');
    if (checkbox.checked){
        checkboxError.innerHTML= '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
    else{
        checkboxError.innerHTML = "Please accept the agreement to proceed";
        return false;
    }
}

function validateForm(){
    if(!validateName() || !validateEmail() || !validatePhone() || !validateAddress() || !validateCheckbox()){
        submitError.innerHTML = "Please fix errors to submitt";
        return false;
    }
}

function handleData()
{
    var form_data = new FormData(document.querySelector("form"));
    if(!form_data.has("langs[]"))
    {
        document.getElementById("chk_option_error").style.visibility = "visible";
        langError.innerHTML = "Please select one or two language";
      return false;      
    }
    else
    {
        document.getElementById("chk_option_error").style.visibility = "hiden";
      return true;
    }
}
