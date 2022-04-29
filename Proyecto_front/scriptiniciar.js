


localStorage.getItem("flagsesion")
var flaglateral = false;

function inicio(){
    location.href="index.html"
}

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
        var footer=document.getElementById("footer");

        menulateral.style.display = "block";
        /*menulateral.style.height=altura + "px";*/
        logo.style.marginLeft = "6%";
        aside.style.marginLeft = "15%";
        hr.style.marginLeft = "16.4%";
        motivacion.style.marginLeft = "33%";
        consejos.style.marginLeft = "33%";
        empresa.style.marginLeft = "27%";
        apuntesbox.style.marginLeft="15%";
        tituloapuntes.style.marginLeft="57%";
        footer.style.width="115%";


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
        var footer=document.getElementById("footer");

        menulateral.style.display = "none";
        logo.style.marginLeft = "6%";
        aside.style.marginInlineStart = "0%";
        hr.style.marginLeft = "2%";
        motivacion.style.marginLeft = "23%";
        consejos.style.marginLeft = "26%";
        empresa.style.marginLeft = "20%";
        apuntesbox.style.marginLeft="0%";
        tituloapuntes.style.marginLeft="43%";
        footer.style.width="100%"

        flaglateral = false;
        console.log(flaglateral)
    }

}

function despliegueasignaturas() {
    
    if (!flaglateral) {
        var menulateral = document.getElementById("menulateral");
        var logo = document.getElementById("logo");
        var aside = document.getElementById("aside")
        var hr = document.getElementById("hr");
        var footer=document.getElementById("footer");
        var asignaturasmain=document.getElementById("asignaturasmain");
        var hrasig=document.getElementById("hrasig");

        menulateral.style.display = "block";
        logo.style.marginLeft = "6%";
        aside.style.marginLeft = "15%";
        hr.style.marginLeft = "16.4%";
        hr.style.width="82%"
        footer.style.width="102%";
        asignaturasmain.style.marginLeft="13%";
        hrasig.style.marginLeft="8%";
        hrasig.style.width="88%"

        flaglateral = true;
        
    }

    else {

        var menulateral = document.getElementById("menulateral");
        var logo = document.getElementById("logo");
        var aside = document.getElementById("aside")
        var hr = document.getElementById("hr");
        var footer=document.getElementById("footer");
        var asignaturasmain=document.getElementById("asignaturasmain");
        var hrasig=document.getElementById("hrasig");

        menulateral.style.display = "none";
        logo.style.marginLeft = "6%";
        aside.style.marginInlineStart = "0%";
        hr.style.marginLeft = "2%";
        hr.style.width="97%"
        footer.style.width="100%";
        asignaturasmain.style.marginLeft="0%";
        hrasig.style.marginLeft="2%";
        hrasig.style.width="95%"



        flaglateral = false;
        console.log(flaglateral)
    }

}

function despliegueperfil(){

    if (!flaglateral) {
        var menulateral = document.getElementById("menulateral");
        var logo = document.getElementById("logo");
        var aside = document.getElementById("aside")
        var hr = document.getElementById("hr");
        var footer=document.getElementById("footer");
        var formulariomodificar= document.getElementById("formulariomodificar");
       

        menulateral.style.display = "block";
        logo.style.marginLeft = "6%";
        aside.style.marginLeft = "15%";
        hr.style.marginLeft = "16.4%";
        footer.style.width="113%";
        formulariomodificar.style.marginLeft="30%"

        flaglateral = true;
        
    }
    else {

        var menulateral = document.getElementById("menulateral");
        var logo = document.getElementById("logo");
        var aside = document.getElementById("aside")
        var hr = document.getElementById("hr");
        var footer=document.getElementById("footer");
        var formulariomodificar= document.getElementById("formulariomodificar");


        menulateral.style.display = "none";
        logo.style.marginLeft = "6%";
        aside.style.marginInlineStart = "0%";
        hr.style.marginLeft = "2%";
        footer.style.width="100%";
        formulariomodificar.style.marginLeft="22%"

        flaglateral = false;
        console.log(flaglateral)
    }

}

function despliegueexplorar() {
    
    if (!flaglateral) {
        var menulateral = document.getElementById("menulateral");
        var logo = document.getElementById("logo");
        var aside = document.getElementById("aside")
        var hr = document.getElementById("hr");
        var footer=document.getElementById("footer");
        var todosapuntes=document.getElementById("todosapuntes")


        menulateral.style.display = "block";
        logo.style.marginLeft = "6%";
        aside.style.marginLeft = "15%";
        hr.style.marginLeft = "16.4%";
        hr.style.width="82%"
        footer.style.width="110%";
        todosapuntes.style.marginLeft="15%"


        flaglateral = true;
        
    }

    else {

        var menulateral = document.getElementById("menulateral");
        var logo = document.getElementById("logo");
        var aside = document.getElementById("aside")
        var hr = document.getElementById("hr");
        var footer=document.getElementById("footer");
        var todosapuntes=document.getElementById("todosapuntes")


        menulateral.style.display = "none";
        logo.style.marginLeft = "6%";
        aside.style.marginInlineStart = "0%";
        hr.style.marginLeft = "2%";
        hr.style.width="97%"
        footer.style.width="100%";
        todosapuntes.style.marginLeft="0%"




        flaglateral = false;
        console.log(flaglateral)
    }

}

function asignaturas(){
    if(localStorage.getItem("flagsesion")=="false")
    {
        iniciarSesion()
    }
    else{
        location.href="misasignaturas.html";

    }
}

function apuntes(){
    if(localStorage.getItem("flagsesion")=="false")
    {
        iniciarSesion()
    }
    else{
        location.href="index.html";
    }
}

function grupos(){
    if(localStorage.getItem("flagsesion")=="false")
    {
        iniciarSesion()
    }
}

function explorar(){
    if(localStorage.getItem("flagsesion")=="false")
    {
        iniciarSesion()
    }
    else{
        location.href="explorar.html"
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

function verPerfil(){
    location.href="modificarperfil.html"
}

function hoversubirp(){
    var subirapuntes = document.getElementById("subirapuntes");
    var upload=document.getElementById("upload")

    subirapuntes.style.textDecoration="underline"
    subirapuntes.style.cursor="pointer"
    subirapuntes.style.color="rgb(22, 255, 22)"
    upload.style.cursor="pointer"
    upload.style.color="rgb(22, 255, 22)"
}

function hoveroutsubirp(){
    var subirapuntes = document.getElementById("subirapuntes");
    var upload=document.getElementById("upload")

    subirapuntes.style.textDecoration="none"
    subirapuntes.style.color="rgb(101, 83, 255)"
    upload.style.color="rgb(101, 83, 255)"
}

function hoversubirsvg(){
    var subirapuntes = document.getElementById("subirapuntes");
    var upload=document.getElementById("upload")

    subirapuntes.style.textDecoration="underline"
    subirapuntes.style.cursor="pointer"
    subirapuntes.style.color="rgb(22, 255, 22)"
    upload.style.cursor="pointer"
    upload.style.color="rgb(22, 255, 22)"
}

function hoveroutsubirsvg(){
    var subirapuntes = document.getElementById("subirapuntes");
    var upload=document.getElementById("upload")

    subirapuntes.style.textDecoration="none"
    subirapuntes.style.color="rgb(101, 83, 255)"
    upload.style.color="rgb(101, 83, 255)"
}