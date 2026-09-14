const mapData = {
  version: "CST230-Week-1-Foundation",
  currentWeek: 1,
  stages: [
    {
      id: "s1",
      label: "Etapa 1",
      title: "¿Cómo se abre la comunicación entre dispositivos?",
      intro: "Primero conectamos la pregunta central del curso con los conceptos base. Si entendemos el mensaje, la comunicación deja de ser «mágica» y se vuelve un flujo trazable.",
      question: "¿Qué mínimo necesita existir para que una red funcione en el aula o laboratorio?",
      nodeIds: ["cst230-core", "pregunta-principal", "dispositivos", "aplicaciones", "protocolos"]
    },
    {
      id: "s2",
      label: "Etapa 2",
      title: "Medio físico, topología y equipos",
      intro: "Ahora aterrizamos: la comunicación no existe sin cableado, arquitectura física y equipos que la sostengan.",
      question: "¿Qué cambia cuando la red crece de una mesa a varias aulas o edificios?",
      nodeIds: ["medios", "cableado", "infraestructura", "topologias", "hardware", "router-world", "switch-world", "cableado-world", "dispositivos-world"]
    },
    {
      id: "s3",
      label: "Etapa 3",
      title: "Modelo OSI como arquitectura de trazabilidad",
      intro: "OSI permite localizar dónde ocurre cada responsabilidad y saber qué capa responde por qué función.",
      question: "¿Cómo identificamos dónde está el problema en el flujo de una comunicación?",
      nodeIds: ["modelo-osi", "capa-aplicacion", "capa-presentacion", "capa-sesion", "capa-transporte", "capa-red", "capa-enlace", "capa-fisica", "tcpip"]
    },
    {
      id: "s4",
      label: "Etapa 4",
      title: "Gestión y operación con apoyo de IA",
      intro: "La operación estable requiere monitoreo, inventario, cambios controlados y documentación. Aquí integramos IA como apoyo de decisiones.",
      question: "¿Qué valor aporta IA sin reemplazar la base académica?",
      nodeIds: ["seguridad", "documentacion", "gestion-cambios", "gestion-red", "ai-layer", "ai-insight", "host-world"]
    }
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
    worldreal: { label: "Mundo real", color: "var(--real)" },
    ai: { label: "Conexión con IA", color: "var(--ai)" }
  },
  nodes: [
    {
      id: "cst230-core",
      title: "CST230 — Fundamentos de Redes",
      layer: "canonical",
      status: "comprendido",
      weekIntroduced: 1,
      x: 650,
      y: 180,
      size: 30,
      definitionSimple: "Mapa central para responder cómo se comunican los dispositivos.",
      definitionTechnical: "Marco integral de conectividad, medios, protocolos, topología y operación.",
      analogy: "Como un sistema nervioso central.",
      realExample: "Red de aulas, servidor y Wi‑Fi con administración.",
      source: "Diseño académico del curso",
      relations: ["dispositivos", "protocolos", "topologias", "modelo-osi", "gestion-red"],
      osiLayer: "Visión transversal del curso",
      question: "¿Qué representa este mapa para toda la semana?",
      questionDetail: "Permite construir una respuesta incremental y trazable para la comunicación de red."
    },
    {
      id: "pregunta-principal",
      title: "¿Cómo se comunican los dispositivos?",
      layer: "canonical",
      status: "comprendido",
      weekIntroduced: 1,
      x: 650,
      y: 240,
      size: 22,
      definitionSimple: "Pregunta guía que organiza la integración de conceptos.",
      definitionTechnical: "Integra capas de comunicación, protocolos y operación de red.",
      analogy: "La brújula de todo el atlas.",
      realExample: "Qué debe pasar para que una laptop vea un servidor interno.",
      source: "Objetivo de semana 1",
      relations: ["dispositivos", "protocolos", "modelo-osi", "topologias"],
      osiLayer: "Pregunta central",
      question: "¿Qué elemento responde primero al mensaje del usuario?",
      questionDetail: "Generalmente inicia en el dispositivo final (host) y termina en destino tras un conjunto de capas."
    },
    {
      id: "dispositivos",
      title: "Dispositivos",
      layer: "canonical",
      status: "introducido",
      weekIntroduced: 1,
      x: 430,
      y: 320,
      size: 20,
      definitionSimple: "Equipos que originan o reciben datos en una red.",
      definitionTechnical: "Hosts, servidores y dispositivos con stack de red.",
      analogy: "Participantes de una conversación técnica.",
      realExample: "PC, laptop, impresora o teléfono IP.",
      source: "Molina-Robles Cap 1–2",
      relations: ["aplicaciones", "protocolos", "topologias"],
      osiLayer: "7 → 1",
      question: "¿Qué debe tener un dispositivo para participar?",
      questionDetail: "Dirección, software de red y reglas de acceso."
    },
    {
      id: "aplicaciones",
      title: "Aplicaciones",
      layer: "canonical",
      status: "introducido",
      weekIntroduced: 1,
      x: 870,
      y: 320,
      size: 20,
      definitionSimple: "Servicios de software que generan el tráfico útil.",
      definitionTechnical: "Lógicas cliente-servidor y flujo de solicitudes y respuestas.",
      analogy: "Un traductor entre la intención del usuario y la red.",
      realExample: "Correo, LMS, videollamada.",
      source: "Molina-Robles Cap 1–2",
      relations: ["protocolos", "capa-aplicacion"],
      osiLayer: "7",
      question: "¿Qué capa se hace evidente en una aplicación?",
      questionDetail: "Normalmente aparece en Capa 7 (Aplicación)."
    },
    {
      id: "protocolos",
      title: "Protocolos",
      layer: "canonical",
      status: "en_aprendizaje",
      weekIntroduced: 1,
      x: 650,
      y: 330,
      size: 20,
      definitionSimple: "Reglas para intercambiar bits, mensajes y tráfico.",
      definitionTechnical: "Definen formato, control y confiabilidad.",
      analogy: "Una gramática para hablar técnicamente.",
      realExample: "HTTP, TCP, IP, DNS.",
      source: "Molina-Robles Cap 1–2",
      relations: ["modelo-osi", "tcpip", "dispositivos", "aplicaciones"],
      osiLayer: "Transversal",
      question: "¿Por qué dos equipos no se entienden sin protocolo?",
      questionDetail: "Porque deben compartir reglas de formato y diálogo."
    },
    {
      id: "medios",
      title: "Medios",
      layer: "canonical",
      status: "introducido",
      weekIntroduced: 1,
      x: 650,
      y: 430,
      size: 20,
      definitionSimple: "Canal físico o inalámbrico que transporta señal.",
      definitionTechnical: "Tecnología de transmisión con alcance, tasa y ruido.",
      analogy: "Carreteras y rutas de un envío digital.",
      realExample: "UTP, fibra y Wi‑Fi.",
      source: "Molina-Robles Cap 1–2",
      relations: ["cableado", "topologias", "capa-fisica"],
      osiLayer: "1"
    },
    {
      id: "topologias",
      title: "Topologías",
      layer: "canonical",
      status: "en_aprendizaje",
      weekIntroduced: 1,
      x: 790,
      y: 500,
      size: 20,
      definitionSimple: "Forma de interconexión entre nodos de una red.",
      definitionTechnical: "Diseños físicos y lógicos para distribución.",
      analogy: "Plano urbano de conectividad.",
      realExample: "Topología estrella.",
      source: "Molina-Robles Cap 1–2",
      relations: ["hardware", "medios", "infraestructura"],
      osiLayer: "Diseño transversal"
    },
    {
      id: "hardware",
      title: "Hardware de red",
      layer: "canonical",
      status: "introducido",
      weekIntroduced: 1,
      x: 520,
      y: 500,
      size: 20,
      definitionSimple: "Equipos que habilitan conectividad y encaminamiento.",
      definitionTechnical: "Switches, routers, AP y paneles.",
      analogy: "Sistema de cruces y control en una ciudad.",
      realExample: "Switch de acceso en rack de laboratorio.",
      source: "Molina-Robles Cap 1–2",
      relations: ["topologias", "medios", "infraestructura"],
      osiLayer: "1–2"
    },
    {
      id: "cableado",
      title: "Cableado estructurado",
      layer: "canonical",
      status: "en_aprendizaje",
      weekIntroduced: 1,
      x: 480,
      y: 600,
      size: 19,
      definitionSimple: "Instalación ordenada de conductos, cable y conectores.",
      definitionTechnical: "Canalización, etiquetado y trazabilidad.",
      analogy: "Plantas y planos del barrio técnico.",
      realExample: "Patch panel con código por rack y puerto.",
      source: "Semana 1",
      relations: ["medios", "infraestructura", "documentacion"],
      osiLayer: "1"
    },
    {
      id: "infraestructura",
      title: "Infraestructura física",
      layer: "canonical",
      status: "introducido",
      weekIntroduced: 1,
      x: 650,
      y: 600,
      size: 19,
      definitionSimple: "Entorno físico que soporta continuidad eléctrica y térmica.",
      definitionTechnical: "Racks, ventilación, energía y organización.",
      analogy: "La base de soporte de un sistema.",
      realExample: "Rack con UPS y ventilación para nodos de red.",
      source: "Semana 1",
      relations: ["hardware", "cableado", "seguridad"],
      osiLayer: "1"
    },
    {
      id: "modelo-osi",
      title: "Modelo OSI",
      layer: "canonical",
      status: "en_aprendizaje",
      weekIntroduced: 1,
      x: 650,
      y: 680,
      size: 30,
      definitionSimple: "Marco de siete capas para ubicar responsabilidades.",
      definitionTechnical: "Referencia para interoperabilidad y diagnóstico.",
      analogy: "Cadena de procesos con trazabilidad completa.",
      realExample: "Una solicitud recorre y vuelve por capas.",
      source: "Molina-Robles Cap 1–2",
      relations: ["capa-aplicacion", "capa-presentacion", "capa-sesion", "capa-transporte", "capa-red", "capa-enlace", "capa-fisica", "tcpip"],
      osiLayer: "7 capas"
    },
    {
      id: "capa-aplicacion",
      title: "Capa 7 - Aplicación",
      layer: "canonical",
      status: "no_estudiado",
      weekIntroduced: 1,
      x: 410,
      y: 760,
      size: 16,
      definitionSimple: "Interfaz visible para usuario o servicio.",
      definitionTechnical: "Protocolos de interacción final.",
      analogy: "La recepción de un paquete de servicio.",
      realExample: "Navegador solicitando una página.",
      source: "Molina-Robles Cap 1–2",
      relations: ["modelo-osi", "aplicaciones"],
      osiLayer: "7"
    },
    {
      id: "capa-presentacion",
      title: "Capa 6 - Presentación",
      layer: "canonical",
      status: "no_estudiado",
      weekIntroduced: 1,
      x: 510,
      y: 760,
      size: 16,
      definitionSimple: "Codifica y adapta la representación de datos.",
      definitionTechnical: "Formato, codificación y conversión.",
      analogy: "Traductor antes de entregar el contenido.",
      realExample: "Conversión de formatos de imagen o texto.",
      source: "Molina-Robles Cap 1–2",
      relations: ["capa-aplicacion", "modelo-osi"],
      osiLayer: "6"
    },
    {
      id: "capa-sesion",
      title: "Capa 5 - Sesión",
      layer: "canonical",
      status: "no_estudiado",
      weekIntroduced: 1,
      x: 610,
      y: 760,
      size: 16,
      definitionSimple: "Gestiona apertura y cierre de la conversación.",
      definitionTechnical: "Control de estado y diálogo entre extremos.",
      analogy: "Abrir, sostener y cerrar una reunión digital.",
      realExample: "Conexión autenticada con cierre controlado.",
      source: "Molina-Robles Cap 1–2",
      relations: ["modelo-osi", "capa-transporte"],
      osiLayer: "5"
    },
    {
      id: "capa-transporte",
      title: "Capa 4 - Transporte",
      layer: "canonical",
      status: "no_estudiado",
      weekIntroduced: 1,
      x: 710,
      y: 760,
      size: 16,
      definitionSimple: "Entrega confiable entre extremos.",
      definitionTechnical: "Control de flujo, orden y retransmisión.",
      analogy: "Repartidor con confirmación de entrega.",
      realExample: "Conexión TCP con control de errores.",
      source: "Molina-Robles Cap 1–2",
      relations: ["modelo-osi", "tcpip", "protocolos"],
      osiLayer: "4"
    },
    {
      id: "capa-red",
      title: "Capa 3 - Red",
      layer: "canonical",
      status: "no_estudiado",
      weekIntroduced: 1,
      x: 810,
      y: 760,
      size: 16,
      definitionSimple: "Direcciona paquetes entre redes.",
      definitionTechnical: "Direccionamiento lógico y rutas.",
      analogy: "Ruta entre barrios digitales.",
      realExample: "Direcciones IP y encaminamiento.",
      source: "Molina-Robles Cap 1–2",
      relations: ["modelo-osi", "capa-enlace", "router-world"],
      osiLayer: "3"
    },
    {
      id: "capa-enlace",
      title: "Capa 2 - Enlace de datos",
      layer: "canonical",
      status: "no_estudiado",
      weekIntroduced: 1,
      x: 910,
      y: 760,
      size: 16,
      definitionSimple: "Gestiona tramas dentro de un enlace local.",
      definitionTechnical: "Direcciones físicas y control de acceso al medio.",
      analogy: "Envío por una avenida local.",
      realExample: "Dirección MAC en una LAN.",
      source: "Molina-Robles Cap 1–2",
      relations: ["modelo-osi", "capa-fisica", "switch-world"],
      osiLayer: "2"
    },
    {
      id: "capa-fisica",
      title: "Capa 1 - Física",
      layer: "canonical",
      status: "no_estudiado",
      weekIntroduced: 1,
      x: 1010,
      y: 760,
      size: 16,
      definitionSimple: "Transmite bits por señales en un medio.",
      definitionTechnical: "Propiedades eléctricas, ópticas y mecánicas.",
      analogy: "La base física del flujo.",
      realExample: "Conexión UTP o fibra hacia el switch.",
      source: "Molina-Robles Cap 1–2",
      relations: ["modelo-osi", "medios", "cableado"],
      osiLayer: "1"
    },
    {
      id: "tcpip",
      title: "TCP/IP",
      layer: "canonical",
      status: "en_aprendizaje",
      weekIntroduced: 1,
      x: 850,
      y: 690,
      size: 20,
      definitionSimple: "Conjunto práctico de protocolos de interconexión.",
      definitionTechnical: "Arquitectura operativa de redes actuales.",
      analogy: "Mapa práctico para llevar teoría OSI a operación.",
      realExample: "HTTP sobre TCP sobre IP.",
      source: "Semana 1",
      relations: ["capa-red", "capa-transporte", "protocolos"],
      osiLayer: "4→3"
    },
    {
      id: "seguridad",
      title: "Políticas de seguridad",
      layer: "worldreal",
      status: "introducido",
      weekIntroduced: 1,
      x: 420,
      y: 620,
      size: 19,
      definitionSimple: "Reglas para proteger acceso y operación.",
      definitionTechnical: "Accesos, segmentación y cambios seguros.",
      analogy: "Guardia y control de ingreso del campus digital.",
      realExample: "Separar VLAN de invitados y administración.",
      source: "Buenas prácticas de operación",
      relations: ["gestion-red", "gestion-cambios", "host-world"],
      osiLayer: "Gobernanza"
    },
    {
      id: "documentacion",
      title: "Documentación",
      layer: "worldreal",
      status: "introducido",
      weekIntroduced: 1,
      x: 590,
      y: 620,
      size: 19,
      definitionSimple: "Bitácora viva de arquitectura y operación.",
      definitionTechnical: "Inventario, convenciones y trazabilidad.",
      analogy: "Mapa vivo de toda la red.",
      realExample: "Inventario por puerto y cable.",
      source: "Semana 1",
      relations: ["cableado", "infraestructura", "gestion-red"],
      osiLayer: "Soporte"
    },
    {
      id: "gestion-cambios",
      title: "Gestión de cambios",
      layer: "worldreal",
      status: "introducido",
      weekIntroduced: 1,
      x: 760,
      y: 620,
      size: 19,
      definitionSimple: "Controla qué se cambia y con evidencia.",
      definitionTechnical: "Solicitud, aprobación, ventana, rollback y evidencia.",
      analogy: "Planear obra sin romper la operación.",
      realExample: "Actualización de firmware en ventana controlada.",
      source: "Semana 1",
      relations: ["documentacion", "seguridad", "gestion-red"],
      osiLayer: "Operación"
    },
    {
      id: "gestion-red",
      title: "Gestión de red",
      layer: "worldreal",
      status: "introducido",
      weekIntroduced: 1,
      x: 920,
      y: 620,
      size: 19,
      definitionSimple: "Monitoreo y control continuo de la red.",
      definitionTechnical: "Diagnóstico, seguimiento y mejora continua.",
      analogy: "Centro de control de operaciones.",
      realExample: "Dashboard de alertas de enlace y rendimiento.",
      source: "Semana 1",
      relations: ["documentacion", "gestion-cambios", "seguridad"],
      osiLayer: "Operación"
    },
    {
      id: "router-world",
      title: "Router (mundo real)",
      layer: "worldreal",
      status: "aplicado",
      weekIntroduced: 1,
      x: 440,
      y: 520,
      size: 17,
      definitionSimple: "Conecta segmentos y enruta tráfico entre dominios.",
      definitionTechnical: "Controla tablas de encaminamiento y rutas.",
      analogy: "Intersección inteligente entre barrios.",
      realExample: "Router de borde de red académica.",
      source: "Laboratorio",
      relations: ["capa-red", "topologias", "protocolos"],
      osiLayer: "3"
    },
    {
      id: "switch-world",
      title: "Switch (mundo real)",
      layer: "worldreal",
      status: "aplicado",
      weekIntroduced: 1,
      x: 560,
      y: 520,
      size: 17,
      definitionSimple: "Conecta dispositivos locales en una LAN.",
      definitionTechnical: "Distribuye tramas y define dominio de broadcast.",
      analogy: "Cruce principal de una planta.",
      realExample: "Switch de acceso de 48 puertos.",
      source: "Laboratorio",
      relations: ["capa-enlace", "topologias", "hardware"],
      osiLayer: "2"
    },
    {
      id: "cableado-world",
      title: "Cableado (mundo real)",
      layer: "worldreal",
      status: "aplicado",
      weekIntroduced: 1,
      x: 680,
      y: 520,
      size: 17,
      definitionSimple: "Conexiones físicas instaladas con trazabilidad.",
      definitionTechnical: "Conectores y rutas en patch panel.",
      analogy: "Las venas del sistema técnico.",
      realExample: "UTP Cat6 en canaletas con etiquetado.",
      source: "Laboratorio",
      relations: ["cableado", "infraestructura", "documentacion"],
      osiLayer: "1"
    },
    {
      id: "host-world",
      title: "Host / Endpoint",
      layer: "worldreal",
      status: "aplicado",
      weekIntroduced: 1,
      x: 820,
      y: 520,
      size: 17,
      definitionSimple: "Nodo final real que consume y genera tráfico.",
      definitionTechnical: "Equipo con protocolos activos y política de acceso.",
      analogy: "Puesto de trabajo conectado al servicio.",
      realExample: "Laptop conectada a Wi‑Fi con perfil corporativo.",
      source: "Laboratorio",
      relations: ["dispositivos", "protocolos", "seguridad"],
      osiLayer: "7→1"
    },
    {
      id: "ai-layer",
      title: "Capa de apoyo con IA",
      layer: "ai",
      status: "en_aprendizaje",
      weekIntroduced: 1,
      x: 1130,
      y: 280,
      size: 22,
      definitionSimple: "Punto donde la IA sugiere, detecta y prioriza.",
      definitionTechnical: "Asistente inteligente para operación y analítica.",
      analogy: "Copiloto que acelera decisiones con evidencia.",
      realExample: "Alertas de saturación y recomendaciones.",
      source: "Diseño transversal del atlas",
      relations: ["gestion-red", "documentacion", "cableado", "protocolos"],
      osiLayer: "Capa transversal",
      aiValue: [
        "Detecta patrones de tráfico repetido.",
        "Sugerencia de cambios con menor riesgo operativo.",
        "Resume inventario y cambios pendientes."
      ]
    },
    {
      id: "ai-insight",
      title: "Conexión IA - Caso",
      layer: "ai",
      status: "en_aprendizaje",
      weekIntroduced: 1,
      x: 1130,
      y: 420,
      size: 18,
      definitionSimple: "Ejemplo concreto de valor de IA entre conceptos.",
      definitionTechnical: "Relación de decisión entre evidencia académica y operación.",
      analogy: "Una capa de razonamiento entre teoría y acción.",
      realExample: "Sugerir ventanas de cambio para evitar cortes.",
      source: "Diseño transversal del atlas",
      relations: ["ai-layer", "gestion-cambios", "seguridad", "gestion-red"],
      osiLayer: "Transversal",
      aiValue: ["Clasifica incidentes por severidad.", "Detecta huecos de documentación."]
    }
  ],
  edges: [
    { source: "cst230-core", target: "pregunta-principal", relationshipType: "contains", label: "eje" },
    { source: "cst230-core", target: "dispositivos", relationshipType: "contains", label: "base" },
    { source: "cst230-core", target: "aplicaciones", relationshipType: "contains", label: "base" },
    { source: "cst230-core", target: "protocolos", relationshipType: "contains", label: "base" },
    { source: "cst230-core", target: "medios", relationshipType: "contains", label: "base" },
    { source: "cst230-core", target: "topologias", relationshipType: "contains", label: "estructura" },
    { source: "cst230-core", target: "hardware", relationshipType: "contains", label: "infraestructura" },
    { source: "cst230-core", target: "modelo-osi", relationshipType: "contains", label: "marco" },
    { source: "cst230-core", target: "gestion-red", relationshipType: "contains", label: "operación" },
    { source: "pregunta-principal", target: "modelo-osi", relationshipType: "relation", label: "mapea" },
    { source: "pregunta-principal", target: "dispositivos", relationshipType: "relation", label: "origen" },
    { source: "pregunta-principal", target: "protocolos", relationshipType: "relation", label: "reglas" },
    { source: "dispositivos", target: "protocolos", relationshipType: "relation", label: "usa" },
    { source: "aplicaciones", target: "protocolos", relationshipType: "relation", label: "usa" },
    { source: "aplicaciones", target: "capa-aplicacion", relationshipType: "contains", label: "se expresa en" },
    { source: "protocolos", target: "modelo-osi", relationshipType: "supports", label: "se organiza en" },
    { source: "protocolos", target: "tcpip", relationshipType: "supports", label: "aplica en" },
    { source: "topologias", target: "hardware", relationshipType: "supports", label: "usa" },
    { source: "topologias", target: "medios", relationshipType: "supports", label: "depende de" },
    { source: "medios", target: "cableado", relationshipType: "contains", label: "materializa" },
    { source: "medios", target: "capa-fisica", relationshipType: "supports", label: "es base de" },
    { source: "cableado", target: "infraestructura", relationshipType: "contains", label: "estructura" },
    { source: "infraestructura", target: "seguridad", relationshipType: "supports", label: "sostiene" },
    { source: "seguridad", target: "gestion-cambios", relationshipType: "relation", label: "requiere control" },
    { source: "documentacion", target: "gestion-red", relationshipType: "supports", label: "traza" },
    { source: "gestion-red", target: "gestion-cambios", relationshipType: "contains", label: "gobierna" },
    { source: "modelo-osi", target: "capa-aplicacion", relationshipType: "contains", label: "incluye" },
    { source: "modelo-osi", target: "capa-presentacion", relationshipType: "contains", label: "incluye" },
    { source: "modelo-osi", target: "capa-sesion", relationshipType: "contains", label: "incluye" },
    { source: "modelo-osi", target: "capa-transporte", relationshipType: "contains", label: "incluye" },
    { source: "modelo-osi", target: "capa-red", relationshipType: "contains", label: "incluye" },
    { source: "modelo-osi", target: "capa-enlace", relationshipType: "contains", label: "incluye" },
    { source: "modelo-osi", target: "capa-fisica", relationshipType: "contains", label: "incluye" },
    { source: "capa-transporte", target: "tcpip", relationshipType: "supports", label: "complementa" },
    { source: "capa-red", target: "tcpip", relationshipType: "supports", label: "complementa" },
    { source: "capa-red", target: "router-world", relationshipType: "supports", label: "implementa" },
    { source: "capa-enlace", target: "switch-world", relationshipType: "supports", label: "implementa" },
    { source: "capa-fisica", target: "cableado-world", relationshipType: "supports", label: "materializa" },
    { source: "seguridad", target: "host-world", relationshipType: "relation", label: "protege" },
    { source: "cableado-world", target: "documentacion", relationshipType: "relation", label: "se refleja" },
    { source: "ai-layer", target: "protocolos", relationshipType: "ai", label: "sugerencia" },
    { source: "ai-layer", target: "gestion-cambios", relationshipType: "ai", label: "prioriza", isDashed: true },
    { source: "ai-layer", target: "documentacion", relationshipType: "ai", label: "resume", isDashed: true },
    { source: "ai-layer", target: "gestion-red", relationshipType: "ai", label: "asiste" },
    { source: "ai-insight", target: "ai-layer", relationshipType: "ai", label: "deriva" },
    { source: "ai-insight", target: "gestion-red", relationshipType: "ai", label: "diagnostica" },
    { source: "ai-insight", target: "seguridad", relationshipType: "ai", label: "detecta riesgos" }
  ]
};

