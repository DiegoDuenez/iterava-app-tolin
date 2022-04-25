<template>

   <div class="main background">
      
      <!-- LOGIN -->
      <div class="container contenedor w-75 rounded-lg shadow-lg" id="contenedor_login">
         <div class="row aling-items-streatch">
            <!-- LADO IZQUIERDO -->
            <div class="col-md-6 col-12 p-5 rounded-lg rounded-start rounded-lg parte_1">
               <h1 class="fw-bold text-light text-center py-5">BIENVENIDO</h1>
               <p class="text-center text-light">ITERAVA te da la bienvenida, ¡Conoce el mundo con nosotros!</p>
               <div class="d-grid mt-4 col-12">
                  <button type="button" id="btn_switch" class="btn btn-lg btn-outline-light fw-bold">SOY NUEVO</button>
               </div>
            </div>

            <!-- LADO DERECHO -->
            <div class="col-md-6 col-12 p-5 rounded-lg rounded-end parte_2">
               <div class="text-end mb-5">
                  <img src="assets/Iteravia3.png" width="150rem" alt="">
               </div>
               <!-- Formulario LOGIN-->
               <form id="formulario_login">
                  <div class="form-floating mx-4 mb-4 col-12">
                     <input type="text" class="form-control" id="input_usuario" name="input_usuario" placeholder="Nombre de usuario" autofocus>
                     <label for="input_usuario">Nombre de usuario</label>
                  </div>
                  <div class="form-floating mx-4 mb-4 col-12">
                     <input type="password" class="form-control" id="input_contrasenia" name="input_contrasenia" placeholder="Contraseña">
                     <label for="input_contrasenia">Contraseña</label>
                  </div>
                  <div class="d-grid mx-4 col-12">
                    <router-link  to="/Main"><input class="btn btn-lg btn-outline-light fw-bold" id="btn_enviar" type="button" value="INICIAR SESIÓN"></router-link>
                   <!--  <button type="submit" id="btn_enviar" class="btn btn-lg btn-outline-light fw-bold">INICIAR SESIÓN</button>-->
                  </div>
               </form>
               <!-- Formulario LOGIN-->
            </div>
         </div>
      </div>

      <!-- CREAR USUARIO -->
      <div class="container contenedor w-75 rounded-lg shadow-lg" id="contenedor_registro">
         <div class="row aling-items-streatch">
            <!-- LADO IZQUIERDO -->
            <div class="col-md-6 col-12 p-5 rounded-lg rounded-end parte_2">
               <div class="text-end mb-5">
                  <img src="assets/Iteravia3.png" width="150rem" alt="">
               </div>
               <!-- Formulario CREAR USUARIO-->
               <form id="formulario_nuevo">
                  <div class="form-floating mx-4 mb-4 col-12">
                     <input type="text" class="form-control" id="inputR_usuario" name="inputR_usuario" placeholder="Nombre de usuario" autofocus>
                     <label for="inputR_usuario">Nombre de usuario</label>
                  </div>
                  <div class="form-floating mx-4 mb-4 col-12">
                     <input type="email" class="form-control" id="inputR_correo" name="inputR_correo" placeholder="Nombre de usuario" autofocus>
                     <label for="inputR_correo">Correo electronico</label>
                  </div>
                  <div class="form-floating mx-4 mb-4 col-12">
                     <input type="password" class="form-control" id="inputR_contrasenia" name="inputR_contrasenia" placeholder="Contraseña">
                     <label for="inputR_contrasenia">Contraseña</label>
                  </div>
                  <div class="form-floating mx-4 mb-4 col-12">
                     <input type="password" class="form-control" id="inputR_confirmar_contrasenia" name="inputR_confirmar_contrasenia" placeholder="Confirmar contraseña">
                     <label for="inputR_confirmar_contrasenia">Confirmar contraseña</label>
                  </div>
                  <div class="d-grid mx-4 col-12">
                     <button type="submit" id="btnR_enviar" class="btn btn-lg btn-outline-light fw-bold">REGISTRARME</button>
                  </div>
               </form>
               <!-- Formulario CREAR USUARIO-->
            </div>
            
            <!-- LADO DERECHO -->
            <div class="col-md-6 col-12 p-5 rounded-lg rounded-start rounded-lg parte_1">
               <h1 class="fw-bold text-light text-center py-5">REGISTRATE! ES GRÁTIS</h1>
               <p class="text-center text-light">Ingresa tus datos para comenzar esta gran experiencia.</p>
               <div class="d-grid mt-4 col-12">
                  <button type="button" id="btnR_switch" class="btn btn-lg btn-outline-light fw-bold">YA TENGO CUENTA</button>
               </div>
            </div>
            
         </div>
      </div>

   </div>
   
</template>

<script>
export default {
    mounted(){
        console.log("Component Register mounted")
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
    },
}
</script>

   <style>
    .background {
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: -25px;
    }

    .main {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 100vh;
    }

    .main .contenedor {
    -ms-flex-item-align: center !important;
        -ms-grid-row-align: center !important;
        align-self: center !important;
    }

    .parte_1 {
    background-color: rgba(253, 128, 0, 0.9) !important;
    }

    .parte_2 {
    background-color: rgba(209, 1, 77, 0.5) !important;
    }
    </style>



