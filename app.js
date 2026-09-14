const mapData = {
  version: "CST230-Week-1-Foundation",
  currentWeek: 1,
  weeks: [
    { id: 1, label: "Semana 1", enabled: true },
    { id: 2, label: "Semana 2", enabled: false },
    { id: 3, label: "Semana 3", enabled: false },
    { id: 4, label: "Semana 4", enabled: false },
    { id: 5, label: "Semana 5", enabled: false },
    { id: 6, label: "Semana 6", enabled: false },
    { id: 7, label: "Semana 7", enabled: false }
  ],
  statuses: {
    no_estudiado: { label: "No estudiado", color: "var(--no-estudiado)" },
    introducido: { label: "Introducido", color: "var(--canon)" },
    en_aprendizaje: { label: "En aprendizaje", color: "var(--aprendizaje)" },
    comprendido: { label: "Comprendido", color: "var(--comprendido)" },
    aplicado: { label: "Aplicado", color: "var(--aplicado)" }
  },
  layers: {
    canonical: { label: "Académica / Canonical", color: "var(--canon)" },
    worldreal: { label: "Mundo real", color: "var(--real)" }
  },
  relationshipTypes: {
    contains: { label: "contiene", symbol: "→" },
    relation: { label: "relación", symbol: "—" },
    supports: { label: "apoya", symbol: "↔" },
    sequence: { label: "secuencia", symbol: "→" }
  },
  nodes: [
    {
      id: "cst230-core",
      title: "CST230 — Fundamentos de Redes",
      layer: "canonical",
      status: "comprendido",
      weekIntroduced: 1,
      x: 560,
      y: 140,
      size: 34,
      definitionSimple: "Mapa central para responder cómo se comunican los dispositivos en una red.",
      definitionTechnical: "Modelo de conectividad, protocolos, direccionamiento, medios y administración de infraestructura.",
      analogy: "Como un aeropuerto: aviones, rutas, rutas de cabina, torre de control y mantenimiento.",
      realExample: "La red de un edificio académico con aulas, Wi‑Fi, servidores y switches.",
      source: "Objetivo de curso + guía del curso.",
      week: 1,
      relations: ["Dispositivos", "Protocolos", "Modelo OSI", "Gestión de red", "Medios"],
      osiLayer: "Pregunta central del curso"
    },
    {
      id: "pregunta-principal",
      title: "¿Cómo se comunican los dispositivos?",
      layer: "canonical",
      status: "comprendido",
      weekIntroduced: 1,
      x: 560,
      y: 215,
      size: 24,
      definitionSimple: "Pregunta guía del atlas: conectar la evidencia académica con el funcionamiento real.",
      definitionTechnical: "Integra capas, protocolos, direccionamiento, topología y gestión de operación.",
      analogy: "Una pregunta eje como sistema nervioso de todo el mapa.",
      realExample: "Qué necesita una computadora en la misma LAN para hablar con un servidor.",
      source: "Diseño pedagógico de semana 1.",
      relations: ["Modelo OSI", "Dispositivos", "Protocolos", "Topologías"],
      osiLayer: "Aplicación"
    },
    {
      id: "dispositivos",
      title: "Dispositivos",
      layer: "canonical",
      status: "introducido",
      weekIntroduced: 1,
      x: 320,
      y: 300,
      size: 24,
      definitionSimple: "Equipos que originan o reciben datos en la red.",
      definitionTechnical: "Hosts con stack de red y configuración para identificación y comunicación.",
      analogy: "Personas en una conversación: cada una habla y escucha.",
      realExample: "Laptop, impresora de red, servidor y teléfonos IP.",
      source: "Molina-Robles Cap 1–2",
      relations: ["Hosts", "Protocolos", "Topologías"],
      osiLayer: "Aplicación → Física"
    },
    {
      id: "aplicaciones",
      title: "Aplicaciones",
      layer: "canonical",
      status: "introducido",
      weekIntroduced: 1,
      x: 780,
      y: 300,
      size: 24,
      definitionSimple: "Servicios software que generan el tráfico útil para usuarios.",
      definitionTechnical: "Protocolos cliente-servidor y flujos lógicos sobre conectividad red.",
      analogy: "Un traductor de mensajes entre personas.",
      realExample: "Correo, LMS, videollamada y ERP.",
      source: "Molina-Robles Cap 1–2",
      relations: ["Protocolos", "Hosts", "Capa Aplicación OSI"],
      osiLayer: "Aplicación (7)"
    },
    {
      id: "protocolos",
      title: "Protocolos",
      layer: "canonical",
      status: "en_aprendizaje",
      weekIntroduced: 1,
      x: 560,
      y: 310,
      size: 24,
      definitionSimple: "Reglas para intercambiar datos entre dos nodos.",
      definitionTechnical: "Definen formato, orden, control, confiabilidad y cierre de sesión.",
      analogy: "Como una gramática compartida para conversar.",
      realExample: "HTTP, TCP, IP, DNS.",
      source: "Molina-Robles Cap 1–2",
      relations: ["Modelo OSI", "TCP/IP", "Aplicaciones"],
      osiLayer: "Todas las capas"
    },
    {
      id: "medios",
      title: "Medios",
      layer: "canonical",
      status: "introducido",
      weekIntroduced: 1,
      x: 560,
      y: 420,
      size: 24,
      definitionSimple: "Elementos físicos o inalámbricos que transportan la señal.",
      definitionTechnical: "Enlaces con propiedades de alcance, tasa y ruido.",
      analogy: "Carreteras y rutas aéreas para el transporte.",
      realExample: "Cable UTP, fibra, Wi‑Fi.",
      source: "Molina-Robles Cap 1–2",
      relations: ["Cableado", "Topologías", "Capa Física"],
      osiLayer: "Física (1)"
    },
    {
      id: "hardware",
      title: "Hardware de red",
      layer: "canonical",
      status: "introducido",
      weekIntroduced: 1,
      x: 320,
      y: 500,
      size: 24,
      definitionSimple: "Equipos que soportan conmutación, enrutamiento y conectividad.",
      definitionTechnical: "Switches, routers, APs, paneles y equipos de borde.",
      analogy: "La infraestructura vial y semafórica de la ciudad digital.",
      realExample: "Switch de acceso en rack de laboratorio.",
      source: "Molina-Robles Cap 1–2",
      relations: ["Topologías", "Medios", "Gestión de cambios"],
      osiLayer: "Física (1) y Enlace (2)"
    },
    {
      id: "topologias",
      title: "Topologías",
      layer: "canonical",
      status: "en_aprendizaje",
      weekIntroduced: 1,
      x: 780,
      y: 500,
      size: 24,
      definitionSimple: "Formas de interconexión entre nodos de red.",
      definitionTechnical: "Diseños físicos y lógicos de interconexión.",
      analogy: "Planos de distribución de una ciudad.",
      realExample: "Estrella y malla en redes LAN.",
      source: "Molina-Robles Cap 1–2",
      relations: ["Hardware", "Medios", "Infraestructura física"],
      osiLayer: "Diseño transversal"
    },
    {
      id: "modelo-osi",
      title: "Modelo OSI",
      layer: "canonical",
      status: "en_aprendizaje",
      weekIntroduced: 1,
      x: 560,
      y: 600,
      size: 30,
      definitionSimple: "Marco de 7 capas para ubicar responsabilidades de la comunicación.",
      definitionTechnical: "Estructura de interoperabilidad entre aplicaciones y enlace físico.",
      analogy: "Una cadena de procesos que no deja espacios ciegos.",
      realExample: "Una petición viaja desde aplicación hasta capa física y vuelve con respuesta.",
      source: "Molina-Robles Cap 1–2",
      relations: ["Capa Aplicación", "Capa Presentación", "Capa Sesión", "Capa Transporte", "Capa Red", "Capa Enlace", "Capa Física"],
      osiLayer: "Modelo OSI (7 capas)"
    },
    {
      id: "capa-aplicacion",
      title: "Capa 7 - Aplicación",
      layer: "canonical",
      status: "no_estudiado",
      weekIntroduced: 1,
      x: 880,
      y: 500,
      size: 18,
      definitionSimple: "Interfaz final donde el usuario o servicio consume datos.",
      definitionTechnical: "Protocolos de aplicación y representación de servicios.",
      analogy: "La recepción de un paquete en destino.",
      realExample: "Navegador solicitando una página web.",
      source: "Molina-Robles Cap 1–2",
      relations: ["Modelo OSI", "Aplicaciones"],
      osiLayer: "7"
    },
    {
      id: "capa-presentacion",
      title: "Capa 6 - Presentación",
      layer: "canonical",
      status: "no_estudiado",
      weekIntroduced: 1,
      x: 900,
      y: 540,
      size: 18,
      definitionSimple: "Formatea y codifica la información para intercambio.",
      definitionTechnical: "Codificación, compresión y presentación interoperable.",
      analogy: "Traductor antes de entregar un mensaje.",
      realExample: "Conversión de codificaciones de texto o imagen.",
      source: "Molina-Robles Cap 1–2",
      relations: ["Modelo OSI", "Capa Aplicación"],
      osiLayer: "6"
    },
    {
      id: "capa-sesion",
      title: "Capa 5 - Sesión",
      layer: "canonical",
      status: "no_estudiado",
      weekIntroduced: 1,
      x: 920,
      y: 580,
      size: 18,
      definitionSimple: "Gestiona apertura, mantenimiento y cierre de sesiones.",
      definitionTechnical: "Sincroniza estados y diálogo entre nodos extremos.",
      analogy: "La regla de inicio/fin de una reunión.",
      realExample: "Inicio y cierre de autenticación en un servicio.",
      source: "Molina-Robles Cap 1–2",
      relations: ["Modelo OSI", "Aplicaciones"],
      osiLayer: "5"
    },
    {
      id: "capa-transporte",
      title: "Capa 4 - Transporte",
      layer: "canonical",
      status: "no_estudiado",
      weekIntroduced: 1,
      x: 940,
      y: 620,
      size: 18,
      definitionSimple: "Entrega confiable entre extremos.",
      definitionTechnical: "Control de flujo, orden y fiabilidad de segmentos.",
      analogy: "Repartir cartas con constancia de entrega.",
      realExample: "Conexión TCP con control de retransmisión.",
      source: "Molina-Robles Cap 1–2",
      relations: ["Modelo OSI", "Protocolos", "TCP/IP"],
      osiLayer: "4"
    },
    {
      id: "capa-red",
      title: "Capa 3 - Red",
      layer: "canonical",
      status: "no_estudiado",
      weekIntroduced: 1,
      x: 960,
      y: 660,
      size: 18,
      definitionSimple: "Define rutas y direcciones para mover paquetes entre redes.",
      definitionTechnical: "Direccionamiento lógico y forwarding.",
      analogy: "Una central de mensajería entre ciudades.",
      realExample: "Direcciones IP y tablas de encaminamiento.",
      source: "Molina-Robles Cap 1–2",
      relations: ["Modelo OSI", "Capa Enlace de datos"],
      osiLayer: "3"
    },
    {
      id: "capa-enlace",
      title: "Capa 2 - Enlace de datos",
      layer: "canonical",
      status: "no_estudiado",
      weekIntroduced: 1,
      x: 980,
      y: 700,
      size: 18,
      definitionSimple: "Encapsula tramas y controla acceso al medio local.",
      definitionTechnical: "Dirección física y control de enlace.",
      analogy: "Camión que lleva paquetes por una misma calle.",
      realExample: "Direcciones MAC y tramas Ethernet.",
      source: "Molina-Robles Cap 1–2",
      relations: ["Modelo OSI", "Medios", "Topologías"],
      osiLayer: "2"
    },
    {
      id: "capa-fisica",
      title: "Capa 1 - Física",
      layer: "canonical",
      status: "no_estudiado",
      weekIntroduced: 1,
      x: 1000,
      y: 740,
      size: 18,
      definitionSimple: "Transmite bits por el medio físico.",
      definitionTechnical: "Voltaje, señalización y propiedades de cableado.",
      analogy: "El asfalto sobre el cual circula el paquete.",
      realExample: "UTP, fibra, canalizaciones y conectores.",
      source: "Molina-Robles Cap 1–2",
      relations: ["Modelo OSI", "Medios", "Cableado", "Hosts"],
      osiLayer: "1"
    },
    { id: "tcpip", title: "TCP/IP", layer: "canonical", status: "en_aprendizaje", weekIntroduced: 1, x: 760, y: 700, size: 22, definitionSimple: "Conjunto práctico de protocolos de interconexión.", definitionTechnical: "Arquitectura operativa para la operación real de redes IP.", analogy: "Versión aplicada del marco OSI para tráfico real.", realExample: "HTTP sobre TCP sobre IP hacia un servidor.", source: "Semana 1", relations: ["Protocolos", "Capa Transmisión"], osiLayer: "4–3", },
    { id: "cableado", title: "Cableado", layer: "canonical", status: "en_aprendizaje", weekIntroduced: 1, x: 500, y: 650, size: 20, definitionSimple: "Canales físicos organizados y etiquetados por diseño.", definitionTechnical: "Cableado estructurado y documentación asociada.", analogy: "La red eléctrica y su plano en un edificio.", realExample: "Patch panels y etiquetado en rack.", source: "Semana 1", relations: ["Medios", "Infraestructura física", "Documentación"], osiLayer: "1" },
    { id: "infraestructura", title: "Infraestructura física", layer: "canonical", status: "introducido", weekIntroduced: 1, x: 340, y: 620, size: 20, definitionSimple: "Racks, energía y espacio físico para operación de red.", definitionTechnical: "Organiza enlaces verticales y horizontales, climatización, energía y seguridad física.", analogy: "Fundación de un edificio técnico.", realExample: "Armario con UPS y ventilación para switches.", source: "Semana 1", relations: ["Hardware", "Cableado", "Seguridad"], osiLayer: "1–2" },
    { id: "seguridad", title: "Políticas de seguridad", layer: "worldreal", status: "introducido", weekIntroduced: 1, x: 700, y: 800, size: 22, definitionSimple: "Reglas para proteger acceso y operación de red.", definitionTechnical: "Control de accesos, segmentación y cambio seguro.", analogy: "Sistema de guardias y accesos del edificio.", realExample: "Separar VLAN de invitados y administrativa.", source: "Buenas prácticas de curso", relations: ["Gestión de red", "Gestión de cambios"], osiLayer: "Operación" },
    { id: "documentacion", title: "Documentación", layer: "worldreal", status: "introducido", weekIntroduced: 1, x: 920, y: 800, size: 22, definitionSimple: "Registros de arquitectura, inventarios y convenciones.", definitionTechnical: "Mapas, diagramas, nomenclatura, cambios y estado.", analogy: "Bitácora de la infraestructura viva.", realExample: "Inventario con número de puerto y cable por rack.", source: "Buenas prácticas de curso", relations: ["Cableado", "Infraestructura física", "Gestión de cambios"], osiLayer: "Gestión" },
    { id: "gestion-cambios", title: "Gestión de cambios", layer: "worldreal", status: "introducido", weekIntroduced: 1, x: 1120, y: 640, size: 22, definitionSimple: "Proceso para aprobar y controlar modificaciones.", definitionTechnical: "Solicitud, revisión, ventana, validación y evidencia de retorno.", analogy: "Trabajar en una red sin cortar el flujo principal.", realExample: "Actualización de firmware de un switch en ventana programada.", source: "Buenas prácticas de curso", relations: ["Documentación", "Seguridad", "Gestión de red"], osiLayer: "Gobernanza" },
    { id: "gestion-red", title: "Gestión de red", layer: "worldreal", status: "introducido", weekIntroduced: 1, x: 1120, y: 720, size: 22, definitionSimple: "Operación, monitoreo y control continuo de la red.", definitionTechnical: "Inventario, monitoreo, documentación, cambios y revisión de incidentes.", analogy: "El centro de mando de la red.", realExample: "Monitoreo de uso, rendimiento y alertas de enlaces.", source: "Buenas prácticas de curso", relations: ["Documentación", "Gestión de cambios", "Seguridad"], osiLayer: "Operación" },
    { id: "router-world", title: "Router (mundo real)", layer: "worldreal", status: "aplicado", weekIntroduced: 1, x: 280, y: 820, size: 20, definitionSimple: "Conecta segmentos y enruta tráfico entre dominios.", definitionTechnical: "Dispositivo de encaminamiento y control de rutas.", analogy: "Peaje inteligente entre barrios.", realExample: "Router en borde de red académica.", source: "Laboratorio", relations: ["Topologías", "Protocolos", "Capa Red"], osiLayer: "3" },
    { id: "switch-world", title: "Switch (mundo real)", layer: "worldreal", status: "aplicado", weekIntroduced: 1, x: 460, y: 820, size: 20, definitionSimple: "Distribuye tramas dentro de LAN local.", definitionTechnical: "Conecta múltiples equipos y aplica dominio de broadcast.", analogy: "Centro de cruce entre aulas de una misma planta.", realExample: "Switch de planta de 48 puertos.", source: "Laboratorio", relations: ["Topologías", "Hardware", "Capa Enlace"], osiLayer: "2" },
    { id: "cableado-world", title: "Cableado (mundo real)", layer: "worldreal", status: "aplicado", weekIntroduced: 1, x: 640, y: 820, size: 20, definitionSimple: "Canales físicos instalados y etiquetados.", definitionTechnical: "Cable estructurado terminado en patch panel y racks.", analogy: "Tuberías de una red física", realExample: "UTP Cat6ado en canaletas con identificación.", source: "Laboratorio", relations: ["Cableado", "Infraestructura física"], osiLayer: "1" },
    { id: "dispositivos-world", title: "Host / Endpoint", layer: "worldreal", status: "aplicado", weekIntroduced: 1, x: 820, y: 820, size: 20, definitionSimple: "Dispositivo final dentro de una red real de trabajo.", definitionTechnical: "Nodo IP/MAC con stack de red activo y políticas de acceso.", analogy: "Empleado conectándose a su puesto de trabajo.", realExample: "Laptop conectada a Wi‑Fi con perfil corporativo.", source: "Laboratorio", relations: ["Dispositivos", "Protocolos", "Seguridad"], osiLayer: "7–1" }
  ],
  edges: [
    ["cst230-core", "pregunta-principal", "contains", "pregunta"],
    ["cst230-core", "dispositivos", "contains", "fundamento"],
    ["cst230-core", "aplicaciones", "contains", "fundamento"],
    ["cst230-core", "protocolos", "contains", "fundamento"],
    ["cst230-core", "medios", "contains", "fundamento"],
    ["cst230-core", "hardware", "contains", "fundamento"],
    ["cst230-core", "topologias", "contains", "fundamento"],
    ["cst230-core", "modelo-osi", "contains", "eje"],
    ["cst230-core", "tcpip", "contains", "eje"],
    ["cst230-core", "cableado", "contains", "base"],
    ["cst230-core", "infraestructura", "contains", "base"],
    ["cst230-core", "seguridad", "contains", "operación"],
    ["cst230-core", "documentacion", "contains", "operación"],
    ["cst230-core", "gestion-cambios", "contains", "operación"],
    ["cst230-core", "gestion-red", "contains", "operación"],
    ["dispositivos", "protocolos", "relation", "usa"],
    ["aplicaciones", "protocolos", "relation", "usa"],
    ["protocolos", "modelo-osi", "relation", "se organiza"],
    ["hardware", "topologias", "relation", "implementa"],
    ["medios", "topologias", "supports", "define"],
    ["medios", "cableado", "contains", "materializa"],
    ["cableado", "infraestructura", "contains", "ubica"],
    ["topologias", "hardware", "supports", "usa"],
    ["modelo-osi", "capa-aplicacion", "contains", "subcapa"],
    ["modelo-osi", "capa-presentacion", "contains", "subcapa"],
    ["modelo-osi", "capa-sesion", "contains", "subcapa"],
    ["modelo-osi", "capa-transporte", "contains", "subcapa"],
    ["modelo-osi", "capa-red", "contains", "subcapa"],
    ["modelo-osi", "capa-enlace", "contains", "subcapa"],
    ["modelo-osi", "capa-fisica", "contains", "subcapa"],
    ["capa-red", "tcpip", "supports", "soporta"],
    ["capa-transporte", "tcpip", "supports", "soporta"],
    ["seguridad", "gestion-cambios", "relation", "requiere"],
    ["documentacion", "gestion-red", "supports", "hace trazable"],
    ["gestion-red", "gestion-cambios", "contains", "gobierna"],
    ["gestion-cambios", "router-world", "relation", "aplica"],
    ["gestion-red", "switch-world", "relation", "aplica"],
    ["seguridad", "dispositivos-world", "relation", "gobierna"],
    ["cableado-world", "documentacion", "relation", "reflejado"]
  ].map(([source, target, relationshipType, label]) => ({
    source,
    target,
    relationshipType,
    label,
    weekIntroduced: 1
  }))
};

