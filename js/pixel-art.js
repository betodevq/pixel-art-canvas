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
// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
var indicadorColor = document.getElementById('indicador-de-color');
var botonBorrar = document.getElementById('borrar');
//Funciones
function generarPaletaColores() {
  for (let i = 0; i < nombreColores.length; i++) {
    let color = document.createElement('div');
    color.className = 'color-paleta';
    color.style.backgroundColor = nombreColores[i];
    paleta.appendChild(color);
  }
};

function generarGrilla() {
  for (let i = 0; i < 1750; i++) {
    let casilla = document.createElement('div');
    grillaPixeles.appendChild(casilla);
  }
};

//Eventos
function colorPersonalizado() { //Color picker, permite elegir un color mas personalizado
  // Se guarda el color de la rueda en colorActual
  colorActual = colorPersonalizado.value;
  // Completar para que cambie el indicador-de-color al colorActual
  indicadorColor.style.backgroundColor = colorActual;
}

colorPersonalizado.addEventListener('change', colorPersonalizado);

function cambiarColor(e) { // cambia el color segun elección
  let bkgColor = e.target.style.backgroundColor;
  indicadorColor.style.backgroundColor = bkgColor;
};

paleta.addEventListener("click", cambiarColor);

function dibujarPixeles() { //dibujar click por click
  grillaPixeles.addEventListener("click", function (e) {
    let colorActual = indicadorColor.style.backgroundColor;
    e.target.style.backgroundColor = colorActual;
  });
};

dibujarPixeles();

//proceso para hacer que pinte continuamente
var mouseClickeado;

function mouseApretado(e) {
  mouseClickeado = true;
  console.log('clickeaste el mouse ' + mouseClickeado);
};

function mouseSuelto(e) {
  mouseClickeado = false;
  console.log('soltaste el click ' + mouseClickeado);
};

function moverMouse(e) {
  if (mouseClickeado) {
    console.log(e.target.style.backgroundColor);
    e.target.style.backgroundColor = indicadorColor.style.backgroundColor;
  }
};

grillaPixeles.addEventListener("mouseup", mouseSuelto);
grillaPixeles.addEventListener("mousedown", mouseApretado);
grillaPixeles.addEventListener("mouseover", moverMouse);

//Borrar la pantalla
function limpiarGrilla() {
  $(document).ready(function () {
    $grilla = $("#grilla-pixeles");
    $grilla.children().animate({
      "background-color": "white"
    }, 2500);
  });
}

botonBorrar.addEventListener("click", limpiarGrilla);

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




//llamado de funciones
generarPaletaColores();
generarGrilla();
elegirHeroe();