document.addEventListener('DOMContentLoaded', init, false);

function init(){   

    //Get all form elements
    const fname = document.getElementById('fname');
    const email = document.getElementById('email');
    const pass = document.getElementById('pass');
    const cpass = document.getElementById('cpass');
    const age = document.getElementById('age');
    const pnum = document.getElementById('pnum');
    const address = document.getElementById('address');
    const city = document.getElementById('city');
    const pcode = document.getElementById('pcode');
    const dni = document.getElementById('dni');
    const btnSubmit = document.getElementById('btn-submit');
    const hello = document.getElementById('hello-name')

    //Hello message
    fname.addEventListener('keyup', function(e){ 
        hello.innerHTML = e.target.value.toUpperCase();
    });
    
    //Data validation
    btnSubmit.addEventListener('click',function(e){
        e.preventDefault();
        valName(fname.value);
        valEmail(email.value);
        valPass(pass.value);
        valCpass(pass.value, cpass.value);
        valAge(age.value);
        valPnum(pnum.value);
        valAddress(address.value);
        valCity(city.value);
        valPcode(pcode.value);
        valDNI(dni.value);
    });
}

function valName(str){
};
function valEmail(str){
};
function valPass(str){
};
function valCpass(p,cp){
};
function valAge(str){
};
function valPnum(str){
};
function valAddress(str){
};
function valCity(str){
};
function valPcode(str){
};
function valDNI(str){
};











/*window.onload = function() {
    //init();
    //doSomethingElse();
    console.dir(document);
    //alert("works!");
  };

  var button = document.getElementById('asd').addEventListener('click',function(){
    //do something
});

var button = document.getElementById('asd').addEventListener('click',my_function);

function my_function(e){
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.id);
}*/





 /*
itemInput.addEventListener('focus',runEvent);
itemInput.addEventListener('blur',runEvent);
 */
/*
var form = document.querySelector('form-input');
form.addEventListener('submit',runEventForm);
function runEventForm(e){  
    e.preventDefault();
    alert("submit");
    console.log('event: ' + e.type);  
}
*/