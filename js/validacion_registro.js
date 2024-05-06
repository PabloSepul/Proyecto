function validarRegistro() {
    var nombres = document.getElementById('nombres').value.trim();
    var apellidos = document.getElementById('apellidos').value.trim();
    var correo = document.getElementById('correo').value.trim();
    var contraseña = document.getElementById('contraseña').value.trim();

    var error = document.getElementById('error');
    error.style.color = 'red';

    var mensajesError = [];

    if (nombres === '') {
        mensajesError.push('Por favor, ingrese su nombre.');
    }

    if (apellidos === '') {
        mensajesError.push('Por favor, ingrese su apellido.');
    }

    if (correo === '') {
        mensajesError.push('Por favor, ingrese su correo electrónico.');
    } else if (!validarCorreo(correo)) {
        mensajesError.push('Por favor, ingrese un correo electrónico válido.');
    }

    if (contraseña === '') {
        mensajesError.push('Por favor, ingrese su contraseña.');
    } else if (contraseña.length < 6) {
        mensajesError.push('La contraseña debe tener al menos 6 caracteres.');
    }

    error.innerHTML = mensajesError.join('<br>');

    if (mensajesError.length > 0) {
        return false; // Evitar el envío del formulario si hay errores
    }

    return true; // Permitir el envío del formulario si no hay errores
}

function validarCorreo(correo) {
    // Utiliza una expresión regular para verificar si el correo tiene un formato válido
    var expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresionCorreo.test(correo);
}
