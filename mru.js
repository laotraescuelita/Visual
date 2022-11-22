//En física, un movimiento es rectilíneo uniforme cuando un «objeto» (por ejemplo)
//viaja en una trayectoria recta a una velocidad constante,1​ dado que su aceleración es nula.

class MRU{
  constructor(radio){
    this.radio = radio
    this.posicion = createVector(10 + this.radio, height-this.radio)
    this.velocidad = createVector(0,0)
  }
  
  mover(){
    this.posicion.add(this.velocidad)
  }

  aplicarFuerza(fuerza){
    this.velocidad = fuerza
  }

  mostrar(){
    stroke(0)
    strokeWeight(2)
    fill(255,127)
    ellipse(this.posicion.x, this.posicion.y, this.radio, this.radio)    
  }

  rebotar(){
    if(this.posicion.x > width - this.radio){
      this.velocidad.x *= -1
      this.posicion.x = width - this.radio
    }else if(this.posicion.x < 0 + this.radio){
      this.velocidad.x *= -1
      this.posicion.x = 0 + this.radio
    }
    if(this.posicion.y > height - this.radio){
      this.velocidad.y *= -1
      this.posicion.y = height - this.radio
    }
  }
  
}

// Mostrar la pantalla y la clase

let mru
function setup(){
  createCanvas(640, 360)
  mru = new MRU(48)
  createP("Presiona el boton izquierdo del raton para mover")
}

function draw(){
  background(51)
    

  if (mouseIsPressed){    
    let viento = createVector(1,0)
    mru.aplicarFuerza(viento)  
    
  }
  
  mru.mover()
  mru.mostrar()
  mru.rebotar()
}