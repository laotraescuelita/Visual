#Imprtar la libreria de pygame.
import pygame, sys, random, math
import numpy as np 

#Establecer los parametros de la pantalla.
tamañoPantalla = (ancho, alto) = 640, 480
pygame.init()
ventana = pygame.display.set_mode(tamañoPantalla) #Inicia el tamaño de la ventana
pygame.display.set_caption('Caminante errante') #El titulo en la ventana.
reloj = pygame.time.Clock() #Objeto que nos ayuda a establcer los frames.

#Colores a utilizar
color_blanco = (255, 255, 255)
color_rojo = (255, 0, 0)
color_verde = (0, 255, 0)


#Crear los objetos que van dentro de la pantalla.
class Objeto:
	def __init__(self):
		self.x = ancho//2
		self.y = alto//2

	def mover(self):
		#Mover el obejeto de manera aleatoria.	
		direccion = np.random.randint(4)
		if direccion == 0:
			self.x += 1
		elif direccion == 1:
			self.x -= 1
		elif direccion == 2:
			self.y += 1
		else:
			self.y -= 1

	def mostrar(self):
		#Dibujar el objeto que se movera.
		return pygame.draw.ellipse(ventana, color_blanco, (self.x, self.y, 10, 10) )

o = Objeto()

#Este bucle permite mostrar repetidamente las imagenes.
while True:
	for evento in pygame.event.get():
		if evento.type == pygame.QUIT:
			pygame.quit()
			sys.exit()

	o.mover()
	o.mostrar()
	pygame.display.flip()
