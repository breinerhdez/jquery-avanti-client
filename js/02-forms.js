/**
 * https://jquery.com/
 * https://jqueryvalidation.org/validate/
 * https://getbootstrap.com/docs/3.3/getting-started/
 * https://jqueryui.com/
 */
$(document).ready(async () => {
  // en esta sección se escribe el código que debe ejecutar cuando se cargue el DOM
  loadDepartamentos();

  $("#my-form").validate({
    rules: {
      email: {
        required: true,
        // minlength: 15,
        mayorEdad: true,
      },
      // edad: {
      //   mayorEdad: true,
      // },
    },
    messages: {
      email: {
        required: "Este campo es requerido",
        // minlength: jQuery.validator.format("Debe tener mínimo {0} caracteres"),
      },
    },
  });

  jQuery.validator.addMethod(
    "mayorEdad",
    function (value, element) {
      // allow any non-whitespace characters as the host part
      return value >= 18;
    },
    "Debe ser mayor de edad"
  );
});
// en esta sección se escribe el código que se dispara con eventos

function loadDepartamentos() {
  $.get("https://avanti-server.herokuapp.com/regions", function (resp) {
    let options = ['<option value="">Seleccionar</option>']; // <option value="">Seleccionar</option>
    resp.result.map(function (item) {
      options.push(`<option value="${item.id}">${item.name}</option>`);
    });
    $("#region").html(options.join(""));
  });
}

$("#region").change(function () {
  let id = $(this).val();
  let url = `https://avanti-server.herokuapp.com/cities?region_id=${id}`;
  $.ajax({
    url: url,
  }).done(function (resp) {
    let options = ['<option value="">Seleccionar</option>']; // <option value="">Seleccionar</option>
    resp.result.map(function (item) {
      options.push(`<option value="${item.id}">${item.name}</option>`);
    });
    $("#ciudad").html(options.join(""));
  });
});

$("#region").change(function () {
  let id = $(this).val();
  let url = `https://avanti-server.herokuapp.com/cities?region_id=${id}`;
  $.ajax({
    url: url,
  }).done(function (resp) {
    let options = ['<option value="">Seleccionar</option>']; // <option value="">Seleccionar</option>
    resp.result.map(function (item) {
      options.push(`<option value="${item.id}">${item.name}</option>`);
    });
    $("#ciudad").html(options.join(""));
  });
});

$(".btn-submit").click(function (e) {
  // e.preventDefault();

  let url = `https://avanti-server.herokuapp.com/form`;

  let data = $("#my-form").serializeArray();

  // $.ajax({
  //   url,
  //   method: "POST",
  //   data,
  // }).done(function (resp) {
  //   console.log(resp);
  // });
});

/******************************************
 * Servicios disponibles
 ******************************************
 * Enviar datos por método GET
 * GET https://avanti-server.herokuapp.com/form
 *
 * Enviar datos por método POST
 * POST https://avanti-server.herokuapp.com/form
 *
 * Obtener departamentos
 * GET https://avanti-server.herokuapp.com/regions
 *
 * Obtener ciudades
 * GET https://avanti-server.herokuapp.com/cities?region_id=NUMBER
 */

/**
 * Guía
 *
 * 1. Obtener los departamentos y ponerlos en el select de departamentos.
 *
 * 2. Adicionar el elemento "Seleccionar" por defecto y sin valor.
 *
 * 3. Al cambiar de departamento, debe consultar las ciudades correspondientes.
 *
 * 4. Al enviar los datos, prevenir que el formulario redireccione.
 *
 * 5. Asignar el método o tipo de petición que hace el formulario. (preventDefault)
 *
 * 6. Al presionar el botón GET, se deben enviar los datos al servidor con este método.
 *
 * 7. Al presionar el botón POST, se deben enviar los datos al servidor con este método.
 *
 * 8. Hacer funcionar el contador con los eventos de incrementar y decrementar.
 *
 * 9. Clonar el contador original y generar nuevos contadores independientes.
 *
 */
// $(".increment").click(function () {
//   let valor = parseInt($(".counter-value").text());
//   $(".counter-value").text(++valor);
// });

// $(".decrement").click(function () {
//   let valor = parseInt($(".counter-value").text());
//   $(".counter-value").text(--valor);
// });

// $(".increment").click(function () {
$(document).on("click", ".increment", function () {
  let valor = parseInt($(this).parents(".counter-container").find(".counter-value").text());
  $(this)
    .parents(".counter-container")
    .find(".counter-value")
    .text(++valor);
});

// $(".decrement").click(function () {
$(document).on("click", ".decrement", function () {
  let valor = parseInt($(this).parents(".counter-container").find(".counter-value").text());
  $(this)
    .parents(".counter-container")
    .find(".counter-value")
    .text(--valor);
});

$("#btn-clone").click(function () {
  let html = $(".to-clone").html();
  $(".to-clone").after(`<div class="row counter-container">${html}</div>`);
});
