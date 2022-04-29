function Registro(){
    
        var nombre=document.getElementById("nombre").value;
        var apellido=document.getElementById("apellidos").value;
        var correo = document.getElementById("email").value;
        var contraseña =document.getElementById("contraseña").value;
        var fechaN=document.getElementById("fechanac").value;
        var estudios=document.getElementById("estudios").value;
        var aux={
            "apellido":apellido,
            "contraseña":contraseña,
            "correo":correo,
            "estudios":estudios,
            "nombre":nombre
        }
        
        let request = new XMLHttpRequest();
    
        request.open("POST", "http://localhost:8086/usuario/registro", true);
        request.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        request.onreadystatechange = function() {
    
                if (this.readyState == 4 && this.status == 200) {
                let response = this.response;
            }
        }
        
        request.send(JSON.stringify(aux));
}