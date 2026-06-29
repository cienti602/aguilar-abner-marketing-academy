console.log("Marketing Digital Academy cargado correctamente.");
const botonesComprar = document.querySelectorAll(".btn-comprar");

botonesComprar.forEach(function(boton){

    boton.addEventListener("click", function(){

        const curso = this.dataset.curso;

        alert("Has seleccionado el curso: " + curso);

    });

});
const formulario = document.getElementById("formularioContacto");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const curso = document.getElementById("curso").value;
    const mensaje = document.getElementById("mensaje").value;

    if(nombre === "" || correo === "" || curso === "" || mensaje === ""){

        alert("Debe completar todos los campos.");

        return;
    }

    alert("Gracias por contactarnos, " + nombre + ".");

    formulario.reset();

});
const anio = new Date().getFullYear();

document.getElementById("anio").textContent = anio;

const btnArriba = document.getElementById("btnArriba");

btnArriba.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
