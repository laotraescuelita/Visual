#Imprtar la libreria de pygame.
import pygame, sys, random, math
import numpy as np 

#Establecer los parametros de la pantalla.
tamañoPantalla = (ancho, alto) = 640, 480
pygame.init()
ventana = pygame.display.set_mode(tamañoPantalla) #Inicia el tamaño de la ventana
pygame.display.set_caption('Mecanica clasica') #El titulo en la ventana.
reloj = pygame.time.Clock() #Objeto que nos ayuda a establcer los frames.

#Colores a utilizar
color_blanco = (255, 255, 255)
color_rojo = (255, 0, 0)
color_verde = (0, 255, 0)
color_negro = (0, 0, 0)


#Crear los objetos que van dentro de la pantalla.
class Objeto:
	def __init__(self,x,y,masa):		
		self.masa = masa 
		#Convertir una lista en un "arrray" para poder realizar operaciones vectoriales		
		posicion = [x,y]
		velocidad = [0,0]
		aceleracion = [0,0]
		self.posicion = np.array(posicion)
		self.velocidad = np.array(velocidad)
		self.aceleracion = np.array(aceleracion)			

	def mover(self):
		self.velocidad += self.aceleracion
		self.posicion += self.velocidad		
		#self.aceleracion *= 0

	def aplicarFuerza(self, fuerza):
		fuerza = np.array(fuerza)
		#fuerza = fuerza // self.masa
		self.aceleracion += fuerza

	def limitarLosEspacios(self):

		if self.posicion[0] > ancho:
			self.velocidad[0] *= -1
			self.posicion[0] = ancho
		if self.posicion[0] < 0:
			self.velocidad[0] *= -1
			self.posicion[0] = 0		
		
		if self.posicion[1] > alto:
			self.velocidad[1] *= -1
			self.posicion[1] = alto
		#if self.posicion[1] < 0:
			#self.velocidad[1] *= -1
			#self.posicion[1] = 0

		
	def mostrar(self):
		#Dibujar el objeto que se movera.
		return pygame.draw.ellipse(ventana, color_blanco, (self.posicion[0], self.posicion[1], self.masa, self.masa) )

o = Objeto(0,0,20)
gravedad = [0,1]

#Este bucle permite mostrar repetidamente las imagenes.
while True:
	#Asi se colorea la pantalla en cada iteracion.
	ventana.fill(color_negro)
	for evento in pygame.event.get():
		if evento.type == pygame.QUIT:
			pygame.quit()
			sys.exit()

	#Espacio para mostrar el objeto dibujado
	
	o.mover()
	o.aplicarFuerza( gravedad )
	left, middle, right = pygame.mouse.get_pressed()
	if left:
		o.aplicarFuerza([1,0])
	o.limitarLosEspacios()
	o.mostrar()	
	
	#Aquí se actualiza la pantalla.
	reloj.tick(10)
	pygame.display.flip()