const state = {
  activeStages: 0,
  query: "",
  activeLayers: new Set(Object.keys(mapData.layers)),
  activeStatuses: new Set(Object.keys(mapData.statuses)),
  selectedNodeId: "cst230-core",
  showAiConnections: true
};

const stageNav = document.getElementById("journeyNav");
const storyWeek = document.getElementById("storyWeek");
const storyTitle = document.getElementById("storyTitle");
const storyIntro = document.getElementById("storyIntro");
const storyQuestion = document.getElementById("storyQuestion");
const searchInput = document.getElementById("searchInput");
const layerFilters = document.getElementById("layerFilters");
const statusFilters = document.getElementById("statusFilters");
const svg = document.getElementById("knowledgeMap");
const edgesLayer = document.getElementById("edgesLayer");
const nodesLayer = document.getElementById("nodesLayer");
const prevStage = document.getElementById("prevStage");
const nextStage = document.getElementById("nextStage");
const detailTitle = document.getElementById("detailTitle");
const detailContent = document.getElementById("detailContent");
const aiToggle = document.getElementById("aiToggle");
const nodeBackdrop = document.getElementById("nodeBackdrop");
const nodePopup = document.getElementById("nodePopup");
const closePopup = document.getElementById("closePopup");

function normalize(value) {
  return (value || "").toString().toLowerCase();
}

