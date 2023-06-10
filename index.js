// Obtener referencias a los elementos del formulario

const formulario = document.getElementById('login');

const correoInput = document.getElementById('correo');

const contraseniaInput = document.getElementById('contrasenia');

const botonInicioSesion = document.getElementById('button');


// Agregar un evento de escucha al boton de iniciar sesion

botonInicioSesion.addEventListener('click', function (event) {
    event.preventDefault() //evitar que el form se envie automaticamente

    if (!validarCorreo(correoInput.value)) {
        mostrarError(correoInput, 'Por favor ingrese un correo valido')
    } else if (contraseniaInput.value === '') {
        mostrarError(contraseniaInput, 'Por favor ingresar contraseña valida');
    } else {
        //si todas las validaciones son exitosas puede continuar con el envio de datos
        formulario.submit();
    }

})

//funcion para validad el formato del correo electronico

function validarCorreo(correo) {
    //Utilizar una exprecion regular para verificarsi el correotiene un formato valido

    const regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/i;

    return regexCorreo.test(correo);
}

//funcion mostrar error

function mostrarError(input, mensaje) {
    const errorMensaje = document.createElement('p');//aqui nos crea un elemento de html <p> donde se va a almacenar en caso de error

    errorMensaje.className = 'error-mensaje';
    errorMensaje.textContent = mensaje;

    const contenedorInput = input.parentElement;
    contenedorInput.appendChild(errorMensaje);

    //Agregar una clase de estilo cpara resaltar rl campo de error
    contenedorInput.classList.add('error');
}

//Limpiar los mensajes de error al escribir en los campos
correoInput.addEventListener('input', limpiarError);
contraseniaInput.addEventListener('input', limpiarError);


function limpiarError() {
    const contenedorInput = this.parentElement;
    const errorMensaje = contenedorInput.querySelector('.error-mensaje');

    if (errorMensaje) {
        contenedorInput.removeChild(errorMensaje);
        contenedorInput.classList.remove('error');
    }
}

