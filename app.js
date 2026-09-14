const mapData = {
  version: "Network-Foundations-Week-1",
  currentWeek: 1,
  stages: [
    {
      id: "s1",
      label: "Etapa 1",
      title: "De la necesidad de comunicar a las reglas compartidas",
      intro: "Dispositivos, servicios y protocolos participan en la comunicación de datos. Las redes locales también pueden estudiarse desde distintos criterios de clasificación.",
      question: "¿Qué debe existir para que dos dispositivos puedan intercambiar información bajo reglas compatibles?",
      nodeIds: ["comunicacion-datos", "dispositivos", "servicios", "aplicaciones", "protocolos", "clasificacion-redes", "clasificacion-titularidad", "topologias", "clasificacion-transferencia", "clasificacion-localizacion", "normalizacion", "organismos", "warriors-visual"],
      diagramColumns: [
        { label: "Necesidad", ids: ["comunicacion-datos", "dispositivos"] },
        { label: "Intercambio", ids: ["servicios", "aplicaciones", "protocolos"] },
        { label: "Clasificación", ids: ["clasificacion-redes", "clasificacion-titularidad", "topologias", "clasificacion-transferencia", "clasificacion-localizacion"] },
        { label: "Compatibilidad", ids: ["normalizacion", "organismos", "warriors-visual"] }
      ],
      ai: { observes: "flujos y eventos de comunicación", analyzes: "patrones o comportamientos anómalos", recommends: "qué evidencia revisar primero", touchpoints: [
        { from: "protocolos", to: "normalizacion", term: "Análisis de patrones", detail: "Compara eventos observados para destacar comportamientos que merecen revisión." },
        { from: "comunicacion-datos", to: "protocolos", term: "Lectura asistida del flujo", detail: "Ordena evidencia del intercambio sin reemplazar las reglas académicas." }
      ] }
    },
    {
      id: "s2",
      label: "Etapa 2",
      title: "La complejidad crea la necesidad de una arquitectura",
      intro: "Organizar responsabilidades por niveles permite abordar los problemas de diseño y comprender por qué existen modelos y arquitecturas de red.",
      question: "¿Cómo organizamos una comunicación compleja sin tratarla como un único problema?",
      nodeIds: ["problemas-arquitectura", "arquitectura-niveles", "modelo-osi", "capa-aplicacion", "capa-presentacion", "capa-sesion", "capa-transporte", "capa-red", "capa-enlace", "capa-fisica", "tcpip", "red-microsoft"],
      diagramColumns: [
        { label: "Complejidad", ids: ["problemas-arquitectura"] },
        { label: "Organización", ids: ["arquitectura-niveles"] },
        { label: "Arquitecturas", ids: ["modelo-osi", "tcpip", "red-microsoft"] },
        { label: "Responsabilidades OSI", ids: ["capa-aplicacion", "capa-presentacion", "capa-sesion", "capa-transporte", "capa-red", "capa-enlace", "capa-fisica"] }
      ],
      ai: { observes: "síntomas y evidencia del recorrido", analyzes: "en qué responsabilidad puede originarse el problema", recommends: "un orden de diagnóstico", note: "Apoyo de troubleshooting; no modifica el modelo OSI.", touchpoints: [
        { from: "arquitectura-niveles", to: "modelo-osi", term: "Clasificación de síntomas", detail: "Relaciona la evidencia observada con una responsabilidad posible para orientar el diagnóstico." },
        { from: "modelo-osi", to: "capa-red", term: "Ruta de diagnóstico", detail: "Propone un orden de revisión; la decisión sigue dependiendo de evidencia técnica." }
      ] }
    },
    {
      id: "s3",
      label: "Etapa 3",
      title: "Distintas redes, medios e infraestructuras",
      intro: "El capítulo recorre diferentes ejemplos de redes de transmisión y la Semana 1 conecta esa perspectiva con la infraestructura física de edificios y áreas de trabajo.",
      question: "¿Todas las redes transportan información mediante la misma infraestructura?",
      nodeIds: ["ejemplos-transmision", "rtc", "telex", "iberpac", "rdsi", "internet", "t-portador", "dsl", "redes-cable", "redes-locales", "vpn", "cable-electrico", "area-trabajo", "medios", "cableado", "hardware", "infraestructura", "edificio-campus"],
      diagramColumns: [
        { label: "Panorama", ids: ["ejemplos-transmision"] },
        { label: "Ejemplos estudiados", ids: ["rtc", "telex", "iberpac", "rdsi", "internet", "t-portador", "dsl", "redes-cable", "redes-locales", "vpn", "cable-electrico"] },
        { label: "Conexión física", ids: ["area-trabajo", "medios", "cableado"] },
        { label: "Espacio real", ids: ["hardware", "infraestructura", "edificio-campus"] }
      ],
      ai: { observes: "estado ambiental y señales operativas", analyzes: "tendencias y anomalías", recommends: "prioridades de revisión física", note: "Aplicación operativa, separada del fundamento académico.", touchpoints: [
        { from: "medios", to: "infraestructura", term: "Detección de anomalías", detail: "Identifica variaciones en señales operativas para priorizar una inspección física." },
        { from: "infraestructura", to: "edificio-campus", term: "Monitoreo asistido", detail: "Organiza alertas ambientales y ayuda a reconocer tendencias; no ejecuta cambios por sí solo." }
      ] }
    },
    {
      id: "s4",
      label: "Etapa 4",
      title: "La red también debe identificarse, documentarse y cambiar con control",
      intro: "Una red administrable mantiene alineados sus elementos reales, su inventario, sus etiquetas y su documentación antes y después de cada cambio.",
      question: "¿Qué ocurre cuando la red cambia pero su documentación ya no representa la realidad?",
      nodeIds: ["elemento-red", "identificacion", "inventario", "etiquetado", "documentacion", "estado-real", "cambio", "gestion-cambios", "actualizacion", "seguridad", "gestion-red"],
      diagramColumns: [
        { label: "Elemento real", ids: ["elemento-red", "estado-real"] },
        { label: "Trazabilidad", ids: ["identificacion", "inventario", "etiquetado"] },
        { label: "Control", ids: ["documentacion", "cambio", "gestion-cambios"] },
        { label: "Estado actualizado", ids: ["actualizacion", "seguridad", "gestion-red"] }
      ],
      ai: { observes: "inventario, eventos y diferencias documentales", analyzes: "anomalías, omisiones y riesgo del cambio", recommends: "actualizaciones y prioridades de revisión", touchpoints: [
        { from: "inventario", to: "documentacion", term: "Conciliación documental", detail: "Compara registros y evidencia para señalar diferencias que una persona debe validar." },
        { from: "cambio", to: "gestion-cambios", term: "Evaluación de riesgo", detail: "Prioriza señales de riesgo y propone preguntas antes de aprobar una modificación." },
        { from: "gestion-cambios", to: "actualizacion", term: "Actualización asistida", detail: "Sugiere ajustes documentales después del cambio y conserva la revisión humana." }
      ] }
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
      id: "warriors-visual", title: "Visualización del fenómeno", layer: "canonical", status: "introducido", weekIntroduced: 1,
      definitionSimple: "Recurso audiovisual para observar el recorrido de la información como fenómeno.", definitionTechnical: "Apoyo visual de Week 1; no sustituye las definiciones académicas.",
      analogy: "Ver en movimiento aquello que el modelo explica.", realExample: "Los componentes concretos se incorporarán solo cuando se verifiquen en el video.",
      source: "Warriors of the Net HD · recurso audiovisual Week 1", evidenceClass: "week1", relations: ["comunicacion-datos"], osiLayer: "Visualización transversal"
    },
    {
      id: "comunicacion-datos", title: "Comunicación de datos", layer: "canonical", status: "introducido", weekIntroduced: 1,
      definitionSimple: "Territorio académico que estudia el intercambio de información entre participantes.",
      definitionTechnical: "Contenido verificado en §1.1 del capítulo 1; la profundidad se limita a la evidencia disponible.",
      analogy: "El fenómeno completo de una conversación a distancia.", realExample: "Dos dispositivos intercambian información.",
      source: "Molina Robles, cap. 1, §1.1", evidenceClass: "direct", relations: ["dispositivos", "servicios", "protocolos"], osiLayer: "Transversal"
    },
    {
      id: "servicios", title: "Servicios", layer: "canonical", status: "introducido", weekIntroduced: 1,
      definitionSimple: "Funciones que una red pone a disposición de sus participantes.", definitionTechnical: "Contenido verificado en §1.1.2: servicios y protocolos.",
      analogy: "Lo que una organización ofrece mediante la comunicación.", realExample: "Los ejemplos concretos requieren validación de las páginas.",
      source: "Molina Robles, cap. 1, §1.1.2", evidenceClass: "direct", relations: ["aplicaciones", "protocolos"], osiLayer: "Por determinar según el servicio"
    },
    {
      id: "clasificacion-redes", title: "Clasificación de redes locales", layer: "canonical", status: "introducido", weekIntroduced: 1,
      definitionSimple: "Una red local puede analizarse desde varios criterios, no solo por su forma.", definitionTechnical: "Bloque académico verificado en §1.1.3.",
      analogy: "Clasificar un mismo objeto desde distintas preguntas.", realExample: "Titularidad, topología, transferencia y localización.",
      source: "Molina Robles, cap. 1, §1.1.3", evidenceClass: "direct", relations: ["clasificacion-titularidad", "topologias", "clasificacion-transferencia", "clasificacion-localizacion"], osiLayer: "Clasificación transversal"
    },
    {
      id: "clasificacion-titularidad", title: "Titularidad", layer: "canonical", status: "introducido", weekIntroduced: 1,
      definitionSimple: "Criterio académico para clasificar una red según su titularidad.", definitionTechnical: "Subapartado verificado; subtipos pendientes de evidencia detallada.",
      analogy: "Preguntar a quién pertenece la red.", realExample: "Sin ejemplos añadidos hasta verificar el texto.", source: "Molina Robles, cap. 1, §1.1.3.1", evidenceClass: "direct", relations: ["clasificacion-redes"], osiLayer: "No aplica"
    },
    {
      id: "clasificacion-transferencia", title: "Transferencia de información", layer: "canonical", status: "introducido", weekIntroduced: 1,
      definitionSimple: "Criterio académico de clasificación según cómo se transfiere la información.", definitionTechnical: "Subapartado verificado; categorías internas pendientes.",
      analogy: "Preguntar de qué manera circula la información.", realExample: "Sin subtipos añadidos hasta verificar el texto.", source: "Molina Robles, cap. 1, §1.1.3.3", evidenceClass: "direct", relations: ["clasificacion-redes"], osiLayer: "Transversal"
    },
    {
      id: "clasificacion-localizacion", title: "Localización geográfica", layer: "canonical", status: "introducido", weekIntroduced: 1,
      definitionSimple: "Criterio académico de clasificación relacionado con la localización.", definitionTechnical: "Subapartado verificado; categorías internas pendientes.",
      analogy: "Preguntar qué espacio geográfico ocupa la red.", realExample: "Sin subtipos añadidos hasta verificar el texto.", source: "Molina Robles, cap. 1, §1.1.3.4", evidenceClass: "direct", relations: ["clasificacion-redes"], osiLayer: "No aplica"
    },
    {
      id: "normalizacion", title: "Normalización", layer: "canonical", status: "introducido", weekIntroduced: 1,
      definitionSimple: "Permite trabajar con reglas compatibles entre tecnologías y fabricantes.", definitionTechnical: "Territorio académico verificado en §1.1.4; detalles pendientes.",
      analogy: "Acordar un lenguaje común antes de construir.", realExample: "No se atribuyen normas concretas sin verificar las páginas.", source: "Molina Robles, cap. 1, §1.1.4", evidenceClass: "direct", relations: ["organismos", "protocolos"], osiLayer: "Transversal"
    },
    {
      id: "organismos", title: "Organismos", layer: "canonical", status: "introducido", weekIntroduced: 1,
      definitionSimple: "Actores relacionados con la normalización de redes.", definitionTechnical: "El apartado está verificado, pero no se enumeran organismos sin evidencia de las páginas.",
      analogy: "Quienes coordinan las reglas compartidas.", realExample: "Lista específica pendiente de fuente.", source: "Molina Robles, cap. 1, §1.1.4", evidenceClass: "direct", relations: ["normalizacion"], osiLayer: "Transversal"
    },
    {
      id: "problemas-arquitectura", title: "Problemas de diseño", layer: "canonical", status: "introducido", weekIntroduced: 1,
      definitionSimple: "La complejidad de una red crea responsabilidades que deben organizarse.", definitionTechnical: "Entrada pedagógica respaldada por §2.1.1.",
      analogy: "Dividir un problema grande antes de resolverlo.", realExample: "Detalle de problemas concretos pendiente del texto.", source: "Molina Robles, cap. 2, §2.1.1", evidenceClass: "direct", relations: ["arquitectura-niveles"], osiLayer: "Antes del modelo"
    },
    {
      id: "arquitectura-niveles", title: "Arquitectura por niveles", layer: "canonical", status: "en_aprendizaje", weekIntroduced: 1,
      definitionSimple: "Organiza la comunicación en niveles con responsabilidades diferenciadas.", definitionTechnical: "Territorio académico verificado en §2.1.2.",
      analogy: "Equipos especializados que colaboran por capas.", realExample: "OSI y TCP/IP se estudian como ejemplos posteriores.", source: "Molina Robles, cap. 2, §2.1.2", evidenceClass: "direct", relations: ["modelo-osi", "tcpip", "red-microsoft"], osiLayer: "Marco de niveles"
    },
    {
      id: "red-microsoft", title: "Red Microsoft", layer: "canonical", status: "introducido", weekIntroduced: 1,
      definitionSimple: "Ejemplo de arquitectura de red incluido en el capítulo.", definitionTechnical: "Presencia académica verificada; detalle pendiente de las páginas.",
      analogy: "Un tercer ejemplo dentro del conjunto de arquitecturas estudiadas.", realExample: "No se añaden componentes sin verificar el texto.", source: "Molina Robles, cap. 2, §2.2.3", evidenceClass: "direct", relations: ["arquitectura-niveles"], osiLayer: "Arquitectura estudiada"
    },
    {
      id: "ejemplos-transmision", title: "Redes de transmisión", layer: "canonical", status: "introducido", weekIntroduced: 1,
      definitionSimple: "Conjunto de ejemplos de transmisión de datos estudiados en el capítulo 2.", definitionTechnical: "Agrupa §2.3.1 a §2.3.11 sin añadir tecnologías externas.",
      analogy: "Un recorrido por distintas formas históricas y actuales de transportar información.", realExample: "Once ejemplos acreditados por el índice.", source: "Molina Robles, cap. 2, §2.3", evidenceClass: "direct", relations: ["rtc", "telex", "iberpac", "rdsi", "internet", "t-portador", "dsl", "redes-cable", "redes-locales", "vpn", "cable-electrico"], osiLayer: "Panorama de redes"
    },
    {
      id: "rtc", title: "RTC", layer: "canonical", status: "introducido", weekIntroduced: 1, definitionSimple: "Red Telefónica Conmutada, ejemplo incluido en el capítulo.", definitionTechnical: "Detalle pendiente de evidencia textual.", analogy: "Ejemplo del recorrido académico.", realExample: "Sin ampliación no acreditada.", source: "Molina Robles, cap. 2, §2.3.1", evidenceClass: "direct", relations: ["ejemplos-transmision"], osiLayer: "Ejemplo de red" },
    {
      id: "telex", title: "Télex", layer: "canonical", status: "introducido", weekIntroduced: 1, definitionSimple: "Ejemplo de red de transmisión incluido en el capítulo.", definitionTechnical: "Detalle pendiente de evidencia textual.", analogy: "Ejemplo del recorrido académico.", realExample: "Sin ampliación no acreditada.", source: "Molina Robles, cap. 2, §2.3.2", evidenceClass: "direct", relations: ["ejemplos-transmision"], osiLayer: "Ejemplo de red" },
    {
      id: "iberpac", title: "Iberpac", layer: "canonical", status: "introducido", weekIntroduced: 1, definitionSimple: "Ejemplo de red de transmisión incluido en el capítulo.", definitionTechnical: "Detalle pendiente de evidencia textual.", analogy: "Ejemplo del recorrido académico.", realExample: "Sin ampliación no acreditada.", source: "Molina Robles, cap. 2, §2.3.3", evidenceClass: "direct", relations: ["ejemplos-transmision"], osiLayer: "Ejemplo de red" },
    {
      id: "rdsi", title: "RDSI", layer: "canonical", status: "introducido", weekIntroduced: 1, definitionSimple: "Red Digital de Servicios Integrados, incluida en el capítulo.", definitionTechnical: "Detalle pendiente de evidencia textual.", analogy: "Ejemplo del recorrido académico.", realExample: "Sin ampliación no acreditada.", source: "Molina Robles, cap. 2, §2.3.4", evidenceClass: "direct", relations: ["ejemplos-transmision"], osiLayer: "Ejemplo de red" },
    {
      id: "internet", title: "Internet", layer: "canonical", status: "introducido", weekIntroduced: 1, definitionSimple: "Ejemplo de red de transmisión estudiado formalmente.", definitionTechnical: "Presencia verificada en §2.3.5; profundidad limitada a la fuente disponible.", analogy: "Una referencia del panorama de redes.", realExample: "Internet.", source: "Molina Robles, cap. 2, §2.3.5", evidenceClass: "direct", relations: ["ejemplos-transmision", "tcpip"], osiLayer: "Arquitectura transversal" },
    {
      id: "t-portador", title: "T Portador", layer: "canonical", status: "introducido", weekIntroduced: 1, definitionSimple: "Ejemplo de red de transmisión incluido en el capítulo.", definitionTechnical: "Detalle pendiente de evidencia textual.", analogy: "Ejemplo del recorrido académico.", realExample: "Sin ampliación no acreditada.", source: "Molina Robles, cap. 2, §2.3.6", evidenceClass: "direct", relations: ["ejemplos-transmision"], osiLayer: "Ejemplo de red" },
    {
      id: "dsl", title: "DSL", layer: "canonical", status: "introducido", weekIntroduced: 1, definitionSimple: "Ejemplo de red de transmisión incluido en el capítulo.", definitionTechnical: "Detalle pendiente de evidencia textual.", analogy: "Ejemplo del recorrido académico.", realExample: "DSL.", source: "Molina Robles, cap. 2, §2.3.7", evidenceClass: "direct", relations: ["ejemplos-transmision"], osiLayer: "Ejemplo de red" },
    {
      id: "redes-cable", title: "Redes de cable", layer: "canonical", status: "introducido", weekIntroduced: 1, definitionSimple: "Ejemplo de red de transmisión incluido en el capítulo.", definitionTechnical: "Detalle pendiente de evidencia textual.", analogy: "Ejemplo del recorrido académico.", realExample: "Sin ampliación no acreditada.", source: "Molina Robles, cap. 2, §2.3.8", evidenceClass: "direct", relations: ["ejemplos-transmision"], osiLayer: "Ejemplo de red" },
    {
      id: "redes-locales", title: "Redes locales", layer: "canonical", status: "introducido", weekIntroduced: 1, definitionSimple: "Ejemplo de red de transmisión estudiado formalmente.", definitionTechnical: "Presencia verificada en §2.3.9.", analogy: "El territorio central del curso dentro del panorama.", realExample: "Red local.", source: "Molina Robles, cap. 2, §2.3.9", evidenceClass: "direct", relations: ["ejemplos-transmision", "clasificacion-redes"], osiLayer: "Transversal" },
    {
      id: "vpn", title: "VPN", layer: "canonical", status: "introducido", weekIntroduced: 1, definitionSimple: "Red privada virtual, ejemplo estudiado formalmente.", definitionTechnical: "Presencia verificada en §2.3.10; sin profundización adicional.", analogy: "Un ejemplo del catálogo académico.", realExample: "VPN.", source: "Molina Robles, cap. 2, §2.3.10", evidenceClass: "direct", relations: ["ejemplos-transmision"], osiLayer: "Ejemplo de red" },
    {
      id: "cable-electrico", title: "Comunicación por cable eléctrico", layer: "canonical", status: "introducido", weekIntroduced: 1, definitionSimple: "Ejemplo de comunicación mediante cable eléctrico incluido en el capítulo.", definitionTechnical: "Detalle pendiente de evidencia textual.", analogy: "Ejemplo del recorrido académico.", realExample: "Sin ampliación no acreditada.", source: "Molina Robles, cap. 2, §2.3.11", evidenceClass: "direct", relations: ["ejemplos-transmision"], osiLayer: "Ejemplo de red" },
    {
      id: "area-trabajo", title: "Área de trabajo", layer: "canonical", status: "introducido", weekIntroduced: 1, definitionSimple: "Espacio donde las personas y dispositivos acceden a la red.", definitionTechnical: "Categoría respaldada por los objetivos oficiales de Week 1.", analogy: "El punto habitado de la infraestructura.", realExample: "Área de trabajo en un edificio comercial.", source: "Objetivos oficiales de Week 1", evidenceClass: "week1", relations: ["medios", "infraestructura"], osiLayer: "Entorno físico" },
    {
      id: "edificio-campus", title: "Edificio / campus", layer: "canonical", status: "introducido", weekIntroduced: 1, definitionSimple: "Escala espacial que contiene y conecta áreas de trabajo e infraestructura.", definitionTechnical: "Dimensión física respaldada por los objetivos oficiales de Week 1.", analogy: "El territorio que la red debe recorrer.", realExample: "Edificio comercial o campus.", source: "Objetivos oficiales de Week 1", evidenceClass: "week1", relations: ["area-trabajo", "infraestructura"], osiLayer: "Entorno físico" },
    {
      id: "elemento-red", title: "Elemento de red", layer: "canonical", status: "introducido", weekIntroduced: 1, definitionSimple: "Activo físico o lógico que debe poder reconocerse y registrarse.", definitionTechnical: "Punto inicial del proceso de inventario y documentación.", analogy: "El objeto que debe tener identidad dentro del sistema.", realExample: "Categoría general, sin herramienta específica.", source: "Objetivos oficiales de Week 1", evidenceClass: "week1", relations: ["identificacion"], osiLayer: "Operación" },
    {
      id: "identificacion", title: "Identificación", layer: "canonical", status: "introducido", weekIntroduced: 1, definitionSimple: "Determina qué es cada elemento y cómo distinguirlo.", definitionTechnical: "Paso conceptual previo al inventario y etiquetado.", analogy: "Dar identidad antes de registrar.", realExample: "Sin convención concreta no acreditada.", source: "Objetivos oficiales de Week 1", evidenceClass: "week1", relations: ["inventario"], osiLayer: "Operación" },
    {
      id: "inventario", title: "Inventario", layer: "canonical", status: "introducido", weekIntroduced: 1, definitionSimple: "Registro de qué elementos existen y dónde se encuentran.", definitionTechnical: "Proceso operativo exigido por los objetivos de Week 1.", analogy: "Saber qué tenemos y dónde está.", realExample: "Sin herramienta empresarial específica.", source: "Objetivos oficiales de Week 1", evidenceClass: "week1", relations: ["etiquetado", "documentacion"], osiLayer: "Operación" },
    {
      id: "etiquetado", title: "Etiquetado", layer: "canonical", status: "introducido", weekIntroduced: 1, definitionSimple: "Convención que permite reconocer y rastrear elementos.", definitionTechnical: "Parte del proceso operativo y documental de Week 1.", analogy: "Un nombre visible que conecta el objeto con su registro.", realExample: "Convención específica pendiente de fuente.", source: "Objetivos oficiales de Week 1", evidenceClass: "week1", relations: ["documentacion"], osiLayer: "Operación" },
    {
      id: "estado-real", title: "Estado real", layer: "canonical", status: "introducido", weekIntroduced: 1, definitionSimple: "Situación actual de la red y sus elementos.", definitionTechnical: "Debe corresponder con el estado documentado.", analogy: "Lo que existe frente a lo que dice el plano.", realExample: "Comparación conceptual antes y después de un cambio.", source: "Objetivos oficiales de Week 1", evidenceClass: "week1", relations: ["cambio", "documentacion"], osiLayer: "Operación" },
    {
      id: "cambio", title: "Se produce un cambio", layer: "canonical", status: "introducido", weekIntroduced: 1, definitionSimple: "Una modificación puede separar la realidad de la documentación existente.", definitionTechnical: "Evento que activa la necesidad de gestión y actualización.", analogy: "La obra cambió, pero el plano sigue igual.", realExample: "Cambio genérico, sin procedimiento no acreditado.", source: "Objetivos oficiales de Week 1", evidenceClass: "week1", relations: ["gestion-cambios", "actualizacion"], osiLayer: "Operación" },
    {
      id: "actualizacion", title: "Actualización documental", layer: "canonical", status: "introducido", weekIntroduced: 1, definitionSimple: "Devuelve la correspondencia entre la red real y su documentación.", definitionTechnical: "Cierre conceptual del proceso de gestión del cambio.", analogy: "Actualizar el plano después de modificar la obra.", realExample: "Sin herramienta concreta.", source: "Objetivos oficiales de Week 1", evidenceClass: "week1", relations: ["documentacion", "estado-real"], osiLayer: "Operación" },
    {
      id: "cst230-core",
      title: "Fundamentos de Redes",
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
      realExample: "Aplicaciones contemporáneas: correo, LMS y videollamada.",
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
      realExample: "HTTP, TCP, IP y DNS se conservan como ejemplos con fuente específica pendiente.",
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
      realExample: "UTP, fibra y Wi‑Fi se conservan como ejemplos con fuente específica pendiente.",
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
      realExample: "Topología estrella · SOURCE-PENDING hasta verificar las páginas.",
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
      definitionTechnical: "La categoría hardware está respaldada; switch, router, AP y paneles requieren atribución específica.",
      analogy: "Sistema de cruces y control en una ciudad.",
      realExample: "Switch de acceso en rack de laboratorio.",
      source: "Objetivos oficiales de Week 1; ejemplos específicos SOURCE-PENDING",
      evidenceClass: "week1",
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
      realExample: "Patch panel con código por rack y puerto · ejemplo SOURCE-PENDING.",
      source: "Objetivos oficiales de Week 1; ejemplo específico SOURCE-PENDING",
      evidenceClass: "week1",
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
      realExample: "Rack y monitoreo ambiental están respaldados; UPS permanece SOURCE-PENDING.",
      source: "Descripción oficial de Week 1",
      evidenceClass: "week1",
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
      definitionSimple: "Arquitectura de red estudiada formalmente junto con otros ejemplos del capítulo 2.",
      definitionTechnical: "Arquitectura TCP/IP; su comparación detallada con OSI queda pendiente de evidencia de las páginas.",
      analogy: "Otra forma académica de organizar responsabilidades de comunicación.",
      realExample: "No se añade todavía un mapeo exhaustivo de capas.",
      source: "Molina Robles, cap. 2, §2.2.2",
      evidenceClass: "direct",
      relations: ["arquitectura-niveles", "protocolos", "internet"],
      osiLayer: "Arquitectura por niveles"
    },
    {
      id: "seguridad",
      title: "Políticas de seguridad",
      layer: "canonical",
      status: "introducido",
      weekIntroduced: 1,
      x: 420,
      y: 620,
      size: 19,
      definitionSimple: "Reglas para proteger acceso y operación.",
      definitionTechnical: "Accesos, segmentación y cambios seguros.",
      analogy: "Guardia y control de ingreso del campus digital.",
      realExample: "Separar VLAN de invitados y administración · aplicación contemporánea.",
      source: "Objetivos oficiales de Week 1; ejemplo en capa mundo real",
      evidenceClass: "week1",
      relations: ["gestion-red", "gestion-cambios", "host-world"],
      osiLayer: "Gobernanza"
    },
    {
      id: "documentacion",
      title: "Documentación",
      layer: "canonical",
      status: "introducido",
      weekIntroduced: 1,
      x: 590,
      y: 620,
      size: 19,
      definitionSimple: "Bitácora viva de arquitectura y operación.",
      definitionTechnical: "Inventario, convenciones y trazabilidad.",
      analogy: "Mapa vivo de toda la red.",
      realExample: "Inventario por puerto y cable.",
      source: "Objetivos oficiales de Week 1",
      evidenceClass: "week1",
      relations: ["cableado", "infraestructura", "gestion-red"],
      osiLayer: "Soporte"
    },
    {
      id: "gestion-cambios",
      title: "Gestión de cambios",
      layer: "canonical",
      status: "introducido",
      weekIntroduced: 1,
      x: 760,
      y: 620,
      size: 19,
      definitionSimple: "Controla qué se cambia y con evidencia.",
      definitionTechnical: "Mantiene alineado el estado real con el estado documentado antes y después de una modificación.",
      analogy: "Planear obra sin romper la operación.",
      realExample: "Actualización de firmware en ventana controlada · aplicación contemporánea.",
      source: "Objetivos oficiales de Week 1",
      evidenceClass: "week1",
      relations: ["documentacion", "seguridad", "gestion-red"],
      osiLayer: "Operación"
    },
    {
      id: "gestion-red",
      title: "Gestión de red",
      layer: "canonical",
      status: "introducido",
      weekIntroduced: 1,
      x: 920,
      y: 620,
      size: 19,
      definitionSimple: "Monitoreo y control continuo de la red.",
      definitionTechnical: "Diagnóstico, seguimiento y mejora continua.",
      analogy: "Centro de control de operaciones.",
      realExample: "Dashboard de alertas de enlace y rendimiento.",
      source: "Objetivos oficiales de Week 1",
      evidenceClass: "week1",
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
    { source: "comunicacion-datos", target: "dispositivos", relationshipType: "contains", label: "participan" },
    { source: "comunicacion-datos", target: "servicios", relationshipType: "contains", label: "ofrece" },
    { source: "servicios", target: "protocolos", relationshipType: "relation", label: "requiere reglas" },
    { source: "comunicacion-datos", target: "clasificacion-redes", relationshipType: "relation", label: "se estudia" },
    { source: "clasificacion-redes", target: "clasificacion-titularidad", relationshipType: "contains", label: "criterio" },
    { source: "clasificacion-redes", target: "topologias", relationshipType: "contains", label: "criterio" },
    { source: "clasificacion-redes", target: "clasificacion-transferencia", relationshipType: "contains", label: "criterio" },
    { source: "clasificacion-redes", target: "clasificacion-localizacion", relationshipType: "contains", label: "criterio" },
    { source: "normalizacion", target: "organismos", relationshipType: "contains", label: "coordina" },
    { source: "normalizacion", target: "protocolos", relationshipType: "supports", label: "compatibilidad" },
    { source: "warriors-visual", target: "comunicacion-datos", relationshipType: "supports", label: "visualiza" },
    { source: "problemas-arquitectura", target: "arquitectura-niveles", relationshipType: "relation", label: "crea necesidad" },
    { source: "arquitectura-niveles", target: "modelo-osi", relationshipType: "contains", label: "ejemplo" },
    { source: "arquitectura-niveles", target: "tcpip", relationshipType: "contains", label: "ejemplo" },
    { source: "arquitectura-niveles", target: "red-microsoft", relationshipType: "contains", label: "ejemplo" },
    { source: "ejemplos-transmision", target: "rtc", relationshipType: "contains", label: "incluye" },
    { source: "ejemplos-transmision", target: "telex", relationshipType: "contains", label: "incluye" },
    { source: "ejemplos-transmision", target: "iberpac", relationshipType: "contains", label: "incluye" },
    { source: "ejemplos-transmision", target: "rdsi", relationshipType: "contains", label: "incluye" },
    { source: "ejemplos-transmision", target: "internet", relationshipType: "contains", label: "incluye" },
    { source: "ejemplos-transmision", target: "t-portador", relationshipType: "contains", label: "incluye" },
    { source: "ejemplos-transmision", target: "dsl", relationshipType: "contains", label: "incluye" },
    { source: "ejemplos-transmision", target: "redes-cable", relationshipType: "contains", label: "incluye" },
    { source: "ejemplos-transmision", target: "redes-locales", relationshipType: "contains", label: "incluye" },
    { source: "ejemplos-transmision", target: "vpn", relationshipType: "contains", label: "incluye" },
    { source: "ejemplos-transmision", target: "cable-electrico", relationshipType: "contains", label: "incluye" },
    { source: "area-trabajo", target: "medios", relationshipType: "relation", label: "se conecta" },
    { source: "medios", target: "infraestructura", relationshipType: "relation", label: "recorre" },
    { source: "infraestructura", target: "hardware", relationshipType: "contains", label: "sostiene" },
    { source: "infraestructura", target: "edificio-campus", relationshipType: "relation", label: "ocupa" },
    { source: "elemento-red", target: "identificacion", relationshipType: "relation", label: "se identifica" },
    { source: "identificacion", target: "inventario", relationshipType: "relation", label: "se registra" },
    { source: "inventario", target: "etiquetado", relationshipType: "relation", label: "se rastrea" },
    { source: "etiquetado", target: "documentacion", relationshipType: "relation", label: "se documenta" },
    { source: "estado-real", target: "cambio", relationshipType: "relation", label: "se modifica" },
    { source: "cambio", target: "gestion-cambios", relationshipType: "relation", label: "requiere control" },
    { source: "gestion-cambios", target: "actualizacion", relationshipType: "relation", label: "produce" },
    { source: "actualizacion", target: "documentacion", relationshipType: "relation", label: "restablece" },
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
  showAiConnections: false
};

const storyFlow = document.getElementById("storyFlow");
const svg = document.getElementById("knowledgeMap");
const edgesLayer = document.getElementById("edgesLayer");
const nodesLayer = document.getElementById("nodesLayer");
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

function visibleNodes() {
  return mapData.nodes.filter((node) => {
    if (!state.showAiConnections && node.layer === "ai") return false;
    return true;
  });
}

function visibleEdges(visibleNodeIds) {
  const visible = new Set(visibleNodeIds);
  return mapData.edges.filter((edge) => {
    if (edge.relationshipType === "ai" && !state.showAiConnections) return false;
    return visible.has(edge.source) && visible.has(edge.target);
  });
}

function escapeMarkup(value) {
  return String(value || "").replace(/[&<>\"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '\"': "&quot;" }[character]));
}

function labelLines(value, maxLength = 23) {
  const words = String(value).split(" ");
  const lines = [];
  words.forEach((word) => {
    const current = lines[lines.length - 1];
    if (!current || `${current} ${word}`.length > maxLength) lines.push(word);
    else lines[lines.length - 1] = `${current} ${word}`;
  });
  return lines.slice(0, 3);
}

function stageInfographic(stage, stageIndex) {
  const columns = stage.diagramColumns;
  const width = 1440;
  const startX = 125;
  const endX = 1315;
  const columnGap = (endX - startX) / (columns.length - 1);
  const maxRows = Math.max(...columns.map((column) => column.ids.length));
  const plotTop = 105;
  const rowGap = maxRows > 8 ? 82 : maxRows > 5 ? 88 : 104;
  const plotHeight = Math.max(430, (maxRows - 1) * rowGap + 90);
  const height = plotTop + plotHeight + 245;
  const positions = new Map();
  columns.forEach((column, columnIndex) => {
    const availableHeight = Math.max(0, (column.ids.length - 1) * rowGap);
    const columnTop = plotTop + (plotHeight - availableHeight) / 2;
    column.ids.forEach((id, rowIndex) => {
      positions.set(id, { x: startX + columnIndex * columnGap, y: columnTop + rowIndex * rowGap });
    });
  });
  const stageIds = new Set(columns.flatMap((column) => column.ids));
  const stageEdges = mapData.edges.filter((edge) => stageIds.has(edge.source) && stageIds.has(edge.target) && edge.relationshipType !== "ai");
  const edgeMarkup = stageEdges.map((edge) => {
    const source = positions.get(edge.source);
    const target = positions.get(edge.target);
    if (!source || !target) return "";
    const bend = Math.max(45, Math.abs(target.x - source.x) * .42);
    return `<path class="stage-edge" marker-end="url(#stage-arrow-${stageIndex})" d="M ${source.x} ${source.y} C ${source.x + bend} ${source.y}, ${target.x - bend} ${target.y}, ${target.x} ${target.y}" />`;
  }).join("");
  const nodeMarkup = columns.flatMap((column, columnIndex) => column.ids.map((id) => ({ id, columnIndex }))).map(({ id, columnIndex }) => {
    const node = getNodeById(id);
    const position = positions.get(id);
    const lines = labelLines(node.title, 23);
    const labelOnLeft = columnIndex === columns.length - 1;
    const labelX = position.x + (labelOnLeft ? -34 : 34);
    const text = lines.map((line, lineIndex) => `<tspan x="${labelX}" dy="${lineIndex ? 16 : 0}">${escapeMarkup(line)}</tspan>`).join("");
    return `<g class="stage-node" data-node="${id}" tabindex="0" role="button" aria-label="Abrir ${escapeMarkup(node.title)}">
      <circle cx="${position.x}" cy="${position.y}" r="20" />
      <circle class="stage-node-halo" cx="${position.x}" cy="${position.y}" r="27" />
      <text class="${labelOnLeft ? "label-left" : "label-right"}" x="${labelX}" y="${position.y - ((lines.length - 1) * 8) + 5}">${text}</text>
    </g>`;
  }).join("");
  const columnLabels = columns.map((column, index) => `<text class="stage-column-label" x="${startX + index * columnGap}" y="42">${escapeMarkup(column.label)}</text>`).join("");
  const aiTouchpoints = stage.ai.touchpoints || [];
  const aiHub = { x: width / 2, y: height - 72 };
  const aiMarkup = aiTouchpoints.map((touchpoint, index) => {
    const source = positions.get(touchpoint.from);
    const target = positions.get(touchpoint.to);
    if (!source || !target) return "";
    const x = (source.x + target.x) / 2;
    const y = (source.y + target.y) / 2 + (index % 2 ? 28 : -28);
    const pillWidth = Math.max(128, touchpoint.term.length * 7.2 + 24);
    return `<g class="stage-ai-touchpoint">
      <path class="stage-ai-origin" d="M ${aiHub.x} ${aiHub.y} Q ${x} ${aiHub.y - 70}, ${x} ${y}" />
      <path class="stage-ai-edge" marker-end="url(#ai-arrow-${stageIndex})" d="M ${x} ${y} Q ${(x + target.x) / 2} ${y}, ${target.x} ${target.y}" />
      <circle cx="${x}" cy="${y}" r="13" />
      <rect class="ai-term-pill" x="${x - pillWidth / 2}" y="${y - 48}" width="${pillWidth}" height="25" rx="12.5" />
      <text x="${x}" y="${y - 31}">${escapeMarkup(touchpoint.term)}</text>
    </g>`;
  }).join("");
  const explanationMarkup = aiTouchpoints.map((touchpoint) => `<article><strong>${escapeMarkup(touchpoint.term)}</strong><p>${escapeMarkup(touchpoint.detail)}</p></article>`).join("");
  return `<section class="stage-infographic" aria-label="Infografía de ${escapeMarkup(stage.label)}">
    <div class="stage-visual-head">
      <p>Diagrama de red conceptual</p>
      <label class="ia-switch stage-ai-switch">
        <input type="checkbox" data-stage-ai="${stageIndex}" />
        <span class="switch-track" aria-hidden="true"><span></span></span>
        <span>Mostrar lente AI-FIRST</span>
      </label>
    </div>
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Relaciones conceptuales de ${escapeMarkup(stage.label)}">
      <defs>
        <marker id="stage-arrow-${stageIndex}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="stage-arrow-head" d="M 0 0 L 10 5 L 0 10 z" /></marker>
        <marker id="ai-arrow-${stageIndex}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="ai-arrow-head" d="M 0 0 L 10 5 L 0 10 z" /></marker>
      </defs>
      <g>${columnLabels}</g>
      <g class="stage-base-network">${edgeMarkup}</g>
      <g>${nodeMarkup}</g>
      <g class="ai-stage-layer is-hidden" data-ai-layer="${stageIndex}">
        <g class="stage-ai-hub">
          <circle cx="${aiHub.x}" cy="${aiHub.y}" r="34" />
          <circle class="stage-ai-hub-ring" cx="${aiHub.x}" cy="${aiHub.y}" r="46" />
          <text x="${aiHub.x}" y="${aiHub.y + 68}">INTELIGENCIA ARTIFICIAL</text>
        </g>
        ${aiMarkup}
      </g>
    </svg>
    <div class="ai-stage-explanation ai-stage-layer is-hidden" data-ai-layer="${stageIndex}">
      <div class="ai-stage-summary"><span>✦ AI-FIRST</span><b>Observa</b> ${escapeMarkup(stage.ai.observes)} <b>Analiza</b> ${escapeMarkup(stage.ai.analyzes)} <b>Recomienda</b> ${escapeMarkup(stage.ai.recommends)}</div>
      <div class="ai-term-grid">${explanationMarkup}</div>
    </div>
    ${stage.ai.note ? `<p class="ai-note ai-stage-layer is-hidden" data-ai-layer="${stageIndex}">${stage.ai.note}</p>` : ""}
  </section>`;
}

function renderStoryFlow() {
  storyFlow.innerHTML = mapData.stages.map((stage, index) => `
    <article class="story-panel" id="${stage.id}">
      <p class="kicker">Semana ${mapData.currentWeek} · ${stage.label}</p>
      <h3>${stage.title}</h3>
      ${stage.intro ? `<p class="story-intro">${stage.intro}</p>` : ""}
      <p class="story-question"><span>Pregunta de análisis</span>${stage.question}</p>
      ${stageInfographic(stage, index)}
      ${index < mapData.stages.length - 1 ? '<span class="scroll-cue" aria-hidden="true">↓</span>' : ""}
    </article>
  `).join("");
  storyFlow.querySelectorAll("[data-stage-ai]").forEach((toggle) => {
    toggle.addEventListener("change", () => {
      storyFlow.querySelectorAll(`[data-ai-layer="${toggle.dataset.stageAi}"]`).forEach((layer) => layer.classList.toggle("is-hidden", !toggle.checked));
    });
  });
  bindNodeInteractions(storyFlow);
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
  const evidenceLabels = {
    direct: "Fundamento académico verificado",
    week1: "Evidencia oficial de Week 1",
    worldreal: "Aplicación al mundo real",
    deepening: "Profundización académica",
    source_pending: "SOURCE-PENDING · fuente por verificar",
    ai: "AI-FIRST · aplicación separada"
  };
  const inferredEvidence = node.layer === "ai" ? "ai" : node.layer === "worldreal" ? "worldreal" : node.source?.includes("Molina") ? "direct" : "source_pending";
  const evidenceLabel = evidenceLabels[node.evidenceClass || inferredEvidence];
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
    <dt>Clasificación de evidencia</dt><dd><span class="evidence-tag">${evidenceLabel}</span></dd>
    <dt>Semana en que aparece</dt><dd>${node.weekIntroduced}</dd>
    <dt>Estado de aprendizaje</dt><dd>${statusLabel}</dd>
    <dt>Capa</dt><dd>${layerLabel}</dd>
    ${node.layer === "ai" ? `<dt>¿Qué trae IA aquí?</dt><dd>${aiValue}</dd>` : ""}
  `;
}

function bindNodeInteractions(root) {
  root.querySelectorAll("[data-node]").forEach((element) => {
    const node = getNodeById(element.dataset.node);
    const open = () => openPopup(node);
    element.addEventListener("click", open);
    element.addEventListener("keypress", (event) => {
      if (event.key === "Enter") open();
    });
  });
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
  const orderedIds = [...new Set([...mapData.stages.flatMap((stage) => stage.nodeIds), ...nodes.map((node) => node.id)])];
  const orderedNodes = orderedIds.map(getNodeById).filter((node) => nodes.includes(node));
  const columns = 8;
  const positions = new Map();
  orderedNodes.forEach((node, index) => positions.set(node.id, { x: 120 + (index % columns) * 225, y: 110 + Math.floor(index / columns) * 150 }));
  const mapHeight = 220 + Math.ceil(orderedNodes.length / columns) * 150;
  svg.setAttribute("viewBox", `0 0 1900 ${mapHeight}`);

  edgesLayer.innerHTML = edges
    .map((edge) => {
      const source = getNodeById(edge.source);
      const target = getNodeById(edge.target);
      const sourcePosition = positions.get(edge.source);
      const targetPosition = positions.get(edge.target);
      if (!state.showAiConnections && (source?.layer === "ai" || target?.layer === "ai")) return "";
      if (!source || !target || !sourcePosition || !targetPosition) return "";
      return `<line class="${lineClass(edge.relationshipType, edge.isDashed)}" x1="${sourcePosition.x}" y1="${sourcePosition.y}" x2="${targetPosition.x}" y2="${targetPosition.y}" />`;
    })
    .join("");

  nodesLayer.innerHTML = nodes
    .map((node) => {
      const color = mapData.layers[node.layer]?.color || "var(--canon)";
      const position = positions.get(node.id);
      if (!position) return "";
      return `<g class="node-dot" data-node="${node.id}" tabindex="0" role="button" aria-label="Ver detalle de ${node.title}">
        <circle cx="${position.x}" cy="${position.y}" r="16" fill="${color}" class="node-core" />
        <circle cx="${position.x}" cy="${position.y}" r="20" class="node-ring" />
        <text x="${position.x + 27}" y="${position.y + 5}" class="node-label">${escapeMarkup(node.title)}</text>
      </g>`;
    })
    .join("");

  bindNodeInteractions(nodesLayer);

  const current = getNodeById(state.selectedNodeId);
  const fallback = nodes.find((node) => node.id === state.selectedNodeId) || nodes[0];
  updateDetail(fallback);
}

function render() {
  draw();
}

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

renderStoryFlow();
render();

