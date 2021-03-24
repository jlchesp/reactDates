import React, { Fragment, useState } from 'react'

const Form = () => {

    // State de citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    // Función que se ejecuta cada vez que el usuario escribe en un input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        });
    }

    // Extraer los valores de la cita
    const {mascota, propietario, fecha, hora, sintomas} = cita;

    // Envío del formulario
    const submitCita = e => {
        e.preventDefault();

        // Validar

        // Asignar ID

        // Crear la cita

        // Reiniciar el form
    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>

            <form onSubmit={submitCita}>
                <label>Nombre Mascota</label>
                <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Macota" onChange={actualizarState} value={mascota} />

                <label>Nombre Dueño</label>
                <input type="text" name="propietario" className="u-full-width" placeholder="Nombre Dueño" onChange={actualizarState} value={propietario} />

                <label>Fecha</label>
                <input type="date" name="fecha" className="u-full-width" onChange={actualizarState} value={fecha} />

                <label>Hora</label>
                <input type="time" name="hora" className="u-full-width" onChange={actualizarState} value={hora} />

                <label>Síntomas</label>
                <textarea name="sintomas" className="u-full-width" onChange={actualizarState} value={sintomas}></textarea>

                <button type="submit" className="u-full-width button-primary" onChange={actualizarState}>
                    Crear Cita
                </button>
            </form>
        </Fragment>
    );
}

export default Form;