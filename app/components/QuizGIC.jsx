"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const sections = {
  "Verdadero o Falso": [
    {
      question:
        "1. La globalización cultural promueve la desaparición progresiva de todas las lenguas autóctonas.",
      options: ["Verdadero", "Falso"],
      answer: "Falso",
      justification:
        "Aunque la globalización puede amenazar lenguas pequeñas, no elimina todas las lenguas autóctonas; muchas se mantienen por políticas de preservación cultural."
    },
    {
      question:
        "2. La Primera Globalización se inició a finales del siglo XV con el Imperio Español y la navegación mundial.",
      options: ["Verdadero", "Falso"],
      answer: "Verdadero",
      justification:
        "La Primera Globalización abarca desde el Descubrimiento de América (1492) hasta el siglo XIX, con el Imperio Español unificando comercio y culturas a escala mundial."
    },
    {
      question:
        "3. El Consenso de Washington (1989) es considerado un hito que definió políticas clave del neoliberalismo en las economías latinoamericanas.",
      options: ["Verdadero", "Falso"],
      answer: "Verdadero",
      justification:
        "El Consenso de Washington estableció diez recomendaciones (liberalización, privatización, disciplina fiscal) que influyeron ampliamente en políticas económicas de América Latina."
    },
    {
      question:
        "4. La caída del Muro de Berlín en 1989 marcó simbólicamente el fin de la Segunda Globalización.",
      options: ["Verdadero", "Falso"],
      answer: "Falso",
      justification:
        "La caída del Muro de Berlín simboliza la disolución del bloque comunista, pero la Segunda Globalización se extiende hasta la actualidad, impulsada por la revolución informática y la liberalización económica."
    },
    {
      question:
        "5. La globalización política implica la disminución de la importancia del Estado-nación y el ascenso de actores internacionales como ONG y organismos multilaterales.",
      options: ["Verdadero", "Falso"],
      answer: "Verdadero",
      justification:
        "Con la globalización política, el Estado-nación cede parte de su poder a organismos como la ONU, la OMC, y a ONG transnacionales que influyen en políticas globales."
    },
    {
      question:
        "6. La globalización económica contemporánea se basa en un movimiento internacional de bienes, capital, servicios, tecnología e información.",
      options: ["Verdadero", "Falso"],
      answer: "Verdadero",
      justification:
        "La globalización económica implica la integración de mercados nacionales a través de flujos transfronterizos de mercancías, capital financiero, servicios y tecnología."
    },
    {
      question:
        "7. Las crisis financieras asiática (1997) y rusa (1998) se conocen popularmente como “efecto Dragón” y “efecto Vodka” respectivamente.",
      options: ["Verdadero", "Falso"],
      answer: "Verdadero",
      justification:
        "La crisis asiática se llamó “efecto Dragón” y la crisis rusa de 1998, “efecto Vodka”, por su impacto económico global y denominaciones coloquiales."
    },
    {
      question:
        "8. El RGPD (Reglamento General de Protección de Datos) europeo protege tanto a personas físicas como a personas jurídicas (empresas).",
      options: ["Verdadero", "Falso"],
      answer: "Falso",
      justification:
        "El RGPD protege únicamente a personas físicas, no a personas jurídicas; las empresas se rigen por otros regímenes (confidencialidad comercial, competencia, etc.)."
    },
    {
      question:
        "9. En Argentina, la Ley 25.326 (Protección de Datos Personales) fue sancionada en el año 2000 y es pionera en Latinoamérica.",
      options: ["Verdadero", "Falso"],
      answer: "Verdadero",
      justification:
        "La Ley 25.326 fue sancionada en 2000 y sirvió de referencia regional para normas de privacidad y protección de datos."
    },
    {
      question:
        "10. Según la Ley 25.326, los datos personales recopilados con fines estadísticos están exentos del régimen legal, incluso si pueden relacionarse a un individuo identificable.",
      options: ["Verdadero", "Falso"],
      answer: "Falso",
      justification:
        "Los datos estadísticos pueden estar exentos sólo si están efectivamente disociados de la identidad; si pueden relacionarse con un individuo, aplican las protecciones."
    },
    {
      question:
        "11. El consentimiento para el tratamiento de datos personales puede ser tácito si el usuario no se opone explícitamente.",
      options: ["Verdadero", "Falso"],
      answer: "Falso",
      justification:
        "La Ley 25.326 exige que el consentimiento sea libre, expreso e informado; no admite consentimiento tácito."
    },
    {
      question:
        "12. La identidad digital se construye a partir de la huella digital y la reputación digital, según la clase de Protección de Datos Personales.",
      options: ["Verdadero", "Falso"],
      answer: "Verdadero",
      justification:
        "La identidad digital abarca la huella digital (rastros que dejamos) y la reputación (información compartida voluntariamente)."
    },
    {
      question:
        "13. El Delegado de Protección de Datos (DPO) es obligatorio en Argentina para todas las empresas, sin importar su tamaño.",
      options: ["Verdadero", "Falso"],
      answer: "Falso",
      justification:
        "En Argentina, el DPO es obligatorio para organismos públicos y para tratamientos masivos de datos sensibles, no para toda empresa sin distinción."
    },
    {
      question:
        "14. La evaluación de impacto en la protección de datos es un proceso previo al tratamiento para detectar riesgos, y es obligatoria en ciertos casos.",
      options: ["Verdadero", "Falso"],
      answer: "Verdadero",
      justification:
        "Cuando el tratamiento implica alto riesgo a derechos de los titulares, el responsable debe realizar evaluación de impacto según la normativa."
    },
    {
      question:
        "15. La protección de datos en Argentina se extiende a datos de “personas de existencia ideal” (personas jurídicas).",
      options: ["Verdadero", "Falso"],
      answer: "Falso",
      justification:
        "La Ley 25.326 protege datos de personas humanas (físicas), no de personas jurídicas; las empresas se rigen por otros derechos."
    },
    {
      question:
        "16. La “privacidad por diseño” implica integrar la protección de datos desde la planificación de sistemas, no como un parche posterior.",
      options: ["Verdadero", "Falso"],
      answer: "Verdadero",
      justification:
        "Privacidad por diseño exige incorporar la protección de datos desde la concepción, no después."
    },
    {
      question:
        "17. El uso de cookies para rastrear hábitos de navegación en territorio argentino está sujeto a la aplicación extraterritorial de la Ley 25.326.",
      options: ["Verdadero", "Falso"],
      answer: "Verdadero",
      justification:
        "La ley se aplica a responsables fuera de Argentina que ofrezcan servicios o monitoreen comportamientos de usuarios argentinos, lo cual incluye cookies."
    },
    {
      question:
        "18. La globalización actual depende exclusivamente de factores económicos y no involucra tecnología ni cultura.",
      options: ["Verdadero", "Falso"],
      answer: "Falso",
      justification:
        "La globalización actual es multidimensional: abarca economía, política, tecnología, cultura y comunicación."
    },
    {
      question:
        "19. El “Galeón de Manila” fue un ejemplo de Primera Globalización que conectó Asia, América y Europa desde el siglo XVI.",
      options: ["Verdadero", "Falso"],
      answer: "Verdadero",
      justification:
        "El Galeón de Manila unía Manila (Filipinas) con Acapulco (Nueva España), conectando Asia, América y, a través de Europa, desde el siglo XVI."
    },
    {
      question:
        "20. La crisis mexicana 1994/1995 (efecto Tequila) no tuvo impacto global porque solo afectó al mercado interno de México.",
      options: ["Verdadero", "Falso"],
      answer: "Falso",
      justification:
        "El “efecto Tequila” se propagó a otros mercados emergentes y afectó flujos de capital en la región; tuvo impacto global."
    }
  ],

  "Preguntas Trampa": [
    {
      question:
        "1. ¿Cuál de las siguientes afirmaciones acerca de la Primera Globalización es INCORRECTA?",
      options: [
        "Se extiende desde el siglo XV a finales del siglo XIX",
        "Incluyó la creación del Derecho Internacional Moderno",
        "Fue impulsada principalmente por la Revolución Industrial",
        "El Galeón de Manila conectaba Asia, América y Europa",
        "Terminó con la Independencia de las repúblicas americanas"
      ],
      answer: "Fue impulsada principalmente por la Revolución Industrial",
      justification:
        "La Primera Globalización se impulsó por el descubrimiento de América y la expansión española, no por la Revolución Industrial (esa corresponde a la Segunda Globalización)."
    },
    {
      question:
        "2. ¿Cuál de los siguientes NO es un hito contemporáneo de la globalización?",
      options: [
        "La creación de la OMC en 1995",
        "La crisis asiática de 1997",
        "La formación del Imperio Romano",
        "La caída del Muro de Berlín en 1989",
        "El Consenso de Washington en 1989"
      ],
      answer: "La formación del Imperio Romano",
      justification:
        "El Imperio Romano es un antecedente antiguo, no un hito contemporáneo (siglos XX y XXI) de globalización."
    },
    {
      question:
        "3. En el contexto de la globalización económica, ¿cuál de estas afirmaciones es FALSA?",
      options: [
        "Busca la integración de las economías nacionales",
        "Se caracteriza por flujos transfronterizos de bienes y tecnologías",
        "Sincroniza automáticamente políticas fiscales de todos los países",
        "Favorece la interdependencia de los mercados financieros",
        "Impulsa la liberalización del comercio"
      ],
      answer: "Sincroniza automáticamente políticas fiscales de todos los países",
      justification:
        "La globalización económica no sincroniza políticas fiscales: cada país mantiene sus decisiones fiscales, aunque se influencian mutuamente."
    },
    {
      question:
        "4. Respecto a la globalización política, ¿cuál oración es ERRÓNEA?",
      options: [
        "Reduce la relevancia exclusiva del Estado-nación",
        "Impulsa la gobernanza multinivel",
        "Establece que todos los países adoptan la misma constitución",
        "Eleva el papel de las ONG internacionales",
        "Promueve la creación de asociaciones intergubernamentales"
      ],
      answer: "Establece que todos los países adoptan la misma constitución",
      justification:
        "La globalización política no obliga a países a tener una misma constitución; su relevancia está en la creación de redes multilaterales y ONG internacionales."
    },
    {
      question:
        "5. ¿Cuál de estas NO es una característica de la Segunda Globalización?",
      options: [
        "Revolución informática",
        "Nivel considerable de liberalización comercial",
        "Tecnologías de comunicación global en tiempo real",
        "Imperio Español como actor dominante",
        "Democratización de la cultura política"
      ],
      answer: "Imperio Español como actor dominante",
      justification:
        "El Imperio Español fue protagonista de la Primera Globalización, no de la Segunda (que comienza con la posguerra fría y la revolución informática)."
    },
    {
      question:
        "6. Sobre la Ley 25.326 de Argentina, ¿cuál de las afirmaciones es INCORRECTA?",
      options: [
        "Protege datos alojados en archivos públicos y privados",
        "Excluye datos de uso interno, personal o doméstico",
        "Aplica únicamente a datos biométricos",
        "Garantiza el derecho al honor y la intimidad",
        "Establece el consentimiento libre, expreso e informado"
      ],
      answer: "Aplica únicamente a datos biométricos",
      justification:
        "La Ley 25.326 protege toda clase de datos personales, no sólo los biométricos; los datos biométricos se consideran sensibles con exigencias adicionales."
    },
    {
      question:
        "7. ¿Cuál de los siguientes NO es un derecho reconocido para el titular de datos en la Ley 25.326?",
      options: [
        "Derecho de acceso",
        "Derecho de portabilidad",
        "Derecho de rectificación",
        "Derecho de supresión",
        "Derecho de confidencialidad"
      ],
      answer: "Derecho de portabilidad",
      justification:
        "El derecho de portabilidad se incorporó con la propuesta de modificación actual, no existía en la Ley 25.326 original (aparece en el RGPD)."
    },
    {
      question:
        "8. En la protección de datos, ¿qué afirmación es FALSA con respecto al DPO (Delegado de Protección de Datos)?",
      options: [
        "Es obligatorio en organismos públicos",
        "Debe ser una persona independiente al responsable del tratamiento",
        "Solo es necesario en tratamientos de gran volumen",
        "Nunca puede ser un empleado de la organización",
        "Supervisa el cumplimiento normativo"
      ],
      answer: "Nunca puede ser un empleado de la organización",
      justification:
        "El DPO puede ser un empleado interno o un consultor externo, siempre y cuando actúe con independencia y sin conflicto de intereses."
    },
    {
      question:
        "9. ¿Cuál elemento NO forma parte de las “privacidad por diseño”?",
      options: [
        "Incluir la protección de datos en la fase conceptual",
        "Tratar sólo los datos estrictamente necesarios",
        "Agregar la privacidad como parche al final del desarrollo",
        "Documentar las medidas de seguridad desde el inicio",
        "Integrar controles de acceso desde etapas tempranas"
      ],
      answer: "Agregar la privacidad como parche al final del desarrollo",
      justification:
        "La privacidad por diseño exige incorporar la protección de datos desde la concepción, no como un parche posterior."
    },
    {
      question:
        "10. Respecto a la identidad digital, señale la opción incorrecta:",
      options: [
        "La “huella digital” se refiere al rastro que dejan nuestras interacciones en la red",
        "La “reputación digital” es lo que compartimos voluntariamente",
        "Sólo incluye datos de redes sociales",
        "Forma parte de nuestra identidad social en internet",
        "Puede incluir datos recopilados por empresas de servicios digitales"
      ],
      answer: "Sólo incluye datos de redes sociales",
      justification:
        "La identidad digital abarca huella y reputación, incluidos datos de búsquedas, cookies y transacciones online, no sólo redes sociales."
    },
    {
      question:
        "11. Sobre la aplicación extraterritorial de la Ley 25.326, ¿cuál enunciado es INCORRECTO?",
      options: [
        "Aplica a responsables fuera de Argentina que ofrecen bienes o servicios a residentes argentinos",
        "Incluye a entidades que monitorean el comportamiento de usuarios en territorio argentino",
        "No aplica en absoluto a empresas sin presencia física en Argentina",
        "Obliga a empresas internacionales a cumplir con la ley",
        "Se relaciona con el uso de cookies y geolocalización"
      ],
      answer: "No aplica en absoluto a empresas sin presencia física en Argentina",
      justification:
        "La ley sí aplica a entidades sin presencia física que ofrecen servicios o monitorean comportamientos de usuarios argentinos."
    },
    {
      question:
        "12. ¿Cuál de los siguientes NO es un antecedente histórico mencionado para la globalización?",
      options: [
        "La conquista y colonización de América por España en 1492",
        "La primera transmisión mundial vía satélite en 1969",
        "La autodisolución de la URSS en 1991",
        "La invención del código Morse en 1837",
        "La explosión de la bomba atómica en 1945"
      ],
      answer: "La invención del código Morse en 1837",
      justification:
        "Si bien el código Morse mejoró comunicaciones, no se menciona como antecedente directo de globalización; sí lo son la colonización de América, la bomba atómica e hitos telemáticos como satélites."
    },
    {
      question:
        "13. En términos de ONG y filantropía global, ¿cuál afirmación es ERRÓNEA?",
      options: [
        "ONG influyen en políticas públicas más allá de fronteras nacionales",
        "Flujos filantrópicos privados hacia países en desarrollo superaron los 59.000 millones USD en 2010",
        "Las organizaciones filantrópicas no pueden operar fuera de su país de origen",
        "El Instituto Hudson estimó esos flujos en 2010",
        "La ayuda humanitaria es un aspecto de la globalización económica y social"
      ],
      answer: "Las organizaciones filantrópicas no pueden operar fuera de su país de origen",
      justification:
        "Muchas ONG y fundaciones filantrópicas operan internacionalmente; no están limitadas a su país de origen."
    },
    {
      question:
        "14. ¿Cuál de los siguientes no corresponde a un principio de la Ley 25.326?",
      options: [
        "Finalidad",
        "Consentimiento",
        "Ejecución automática de decisiones",
        "Acceso",
        "Calidad de los datos"
      ],
      answer: "Ejecución automática de decisiones",
      justification:
        "La Ley 25.326 no contempla la ejecución automática de decisiones como principio; ese concepto se relaciona con derechos digitales (revisión humana)."
    },
    {
      question:
        "15. ¿Qué aspecto no está contemplado en la definición de globalización cultural?",
      options: [
        "Transmisión de ideas y valores globales",
        "Consumo común de culturas por internet",
        "Exclusiva exportación de productos agrícolas",
        "Intercambio de medios culturales populares",
        "Formación de normas y conocimientos compartidos"
      ],
      answer: "Exclusiva exportación de productos agrícolas",
      justification:
        "La globalización cultural va más allá de productos, engloba ideas, valores, medios y normas. La exportación de productos agrícolas es un aspecto económico, no estrictamente cultural."
    },
    {
      question:
        "16. Sobre las crisis económicas globales, identifique la afirmación incorrecta:",
      options: [
        "La crisis mexicana de 1994/95 se llamó “efecto Tequila”",
        "La crisis asiática de 1997/98 se llamó “efecto Dragón”",
        "La crisis rusa de 1998 fue “efecto Vodka”",
        "La crisis de 2008 no impactó economías emergentes",
        "La crisis argentina de 2001/02 fue “efecto Tango”"
      ],
      answer: "La crisis de 2008 no impactó economías emergentes",
      justification:
        "La crisis de 2008 sí impactó economías emergentes; no se limitó a mercados desarrollados."
    },
    {
      question:
        "17. ¿Cuál opción no corresponde a una dimensión de la globalización?",
      options: [
        "Económica",
        "Política",
        "Cultural",
        "Galáctica",
        "Tecnológica"
      ],
      answer: "Galáctica",
      justification:
        "No existe la “globalización galáctica” como dimensión; las tres más estudiadas son económica, política y cultural (además de la tecnológica)."
    },
    {
      question:
        "18. Respecto al uso de grandes volúmenes de datos (Big Data) en globalización, ¿cuál es FALSA?",
      options: [
        "Impulsa la inteligencia artificial",
        "Permite decisiones basadas en datos en tiempo real",
        "No tiene ningún riesgo para la privacidad",
        "Aumenta la eficiencia productiva",
        "Genera valor en cadenas de suministro internacionales"
      ],
      answer: "No tiene ningún riesgo para la privacidad",
      justification:
        "El Big Data aumenta riesgos de privacidad y seguridad; no es libre de riesgos."
    },
    {
      question:
        "19. ¿Qué elemento NO forma parte de las “recomendaciones UNESCO sobre IA y ética”?",
      options: [
        "Principio de transparencia",
        "Respeto a la autonomía humana",
        "Promoción de sesgos algorítmicos",
        "Protección de la privacidad",
        "Responsabilidad en decisiones automatizadas"
      ],
      answer: "Promoción de sesgos algorítmicos",
      justification:
        "La UNESCO busca eliminar sesgos algorítmicos, no promoverlos; los demás puntos sí forman parte de recomendaciones éticas."
    },
    {
      question:
        "20. ¿Cuál afirmación es correcta sobre la regulación de datos en Argentina y el RGPD?",
      options: [
        "La Ley 25.326 se alinea completamente con el RGPD europeo",
        "El RGPD protege datos de personas jurídicas, a diferencia de Argentina",
        "La legislación argentina no contempla datos biométricos como sensibles",
        "El proyecto de nueva ley introduce portabilidad y revisión humana",
        "La Ley 25.326 sólo aplica a bases de datos públicos"
      ],
      answer: "El proyecto de nueva ley introduce portabilidad y revisión humana",
      justification:
        "El proyecto de modificación actual incorpora derechos digitales como portabilidad y revisión humana; la Ley 25.326 original no los incluía."
    }
  ],

  "Preguntas Comunes": [
    {
      question:
        "1. ¿Cuál es la definición de globalización según el Diccionario de la Lengua Española de la Real Academia?",
      options: [
        "Tendencia de los mercados y empresas a alcanzar dimensión mundial",
        "Proceso exclusivo de expansión militar",
        "Fusión de todos los países en uno solo",
        "Sistema de intercambio de sólo bienes agrícolas",
        "Restricción de fronteras nacionales"
      ],
      answer: "Tendencia de los mercados y empresas a alcanzar dimensión mundial",
      justification:
        "El diccionario define globalización como la tendencia de mercados y empresas a expandirse más allá de fronteras nacionales."
    },
    {
      question:
        "2. ¿Quiénes son los autores del documento “Dinámicas sociales y culturales de la globalización”?",
      options: [
        "Dr. Claudio Masi y Lic. Gabriel Greco",
        "José Luis Sampedro y Guy Rocher",
        "Marshall McLuhan y Rüdiger Safranski",
        "Aldo Ferrer y John Williamson",
        "Sofía Varela y Antonio Becerra"
      ],
      answer: "Dr. Claudio Masi y Lic. Gabriel Greco",
      justification:
        "El documento fue elaborado por el Dr. Claudio Masi y el Lic. Gabriel Greco, como figura en el encabezado del PDF."
    },
    {
      question:
        "3. ¿Cuál de estos NO es un antecedente histórico de la globalización según el material?",
      options: [
        "Descubrimiento de América en 1492",
        "Llegada del hombre a la Luna en 1969",
        "Caída del Muro de Berlín en 1989",
        "Primera transmisión mundial vía satélite en 1969",
        "Invención de la imprenta en el siglo XV"
      ],
      answer: "Invención de la imprenta en el siglo XV",
      justification:
        "Aunque la imprenta es relevante para comunicaciones, el material no la menciona explícitamente como antecedente de la globalización moderna."
    },
    {
      question:
        "4. ¿Qué es la globalización cultural según el PDF analizado?",
      options: [
        "La transmisión de ideas, significados y valores a escala mundial",
        "El intercambio exclusivo de productos agrícolas",
        "La uniformidad total de culturas sin diferencias",
        "El fin de todas las tradiciones locales",
        "La desaparición de internet"
      ],
      answer: "La transmisión de ideas, significados y valores a escala mundial",
      justification:
        "La globalización cultural implica intercambio y difusión de ideas, valores y hábitos, no la desaparición total de culturas locales."
    },
    {
      question:
        "5. ¿Cuál es uno de los principios de la Ley 25.326 de Protección de Datos Personales?",
      options: [
        "Consentimiento libre, expreso e informado",
        "Consentimiento tácito",
        "Obligatoriedad de compartir datos con terceros",
        "Prohibición del derecho de rectificación",
        "Acceso a datos sólo mediante pago"
      ],
      answer: "Consentimiento libre, expreso e informado",
      justification:
        "La ley exige que el titular otorgue un consentimiento libre, expreso e informado; no existe consentimiento tácito."
    },
    {
      question:
        "6. ¿Cuál organismo aplica y controla la Ley 25.326 en Argentina?",
      options: [
        "Agencia de Acceso a la Información Pública (AAIP)",
        "Ministerio de Educación",
        "Banco Central de la República Argentina",
        "Comisión Nacional de Valores",
        "Instituto Nacional de Estadística y Censos"
      ],
      answer: "Agencia de Acceso a la Información Pública (AAIP)",
      justification:
        "La AAIP, a través de su Dirección Nacional de Protección de Datos Personales, es la autoridad de aplicación de la ley."
    },
    {
      question:
        "7. ¿Qué excluye del régimen de la Ley 25.326?",
      options: [
        "Datos personales de uso interno, personal o doméstico",
        "Bases de datos con fines de lucro",
        "Información en redes sociales públicas",
        "Datos biométricos",
        "Bases de datos de organismos públicos"
      ],
      answer: "Datos personales de uso interno, personal o doméstico",
      justification:
        "La ley no se aplica a datos utilizados de manera exclusivamente interna, personal o doméstica; los demás quedan incluidos si son registrados."
    },
    {
      question:
        "8. ¿Qué dato se considera “sensible” según la clase de Protección de Datos Personales?",
      options: [
        "Información sobre salud o genética",
        "Nombre y apellido",
        "Ciudad de residencia",
        "Género musical favorito",
        "Color favorito"
      ],
      answer: "Información sobre salud o genética",
      justification:
        "Datos sensibles incluyen información genética, biométrica o que revele aspectos de salud; datos como color favorito no lo son."
    },
    {
      question:
        "9. ¿Qué es la “huella digital” en el contexto de identidad digital?",
      options: [
        "Rastro de datos que registran empresas de servicios digitales",
        "Un tatuaje impreso en el dedo",
        "La reputación en redes sociales",
        "El número de documento",
        "Una contraseña de acceso"
      ],
      answer: "Rastro de datos que registran empresas de servicios digitales",
      justification:
        "La huella digital es el rastro que dejamos cuando navegamos/interactuamos con servicios en línea; no es nuestra reputación voluntaria."
    },
    {
      question:
        "10. ¿Qué derecho nuevo introduce el proyecto de modificación de la Ley 25.326?",
      options: [
        "Portabilidad de datos",
        "Recibir publicidad no deseada",
        "Eliminar datos de forma irrestricta sin justificación",
        "Transferencia automática a bases internacionales",
        "Captura biométrica obligatoria"
      ],
      answer: "Portabilidad de datos",
      justification:
        "El proyecto introduce el derecho a la portabilidad, permitiendo al titular solicitar datos en formato estructurado para transferirlos a otro responsable."
    },
    {
      question:
        "11. ¿Cuál es el significado de “privacidad por defecto”?",
      options: [
        "Solo se tratan los datos estrictamente necesarios y con la máxima protección desde el inicio",
        "Se habilitan todos los datos sin permiso del usuario",
        "Se descartan todos los datos sin excepción",
        "El usuario debe buscar cómo proteger sus datos",
        "La privacidad se ajusta sólo en la última etapa"
      ],
      answer: "Solo se tratan los datos estrictamente necesarios y con la máxima protección desde el inicio",
      justification:
        "Privacidad por defecto exige que, por defecto, los sistemas sólo recojan datos necesarios y los protejan al máximo sin que el usuario configure nada."
    },
    {
      question:
        "12. ¿Cuál es la diferencia clave entre la Primera y la Segunda Globalización?",
      options: [
        "La Primera fue colonial y marítima; la Segunda, tecnológica e informática",
        "La Primera fue exclusivamente económica; la Segunda sólo cultural",
        "La Primera ocurrió en el siglo XX; la Segunda en el siglo XV",
        "La Primera utilizó sólo camiones; la Segunda sólo barcos",
        "No hay diferencia, son exactamente iguales"
      ],
      answer: "La Primera fue colonial y marítima; la Segunda, tecnológica e informática",
      justification:
        "La Primera Globalización se caracteriza por el Imperio Español y rutas marítimas (siglos XV–XIX). La Segunda es posguerra fría, impulsada por TIC y liberalización."
    },
    {
      question:
        "13. ¿Qué evento marcó simbólicamente el inicio de la globalización contemporánea para muchos autores?",
      options: [
        "La caída del Muro de Berlín en 1989",
        "La invención de la rueda",
        "La independencia de Estados Unidos",
        "La publicación de “La Ilíada”",
        "El primer vuelo de los hermanos Wright"
      ],
      answer: "La caída del Muro de Berlín en 1989",
      justification:
        "Muchos simbolizan la globalización contemporánea con la caída del Muro de Berlín, fin de la Guerra Fría y apertura de economías."
    },
    {
      question:
        "14. ¿Cuál fue uno de los primeros ejemplos de navegación global en la Primera Globalización?",
      options: [
        "Galeón de Manila",
        "Titanic",
        "Galileo",
        "Transatlántico Queen Mary",
        "Viking Longship"
      ],
      answer: "Galeón de Manila",
      justification:
        "El Galeón de Manila unía Manila (Filipinas) con Acapulco (Nueva España), conectando Asia, América y Europa desde el siglo XVI."
    },
    {
      question:
        "15. ¿Cuál institución surgió en 1995 y se considera fundamental para la globalización económica?",
      options: [
        "Organización Mundial del Comercio (OMC)",
        "Unión Europea",
        "Banco Mundial",
        "UNESCO",
        "NATO"
      ],
      answer: "Organización Mundial del Comercio (OMC)",
      justification:
        "La OMC se creó en 1995, regulando el comercio internacional y promoviendo la liberalización económica global."
    },
    {
      question:
        "16. ¿Cuál de estas afirmaciones sobre la Agencia de Acceso a la Información Pública (AAIP) es CORRECTA?",
      options: [
        "Es la autoridad de aplicación de la Ley 25.326 en Argentina",
        "Se ocupa únicamente de estadísticas",
        "Es una dependencia del Banco Central",
        "Se funda en 2015 en Brasil",
        "Fue creada por la UNESCO"
      ],
      answer: "Es la autoridad de aplicación de la Ley 25.326 en Argentina",
      justification:
        "La AAIP, a través de su Dirección Nacional de Protección de Datos Personales, controla el cumplimiento de la Ley 25.326."
    },
    {
      question:
        "17. ¿Cuál de estas NO es una organización internacional que influye en la gobernanza global?",
      options: [
        "Fundación de Apoyo a la Monarquía Andina",
        "ONG internacionales",
        "Organismos intergubernamentales (ONU, OMC)",
        "Red Iberoamericana de Protección de Datos",
        "Movimientos sociales transnacionales"
      ],
      answer: "Fundación de Apoyo a la Monarquía Andina",
      justification:
        "La “Fundación de Apoyo a la Monarquía Andina” es ficticia; las demás existen como actores en la gobernanza global."
    },
    {
      question:
        "18. ¿Qué significa la “autodisolución de la URSS” en 1991 para la globalización?",
      options: [
        "El fin simbólico de la Guerra Fría y apertura de nuevos mercados",
        "La formación del Imperio Ruso",
        "El inicio de la Primera Guerra Mundial",
        "La conquista de la Luna",
        "El triunfo del comunismo mundial"
      ],
      answer: "El fin simbólico de la Guerra Fría y apertura de nuevos mercados",
      justification:
        "La disolución de la URSS marcó el fin del bloque comunista, generando mayor liberalización económica y cultural."
    },
    {
      question:
        "19. ¿Cuál de estos NO es un efecto económico asociado a la globalización?",
      options: [
        "Reducción de barreras arancelarias",
        "Aumento de desigualdad en ciertos sectores",
        "Libertad de movimiento de capitales",
        "Aislamiento total de economías nacionales",
        "Expansión de mercados financieros transnacionales"
      ],
      answer: "Aislamiento total de economías nacionales",
      justification:
        "La globalización busca integración, no aislamiento; las demás opciones son efectos reales de la globalización económica."
    },
    {
      question:
        "20. ¿Qué característica NO describe a la “gobernanza multinivel”?",
      options: [
        "Interacción entre autoridades nacionales e internacionales",
        "Múltiples niveles de autoridad que cooperan",
        "Sólo existe un único nivel de gobierno centralizado",
        "Promueve la colaboración entre distintos niveles",
        "Es parte del estudio de la globalización política"
      ],
      answer: "Sólo existe un único nivel de gobierno centralizado",
      justification:
        "La gobernanza multinivel implica múltiples niveles de autoridad; la afirmación de un único nivel es incorrecta."
    }
  ]
};

