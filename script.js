const form=document.getElementById('form');
const handelErorr=document.getElementById("handelErorr");
const firstName=document.getElementById('firstName');
const handelLastName=document.getElementById("handelLastName");
const lastName=document.getElementById('lastName');
const email=document.getElementById("email");
const errorEmail=document.getElementById('errorEmail');
const password=document.getElementById("password");
const confirmPassword=document.getElementById('confirmPassword');
const errorP=document.getElementById("errorP")
const errorpass=document.getElementById('errorpass');
const pass=/[A-Z{1} a-z{1} 0-9{1} \W{1}]{8}/ig;
const checkEm=/\w@\w/;

function chekName(valueName,error){
const firstNameValue=valueName.value;

if(firstNameValue==''){
    error.innerText='FirstName is required';
}
 else{
    error.innerText='';
}
for (let index = 0; index < firstNameValue.length; index++) {
    if(!isNaN(firstNameValue[index])){
        error.innerText='user Name is not digits'

    }
}
}
function checkEmail(email,error){
    const emailValue=email.value;
    if(emailValue==''){
        error.innerText='Email is required';
    }
        if(emailValue.match(checkEm)==null){
            error.innerText="please enter valued email" ;
        
        }else{
            error.innerText=""
        }
    
}
function sub(){
    chekName(firstName,handelErorr)
    chekName(lastName,handelLastName)

}
function EnterPass(){
   let x= password.value.match(pass);
   if (x==null){
   errorP.innerText="password must be at least one upper case letter,upperCaseLatter,digits"
   } else{
    errorP.innerText=""
   }

}
function confirmPass(pass,confPass){
    const passValue=pass.value;
    const confPassValue=confPass.value;
    if(passValue==confPassValue){
        errorpass.innerText=""
    }else{
        errorpass.innerText='password must matched'
    }
function sub(){
    
    chekName(lastName,handelLastName);
    confirmPass(password,confirmPassword);
    EnterPass();
    checkEmail(email,errorEmail);
}
}