/*
El atractor de Lorenz es un concepto introducido por Edward Lorenz en 1963.
Se trata de un sistema dinámico determinista tridimensional no lineal derivado de las ecuaciones
simplificadas de rollos de convección que se producen en las ecuaciones dinámicas 
de la atmósfera terrestre.
*/

// Iniciar las variables.
let x = 0.01
let y = 0
let z = 0

let a = 10
let b = 28
let c = 8.0 / 3.0

let puntos = new Array() // Inicar un array que contendra los puntos.

// Esta función es parte P5 para mostrar el canvas.
function setup() {
  createCanvas(800, 600, WEBGL)
  colorMode(HSB)
}

// Esta función es parte P5 para de manera repetoida mostrar el código.
function draw() {
  background(0)
  // Esta es la formula del atractor de lorenz.
  // Esta en wikipedia. https://es.wikipedia.org/wiki/Atractor_de_Lorenz 
  let dt = 0.01
  let dx = a * (y - x) * dt
  let dy = (x * (b - z) - y) * dt
  let dz = (x * y - c * z) * dt
  x = x + dx
  y = y + dy
  z = z + dz

  //Agregar los puntos al array para mostrar la figura.
  puntos.push(new p5.Vector(x, y, z))

  translate(0, 0, -80)
  let camX = map(mouseX, 0, width, -200, 200)
  let camY = map(mouseY, 0, height, -200, 200)
  camera(camX, camY, height / 2.0 / tan((PI * 30.0) / 180.0), 0, 0, 0, 0, 1, 0)
  //translate(width/2, height/2)
  scale(5)
  stroke(255)
  noFill()

  let hu = 0
  // beginshape, endshape ayuda a cerrar la figuras geometricas de este lenguaje
  beginShape()

  for (let v of puntos) {
    stroke(hu, 255, 255)
    vertex(v.x, v.y, v.z)
    //var offset = p5.Vector.random3D()
    //offset.mult(0.1)
    //v.add(offset)

    hu += 1
    if (hu > 255) {
      hu = 0
    }
  }
  endShape()

  //println(x,y,z)
}
