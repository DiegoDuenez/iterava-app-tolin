<template>
    <div style="background: url(./assets/fondo.jpeg) no-repeat; background-size: 100%;">
        <div class="row" style="height: 100px; ">
            <div class="col-12">
                <div></div>
                <h1 class="titulo">Escoge una categoría</h1>
            </div>
        </div>
        <div class="row">

            <div class="col-2"></div>

            <!--CULTURA-->
            <div class="col-2">
                <button class="btn btn-link" data-bs-toggle="modal" data-bs-target="#CulturaModal">
                    <img src="assets/cultura.png" alt="Cultura" style="width: 180px; height:180px;" />Cultura
                </button>
            </div>
            <div class="col-1"></div>

            <!--GASTRONOMIA-->
            <div class="col-2">
                <button class="btn btn-link" data-bs-toggle="modal" data-bs-target="#GastronomiaModal ">
                    <img src="assets/gastronomia.png " alt="Gastronomia "
                        style="width: 180px; height:180px; " />Gastronomía
                </button>
            </div>
            <div class="col-1"></div>

            <!---TURISMO-->
            <div class="col-2">
                <button class="btn btn-link" data-bs-toggle="modal" data-bs-target="#TurismoModal">
                    <img src="assets/turismo.png " alt="Turismo" 
                        style="width: 180px; height:180px;" />Turismo
                </button>
            </div>
            <div class="col-1"></div>

            <!--2 ESPACIOS VACIOS A LA DERECHA:-->
            <div class="col-2"></div>
        </div>

        <!--DIVISION ENTRE LOS DOS RENGLONES-->
        <div class="row" style="height: 100px;">
            <div class="col-2"></div>
        </div>

        <!--NUEVO RENGLON, DONDE IRAN OTROS 3 BOTONES-->
        <div class="row">
            <div class="col-2"></div>

        <!--HISTORIA-->
            <div class="col-2">
                <button class="btn btn-link" data-bs-toggle="modal" data-bs-target="#HistoriaModal">
                    <img src="assets/historia.png" alt="Historia" style="width: 180px; height:180px;" />Historia
                </button>
            </div>
            <div class="col-1 "></div>

        <!--CLIMA-->
            <div class="col-2 ">
                <button class="btn btn-link" data-bs-toggle="modal" data-bs-target="#ClimaModal">
                    <img src="assets/clima.png " alt="Clima" style="width: 180px; height:180px;" />Clima
                </button>
            </div>
            <div class="col-1"></div>

            <!--DATOS CURIOSOS-->
            <div class="col-2">
                <button class="btn btn-link" data-bs-toggle="modal" data-bs-target="#DatosModal">
                    <img src="assets/pregunta.png" alt="Datos curiosos" style="width: 180px; height: 180px;" />Datos
                    curiosos
                </button>
            </div>
            <div class="col-2"></div>    

        </div><!--CIERRE RENGLON NUEVO-->    

        <!--****** M O D A L E S ******-->

        <!--MODAL CULTURA-->
        <div class="modal fade" id="CulturaModal" tabindex="-1 " role="dialog" aria-labelledby="tituloCultura" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 id="tituloCultura">Cultura</h5>
                        <button class="close" data-bs-dismiss="modal" aria-label="Cerrar">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-primary">
                            <h5>He aquí los Resultados de tu búsqueda</h5>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-warning" type="button" data-bs-dismiss="modal">Cerrar</button>
                        <button class="btn btn-success" type="button">Aceptar</button>
                    </div>
                </div>
            </div>
        </div>

        <!--MODAL GASTRONOMIA-->
        <div class="modal fade" id="GastronomiaModal" tabindex="-1" role="dialog" aria-labelledby="tituloGastronomia" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 id="tituloGastronomia">Gastronomia</h5>
                        <button class="close " data-bs-dismiss="modal" aria-label="Cerrar">
                            <span aria-hidden="true ">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-primary">
                            <h5>He aquí los Resultados de tu búsqueda</h5>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-warning" type="button" data-bs-dismiss="modal">Cerrar</button>
                        <button class="btn btn-success" type="button">Aceptar</button>
                    </div>
                </div>
            </div>
        </div>

        <!--MODAL TURISMO-->
        <div class="modal fade" id="TurismoModal" tabindex="-1" role="dialog" aria-labelledby="tituloTurismo" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 id="tituloTurismo">Turismo</h5>
                        <button class="close" data-bs-dismiss="modal" aria-label="Cerrar">
                            <span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-primary">
                            <h5>He aquí los Resultados de tu búsqueda</h5>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-warning" type="button" data-bs-dismiss="modal">Cerrar</button>
                        <button class="btn btn-success" type="button">Aceptar</button>
                    </div>
                </div>
            </div>
        </div>

        <!--MODAL HISTORIA-->
        <div class="modal fade" id="HistoriaModal" tabindex="-1" role="dialog" aria-labelledby="tituloHistoria" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 id="tituloHistoria">Historia</h5>
                        <button class="close" data-bs-dismiss="modal" aria-label="Cerrar">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-primary">
                            <h5>He aquí los Resultados de tu búsqueda</h5>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-warning" type="button" data-bs-dismiss="modal">Cerrar</button>
                        <button class="btn btn-success" type="button">Aceptar</button>
                    </div>
                </div>
            </div>
        </div>

        <!--MODAL CLIMA-->
        <div class="modal fade" id="ClimaModal" tabindex="-1" role="dialog" aria-labelledby="tituloClima" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 id="tituloClima">Clima</h5>
                        <button class="close" data-bs-dismiss="modal" aria-label="Cerrar">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-primary">
                            <h5>He aquí los Resultados de tu búsqueda</h5>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-warning" type="button" data-bs-dismiss="modal">Cerrar</button>
                        <button class="btn btn-success" type="button">Aceptar</button>
                    </div>
                </div>
            </div>
        </div>        

        <!--MODAL DATOS CURIOSOS-->
        <div class="modal fade" id="DatosModal" tabindex="-1" role="dialog" aria-labelledby="tituloDatos" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 id="tituloDatos">Datos Curiosos</h5>
                        <button class="close" data-bs-dismiss="modal" aria-label="Cerrar">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-primary">
                            <h5>He aquí los Resultados de tu búsqueda</h5>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-warning" type="button" data-bs-dismiss="modal">Cerrar</button>
                        <button class="btn btn-success" type="button">Aceptar</button>
                    </div>
                </div>
            </div>
        </div>

<!--CIERRE DE LA PLANTILLA:-->
    </div>    
</template>

<script>
export default {
    mounted() {
        console.log("Component mounted.");
    },
};
</script>

<style>
.btn-link {
    font-size: large;
    color: whitesmoke;
    font-weight: 600;
    font-style: oblique;
}

.titulo {
    font-family: 'Nunito';
    font-size: 70px;
    color: rgba(255, 235, 205, 0.696);
    text-align: center;
}
</style>
