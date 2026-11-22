/* boton deshabilitado*/ 


document.addEventListener('DOMContentLoaded', function () {
    const enviarBtn = document.getElementById('guardar_cambios');
    const inputs = document.querySelectorAll('.input_field');
    const radios = document.getElementsByName('medio_pago');
    const facil = document.getElementById('facil');
    const rapi = document.getElementById('rapi');
    const numeroTarjeta = document.getElementById('numero_tarjeta');
    const codTarjeta = document.getElementById('cod_tarjeta');

   

    function validarCampos() {
        let todosCompletos = true;

        // Verificar que todos los campos de input estén completos si no están deshabilitados
        for (let input of inputs) {
            if (input.value.trim() === '' && !input.disabled) {
                todosCompletos = false;
                break;
            }
        }

        let metodoPagoSeleccionado = false;

        // Verificar que un radio button esté seleccionado
        for (let radio of radios) {
            if (radio.checked) {
                metodoPagoSeleccionado = true;

                // Validar campos adicionales según el método de pago seleccionado
                if (radio.value === 'tarjeta' && (numeroTarjeta.value.trim() === '' || codTarjeta.value.trim() === '')) {
                    todosCompletos = false;
                }
                if (radio.value === 'cupón' && !facil.checked && !rapi.checked) {
                    todosCompletos = false;
                }
            }
        }

        enviarBtn.disabled = !(todosCompletos && metodoPagoSeleccionado);
    }

    for (let input of inputs) {
        input.addEventListener('input', validarCampos);
    }

    for (let radio of radios) {
        radio.addEventListener('change', function () {
            numeroTarjeta.disabled = radio.value !== 'tarjeta';
            codTarjeta.disabled = radio.value !== 'tarjeta';
            facil.disabled = radio.value !== 'cupón';
            rapi.disabled = radio.value !== 'cupón';

            numeroTarjeta.value = '';
            codTarjeta.value = '';
            facil.checked = false;
            rapi.checked = false;

            validarCampos();

            
        });
    }

    facil.addEventListener('change', function () {
        if (facil.checked) {
            rapi.checked = false;
        }
        validarCampos();
    });

    rapi.addEventListener('change', function () {
        if (rapi.checked) {
            facil.checked = false;
        }
        validarCampos();
    });

    facil.addEventListener('change', validarCampos);
    rapi.addEventListener('change', validarCampos);

    
   
});

function validarFormulario() {
    const mail = document.getElementById("mail").value.trim();
    const contrasena = document.getElementById("contraseña").value.trim();
    const nuevaContrasena = document.getElementById("nueva").value.trim();
    const repetirContrasena = document.getElementById("repetir").value.trim();
    const codigo = document.getElementById("cod_tarjeta").value.trim();
    const nro_tarjeta = document.getElementById("numero_tarjeta").value.trim();
    const errores = [];

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
        errores.push("El email no es válido.");
    }

    if (nuevaContrasena !== '' || repetirContrasena !== '') {
        if (nuevaContrasena.length < 8) {
            errores.push("La nueva contraseña debe tener al menos 8 caracteres.");
        }
        if (nuevaContrasena !== repetirContrasena) {
            errores.push("Las nuevas contraseñas no coinciden.");
        }
    }

    const radios = document.getElementsByName('medio_pago');
    radios.forEach((item) => {
        if (item.checked && item.value === 'tarjeta') {
            if (nro_tarjeta.length < 16 || nro_tarjeta.length > 19) {
                errores.push("El número de tarjeta debe tener entre 16 y 19 dígitos.");
            }else {
                const numeros = nro_tarjeta.slice(0, -1).split('').map(Number);
                const ultimoNumero = parseInt(nro_tarjeta.slice(-1));
                const sumaNumeros = numeros.reduce((acc, curr) => acc + curr, 0);
        
                if ((sumaNumeros % 2 === 0 && ultimoNumero % 2 === 0) || (sumaNumeros % 2 !== 0 && ultimoNumero % 2 !== 0)) {
                    errores.push("El último dígito de la tarjeta es inválido.");
                }
            }
            if (!/^[1-9]{3}$/.test(codigo)) {
                errores.push("El código de seguridad debe ser de 3 dígitos distintos de cero.");
            }
        } else if (item.checked && item.value === 'cupón') {
            if (!facil.checked && !rapi.checked) {
                errores.push("Debes seleccionar al menos un tipo de cupón de pago.");
            }
        }
    });

    if (errores.length > 0) {
        alert(errores.join("\n"));
    } else {
        alert("Formulario guardado correctamente.");
    }
}

function cancelarSuscripcion() {
    if (confirm("¿Estás seguro de que deseas cancelar tu suscripción?")) {
        alert("Suscripción cancelada.");
    }
}


document.querySelector('.guardar .boton_perfil').addEventListener('click', function (e) {
    e.preventDefault();
    validarFormulario();
    
});

document.querySelector('.cancelar .boton_perfil').addEventListener('click', function (e) {
    e.preventDefault();
    cancelarSuscripcion();
});

document.addEventListener('DOMContentLoaded', function () {
    function mostrarNombre() {
        const nombreUsuario = localStorage.getItem('nombreUsuario');
        if (nombreUsuario !== null) {
            document.getElementById('mostrar_nombre').innerHTML = nombreUsuario;
        }
    }

    mostrarNombre();
});

// Guardar los datos del metodo de pago elegido
document.addEventListener("click", ()=>{
    localStorage.tarjeta_credito = document.getElementById('tarjeta').checked;
    localStorage.cupon_pago = document.getElementById('cupon').checked;
    localStorage.tranferencia = document.getElementById('otro').checked;

    localStorage.numero_tarjeta = document.getElementById('numero_tarjeta').value;
    localStorage.cod_tarjeta = document.getElementById('cod_tarjeta').value;

    localStorage.pago_facil = document.getElementById('facil').checked;
    localStorage.rapi_pago = document.getElementById('rapi').checked;
});

