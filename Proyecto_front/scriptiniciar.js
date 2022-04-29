localStorage.getItem("flagsesion")
var flaglateral = false;

function iniciado(){
    if(localStorage.getItem("flagsesion")=="true"){
        var registrar = document.getElementById("registrar");
        var perfil=document.getElementById("perfil");
        var motivacion = document.getElementById("motivacion");
        var consejos = document.getElementById("consejos"); 
        var homeapuntes = document.getElementById("homeapuntes")
        
        registrar.style.display = "none";
        motivacion.style.display="none";
        consejos.style.display="none";

        perfil.style.display="block";
        homeapuntes.style.display="block";

        

    }
    
}

function iniciarSesion() {
    var formularioregis = document.getElementById("formularioregis")
    formularioregis.style.display = "block";

    var header = document.getElementById("header");
    var hr = document.getElementById("hr");
    var motivacion = document.getElementById("motivacion");
    var consejos = document.getElementById("consejos");
    var registrar = document.getElementById("registrar");
    var menulateral = document.getElementById("menulateral");
    var aside = document.getElementById("aside")

    header.style.filter = "blur(6px)";
    hr.style.filter = "blur(6px)";
    motivacion.style.filter = "blur(6px)";
    consejos.style.filter = "blur(6px)";
    menulateral.style.filter="blur(6px)";

    registrar.style.display = "none";
    aside.style.display="none";

}

function volver() {
    var formularioregis = document.getElementById("formularioregis")
    formularioregis.style.display = "none";

    var header = document.getElementById("header");
    var hr = document.getElementById("hr");
    var motivacion = document.getElementById("motivacion");
    var consejos = document.getElementById("consejos");
    var registrar = document.getElementById("registrar");
    var menulateral = document.getElementById("menulateral");
    var aside = document.getElementById("aside");

    header.style.filter = "blur(0px)";
    hr.style.filter = "blur(0px)";
    motivacion.style.filter = "blur(0px)";
    consejos.style.filter = "blur(0px)";
    menulateral.style.filter="blur(0px)";

    registrar.style.display = "block";
    aside.style.display="block"
    
}

function formularioInicio() {
    var formularioregis = document.getElementById("formularioregis")
    formularioregis.style.display = "none";

    var header = document.getElementById("header");
    var hr = document.getElementById("hr");
    var motivacion = document.getElementById("motivacion");
    var consejos = document.getElementById("consejos");
    var registrar = document.getElementById("registrar");
    var menulateral = document.getElementById("menulateral");
    var aside = document.getElementById("aside");

    header.style.filter = "blur(6px)";
    hr.style.filter = "blur(6px)";
    motivacion.style.filter = "blur(6px)";
    consejos.style.filter = "blur(6px)";
    menulateral.style.filter="blur(6px)";
    

    registrar.style.display = "none";
    aside.style.display="none"

    var formularioinicio = document.getElementById("formularioinicio")
    formularioinicio.style.display = "block";
}

function volverInicio() {
    var formularioinicio = document.getElementById("formularioinicio")
    formularioinicio.style.display = "none";

    var header = document.getElementById("header");
    var hr = document.getElementById("hr");
    var motivacion = document.getElementById("motivacion");
    var consejos = document.getElementById("consejos");
    var registrar = document.getElementById("registrar");
    var menulateral = document.getElementById("menulateral");
    var aside = document.getElementById("aside");

    header.style.filter = "blur(0px)";
    hr.style.filter = "blur(0px)";
    motivacion.style.filter = "blur(0px)";
    consejos.style.filter = "blur(0px)";
    menulateral.style.filter="blur(0px)";

    registrar.style.display = "block";
    aside.style.display="block";
}

function formularioRegistro() {
    var formularioinicio = document.getElementById("formularioinicio")
    formularioinicio.style.display = "none";

    var formularioregis = document.getElementById("formularioregis")
    formularioregis.style.display = "block";

    var header = document.getElementById("header");
    var hr = document.getElementById("hr");
    var motivacion = document.getElementById("motivacion");
    var consejos = document.getElementById("consejos");
    var menulateral = document.getElementById("menulateral");

    header.style.filter = "blur(6px)";
    hr.style.filter = "blur(6px)";
    motivacion.style.filter = "blur(6px)";
    consejos.style.filter = "blur(6px)";
    menulateral.style.filter="blur(6px)";
}

function despliegue() {
    
    if (!flaglateral) {
        var menulateral = document.getElementById("menulateral");
        var logo = document.getElementById("logo");
        var aside = document.getElementById("aside")
        var hr = document.getElementById("hr");
        var motivacion = document.getElementById("motivacion");
        var consejos = document.getElementById("consejos");
        var empresa = document.getElementById("empresa");
        var apuntesbox= document.getElementById("apuntesbox");
        var cajita =document.getElementsByClassName("cajita");
        var tituloapuntes=document.getElementById("tituloapuntes");

        menulateral.style.display = "block";
        logo.style.marginLeft = "6%";
        aside.style.marginLeft = "15%";
        hr.style.marginLeft = "16.4%";
        motivacion.style.marginLeft = "33%";
        consejos.style.marginLeft = "33%";
        empresa.style.marginLeft = "27%";
        apuntesbox.style.marginLeft="15%";
        tituloapuntes.style.marginLeft="57%";

        flaglateral = true;
        
    }

    else {

        var menulateral = document.getElementById("menulateral");
        var logo = document.getElementById("logo");
        var aside = document.getElementById("aside")
        var hr = document.getElementById("hr");
        var motivacion = document.getElementById("motivacion");
        var consejos = document.getElementById("consejos");
        var empresa = document.getElementById("empresa");
        var apuntesbox= document.getElementById("apuntesbox");
        var tituloapuntes=document.getElementById("tituloapuntes");

        menulateral.style.display = "none";
        logo.style.marginLeft = "6%";
        aside.style.marginInlineStart = "0%";
        hr.style.marginLeft = "2%";
        motivacion.style.marginLeft = "23%";
        consejos.style.marginLeft = "23%";
        empresa.style.marginLeft = "20%";
        apuntesbox.style.marginLeft="2%";
        tituloapuntes.style.marginLeft="43%";

        flaglateral = false;
        console.log(flaglateral)
    }

}

function asignaturas(){
    if(localStorage.getItem("flagsesion")=="false")
    {
        iniciarSesion()
    }
}

function apuntes(){
    if(localStorage.getItem("flagsesion")=="false")
    {
        iniciarSesion()
    }
}

function grupos(){
    if(localStorage.getItem("flagsesion")=="false")
    {
        iniciarSesion()
    }
}

function cambiarPerfil(){
    if(localStorage.getItem("flagsesion")=="false")
    {
        iniciarSesion()
    }
}

function cerrarsesion(){
    location.href="index.html"
    localStorage.setItem("flagsesion", false)
}

function inicioSesion()
{
    localStorage.setItem("flagsesion", true);
    location.href="index.html"
    iniciado()
    
}