function checarNome(){
    nome = document.getElementById("typeNameX").value;
    classes = document.getElementById("typeNameX").classList;
    if(nome.match(/\d+/)!=null || nome==""){
        document.getElementById("typeNameX").classList.add("is-invalid");
        nome==""?"Por favor, digite o seu nome":document.getElementById("invalidName").innerHTML = "Nome inválido";
     }else{
        classes.contains("is-invalid") ? classes.replace("is-invalid","is-valid") : classes.add("is-valid");
     }
}

function validarEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checarEmail(){
    email = document.getElementById("typeEmailX").value;
    classes = document.getElementById("typeEmailX").classList;
    if(!validarEmail(email) || email==""){
        document.getElementById("typeEmailX").classList.add("is-invalid");
        email==""?"Por favor, digite o seu email":document.getElementById("invalidEmail").innerHTML = "Email inválido";
     }else{
        classes.contains("is-invalid") ? classes.replace("is-invalid","is-valid") : classes.add("is-valid");
     }
}

function validarSenha(senha){
    re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    return re.test(senha);
}

function checarSenha(){
    senha = document.getElementById("typePasswordX").value;
    classes = document.getElementById("typePasswordX").classList;
    if(!validarSenha(senha)|| senha==""){
        document.getElementById("typePasswordX").classList.add("is-invalid");
        senha==""?"Por favor, digite a sua senha":document.getElementById("invalidPassword").innerHTML = "A senha deverá ter o mínimo de oito caracteres, pelo menos uma letra e um número";
     }else{
        classes.contains("is-invalid") ? classes.replace("is-invalid","is-valid") : classes.add("is-valid");
     }
}

function Enviar(){
    campos = ["typeNameX", "typeEmailX", "typePasswordX"];
    er = false;
    for(x=0;x<campos.length;x++){
        valor = document.getElementById(campos[x]).value;
        classes = document.getElementById(campos[x]).classList;
        if(classes.contains("is-invalid")||valor=="") er = true;
    }
    if(er) document.getElementById("buttonSubmit").classList.add("is-invalid");
    else window.location.href = "index.html";
}