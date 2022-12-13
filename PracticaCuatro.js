let cambio = document.getElementById('change');

document.addEventListener('DOMContentLoaded', function (event) {
    cambio.addEventListener('click', function () {
        eliminar();
    })

    function eliminar() {
        /*reescribe el documento*/
        document.write("Pendejo");

    }
})