// crear las variables
let angulo = 0
let desplazador

// Este métod es parte de P5 para iniciar el aspecto de la pantalla.
function setup() {
  createCanvas(640, 360) // Son las dimensiones de las pantallas.
  desplazador = createSlider(0, TWO_PI, PI / 4, 0.01) // Se desplaza entre 0 y 180, y 45 y casi cero. 
}

// Este método es parte de P5 para repetdamento mostrar el código.
function draw() {
  // Métodos de P5.
  background(0)
  angulo = desplazador.value() // El valor asignado por el desplazador.
  stroke(255) // Color del trazo.
  strokeWeight(2) // Grosor del trazo.
  translate(width * 0.5, height) // mover x,y hacia otra posición.
  
  // Métodos creados por nosotros.
  rama(100)
}

// Método para mostrar las ramas de los árboles.
function rama(largo) {
  line(0, 0, 0, -largo)// P5 dibuja linea.
  translate(0, -largo)// Translada la posicon x,y.
  if (largo > 4) { // Limite par modificar la dirección de las ramas.
    // Ingresa a la derecha.
    push() //P5
    rotate(angulo) // P5
    rama(largo * 0.67) // Aquí se llama de manera recursiva.
    pop() //P5
    
    push() //P5
    rotate(-angulo) //P5
    rama(largo * 0.67) // Aquí se llama de manera recurisiva.
    pop()

  }
}
