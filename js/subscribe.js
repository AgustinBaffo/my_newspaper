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

    const ifname = document.getElementById('img-fname');
    const iemail = document.getElementById('img-email');
    const ipass = document.getElementById('img-pass');
    const icpass = document.getElementById('img-cpass');
    const iage = document.getElementById('img-age');
    const ipnum = document.getElementById('img-pnum');
    const iaddress = document.getElementById('img-address');
    const icity = document.getElementById('img-city');
    const ipcode = document.getElementById('img-pcode');
    const idni = document.getElementById('img-dni');
    
    const btnSubmit = document.getElementById('btn-submit');
    const hello = document.getElementById('hello-name')

    //Hello message
    fname.addEventListener('keyup', function(e){ 
        hello.innerHTML = e.target.value.toUpperCase();
    });

    //Blur validation
    fname.addEventListener('blur',function(){
        if(!valName(this.value) && this.value != ''){
            ifname.style.visibility = "visible";
        }
    });

    //Clear errors
    fname.addEventListener('focus',function(){
        if( ifname.style.visibility = "visible"){
            ifname.style.visibility = "hidden";
        }
    });

    //Submit data validation
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
        
        //console.log(valName(fname.value));
        //console.log(valEmail(email.value));
        //console.log(valPass(pass.value));
        //console.log(valCpass(pass.value, cpass.value));
        //console.log(valAge(age.value));
        //console.log(valPnum(pnum.value));
        //console.log(valAddress(address.value));
        //console.log(valCity(city.value));
        //console.log(valPcode(pcode.value));
        //console.log(valDNI(dni.value));
    });
}

function valName(str){
    return (str.length >= 7 && str.indexOf(' ') != -1);
};
function valEmail(str){
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(str);
};
function valPass(str){
    let re = /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i
    return (re.test(str) && str.length >= 8);
};
function valCpass(p,cp){
    return (valPass(p) && p==cp);
};
function valAge(str){
    let re = /^[0-9]+$/
    return (re.test(str) && str >= 18);
};
function valPnum(str){
    let re = /^[0-9]+$/
    return (re.test(str) && str.length >= 7);
};
function valAddress(str){

};
function valCity(str){
    return str.length >= 3;
};
function valPcode(str){
    return str.length >= 3;
};
function valDNI(str){
    let re = /^[0-9]+$/
    return (re.test(str) && str.length >= 7 && str.length <= 8);
};

 /*
itemInput.addEventListener('focus',runEvent);
itemInput.addEventListener('blur',runEvent);
 */