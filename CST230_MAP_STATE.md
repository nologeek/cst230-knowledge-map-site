# CST230 Atlas State

Version: Week-1-Foundation
Academic week: 1
Scope: Inicio del curso — Semana 1 de 7 (Introducción a las redes en el mundo real)

## Arquitectura activa

- Frontend independiente en `index.html` + `styles.css`.
- Lógica de render y filtros en `app.js`.
- Estructura por nodos y aristas con campos académicos explícitos para semana 1.
- Capas separadas:
  - `canonical` (académica CST230)
  - `worldreal` (capa de aplicación al mundo real)
- Estados de aprendizaje definidos:
  - no_estudiado
  - introducido
  - en_aprendizaje
  - comprendido
  - aplicado
- Filtro semanal incremental con semanas preparadas 1..7.

## Estructura de salida

### Núcleo de semana 1 (estado inicial)

- `CST230 — Fundamentos de Redes` (nodo central)
- `¿Cómo se comunican los dispositivos?`
- Rama de primer nivel: Dispositivos, Aplicaciones, Protocolos, Medios, Hardware, Topologías, Modelo OSI, Gestión de red.
- Ejes transversales: TCP/IP, Cableado, Infraestructura física, Seguridad, Documentación, Gestión de cambios.
- Modelo OSI expuesto con las 7 capas.
- Puente académico → mundo real con nodos de router, switch, AP, cableado y host.

## Compromisos de diseño del atlas

- Mapa estable único: NO se reconstruye en cada semana.
- Aprendizaje incremental: nuevos nodos/relaciones se agregan como deltas en semanas futuras.
- Separación explícita de capas y estado por nodo.
- Estado inicial con rastreo de semana introducción y fuente académica.
