/**
 * https://jquery.com/
 * https://jqueryvalidation.org/validate/
 * https://getbootstrap.com/docs/3.3/getting-started/
 * https://jqueryui.com/
 * https://www.w3schools.com/jquery/default.asp
 */
$(document).ready(function () {
  // en esta sección se escribe el código que debe ejecutar cuando se cargue el DOM

  $("#itemNum2").css("color", "red");

  // $(".liClass").css("text-transform", "uppercase");
  // $(".liClass").css("font-weight", "bold");
  $(".liClass").css("text-transform", "uppercase").css("font-weight", "bold");

  $(".alert").removeClass("alert-danger").addClass("alert-info");
  // $(".alert").attr("class", "alert alert-info");
});
// en esta sección se escribe el código que se dispara con eventos

$(".list-group-item").click(function () {
  let text = $(this).text();

  console.log(text);
});

var showAlert = true;
let toggleHandle = function () {
  showAlert = !showAlert;
  if (showAlert) {
    // $(this).text("Ocultar");
    $(".alert").fadeIn(3000, function () {
      $("#showAlert").text("Ocultar");
    });
  } else {
    $(this).text("Mostrar");
    $(".alert").fadeOut();
  }
};

$("#showAlert").click(toggleHandle);

$("#inicio").click(function () {
  let texto = $("#textOption").val();
  $("#textOption").val("completado"); // asignar un valor
  $(".list-group").prepend(`<li class="list-group-item">${texto}</li>`);
  // $(".list-group").html(`<li class="list-group-item">${texto}</li>`);
});

$("#final").click(function () {
  let texto = $("#textOption").val();
  $("#textOption").val("");
  $(".list-group").append(`<li class="list-group-item">${texto}</li>`);
});

$("#antes").click(function () {
  $(".list-group").before("<p>antes</p>");
});
$("#despues").click(function () {
  $("ul").after("<p>despues</p>");
});

$("#textOption").blur(function () {
  console.log("Hola mundo");
});

/**
 * Guía
 *
 * 1. Obtener el texto de un elemento con la clase "list-group-item" cuando se hace clic sobre él
 *    y mostrarlo en la consola o en un alert.
 *
 * 2. Cambiar de color el texto del elemento con id "itemNum2" al cargar el DOM por primera vez.
 *
 * 3. Poner en negrita y mayúscula el texto de los elementos con la clase "liClass" al cargar el DOM
 *    por primera vez.
 *
 * 4. Adicionar la clase "alert-info" al elemento con la clase "alert" y eliminar la clase "alert-danger"
 *    cuando se cargue el DOM por primera vez.
 *
 * 5. Convertir el botón en un Toggle para mostrar u ocultar la alerta:
 *    Por defecto la alerta se debe estar mostrando.
 *    Al hacer click sobre el botón debe mostrar u ocultar la alerta.
 *    El texto del botón debe cambiar a "Mostrar" u "Ocultar"
 *
 * 6. Adicionar elementos al inicio o final de la lista al hacer click en los botones "Inicio" o "Final".
 *
 * 7. En el punto anterior tener en cuenta lo que se escribe en la caja de texto y limpiar la caja.
 *
 * 8. Adicionar elementos antes y después de la lista desordenada.
 */
