# Planificación (Scrum + Kanban)

## Roles de Scrum

| Rol | Persona |
|---|---|
| Product Owner | _por definir_ |
| Scrum Master | _por definir_ |
| Equipo de desarrollo | _por definir_ |

- **Daily:** todos los días, 15 minutos: qué hice ayer, qué haré hoy y qué me bloquea.
- **Retro:** al acabar cada sprint: qué fue bien, qué fue mal y qué mejoramos.

## Columnas del Trello

`Backlog` → `To do` → `In progress` → `Review` → `Done`

## Historias de usuario

| ID | Historia | Sprint |
|---|---|---|
| HU01 | Como usuario quiero ver una **pantalla de inicio** con el botón Jugar para empezar la partida. | 1 |
| HU02 | Como usuario quiero leer las **reglas del juego** para saber cómo funciona. | 1 |
| HU03 | Como usuario quiero **escribir qué se sortea** (o elegir un recomendado) para usar la app para lo que quiera. | 1 |
| HU04 | Como usuario quiero **añadir mi nombre y elegir un personaje** para entrar en el sorteo. | 1 |
| HU05 | Como usuario quiero **quitar a alguien** de la lista por si me he equivocado. | 1 |
| HU06 | Como usuario quiero que la app **elija a una persona al azar** para que el sorteo sea justo. | 1 |
| HU07 | Como usuario quiero ver **un aviso con el nombre** del elegido y lo que le toca. | 1 |
| HU08 | Como usuario quiero que **el elegido no vuelva a salir** hasta reiniciar. | 1 |
| HU09 | Como usuario quiero ver **la cola y al portero** con animaciones para que sea divertido. | 2 |
| HU10 | Como usuario quiero **efectos de sonido** para que sea más entretenido. | 2 |
| HU11 | Como usuario quiero un **botón de reinicio** para volver a empezar con todos. | 2 |
| HU12 | Como usuario quiero ver **la lista final** con el orden en que fueron cayendo y volver al inicio. | 2 |
| HU13 | Como usuario quiero usar la app en el **móvil, la tablet y el ordenador**. | 2 |
| HU14 | Como usuario quiero que **no se pierdan los datos** si recargo la página (localStorage). | 2 |
| HU15 | Como equipo queremos **tests unitarios** de la lógica para asegurar que funciona. | 2 |

## Sprint 1 (semanas 1 y 2): base y lógica

- Idea, briefing y maquetas en Figma (móvil, tablet y escritorio).
- Crear repositorio, estructura de carpetas y tablero de Trello.
- HTML de las pantallas: inicio, qué se sortea, quién viene y la entrada.
- CSS base con atomic design (átomos y moléculas).
- Lógica del sorteo en `js/logic.js` (HU03 a HU08).
- Primeros tests con Jest.
- **Retro del sprint 1.**

## Sprint 2 (semanas 3 y 4): escena, animaciones y entrega

- Escena de la discoteca, personajes y portero (HU09).
- Animaciones, transiciones y sonidos (HU10).
- Reinicio y pantalla final (HU11, HU12).
- Responsive con 2 puntos de quiebre y horizontal (HU13).
- localStorage (HU14).
- Completar tests (HU15), README y presentación.
- **Retro del sprint 2.**
