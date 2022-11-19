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

#Recursion
def circulo(x,y,r):
	pygame.draw.ellipse(ventana, color_blanco, (x, y, r, r),1)
	if r > 2:
		circulo(x+r, y, r//2)
		circulo(x-r, y, r//2)
		circulo(x, y+r, r//2)


#Este bucle permite mostrar repetidamente las imagenes.
while True:
	#Asi se colorea la pantalla en cada iteracion.
	ventana.fill(color_negro)
	for evento in pygame.event.get():
		if evento.type == pygame.QUIT:
			pygame.quit()
			sys.exit()

	circulo(ancho//2, alto//2, 100)

	#Aquí se actualiza la pantalla.
	reloj.tick(10)
	pygame.display.flip()
