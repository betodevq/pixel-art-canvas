var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];
var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');
var mouseClickeado;
var colorPersonalizado = document.getElementById('color-personalizado');
var indicadorColor = document.getElementById('indicador-de-color');
var botonBorrar = document.getElementById('borrar');
var guardarImagen = document.getElementById('guardar');
var indicadorColorTexto = document.getElementById('indicador-de-color-mensaje');

//Funciones
function generarPaletaColores() {
  for (let i = 0; i < nombreColores.length; i++) {
    let color = document.createElement('div');
    color.className = 'color-paleta';
    color.style.backgroundColor = nombreColores[i];
    paleta.appendChild(color);
  }
}

function generarGrilla() {
  for (let i = 0; i < 1750; i++) {
    let casilla = document.createElement('div');
    grillaPixeles.appendChild(casilla);
  }
}

function cambiarIndicadorDeColor(color) {
  indicadorColor.style.backgroundColor = color;
  indicadorColorTexto.textContent = color;
}

//Eventos
function personalizarColor(e) { // cambiar el color desde el color picker
  // Se guarda el color de la rueda en colorActual
  colorActual = colorPersonalizado.value;
  // Completar para que cambie el indicador-de-color al colorActual
  cambiarIndicadorDeColor(colorActual);
}

function cambiarColor(e) { // cambia el color desde la paleta
  let bkgColor = e.target.style.backgroundColor;
  cambiarIndicadorDeColor(bkgColor);
}

function dibujarPixel(e) { //dibujar pixel click por click
  let colorActual = indicadorColor.style.backgroundColor;
  e.target.style.backgroundColor = colorActual;
}

//proceso para hacer que pinte continuamente
function mouseApretado(e) {
    mouseClickeado = true;
}

function mouseSuelto() {
  mouseClickeado = false;
}

function moverMouse(e) {
  if (mouseClickeado) {
    e.target.style.backgroundColor = indicadorColor.style.backgroundColor;
  }
}

//Borrar la grilla
function limpiarGrilla() {
  $(document).ready(function () {
    $grilla = $("#grilla-pixeles");
    $grilla.children().animate({
      "background-color": "white"
    }, 2500);
  });
}

function elegirHeroe() {
  $(document).ready(function () {
    $('ul.imgs li img').click(function () {
      var id = $(this).attr('id');
      switch (id) {
        case 'batman':
          cargarSuperheroe(batman);
          break;
        case 'wonder':
          cargarSuperheroe(wonder);
          break;
        case 'flash':
          cargarSuperheroe(flash);
          break;
        case 'invisible':
          cargarSuperheroe(invisible);
          break;

        default:
          break;
      }
    });
  });
}

grillaPixeles.addEventListener("click", dibujarPixel); //Dibuja pixel por pixel
paleta.addEventListener("click", cambiarColor); //Cambia el color desde la paleta
colorPersonalizado.addEventListener("change", personalizarColor); //Cambia el color desde el color picker
grillaPixeles.addEventListener("mouseup", mouseSuelto);
grillaPixeles.addEventListener("mousedown", mouseApretado);
grillaPixeles.addEventListener("mouseover", moverMouse); //Dibuja arrastrando el click
grillaPixeles.addEventListener("dragend", mouseSuelto); // Evita que se tranque el pincel al arrastrar
grillaPixeles.addEventListener("mouseleave", mouseSuelto); //Evita que se tranque el mouse al salir de la grilla
botonBorrar.addEventListener("click", limpiarGrilla); //Borra el contenido de la grilla
guardarImagen.addEventListener("click", guardarPixelArt);

generarPaletaColores();
generarGrilla();
elegirHeroe();