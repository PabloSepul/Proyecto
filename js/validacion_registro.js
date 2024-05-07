function validarRegistro() {
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;
    const confirmContraseña = document.getElementById('confirmContraseña').value;

    if (nombres === "") {
        document.getElementById('errorNombres').textContent = "Por favor, ingresa tu nombre.";
        return;
    } else {
        document.getElementById('errorNombres').textContent = "";
    }

    if (apellidos === "") {
        document.getElementById('errorApellidos').textContent = "Por favor, ingresa tus apellidos.";
        return;
    } else {
        document.getElementById('errorApellidos').textContent = "";
    }

    if (correo === "") {
        document.getElementById('errorCorreo').textContent = "Por favor, ingresa tu correo electrónico.";
        return;
    } else {
        document.getElementById('errorCorreo').textContent = "";
    }

    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regexCorreo.test(correo)) {
        document.getElementById('errorCorreo').textContent = "Por favor, ingresa un correo electrónico válido.";
        return;
    } else {
        document.getElementById('errorCorreo').textContent = "";
    }

    if (contraseña === "") {
        document.getElementById('errorContraseña').textContent = "Por favor, ingresa una contraseña.";
        return;
    } else {
        document.getElementById('errorContraseña').textContent = "";
    }

    if (contraseña !== confirmContraseña) {
        document.getElementById('errorContraseña').textContent = "Las contraseñas no coinciden.";
        return;
    } else {
        document.getElementById('errorContraseña').textContent = "";
    }
    window.location.href = "login.html";
}