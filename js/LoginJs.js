//login
function mostrar2() {
    var mostrar = document.getElementsByClassName("contenedor-login");
    for (var i = 0; i < mostrar.length; i++) {
        mostrar[i].style.display = "flex";
    }
    ocultar();
}

function ocultar2() {
    var oculto = document.getElementsByClassName("contenedor-login");
    for (var i = 0; i < oculto.length; i++) {
        oculto[i].style.display = "none";
    }
}

function cerraranuncio(){
    var ocultar = document.getElementById("cerrar");
    ocultar.style.display = "none";
}

function cerrarRegistro(){
    var ocultar = document.getElementById("cerrarRegistro");
    ocultar.style.display = "none";
}