const state = {
  activeWeeks: new Set([1]),
  activeLayers: new Set(Object.keys(mapData.layers)),
  activeStatuses: new Set(Object.keys(mapData.statuses)),
  query: "",
  selectedNodeId: "cst230-core"
};

const svg = document.getElementById("knowledgeMap");
const edgesLayer = document.getElementById("edgesLayer");
const nodesLayer = document.getElementById("nodesLayer");
const weekFilters = document.getElementById("weekFilters");
const layerFilters = document.getElementById("layerFilters");
const statusFilters = document.getElementById("statusFilters");
const searchInput = document.getElementById("searchInput");
const detailTitle = document.getElementById("detailTitle");
const detailContent = document.getElementById("detailContent");

function normalize(value) {
  return (value || "").toString().toLowerCase();
}

function visibleNodes() {
  const query = normalize(searchInput.value);
  return mapData.nodes.filter((node) => {
    if (!state.activeWeeks.has(node.weekIntroduced)) return false;
    if (!state.activeLayers.has(node.layer || "canonical")) return false;
    if (!state.activeStatuses.has(node.status)) return false;
    if (!query) return true;
    return normalize(node.title).includes(query) || normalize(node.definitionSimple).includes(query) || normalize(node.realExample).includes(query);
  });
}

function visibleEdges(visibleNodeIds) {
  const set = new Set(visibleNodeIds);
  return mapData.edges.filter((edge) => set.has(edge.source) && set.has(edge.target));
}