function getNodeById(id) {
  return mapData.nodes.find((node) => node.id === id);
}

function stageNodeIds() {
  return mapData.stages[state.activeStages].nodeIds;
}

function visibleNodes() {
  const query = normalize(state.query);
  const stageSet = new Set(stageNodeIds());
  return mapData.nodes.filter((node) => {
    if (!stageSet.has(node.id)) return false;
    if (!state.showAiConnections && node.layer === "ai") return false;
    if (!state.activeLayers.has(node.layer)) return false;
    if (!state.activeStatuses.has(node.status)) return false;
    if (!query) return true;
    return (
      normalize(node.title).includes(query) ||
      normalize(node.definitionSimple).includes(query) ||
      normalize(node.realExample).includes(query)
    );
  });
}

function visibleEdges(visibleNodeIds) {
  const visible = new Set(visibleNodeIds);
  return mapData.edges.filter((edge) => {
    if (edge.relationshipType === "ai" && !state.showAiConnections) return false;
    return visible.has(edge.source) && visible.has(edge.target);
  });
}

function renderStageNav() {
  stageNav.innerHTML = mapData.stages
    .map((stage, index) => `<button class="journey-tab ${index === state.activeStages ? "is-active" : ""}" data-stage="${index}" type="button">${stage.label}</button>`)
    .join("");
  stageNav.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeStages = Number(button.dataset.stage);
      state.selectedNodeId = mapData.stages[state.activeStages].nodeIds[0];
      render();
    });
  });
  prevStage.disabled = state.activeStages === 0;
  nextStage.disabled = state.activeStages === mapData.stages.length - 1;
}