export default function QuizGIC() {
  // 1) Estado inicial de 'section' VACÍO:
  const [section, setSection] = useState("");
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  // Si section === "" entonces la variable questions es indefinida; chequeamos más abajo
  const questions = section ? sections[section] : [];
  const currentQuestion = questions[current];

  const handleAnswer = (option) => {
    const correct = option === currentQuestion.answer;
    if (correct) setScore((s) => s + 1);
    setAnswers((arr) => [
      ...arr,
      {
        question: currentQuestion.question,
        selected: option,
        correct,
        justification: currentQuestion.justification
      }
    ]);
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
    }
  };

  const resetQuiz = () => {
    setCurrent(0);
    setScore(0);
    setAnswers([]);
  };

  return (
    <main className="min-h-screen bg-black text-gray-100 p-6 font-sans">
      <div className="max-w-3xl mx-auto bg-[#111] p-6 rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-gray-100 mb-4">Quiz GIC</h1>

        {/* ─────────────────────────────────────────────────────── */}
        {/* 2) Menú de botones siempre visible, incluso si section=="" */}
        <div className="flex justify-center gap-4 mb-6">
          {Object.keys(sections).map((key) => (
            <button
              key={key}
              onClick={() => {
                setSection(key);   // selecciona la sección
                resetQuiz();       // reinicia preguntas/puntaje
              }}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                section === key
                  ? "bg-gray-200 text-black"
                  : "bg-white text-black hover:bg-gray-300"
              }`}
            >
              {key}
            </button>
          ))}
        </div>
        {/* ─────────────────────────────────────────────────────── */}

        {/* 3) Si aún no se seleccionó ninguna sección, NO mostramos preguntas ni resultados */}
        {section === "" ? (
          <div className="text-center text-gray-400">
            <p>Seleccioná una de las tres opciones para comenzar el quiz.</p>
          </div>
        ) : (
          // ─────────────────────────────────────────────────────────
          // 4) Aquí va TODO el bloque que ya tenías de preguntas + resultado
          //    (solo se renderiza si 'section' NO está vacío)
          // ─────────────────────────────────────────────────────────
          <>
            {current < questions.length ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6"
                >
                  <h2 className="text-xl mb-4 text-gray-300">
                    {currentQuestion.question}
                  </h2>
                  <div className="space-y-4">
                    {currentQuestion.options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(opt)}
                        className="block w-full text-left px-5 py-3 bg-gray-800 text-gray-100 hover:bg-white hover:text-black transition-colors duration-300 rounded-xl shadow-md"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  <p className="text-sm text-right text-gray-400 mt-4">
                    Pregunta {current + 1} de {questions.length}
                  </p>
                </motion.div>
              </AnimatePresence>
            ) : (
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Resultado Final
                </h2>
                <p className="mb-2">
                  Puntaje: {score} / {questions.length}
                </p>
                <p className="mb-6">
                  {score >= questions.length * 0.7
                    ? "¡Promocionado!"
                    : score >= questions.length * 0.4
                    ? "¡Aprobado!"
                    : "No aprobado. Volvé a intentar."}
                </p>
                <div className="text-left space-y-4">
                  {answers.map((ans, i) => (
                    <div
                      key={i}
                      className={`p-4 rounded-xl ${
                        ans.correct ? "bg-green-800" : "bg-red-800"
                      }`}
                    >
                      <p className="font-semibold text-white">
                        {ans.question}
                      </p>
                      <p className="text-sm">Tu respuesta: {ans.selected}</p>
                      <p className="text-sm">
                        Correcta: {questions[i].answer}
                      </p>
                      <p className="text-xs text-gray-300 mt-1 italic">
                        💡 Justificación: {ans.justification}
                      </p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={resetQuiz}
                  className="mt-6 bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
                >
                  Reintentar
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
