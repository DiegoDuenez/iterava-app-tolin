$(document).ready (() => {
   $('#contenedor_registro').hide();
})
const
contenedor_login = $('#contenedor_login'),
contenedor_registro = $('#contenedor_registro'),
formulario_login = $("#formulario_login"),
input_usuario = $("#input_usuario"),
input_contrasenia = $("#input_contrasenia"),
btn_enviar = $("#btn_enviar"),
btn_switch = $("#btn_switch"),
formulario_nuevo = $("#formulario_nuevo"),
inputR_usuario = $("#inputR_usuario"),
inputR_correo = $("#inputR_correo"),
inputR_contrasenia = $("#inputR_contrasenia"),
inputR_confirmar_contrasenia = $("#inputR_confirmar_contrasenia"),
btnR_enviar = $("#btnR_enviar"),
btnR_switch = $("#btnR_switch")
;

formulario_login.on("submit", (e) => {
   e.preventDefault();
   validar_campo = validarInput(input_usuario,"Nombre de usuario");
   if (!validar_campo) return;
   validar_campo = validarInput(inputR_contrasenia,"Contraseña");
   if (!validar_campo) return;
   datos = formulario_login.serializeArray();
   console.log(datos);
});

function peticionAjax(url,datos) {
   $.ajax({
      url,
      type: "POST",
      data: datos,
      dataType: "json",
      success: (respuesta) => {
         if (respuesta.Resultado == "correcto") {
            Swal.fire({
               icon: respuesta.Icono_alerta,
               title: respuesta.Titulo_alerta,
               text: `${respuesta.Mensaje_alerta}`,
               showConfirmButton: false,
               timer: 2000
            }).then(() => {
               $("#formulario_login")[0].reset();
               window.location.href = "Admin/index.php"
            });
         } else {
            Swal.fire({
               icon: respuesta.Icono_alerta,
               title: respuesta.Titulo_alerta,
               text: `${respuesta.Mensaje_alerta}`,
               showConfirmButton: true,
               confirmButtonColor: '#494E53'
            })                        
         }
      }
   })
}

function validarInput(input, nombre_campo) {
   if (input.val() == "") {
       mostrarToast('error', `Campo ${nombre_campo} vacio.`);
       input.focus();
       return false;
   }
   return true;
}
function mostrarToast(icono, mensaje, posicion) {
   if (posicion == null) {posicion = 'top-end'}
   const Toast = Swal.mixin({
      toast: true,
      position: posicion,
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
         toast.addEventListener('mouseenter', Swal.stopTimer)
         toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
   })

   Toast.fire({icon: icono, title: mensaje})
}

btn_switch.on("click",() => {
   cambiarLoginSingin("SOY NUEVO")
});
btnR_switch.on("click",() => {
   cambiarLoginSingin("YA TENGO CUENTA")
});

function cambiarLoginSingin(texto) {
   if (texto == "SOY NUEVO") {
      console.log(texto);
      contenedor_login.slideUp(500);
      setTimeout(() => {
         contenedor_registro.slideDown(500);
         setTimeout(() => {input_usuario.focus();},600)
      }, 500);
   } else {
      console.log(texto);
      contenedor_registro.slideUp(500);
      setTimeout(() => {
         contenedor_login.slideDown(500);
         setTimeout(() => {inputR_usuario.focus();},600)
      }, 500);
   }
}