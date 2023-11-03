//login
function mostrar2() {
    let login = document.getElementById("login");
    login.style.display = "flex";
    let boton = document.getElementById("boton");
    boton.style.display = "none";
    var titulo = document.getElementById("titulo");
    titulo.style.display = "none";
}




//FUNCION LOGIN
function login() {
    let usuario = document.getElementById("usuario");
    let contraseña = document.getElementById("typePasswordX");
    if (usuario.value === "admin" && contraseña.value === "1234") {
        alert("...Bienvenido al infierno...");
        window.location.href = "../HALLOWEEN/Paginas/main.html";

    } else {
        alert("Te has equivocado monstruo");
    }
}

// FUNCION PARAR LA X DEL LOGIN
function cerraranuncio() {
    var ocultar = document.getElementById("login");
    ocultar.style.display = "none";
    let boton = document.getElementById("boton");
    boton.style.display = "flex";
    var titulo = document.getElementById("titulo");
    titulo.style.display = "flex";
}


