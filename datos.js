const inputTexto = document.getElementById('input-texto');
const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');
const inputResultado = document.getElementById('mensaje-texto');
const btnCopiar = document.getElementById('btn-copy');
const soloLetras ='^[a-z !ñ]+$';
var btn_1 = document.getElementById('btn-encriptar');
var btn_2 = document.getElementById('btn-desencriptar');
var btn_3 = document.getElementById('btn-copy');
var p1 = document.getElementById('resultadot');
var imagen2 = document.getElementById('munecoo');
document.addEventListener('DOMContentLoaded', () => {
btnEncriptar.addEventListener('click', encriptarTexto);
btnDesencriptar.addEventListener('click', desencriptarTexto);
btnCopiar.addEventListener('click', copiarTexto);
});

function encriptarTexto(e) {
e.preventDefault();
inputResultado.value = '';
let texto = inputTexto.value;
  
if(texto.match(soloLetras)!=null){
let palabras = texto.split(' ');
let nuevasPalabras = [];
    
for (let palabra of palabras) {
palabra = palabra.replaceAll('e','enter');
palabra = palabra.replaceAll('i','imes');
palabra = palabra.replaceAll('a','ai');
palabra = palabra.replaceAll('o','ober');
palabra = palabra.replaceAll('u','ufat');      
      
nuevasPalabras.push(palabra);    
}

const resultado = nuevasPalabras.join(' ');
    
inputResultado.value = resultado;
} else {
mostrarError('Solo se permiten letras minúsculas, sin acentos');
return;
}  
}

function desencriptarTexto(e) {
e.preventDefault();  
inputResultado.value = '';
let texto = inputTexto.value;

if(texto.match(soloLetras)!=null){
let palabras = texto.split(" ");
let nuevasPalabras = [];    

for (let palabra of palabras) {
palabra = palabra.replaceAll('enter','e');
palabra = palabra.replaceAll('imes','i');
palabra = palabra.replaceAll('ai','a');
palabra = palabra.replaceAll('ober','o');
palabra = palabra.replaceAll('ufat','u');
nuevasPalabras.push(palabra);    
}

const resultado = nuevasPalabras.join(' ');
    
inputResultado.value = resultado;
} else {
mostrarError('Solo se permiten letras minúsculas, sin acentos');
return;
}  
}

function mostrarError(mensaje) {
const existeError = document.querySelector('.error');
  
if(!existeError) {
const formulario = document.getElementById('formulario');
const divMensaje = document.createElement('div');
divMensaje.classList.add('error');
  
divMensaje.textContent = mensaje;            
formulario.appendChild(divMensaje);
      
setTimeout(()=> {
divMensaje.remove();
}, 3000);
}
}

function copiarTexto(e) {
e.preventDefault(); 
const mensaje = inputResultado.value;

navigator.clipboard.writeText(mensaje);

}
function mostrarBoton2 () {
btn_1.style.display = 'none';
btn_2.style.display = 'inline';
btn_3.style.display = 'inline';
p1.style.display = 'inline';
imagen2.style.display = 'none';
}
function mostrarBoton1 () {
btn_1.style.display = 'none';
btn_2.style.display = 'inline';
btn_3.style.display = 'inline';
p1.style.display = 'inline';
imagen2.style.display = 'none';
}
function mostrarBoton3 () {
btn_2.style.display = 'inline';
btn_1.style.display = 'inline';
btn_3.style.display = 'none';
p1.style.display = 'none';
imagen2.style.display = 'inline';
   
}