import getData from './getData.js';
import post from './creacion.js';
import {get} from './lectura.js';
import {showData} from './showData.js'
import {delette} from './eliminacion.js';

let url = '  http://localhost:4000/data/';
let formulario = document.getElementById('formulario');
let listarCita = document.getElementById('listarCita');

let objeto = {};
let array = [];

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    objeto = getData();
    post(url,objeto)
})


document.addEventListener('DOMContentLoaded', async() => {
    
    array = await get(url);
    showData(array,listarCita);
})


listarCita.addEventListener('click', (e) => {
    let idEliminar = e.target.id;
    
    if(idEliminar !== ''){
        delette(url,idEliminar)
    }
})