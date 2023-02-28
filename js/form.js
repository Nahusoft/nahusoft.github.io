
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