function renderFilters() {
  weekFilters.innerHTML = mapData.weeks
    .map(
      (week) => `<label><input type="checkbox" data-week="${week.id}" ${week.enabled ? "checked" : ""}><span>${week.label}</span></label>`
    )
    .join("");

  layerFilters.innerHTML = Object.entries(mapData.layers)
    .map(
      ([key, value]) =>
        `<label><input type="checkbox" data-layer="${key}" checked><span>${value.label}</span></label>`
    )
    .join("");

  statusFilters.innerHTML = Object.entries(mapData.statuses)
    .map(
      ([key, value]) =>
        `<label><input type="checkbox" data-status="${key}" checked><span>${value.label}</span></label>`
    )
    .join("");

  weekFilters.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => {
      const id = Number(input.dataset.week);
      if (input.checked) state.activeWeeks.add(id);
      else state.activeWeeks.delete(id);
      render();
    });
  });

  layerFilters.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => {
      const id = input.dataset.layer;
      if (input.checked) state.activeLayers.add(id);
      else state.activeLayers.delete(id);
      render();
    });
  });

  statusFilters.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => {
      const id = input.dataset.status;
      if (input.checked) state.activeStatuses.add(id);
      else state.activeStatuses.delete(id);
      render();
    });
  });
}

function updateDetail(node) {
  if (!node) return;
  state.selectedNodeId = node.id;
  detailTitle.textContent = node.title;
  detailContent.innerHTML = `
    <dt>Definición simple</dt><dd>${node.definitionSimple}</dd>
    <dt>Definición técnica</dt><dd>${node.definitionTechnical}</dd>
    <dt>Analogía</dt><dd>${node.analogy}</dd>
    <dt>Ejemplo real</dt><dd>${node.realExample}</dd>
    <dt>Relaciones</dt><dd>${(node.relations || []).map((item) => `• ${item}`).join("<br/>") || "—"}</dd>
    <dt>Capa OSI</dt><dd>${node.osiLayer || "—"}</dd>
    <dt>Fuente</dt><dd>${node.source || "—"}</dd>
    <dt>Semana aprendida</dt><dd>${node.weekIntroduced}</dd>
    <dt>Estado</dt><dd>${mapData.statuses[node.status]?.label || node.status}</dd>
    <dt>Tipo de capa</dt><dd>${mapData.layers[node.layer || "canonical"].label}</dd>
  `;
}

