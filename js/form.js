var nombre = document.getElementById('name');
var tipoTransaccion = document.getElementById('trans-type');
var descripcion = document.getElementById('desc');
var monto = document.getElementById('amount');            /* Buscar como validar con type Number */
var categoria = document.getElementById('category');
var estado = document.getElementById('status');
var fecha = document.getElementById('date');              /* Buscar como validar con type Date */
var apellido = document.getElementById('lastname');
var alias = document.getElementById('nick');
var telefono = document.getElementById('phone');          /* Buscar como validar con type Number */
var direccion = document.getElementById('address');
var tipoUsuario = document.getElementById('user-type');
var precio = document.getElementById('price');            /* Buscar como validar con type Number */ 
var imagen = document.getElementById('image');            /* Buscar como validar con type Image */   


error.style.color = 'purple';

function enviarFormularioDashboard(){
    console.log('Enviando formulario...')

    var mensajesError = [];

    if (nombre.value === null || nombre.value === ''){
        mensajesError.push('<p>Ingresa un nombre válido</p> ')
    }

    if (tipoTransaccion.value === null || tipoTransaccion.value === ''){
        mensajesError.push('<p>Ingresa tipo de transacción</p>')
    }

    if (descripcion.value === null || descripcion.value === ''){
        mensajesError.push('<p>Ingresa una descripción</p>')
    }

    if (monto.value === null || monto.value === ''){
        mensajesError.push('<p>Ingresa un monto</p>')
    }

    if (categoria.value === null || categoria.value === ''){
        mensajesError.push('<p>Ingresa una categoría</p>')
    }

    if (estado.value === null || estado.value === ''){
        mensajesError.push('<p>Ingresa un estado</p>')
    }

    if (fecha.value === null || fecha.value === ''){
        mensajesError.push('<p>Ingresa una fecha</p>')
    }

    error.innerHTML = mensajesError.join('');

    return mensajesError.length === 0;
}

function enviarFormularioUsuarios(){
    console.log('Enviando formulario...')

    var mensajesError = [];

    if (nombre.value === null || nombre.value === ''){
        mensajesError.push('<p>Ingresa un nombre válido</p> ')
    }

    if (apellido.value === null || apellido.value === ''){
        mensajesError.push('<p>Ingresa un apellido válido</p> ')
    }
    
    if (alias.value === null || alias.value === ''){
        mensajesError.push('<p>Ingresa un alias válido</p> ')
    }
    
    if (telefono.value === null || telefono.value === ''){
        mensajesError.push('<p>Ingresa un teléfono válido</p> ')
    }
    
    if (direccion.value === null || direccion.value === ''){
        mensajesError.push('<p>Ingresa una dirección válida</p> ')
    }
    
    if (tipoUsuario.value === null || tipoUsuario.value === ''){
        mensajesError.push('<p>Ingresa un tipo de usuario válido</p> ')
    }

    if (fecha.value === null || fecha.value === ''){
        mensajesError.push('<p>Ingresa una fecha</p>')
    }
    
    error.innerHTML = mensajesError.join('');
    
    return mensajesError.length === 0;
}

function enviarFormularioProductos(){
    console.log('Enviando formulario...')

    var mensajesError = [];

    if (nombre.value === null || nombre.value === ''){
        mensajesError.push('<p>Ingresa un nombre válido</p> ')
    }

    if (descripcion.value === null || descripcion.value === ''){
        mensajesError.push('<p>Ingresa una descripción</p>')
    }

    if (precio.value === null || precio.value === ''){
        mensajesError.push('<p>Ingresa un precio</p>')
    }

    if (imagen.value === null || imagen.value === ''){
        mensajesError.push('<p>Ingresa una imagen</p>')
    }

    error.innerHTML = mensajesError.join('');
    
    return mensajesError.length === 0;
}

function enviarFormularioProductosRegistrados(){
    console.log('Enviando formulario...')

    var mensajesError = [];

    if (nombre.value === null || nombre.value === ''){
        mensajesError.push('<p>Ingresa un nombre válido</p> ')
    }

    if (descripcion.value === null || descripcion.value === ''){
        mensajesError.push('<p>Ingresa una descripción</p>')
    }

    if (precio.value === null || precio.value === ''){
        mensajesError.push('<p>Ingresa un precio</p>')
    }

    if (imagen.value === null || imagen.value === ''){
        mensajesError.push('<p>Ingresa una imagen</p>')
    }

    error.innerHTML = mensajesError.join('');
    
    return mensajesError.length === 0;
}