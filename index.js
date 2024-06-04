import {contacto, educacion, experiencia, skills } from './datos.js'

let navegadores = document.querySelectorAll('a');
let inyeccion1 = document.getElementById('info1');
let inyeccion2 = document.getElementById('info2');

console.log(navegadores);

navegadores.forEach((navegador) => {
    navegador.addEventListener('click', ()=>{
        navegadores.forEach((navegador) =>{
            navegador.classList.remove('active');
        });
        navegador.classList.add('active');
        let contenido = obtenerContenido(navegador.textContent);
        inyeccion1.innerText = contenido.info1;
        inyeccion2.innerText = contenido.info2;
    })
})

function obtenerContenido(clave){
    const contenido = {
        'contacto': contacto,
        'experiencia': experiencia,
        'educacion': educacion,
        'skills': skills
    }
    return contenido[clave];
}