function draw() {
  const nodes = visibleNodes();
  const visibleIds = nodes.map((node) => node.id);
  const edges = visibleEdges(visibleIds);

  edgesLayer.innerHTML = edges
    .map((edge) => {
      const source = mapData.nodes.find((node) => node.id === edge.source);
      const target = mapData.nodes.find((node) => node.id === edge.target);
      if (!source || !target) return "";
      const type = mapData.relationshipTypes[edge.relationshipType];
      return `<line x1="${source.x}" y1="${source.y}" x2="${target.x}" y2="${target.y}" stroke="rgba(160, 190, 225, 0.45)" stroke-width="2" />`;
    })
    .join("");

  nodesLayer.innerHTML = nodes
    .map((node) => {
      const color = mapData.layers[node.layer || "canonical"].color;
      return `
        <g class="node" data-id="${node.id}" tabindex="0">
          <circle cx="${node.x}" cy="${node.y}" r="${node.size}" fill="${color}" class="node-chip" stroke="#d8ecff" stroke-width="2"/>
          <text x="${node.x + 12}" y="${node.y + 4}" font-size="12">${node.title}</text>
        </g>
      `;
    })
    .join("");

  nodesLayer.querySelectorAll("[data-id]").forEach((el) => {
    el.addEventListener("click", () => {
      const node = mapData.nodes.find((n) => n.id === el.dataset.id);
      updateDetail(node);
    });
  });
}

function render() {
  draw();
  const selected = mapData.nodes.find((node) => node.id === state.selectedNodeId);
  updateDetail(selected);
}

searchInput.addEventListener("input", render);
renderFilters();
render();
