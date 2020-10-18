function validar(){
var todo_correcto = true;
    if(document.getElementById('usuario').value.length < 2 ){
    todo_correcto = false;
    }
var expresion = /^[a-z]+@\w+\./i;
var email = document.form1.email.value;
    if (!expresion.test(email)){
    todo_correcto = false;
    }
}

