# CST230 Atlas State

Version: Week-5-Deltas-v1
Academic week: 1-5
Scope: Atlas incremental con Semana 1 existente y deltas documentados para Semanas 2, 3, 4 y 5.

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
- Filtro/switch AI-FIRST global y switches AI-FIRST por delta semanal.
- Semanas 3, 4 y 5 añadidas como escenas de conocimiento visual conectado.
- Semana 2 marcada como parcial documentada porque no se localizó prompt académico completo.

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

## Estado por semana

- Semana 1: implementada como base del Atlas.
- Semana 2: parcial; solo pregunta guía canónica localizada: "¿Cómo sabe un dato exactamente hacia dónde debe viajar?"
- Semana 3: integrada como delta sobre medios físicos e inalámbricos.
- Semana 4: integrada como delta sobre virtualización, cloud, VPN y cifrado.
- Semana 5: integrada como delta sobre subnetting, CIDR, VLSM, máscaras, hosts, broadcast, VLAN, IEEE 802.1Q, VLAN Tagging y laboratorio Linksys.
