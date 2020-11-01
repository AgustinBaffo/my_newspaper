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
            this.style.backgroundColor = "#F99";
        }
    });
    email.addEventListener('blur',function(){
        if(!valEmail(this.value) && this.value != ''){
            iemail.style.visibility = "visible";
            this.style.backgroundColor = "#F99";
        }
    });
    pass.addEventListener('blur',function(){
        if(!valPass(this.value) && this.value != ''){
            ipass.style.visibility = "visible";
            this.style.backgroundColor = "#F99";
        }
    });
    cpass.addEventListener('blur',function(){
        if(!valCpass(pass.value,this.value) && this.value != ''){
            icpass.style.visibility = "visible";
            this.style.backgroundColor = "#F99";
        }
    });
    age.addEventListener('blur',function(){
        if(!valAge(this.value) && this.value != ''){
            iage.style.visibility = "visible";
            this.style.backgroundColor = "#F99";
        }
    });
    pnum.addEventListener('blur',function(){
        if(!valPnum(this.value) && this.value != ''){
            ipnum.style.visibility = "visible";
            this.style.backgroundColor = "#F99";
        }
    });
    address.addEventListener('blur',function(){
        if(!valAddress(this.value) && this.value != ''){
            iaddress.style.visibility = "visible";
            this.style.backgroundColor = "#F99";
        }
    });
    city.addEventListener('blur',function(){
        if(!valCity(this.value) && this.value != ''){
            icity.style.visibility = "visible";
            this.style.backgroundColor = "#F99";
        }
    });
    pcode.addEventListener('blur',function(){
        if(!valPcode(this.value) && this.value != ''){
            ipcode.style.visibility = "visible";
            this.style.backgroundColor = "#F99";
        }
    });
    dni.addEventListener('blur',function(){
        if(!valDNI(this.value) && this.value != ''){
            idni.style.visibility = "visible";
            this.style.backgroundColor = "#F99";
        }
    });
    
    //Clear errors
    fname.addEventListener('focus',function(){
        if( ifname.style.visibility = "visible"){
            ifname.style.visibility = "hidden";
            this.style.backgroundColor = "initial";
        }
    });
    email.addEventListener('focus',function(){
        if( iemail.style.visibility = "visible"){
            iemail.style.visibility = "hidden";
            this.style.backgroundColor = "initial";
        }
    });
    pass.addEventListener('focus',function(){
        if( ipass.style.visibility = "visible"){
            ipass.style.visibility = "hidden";
            this.style.backgroundColor = "initial";
        }
    });
    cpass.addEventListener('focus',function(){
        if( icpass.style.visibility = "visible"){
            icpass.style.visibility = "hidden";
            this.style.backgroundColor = "initial";
        }
    });
    age.addEventListener('focus',function(){
        if( iage.style.visibility = "visible"){
            iage.style.visibility = "hidden";
            this.style.backgroundColor = "initial";
        }
    });
    pnum.addEventListener('focus',function(){
        if( ipnum.style.visibility = "visible"){
            ipnum.style.visibility = "hidden";
            this.style.backgroundColor = "initial";
        }
    });
    address.addEventListener('focus',function(){
        if( iaddress.style.visibility = "visible"){
            iaddress.style.visibility = "hidden";
            this.style.backgroundColor = "initial";
        }
    });
    city.addEventListener('focus',function(){
        if( icity.style.visibility = "visible"){
            icity.style.visibility = "hidden";
            this.style.backgroundColor = "initial";
        }
    });
    pcode.addEventListener('focus',function(){
        if( ipcode.style.visibility = "visible"){
            ipcode.style.visibility = "hidden";
            this.style.backgroundColor = "initial";
        }
    });
    dni.addEventListener('focus',function(){
        if( idni.style.visibility = "visible"){
            idni.style.visibility = "hidden";
            this.style.backgroundColor = "initial";
        }
    });

    //Submit data validation
    btnSubmit.addEventListener('click',function(e){
        let sError = 'Invalid: ';
        let msg = '';
        let flag_error;

        e.preventDefault();

        if(!valName(fname.value)){
            sError = sError + 'Full Name, ';
            flag_error = true;
        }
        if(!valEmail(email.value)){
            sError = sError + 'Email, ';
            flag_error = true;
        }
        if(!valPass(pass.value)){
            sError = sError + 'Password, ';            
            flag_error = true;
        }
        if(!valCpass(pass.value, cpass.value)){
            sError = sError + "Passwords don't match, ";    
            flag_error = true;        
        }
        if(!valAge(age.value)){
            sError = sError + 'Age, ';           
            flag_error = true; 
        }
        if(!valPnum(pnum.value)){            
            sError = sError + 'Phone Number, ';
            flag_error = true;
        }
        if(!valAddress(address.value)){
            sError = sError + 'Address, ';      
            flag_error = true;      
        }
        if(!valCity(city.value)){
            sError = sError + 'City, ';      
            flag_error = true;      
        }
        if(!valPcode(pcode.value)){
            sError = sError + 'Postal Code, ';  
            flag_error = true;          
        }
        if(!valDNI(dni.value)){
            sError = sError + 'DNI, ';       
            flag_error = true;     
        }
        
        msg += 'Full Name: ' + fname.value + '\n'
        msg += 'Email: ' + email.value + '\n'
        msg += 'Password: ' + pass.value + '\n'
        msg += 'Confirm Password: ' + cpass.value + '\n'
        msg += 'Age: ' + age.value + '\n'
        msg += 'Phone Number: ' + pnum.value + '\n'
        msg += 'Address: ' + address.value + '\n'
        msg += 'City: ' + city.value + '\n'
        msg += 'Postal Code: ' + pcode.value + '\n'
        msg += 'DNI: ' + dni.value + '\n'

        if(flag_error){
            msg += '\n' + sError.slice(0,-2);
        }else{
            msg += '\n' + 'Successful Login!'
        }

        alert(msg);

    });
}

function valName(str){
    let re = /^[a-zA-Z\s]+$/
    if(!(re.test(str))){
        return false;
    }

    let a = str.split(' ');
    a = a.filter(removeSpace);   
    if (a.length < 2){           //If there are less than 2 elements, it is not: "char-space-char"
        return false;
    }

    return a.join('').length >=6;
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
    return (p===cp);
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
    let re = /^[a-zA-Z0-9\s]+$/
    let re2 = /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i   //at least 1 char and 1 number
    if(!re.test(str)){
        return false;
    }
    let a = str.split(' ');
    a = a.filter(removeSpace);   
    if (a.length < 2){              //If there are less than 2 elements, it is not: "char-space-char"
        return false;
    }
    
    let s = a.join('');
    return s.length >=5 && re2.test(s);
};
function valCity(str){
    let re = /^[a-zA-Z\s]+$/
    return re.test(str) && str.length >= 3;
};
function valPcode(str){
    let re = /^[0-9]+$/
    return re.test(str) && str.length >= 3;
};
function valDNI(str){
    let re = /^[0-9]+$/
    return (re.test(str) && str.length >= 7 && str.length <= 8);
};
function removeSpace(val){
    let re = /^[a-zA-Z0-9]+$/
    return re.test(val) && val != "";
}