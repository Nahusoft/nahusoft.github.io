
/*
document.addEventListener('DOMContentLoaded', function() {

//* Obtener todos los iconos y agregar un evento de clic a cada uno
var icons = document.querySelectorAll('.barra-iconos i2');
icons.forEach(function(icon) {
  icon.addEventListener('click', function() {
    //* Obtener el ID del icono clickeado
    var iconId = this.id;
    //* Mostrar una alerta con el ID del icono
    alert(iconId);
  });
});
});

*/


function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    
    //* Validar que los campos no estén vacíos
    if (!nombre || !apellido || !email) {
      alert("Por favor, rellena todos los campos del formulario.");
      return;
    }
    
    //* Validar formato de correo electrónico
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }
    
    //* Si todo está bien, enviar el formulario
    alert("Formulario enviado correctamente!");
    document.getElementById("formulario").submit();
  }



