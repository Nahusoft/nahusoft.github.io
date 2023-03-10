/////////////////////////////////////////////////////////////////////////////
//* Mostrar palabras al pasar por arriba de los iconos

function agregarListener(iconId, texto) {
  document.getElementById(iconId).addEventListener('mouseover', function () {
    document.getElementById('texto').innerHTML = texto;
  });
}

agregarListener('icon1', 'Educacion');
agregarListener('icon2', 'Experiencia Laboral');
agregarListener('icon3', 'Habilidades');
agregarListener('icon4', 'Contacto');

document.getElementById('divicons').addEventListener('mouseout', function () {
  document.getElementById('texto').innerHTML = '';
});

/////////////////////////////////////////////////////////////////////////////
//* Efecto "contraer" de las secciones

document.getElementById('educacion').addEventListener('click', function () {
  const container = document.getElementById('bq-edu');

  if (container.style.display === 'none') {
    container.style.display = 'block';
    document.getElementById('lbledu').innerHTML = text="Educación ▷";
  } else {
    container.style.display = 'none';
    document.getElementById('lbledu').innerHTML = text="Educación ▼";
  }
})


document.getElementById('explab').addEventListener('click', function () {
  const container = document.getElementById('bq-exp');
  
  if (container.style.display === 'none') {
    container.style.display = 'block';
    document.getElementById('lblexp').innerHTML = text="Experiencia Laboral ▷";
  } else {
    container.style.display = 'none';
    document.getElementById('lblexp').innerHTML = text="Experiencia Laboral ▼";
  }
})

document.getElementById('habilidades').addEventListener('click', function () {
  const container = document.getElementById('bq-hab');
  
  if (container.style.display === 'none') {
    container.style.display = 'block';
    document.getElementById('lblhab').innerHTML = text="Habilidades ▷";
  } else {
    container.style.display = 'none';
    document.getElementById('lblhab').innerHTML = text="Habilidades ▼";
  }
})

/////////////////////////////////////////////////////////////////////////////
//* Valido los campos para habilitar el submit

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
/////////////////////////////////////////////////////////////////////////////

//* Función para calcular los años de mi edad automaticamente
  
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

  /////////////////////////////////////////////////////////////////////////////