//En física, el movimiento rectilíneo uniformemente acelerado (MRUA), también conocido como
//movimiento rectilíneo uniformemente variado (MRUV), es aquel en el que un móvil se desplaza
//sobre una trayectoria recta estando sometido a una aceleración constante.

class MRUA{
  constructor(radio){
    this.radio = radio
    this.posicion = createVector(10 + this.radio, height-this.radio)
    this.velocidad = createVector(0,0)
    this.aceleracion = createVector(0,0)
  }
  
  mover(){
    this.velocidad.add(this.aceleracion)
    this.posicion.add(this.velocidad)
    this.aceleracion.mult(0)
  }

  aplicarFuerza(fuerza){
    this.aceleracion.add(fuerza)
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

let mrua

function setup(){
  createCanvas(640, 360)
  mrua = new MRUA(48)
  createP("Presiona el boton izquierdo del raton para aplicar viento a la derecha")
}

function draw(){
  background(51)
   
  if (mouseIsPressed){    
    let viento = createVector(0.2,0)
    mrua.aplicarFuerza(viento)  
    
  }
  
  mrua.mover()
  mrua.mostrar()
  mrua.rebotar()
}