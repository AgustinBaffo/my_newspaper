document.addEventListener('DOMContentLoaded', init, false);

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


function init(){    
    let fname = document.getElementById('fname'); 
    fname.addEventListener('keyup', function runEvent(e){ 
        document.getElementById('hello-name').innerHTML = e.target.value.toUpperCase();
    });    
}



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