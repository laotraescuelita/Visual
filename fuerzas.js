//Se denomina fuerza mecánica a cualquier acción o influencia capaz de modificar el estado
//de movimiento o de reposo de un cuerpo, es decir, de imprimirle una aceleración modificando
//su velocidad.

class FUERZAS{
  constructor(x,y,masa){
    this.masa = masa
    this.posicion = createVector(x,y)
    this.velocidad = createVector(0,0)
    this.aceleracion = createVector(0,0)
  }
  
  mover(){
    this.velocidad.add(this.aceleracion)
    this.posicion.add(this.velocidad)
    this.aceleracion.mult(0)
  }

  aplicarFuerza(fuerza){
    let fuerzamasa = p5.Vector.div(fuerza, this.masa)
    this.aceleracion.add(fuerzamasa)
  }

  mostrar(){
    stroke(5)
    strokeWeight(2)
    fill(250,100)
    ellipse(this.posicion.x, this.posicion.y, this.masa, this.masa)    
  }

  rebotar(){
    if(this.posicion.x > width - this.masa){
      this.velocidad.x *= -1
      this.posicion.x = width - this.masa
    }else if(this.posicion.x < 0 + this.masa){
      this.velocidad.x *= -1
      this.posicion.x = 0 + this.masa
    }
    if(this.posicion.y > height - this.masa){
      this.velocidad.y *= -1
      this.posicion.y = height - this.masa
    }
  }
  
}

// Mostrar la pantalla y la clase

let objetos = []

function setup(){
  createCanvas(640, 360)
  for (let i=0; i < 10; i++){
    objetos[i] = new FUERZAS(random(0,width), 0, random(22, 44))
  }
  createP("Presiona el boton izquierdo del raton para aplicar viento a la derecha")
}

function draw(){
  background(51)
  
  for(let i=0; i < objetos.length; i++){
    let gravedad = createVector(0,0.1 * objetos[i].masa)
    objetos[i].aplicarFuerza(gravedad)  
  
    if (mouseIsPressed){    
      let viento = createVector(0.2,0)
      objetos[i].aplicarFuerza(viento)  
    }

    objetos[i].mover()
    objetos[i].mostrar()
    objetos[i].rebotar()
    
  }

}