function renderStory() {
  const stage = mapData.stages[state.activeStages];
  storyWeek.textContent = `Semana ${mapData.currentWeek} · ${stage.label}`;
  storyTitle.textContent = stage.title;
  storyIntro.textContent = stage.intro;
  storyQuestion.textContent = `Pregunta de análisis: ${stage.question}`;
}

function renderFilters() {
  layerFilters.innerHTML = Object.entries(mapData.layers)
    .map(([key, layer]) => `<label><input type="checkbox" data-layer="${key}" checked><span>${layer.label}</span></label>`)
    .join("");
  statusFilters.innerHTML = Object.entries(mapData.statuses)
    .map(([key, status]) => `<label><input type="checkbox" data-status="${key}" checked><span>${status.label}</span></label>`)
    .join("");
  layerFilters.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => {
      const layer = input.dataset.layer;
      if (input.checked) state.activeLayers.add(layer);
      else state.activeLayers.delete(layer);
      render();
    });
  });
  statusFilters.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => {
      const status = input.dataset.status;
      if (input.checked) state.activeStatuses.add(status);
      else state.activeStatuses.delete(status);
      render();
    });
  });
}

function lineClass(type, isDashed) {
  return `${type === "ai" ? "edge-line ai" : "edge-line"}${isDashed ? " dashed" : ""}`;
}

