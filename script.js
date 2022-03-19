const form=document.querySelector('form');
const inputs=document.querySelectorAll('input');
const submitBtn = document.querySelector('button');
const errorMessages=document.querySelectorAll('.inputContainer > div > div:last-child')
let password=document.querySelectorAll('input[type=password]')[0];
let confirmPassword=document.querySelectorAll('input[type=password]')[1];

form.noValidate=true;
form.addEventListener('submit',(e)=>{
    const form = e.target;
    if(!form.checkValidity() || password.value!=confirmPassword.value){
        e.preventDefault(); // prevent submit when form is invalid
        indicateInputValidation();
        inputs.forEach((input)=>{
            input.addEventListener('input',indicateInputValidation)
        })
    }

    
})


function indicateInputValidation(){
    for(let i=0;i<inputs.length;i++){
        let input=inputs[i];
        let errorMessage=errorMessages[i];

        // check if confirm password matches the password
        if(input.name=='confirmpassword'){
            if(confirmPassword.value!=password.value || confirmPassword.value.length==0){
                showOrHideMessage(input,errorMessage,'valid','invalid','block'); //show error message
                break;
            }else{
                showOrHideMessage(input,errorMessage,'invalid','valid','none'); // hide the message back
            }
        }else{
            if(input.validity.valid){
                showOrHideMessage(input,errorMessage,'invalid','valid','none')
            }else{
                showOrHideMessage(input,errorMessage,'valid','invalid','block')
            }
        }


    }
}

// show or hide validity error message
function showOrHideMessage(input,errorMessage,removedClass,addClass,displayOrNot){
    input.classList.remove(removedClass);
    input.classList.add(addClass);
    errorMessage.style.display=displayOrNot;
}