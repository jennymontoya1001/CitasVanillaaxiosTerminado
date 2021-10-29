
export const showData = (arreglo,listarCita) => {

    arreglo.forEach(cita => {
        const {nombre,fecha,hora,sintomas,id} = cita;
        listarCita.innerHTML += `
                        <td>${nombre}</td>
                        <td>${fecha}</td>
                        <td>${hora}</td>
                        <td>${sintomas}</td>
                        <td><button id=${id}>Borrar</button></td>
        `
    })
}