function updateDetail(node) {
  if (!node) return;
  state.selectedNodeId = node.id;
  const statusLabel = mapData.statuses[node.status]?.label || node.status;
  const layerLabel = mapData.layers[node.layer]?.label || "Sin capa";
  const aiValue = Array.isArray(node.aiValue) ? node.aiValue.map((entry) => `• ${entry}`).join("<br>") : "—";
  const relations = mapData.edges
    .filter((edge) => edge.source === node.id || edge.target === node.id)
    .map((edge) => {
      const source = getNodeById(edge.source);
      const target = getNodeById(edge.target);
      const linked = source && target ? (source.id === node.id ? target.title : source.title) : "";
      const suffix = edge.relationshipType === "ai" ? " · IA" : "";
      return `${edge.label}: ${linked}${suffix}`;
    })
    .join("<br>");

  detailTitle.innerHTML = `${node.title}${node.layer === "ai" ? ' <span class="ai-badge">IA</span>' : ""}`;
  detailContent.innerHTML = `
    <dt>Definición simple</dt><dd>${node.definitionSimple}</dd>
    <dt>Definición técnica</dt><dd>${node.definitionTechnical}</dd>
    <dt>Pregunta de comprensión</dt><dd>${node.question || "¿Qué función cumple este concepto en la red?"}</dd>
    <dt>Pregunta detallada</dt><dd>${node.questionDetail || "¿Cómo se conecta con el tramo actual?"}</dd>
    <dt>Analogía</dt><dd>${node.analogy}</dd>
    <dt>Ejemplo real</dt><dd>${node.realExample}</dd>
    <dt>Relaciones y conexiones</dt><dd>${relations || "—"}</dd>
    <dt>Capa OSI</dt><dd>${node.osiLayer || "—"}</dd>
    <dt>Fuente</dt><dd>${node.source}</dd>
    <dt>Semana en que aparece</dt><dd>${node.weekIntroduced}</dd>
    <dt>Estado de aprendizaje</dt><dd>${statusLabel}</dd>
    <dt>Capa</dt><dd>${layerLabel}</dd>
    ${node.layer === "ai" ? `<dt>¿Qué trae IA aquí?</dt><dd>${aiValue}</dd>` : ""}
  `;
}

