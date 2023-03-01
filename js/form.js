document.getElementById('icon1').addEventListener('mouseover', function () {
  document.getElementById('texto').innerHTML = text= "Educacion";
})

document.getElementById('icon2').addEventListener('mouseover', function () {
  document.getElementById('texto').innerHTML = text= "Experiencia Laboral";
})

document.getElementById('icon3').addEventListener('mouseover', function () {
  document.getElementById('texto').innerHTML = text= "Habilidades";
})

document.getElementById('icon4').addEventListener('mouseover', function () {
  document.getElementById('texto').innerHTML = text= "Contacto";
})

document.getElementById('divicons').addEventListener('mouseout', function () {
  document.getElementById('texto').innerHTML = text= "";
})







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

 
  
  function calcularEdad(fechaNacimiento) {
    var hoy = new Date();
    var fechaNac = new Date(fechaNacimiento);
    var edad = hoy.getFullYear() - fechaNac.getFullYear();
    var mes = hoy.getMonth() - fechaNac.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
      edad--;
    }
    return edad;
  }

  var edad = calcularEdad("12/07/1988"); //Calcula mi edad actual para que esté siempre actualizado el dato
  document.getElementById('age').innerHTML = text= "Edad: "+ edad + " años";