function openPopup(node) {
  updateDetail(node);
  nodePopup.removeAttribute("hidden");
  nodePopup.setAttribute("aria-hidden", "false");
  nodeBackdrop.removeAttribute("hidden");
}

function closePopupPanel() {
  nodePopup.setAttribute("hidden", "true");
  nodePopup.setAttribute("aria-hidden", "true");
  nodeBackdrop.setAttribute("hidden", "true");
}

function draw() {
  const nodes = visibleNodes();
  const visibleIds = nodes.map((node) => node.id);
  const edges = visibleEdges(visibleIds);

  edgesLayer.innerHTML = edges
    .map((edge) => {
      const source = getNodeById(edge.source);
      const target = getNodeById(edge.target);
      if (!state.showAiConnections && (source?.layer === "ai" || target?.layer === "ai")) return "";
      if (!source || !target) return "";
      return `<line class="${lineClass(edge.relationshipType, edge.isDashed)}" x1="${source.x}" y1="${source.y}" x2="${target.x}" y2="${target.y}" />`;
    })
    .join("");

  nodesLayer.innerHTML = nodes
    .map((node) => {
      const color = mapData.layers[node.layer]?.color || "var(--canon)";
      return `<g class="node-dot" data-node="${node.id}" tabindex="0" role="button" aria-label="Ver detalle de ${node.title}">
        <circle cx="${node.x}" cy="${node.y}" r="${node.size}" fill="${color}" class="node-core" />
        <circle cx="${node.x}" cy="${node.y}" r="${node.size + 3}" class="node-ring" />
        <text x="${node.x + 16}" y="${node.y + 5}" class="node-label">${node.title}</text>
      </g>`;
    })
    .join("");

  nodesLayer.querySelectorAll("[data-node]").forEach((el) => {
    const node = getNodeById(el.dataset.node);
    const open = () => openPopup(node);
    el.addEventListener("click", open);
    el.addEventListener("keypress", (event) => {
      if (event.key === "Enter") open();
    });
  });

  const current = getNodeById(state.selectedNodeId);
  const fallback = nodes.find((node) => node.id === state.selectedNodeId) || nodes[0];
  updateDetail(fallback);
}

function render() {
  renderStory();
  renderStageNav();
  draw();
}

prevStage.addEventListener("click", () => {
  if (state.activeStages > 0) {
    state.activeStages -= 1;
    state.selectedNodeId = mapData.stages[state.activeStages].nodeIds[0];
    render();
  }
});

nextStage.addEventListener("click", () => {
  if (state.activeStages < mapData.stages.length - 1) {
    state.activeStages += 1;
    state.selectedNodeId = mapData.stages[state.activeStages].nodeIds[0];
    render();
  }
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

aiToggle.addEventListener("change", () => {
  state.showAiConnections = aiToggle.checked;
  render();
});

nodeBackdrop.addEventListener("click", closePopupPanel);
closePopup.addEventListener("click", closePopupPanel);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closePopupPanel();
});

window.addEventListener("popstate", closePopupPanel);

renderFilters();
render();

