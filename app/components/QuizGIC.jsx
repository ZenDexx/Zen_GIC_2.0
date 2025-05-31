// app/components/QuizGIC.jsx
"use client";

import { useState } from "react";

const sections = {
  "Verdadero o Falso": [
    {
      question:
        "1. La globalización cultural promueve la desaparición progresiva de todas las lenguas autóctonas.",
      options: ["Verdadero", "Falso"],
      answer: "Falso",
      justification:
        "Aunque la globalización puede amenazar lenguas pequeñas, muchas se preservan mediante políticas culturales y resistencia local."
    },
    {
      question:
        "2. La Primera Globalización se inició a finales del siglo XV con el Imperio Español y la navegación mundial.",
      options: ["Verdadero", "Falso"],
      answer: "Verdadero",
      justification:
        "La Primera Globalización abarca desde el Descubrimiento de América (1492) hasta el siglo XIX, cuando el Imperio Español conectó continentes."
    },
    {
      question:
        "3. El Consenso de Washington (1989) definió políticas básicas del neoliberalismo en economías latinoamericanas.",
      options: ["Verdadero", "Falso"],
      answer: "Verdadero",
      justification:
        "El Consenso de Washington estableció diez recomendaciones económicas (disciplina fiscal, liberalización, etc.) que influyeron en Latinoamérica."
    },
    {
      question:
        "4. La caída del Muro de Berlín en 1989 marcó simbólicamente el fin de la Segunda Globalización.",
      options: ["Verdadero", "Falso"],
      answer: "Falso",
      justification:
        "La caída del Muro simboliza el fin de la Guerra Fría, pero la Segunda Globalización continúa hasta hoy con la revolución tecnológica."
    },
    {
      question:
        "5. La globalización política implica la disminución del Estado-nación y el ascenso de actores internacionales como ONG.",
      options: ["Verdadero", "Falso"],
      answer: "Verdadero",
      justification:
        "Con la globalización política, el Estado-nación comparte poder con organismos multilaterales y ONG transnacionales."
    },
    {
      question:
        "6. La globalización económica contemporánea consiste únicamente en intercambio de bienes, sin incluir tecnología ni servicios.",
      options: ["Verdadero", "Falso"],
      answer: "Falso",
      justification:
        "La globalización económica incluye flujos de bienes, servicios, capital, tecnología e información."
    },
    {
      question:
        "7. Las crisis asiática (1997) y rusa (1998) se conocen como “efecto Dragón” y “efecto Vodka” respectivamente.",
      options: ["Verdadero", "Falso"],
      answer: "Verdadero",
      justification:
        "La crisis asiática fue llamada “efecto Dragón” y la rusa de 1998 “efecto Vodka” por su impacto financiero global."
    },
    {
      question:
        "8. El RGPD europeo protege tanto a personas físicas como a personas jurídicas.",
      options: ["Verdadero", "Falso"],
      answer: "Falso",
      justification:
        "El RGPD protege datos de personas físicas; las personas jurídicas tienen otras protecciones legales diferentes."
    },
    {
      question:
        "9. En Argentina, la Ley 25.326 (Protección de Datos Personales) fue sancionada en el año 2000 y es pionera en la región.",
      options: ["Verdadero", "Falso"],
      answer: "Verdadero",
      justification:
        "La Ley 25.326 de 2000 fue una de las primeras en Latinoamérica en crear un marco regulatorio fuerte para protección de datos."
    },
    {
      question:
        "10. Según la Ley 25.326, los datos estadísticos disociados de identidad están exentos del régimen de protección.",
      options: ["Verdadero", "Falso"],
      answer: "Verdadero",
      justification:
        "La ley excluye de su aplicación a bases de datos con fines estadísticos siempre que los datos estén anonimizados."
    },
    {
      question:
        "11. El consentimiento para el tratamiento de datos personales puede ser tácito si el usuario no se opone.",
      options: ["Verdadero", "Falso"],
      answer: "Falso",
      justification:
        "La Ley 25.326 exige que el consentimiento sea libre, expreso e informado; no admite consentimiento tácito."
    },
    {
      question:
        "12. La identidad digital se construye con la huella digital y la reputación digital, según la clase de Datos Personales.",
      options: ["Verdadero", "Falso"],
      answer: "Verdadero",
      justification:
        "La identidad digital abarca la huella digital (rastros en línea) y la reputación digital (información compartida voluntariamente)."
    },
    {
      question:
        "13. El Delegado de Protección de Datos (DPO) es obligatorio para todas las empresas argentinas, sin importar su tamaño.",
      options: ["Verdadero", "Falso"],
      answer: "Falso",
      justification:
        "El DPO es obligatorio en organismos públicos y en tratamientos de datos masivos o sensibles, no en toda empresa automáticamente."
    },
    {
      question:
        "14. La evaluación de impacto en protección de datos es obligatoria siempre que exista alto riesgo a derechos fundamentales.",
      options: ["Verdadero", "Falso"],
      answer: "Verdadero",
      justification:
        "Cuando un tratamiento de datos implica alto riesgo (por sensibilidad, volumen, contexto), se requiere la evaluación de impacto."
    },
    {
      question:
        "15. La Ley 25.326 protege datos de personas humanas y de personas jurídicas por igual.",
      options: ["Verdadero", "Falso"],
      answer: "Falso",
      justification:
        "La Ley protege únicamente datos de personas físicas; las personas jurídicas tienen protección por confidencialidad comercial."
    },
    {
      question:
        "16. “Privacidad por diseño” significa incorporar protección de datos desde la fase conceptual de un sistema.",
      options: ["Verdadero", "Falso"],
      answer: "Verdadero",
      justification:
        "Privacidad por diseño implica integrar la protección desde el inicio, no agregarla como parche al final."
    },
    {
      question:
        "17. El uso de cookies para rastrear usuarios en Argentina queda fuera de la aplicación extraterritorial de la Ley 25.326.",
      options: ["Verdadero", "Falso"],
      answer: "Falso",
      justification:
        "La ley aplica a responsables fuera de Argentina que monitorean comportamientos de usuarios argentinos, incluyendo cookies."
    },
    {
      question:
        "18. La globalización actual depende únicamente de factores económicos y excluye tecnología y cultura.",
      options: ["Verdadero", "Falso"],
      answer: "Falso",
      justification:
        "La globalización actual es multidimensional: incluye economía, política, tecnología, cultura y comunicación."
    },
    {
      question:
        "19. El “Galeón de Manila” conectó Asia, América y Europa durante la Primera Globalización.",
      options: ["Verdadero", "Falso"],
      answer: "Verdadero",
      justification:
        "El Galeón de Manila unía Manila (Filipinas) con Acapulco (Nueva España), conectando Asia, América y Europa."
    },
    {
      question:
        "20. La crisis mexicana 1994/95 (efecto Tequila) no tuvo impacto global porque solo afectó al mercado interno.",
      options: ["Verdadero", "Falso"],
      answer: "Falso",
      justification:
        "El “efecto Tequila” se propagó a otros mercados emergentes y afectó flujos de capital en América Latina."
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
        "La Primera Globalización se impulsó por el descubrimiento de América y la expansión española, no por la Revolución Industrial."
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
        "Favorece la interdependencia de mercados financieros",
        "Impulsa la liberalización del comercio"
      ],
      answer: "Sincroniza automáticamente políticas fiscales de todos los países",
      justification:
        "La globalización económica no sincroniza políticas fiscales: cada país mantiene sus propias decisiones fiscales."
    },
    {
      question:
        "4. Respecto a la globalización política, ¿cuál oración es ERRÓNEA?",
      options: [
        "Reduce la relevancia exclusiva del Estado‐nación",
        "Impulsa la gobernanza multinivel",
        "Establece que todos los países adoptan la misma constitución",
        "Eleva el papel de las ONG internacionales",
        "Promueve la creación de asociaciones intergubernamentales"
      ],
      answer: "Establece que todos los países adoptan la misma constitución",
      justification:
        "La globalización política no obliga a países a tener una misma constitución; promueve redes multilaterales y ONG."
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
        "El Imperio Español fue protagonista de la Primera Globalización, no de la Segunda (que inicia en la posguerra fría)."
    },
    {
      question:
        "6. Sobre la Ley 25.326 de Argentina, ¿cuál de las afirmaciones es INCORRECTA?",
      options: [
        "Protege datos en archivos públicos y privados",
        "Excluye datos de uso interno, personal o doméstico",
        "Aplica únicamente a datos biométricos",
        "Garantiza el derecho al honor y la intimidad",
        "Establece el consentimiento libre, expreso e informado"
      ],
      answer: "Aplica únicamente a datos biométricos",
      justification:
        "La Ley 25.326 protege toda clase de datos personales, no solo los biométricos; los datos sensibles requieren mayor cuidado."
    },
    {
      question:
        "7. ¿Cuál de los siguientes NO es un derecho de los titulares en la Ley 25.326?",
      options: [
        "Derecho de acceso",
        "Derecho de portabilidad",
        "Derecho de rectificación",
        "Derecho de supresión",
        "Derecho de confidencialidad"
      ],
      answer: "Derecho de portabilidad",
      justification:
        "El derecho de portabilidad se incorporó en la propuesta de modificación actual, no estaba en la Ley original (aparece en el RGPD)."
    },
    {
      question:
        "8. En protección de datos, ¿qué afirmación es FALSA respecto al DPO?",
      options: [
        "Es obligatorio en organismos públicos",
        "Debe ser independiente al responsable del tratamiento",
        "Solo es necesario en tratamientos de gran volumen",
        "Nunca puede ser un empleado de la organización",
        "Supervisa el cumplimiento normativo"
      ],
      answer: "Nunca puede ser un empleado de la organización",
      justification:
        "El DPO puede ser interno o externo, siempre que actúe con independencia y sin conflicto de intereses."
    },
    {
      question:
        "9. ¿Cuál elemento NO forma parte de “privacidad por diseño”?",
      options: [
        "Incluir la protección desde la fase conceptual",
        "Tratar solo datos estrictamente necesarios",
        "Añadirla como parche al final del desarrollo",
        "Documentar medidas de seguridad desde el inicio",
        "Integrar controles de acceso temprano"
      ],
      answer: "Añadirla como parche al final del desarrollo",
      justification:
        "Privacidad por diseño exige integrar la protección desde la concepción, no al final."
    },
    {
      question:
        "10. Respecto a la identidad digital, ¿qué es incorrecto?",
      options: [
        "La huella digital es el rastro de datos en línea",
        "La reputación digital es la información que compartimos",
        "Solo incluye datos de redes sociales",
        "Forma parte de nuestra identidad en internet",
        "Incluye datos recopilados por empresas digitales"
      ],
      answer: "Solo incluye datos de redes sociales",
      justification:
        "La identidad digital abarca huella y reputación, incluidos datos de cookies, transacciones y búsquedas, no solo redes sociales."
    },
    {
      question:
        "11. Sobre la aplicación extraterritorial de la Ley 25.326, ¿qué es INCORRECTO?",
      options: [
        "Aplica a responsables fuera de Argentina que ofrecen servicios a argentinos",
        "Incluye entidades que monitorean comportamientos de usuarios en Argentina",
        "No aplica a empresas sin presencia física en Argentina",
        "Obliga a empresas internacionales a cumplir la ley",
        "Se relaciona con cookies y geolocalización"
      ],
      answer: "No aplica a empresas sin presencia física en Argentina",
      justification:
        "La ley sí aplica a entidades sin presencia física que ofrecen servicios o monitorean a usuarios argentinos."
    },
    {
      question:
        "12. ¿Cuál de estos NO es antecedente histórico de la globalización?",
      options: [
        "Conquista de América (1492)",
        "Primera transmisión mundial vía satélite (1969)",
        "Autodisolución de la URSS (1991)",
        "Invención del código Morse (1837)",
        "Explosión de la bomba atómica (1945)"
      ],
      answer: "Invención del código Morse (1837)",
      justification:
        "Aunque el código Morse mejoró comunicaciones, no se menciona como antecedente directo de globalización; los otros sí aparecen."
    },
    {
      question:
        "13. En ONG y filantropía global, ¿qué es ERRÓNEO?",
      options: [
        "ONG influyen en políticas públicas transnacionales",
        "Flujos filantrópicos superaron 59.000 M USD en 2010",
        "Las filantrópicas no pueden operar fuera de su país",
        "El Instituto Hudson estimó esos flujos en 2010",
        "La ayuda humanitaria es parte de la globalización"
      ],
      answer: "Las filantrópicas no pueden operar fuera de su país",
      justification:
        "Muchas ONG y fundaciones filantrópicas operan internacionalmente; no están limitadas a su país de origen."
    },
    {
      question:
        "14. ¿Cuál de los siguientes no es un principio de la Ley 25.326?",
      options: [
        "Finalidad",
        "Consentimiento",
        "Ejecución automática de decisiones",
        "Acceso",
        "Calidad de los datos"
      ],
      answer: "Ejecución automática de decisiones",
      justification:
        "La Ley 25.326 no contempla la ejecución automática de decisiones como principio; ese concepto está en derechos digitales modernos."
    },
    {
      question:
        "15. ¿Qué aspecto no está en la globalización cultural?",
      options: [
        "Transmisión de ideas y valores",
        "Consumo común de cultura por internet",
        "Exportación exclusiva de productos agrícolas",
        "Intercambio de medios culturales populares",
        "Formación de normas y conocimientos compartidos"
      ],
      answer: "Exportación exclusiva de productos agrícolas",
      justification:
        "La globalización cultural va más allá de productos, incluye ideas, valores, medios y normas."
    },
    {
      question:
        "16. Sobre las crisis económicas globales, identifique la afirmación incorrecta:",
      options: [
        "La crisis mexicana 1994/95 fue “efecto Tequila”",
        "La crisis asiática 1997/98 fue “efecto Dragón”",
        "La crisis rusa 1998 fue “efecto Vodka”",
        "La crisis de 2008 no impactó economías emergentes",
        "La crisis argentina 2001/02 fue “efecto Tango”"
      ],
      answer: "La crisis de 2008 no impactó economías emergentes",
      justification:
        "La crisis de 2008 sí afectó economías emergentes; no se limitó a mercados desarrollados."
    },
    {
      question:
        "17. ¿Cuál de estas NO es dimensión de la globalización?",
      options: ["Económica", "Política", "Cultural", "Galáctica", "Tecnológica"],
      answer: "Galáctica",
      justification:
        "No existe la “globalización galáctica”; las principales dimensiones son económica, política y cultural (y tecnológica)."
    },
    {
      question:
        "18. Respecto a Big Data en globalización, ¿cuál es FALSA?",
      options: [
        "Impulsa la IA",
        "Permite decisiones en tiempo real",
        "No presenta riesgos de privacidad",
        "Aumenta eficiencia productiva",
        "Genera valor en cadenas internacionales"
      ],
      answer: "No presenta riesgos de privacidad",
      justification:
        "Big Data sí implica riesgos de privacidad y seguridad; no está exento de ellos."
    },
    {
      question:
        "19. ¿Qué NO forma parte de las “recomendaciones UNESCO sobre IA y ética”?",
      options: [
        "Principio de transparencia",
        "Respeto a la autonomía humana",
        "Promoción de sesgos algorítmicos",
        "Protección de la privacidad",
        "Responsabilidad en decisiones automatizadas"
      ],
      answer: "Promoción de sesgos algorítmicos",
      justification:
        "La UNESCO busca eliminar sesgos algorítmicos, no promoverlos; los demás puntos sí forman parte de sus recomendaciones."
    },
    {
      question:
        "20. ¿Cuál afirmación es correcta sobre regulación de datos en Argentina y el RGPD?",
      options: [
        "La Ley 25.326 se alinea completamente con el RGPD",
        "El RGPD protege datos de personas jurídicas, a diferencia de Argentina",
        "La ley argentina no considera datos biométricos como sensibles",
        "El proyecto de modificación introduce portabilidad y revisión humana",
        "La Ley 25.326 solo aplica a bases públicas"
      ],
      answer: "El proyecto de modificación introduce portabilidad y revisión humana",
      justification:
        "El proyecto incorpora derechos digitales como portabilidad y revisión humana; la Ley original no los tenía."
    }
  ],

  "Preguntas Comunes": [
    {
      question:
        "1. ¿Cuál es la definición de globalización según el Diccionario de la Real Academia?",
      options: [
        "Tendencia de los mercados y empresas a alcanzar dimensión mundial",
        "Proceso exclusivo de expansión militar",
        "Fusión de todos los países en uno solo",
        "Sistema de intercambio de solo bienes agrícolas",
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
        "3. ¿Cuál de estos NO es antecedente histórico de la globalización según el material?",
      options: [
        "Descubrimiento de América en 1492",
        "Llegada del hombre a la Luna en 1969",
        "Caída del Muro de Berlín en 1989",
        "Primera transmisión mundial vía satélite en 1969",
        "Invención de la imprenta en el siglo XV"
      ],
      answer: "Invención de la imprenta en el siglo XV",
      justification:
        "Aunque la imprenta es relevante, el PDF no la menciona como antecedente directo de la globalización moderna."
    },
    {
      question:
        "4. ¿Qué es la globalización cultural según el PDF analizado?",
      options: [
        "La transmisión de ideas, significados y valores a escala mundial",
        "Intercambio exclusivo de productos agrícolas",
        "Uniformidad total de culturas sin diferencias",
        "Fin de todas las tradiciones locales",
        "Desaparición de internet"
      ],
      answer: "La transmisión de ideas, significados y valores a escala mundial",
      justification:
        "La globalización cultural implica intercambio y difusión de ideas, valores y significados, no la desaparición total de culturas."
    },
    {
      question:
        "5. ¿Cuál es uno de los principios de la Ley 25.326 de Protección de Datos Personales?",
      options: [
        "Consentimiento libre, expreso e informado",
        "Consentimiento tácito",
        "Obligatoriedad de compartir datos con terceros",
        "Prohibición del derecho de rectificación",
        "Acceso a datos solo mediante pago"
      ],
      answer: "Consentimiento libre, expreso e informado",
      justification:
        "La ley exige que el titular otorgue consentimiento libre, expreso e informado; no admite consentimiento tácito."
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
        "La ley no se aplica a datos utilizados solo de manera interna, personal o doméstica; los demás quedan incluidos."
    },
    {
      question:
        "8. ¿Qué dato se considera “sensible” según la clase de Protección de Datos?",
      options: [
        "Información sobre salud o genética",
        "Nombre y apellido",
        "Ciudad de residencia",
        "Género musical favorito",
        "Color favorito"
      ],
      answer: "Información sobre salud o genética",
      justification:
        "Los datos sensibles incluyen información genética, biométrica o que revele aspectos de salud; los demás no."
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
        "La huella digital es el rastro que dejamos en línea al interactuar con servicios digitales; no es solo reputación."
    },
    {
      question:
        "10. ¿Qué derecho nuevo introduce el proyecto de modificación de la Ley 25.326?",
      options: [
        "Portabilidad de datos",
        "Recibir publicidad no deseada",
        "Eliminar datos sin justificación",
        "Transferencia automática a bases internacionales",
        "Captura biométrica obligatoria"
      ],
      answer: "Portabilidad de datos",
      justification:
        "El proyecto incorpora el derecho a la portabilidad: permite al titular solicitar datos en formato legible por máquina."
    },
    {
      question:
        "11. ¿Qué significa “privacidad por defecto”?",
      options: [
        "Solo se tratan datos estrictamente necesarios y con máxima protección por defecto",
        "Se habilitan todos los datos sin permiso",
        "Se descartan todos los datos sin excepción",
        "El usuario debe configurar su privacidad manualmente",
        "La privacidad se ajusta al final del desarrollo"
      ],
      answer: "Solo se tratan datos estrictamente necesarios y con máxima protección por defecto",
      justification:
        "Privacidad por defecto exige que, por defecto, el nivel de protección sea alto y solo se recojan datos mínimos."
    },
    {
      question:
        "12. ¿Cuál es la diferencia clave entre la Primera y la Segunda Globalización?",
      options: [
        "La Primera fue colonial y marítima; la Segunda, tecnológica e informática",
        "La Primera fue económica; la Segunda, cultural",
        "La Primera sucedió en el siglo XX; la Segunda en el siglo XV",
        "La Primera usó solo camiones; la Segunda, solo barcos",
        "No hay diferencia, son iguales"
      ],
      answer: "La Primera fue colonial y marítima; la Segunda, tecnológica e informática",
      justification:
        "La Primera Globalización (siglos XV–XIX) se basó en imperios y rutas marítimas; la Segunda (pos Guerra Fría) se apoya en TIC."
    },
    {
      question:
        "13. ¿Qué evento marcó simbólicamente el inicio de la globalización contemporánea?",
      options: [
        "La caída del Muro de Berlín en 1989",
        "La invención de la rueda",
        "La independencia de EE.UU.",
        "La publicación de “La Ilíada”",
        "El primer vuelo de los hermanos Wright"
      ],
      answer: "La caída del Muro de Berlín en 1989",
      justification:
        "Muchos simbolizan la globalización contemporánea con la caída del Muro, fin de la Guerra Fría y apertura de mercados."
    },
    {
      question:
        "14. ¿Cuál fue uno de los primeros ejemplos de navegación global en la Primera Globalización?",
      options: [
        "Galeón de Manila",
        "Titanic",
        "Galileo",
        "Queen Mary",
        "Barco vikingo"
      ],
      answer: "Galeón de Manila",
      justification:
        "El Galeón de Manila unía Manila (Filipinas) con Acapulco (Nueva España) desde el siglo XVI, conectando tres continentes."
    },
    {
      question:
        "15. ¿Qué institución surgió en 1995 y es clave para la globalización económica?",
      options: [
        "Organización Mundial del Comercio (OMC)",
        "Unión Europea",
        "Banco Mundial",
        "UNESCO",
        "NATO"
      ],
      answer: "Organización Mundial del Comercio (OMC)",
      justification:
        "La OMC se creó en 1995 para regular el comercio internacional y fomentar la liberalización económica global."
    },
    {
      question:
        "16. ¿Cuál afirmación sobre la AAIP es CORRECTA?",
      options: [
        "Es la autoridad de aplicación de la Ley 25.326 en Argentina",
        "Solo maneja estadísticas",
        "Depende del Banco Central",
        "Se fundó en 2015 en Brasil",
        "La creó la UNESCO"
      ],
      answer: "Es la autoridad de aplicación de la Ley 25.326 en Argentina",
      justification:
        "La AAIP, a través de su Dirección Nacional de Protección de Datos Personales, gestiona la aplicación de la ley en Argentina."
    },
    {
      question:
        "17. ¿Cuál NO es una organización que influye en la gobernanza global?",
      options: [
        "Fundación de Apoyo a la Monarquía Andina",
        "ONG internacionales",
        "Organismos intergubernamentales (ONU, OMC)",
        "Red Iberoamericana de Protección de Datos",
        "Movimientos sociales transnacionales"
      ],
      answer: "Fundación de Apoyo a la Monarquía Andina",
      justification:
        "La “Fundación de Apoyo a la Monarquía Andina” es ficticia; las demás existen como actores en gobernanza global."
    },
    {
      question:
        "18. ¿Qué implica la “autodisolución de la URSS” en 1991 para la globalización?",
      options: [
        "Fin simbólico de la Guerra Fría y apertura de nuevos mercados",
        "Formación del Imperio Ruso",
        "Inicio de la Primera Guerra Mundial",
        "Conquista de la Luna",
        "Triunfo del comunismo mundial"
      ],
      answer: "Fin simbólico de la Guerra Fría y apertura de nuevos mercados",
      justification:
        "La disolución de la URSS marcó el fin del bloque comunista, facilitando mayor liberalización económica y cultural."
    },
    {
      question:
        "19. ¿Cuál NO es un efecto económico asociado a la globalización?",
      options: [
        "Reducción de barreras arancelarias",
        "Aumento de desigualdad en ciertos sectores",
        "Libertad de movimiento de capitales",
        "Aislamiento total de economías nacionales",
        "Expansión de mercados financieros transnacionales"
      ],
      answer: "Aislamiento total de economías nacionales",
      justification:
        "La globalización busca integración, no aislamiento; las demás son efectos reales de la globalización económica."
    },
    {
      question:
        "20. ¿Qué característica NO describe a la “gobernanza multinivel”?",
      options: [
        "Interacción entre autoridades nacionales e internacionales",
        "Múltiples niveles de autoridad que cooperan",
        "Solo existe un único nivel de gobierno centralizado",
        "Promueve colaboración entre distintos niveles",
        "Es parte de la globalización política"
      ],
      answer: "Solo existe un único nivel de gobierno centralizado",
      justification:
        "La gobernanza multinivel implica múltiples niveles de autoridad trabajando juntos; el enunciado de un nivel único es incorrecto."
    }
  ]
};

export default function QuizGIC() {
  const [section, setSection] = useState(""); // “Verdadero o Falso”, “Preguntas Trampa” o “Preguntas Comunes”
  const [current, setCurrent] = useState(0);   // Índice de la pregunta actual
  const [score, setScore] = useState(0);       // Puntaje acumulado
  const [answers, setAnswers] = useState([]);  // Para almacenar respuestas + justificaciones
  const [selectedOption, setSelectedOption] = useState(""); // Opción elegida
  const [showFeedback, setShowFeedback] = useState(false);  // Control para mostrar feedback

  // Si no hay sección seleccionada, evitamos Crash: questions = []
  const questions = section ? sections[section] : [];
  const currentQuestion = questions[current];

  // Cuando el usuario elige una opción
  const handleAnswer = (opt) => {
    if (showFeedback) return; // evita múltiples clics sin avanzar

    setSelectedOption(opt);
    setShowFeedback(true);

    const correct = opt === currentQuestion.answer;
    if (correct) {
      setScore((s) => s + 1);
    }

    // Registramos en answers para poder mostrar al final
    setAnswers((arr) => [
      ...arr,
      {
        question: currentQuestion.question,
        selected: opt,
        correct,
        justification: currentQuestion.justification
      }
    ]);
  };

  // Avanzar a la siguiente pregunta
  const handleNext = () => {
    setShowFeedback(false);
    setSelectedOption("");

    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
    } else {
      // Si era la última pregunta, current → questions.length → mostrará resultado final
      setCurrent((c) => c + 1);
    }
  };

  // Reiniciar todo y regresar al menú
  const resetQuiz = () => {
    setSection("");
    setCurrent(0);
    setScore(0);
    setAnswers([]);
    setSelectedOption("");
    setShowFeedback(false);
  };

  return (
    <main className="min-h-screen bg-black text-white p-6 font-sans">
      <div className="max-w-3xl mx-auto bg-black border border-gray-800 p-6 rounded-2xl shadow-xl">
        {/* ────────────────────────────────────────────── */}
        {/* ENCABEZADO */}
        <h1 className="text-3xl font-bold text-center mb-6">Quiz GIC</h1>

        {/* ────────────────────────────────────────────── */}
        {/* MENÚ DE SECCIONES */}
        <div className="flex justify-center gap-3 mb-6">
          {Object.keys(sections).map((key) => (
            <button
              key={key}
              onClick={() => {
                setSection(key);
                setCurrent(0);
                setScore(0);
                setAnswers([]);
                setSelectedOption("");
                setShowFeedback(false);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                section === key
                  ? "bg-gray-700 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {key}
            </button>
          ))}
        </div>

        {/* ────────────────────────────────────────────── */}
        {/* PANTALLA INICIAL (sin sección seleccionada) */}
        {section === "" ? (
          <div className="text-center text-gray-400">
            <p>Seleccioná una categoría para comenzar el Quiz</p>
          </div>
        ) : (
          <>
            {/* ────────────────────────────────────────────── */}
            {/* PREGUNTA VISIBLE mientras current < questions.length */}
            {current < questions.length ? (
              <div className="space-y-6">
                {/* CABECERA DE PREGUNTA (Número + Score) */}
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>
                    Pregunta {current + 1} de {questions.length}
                  </span>
                  <span>
                    Puntuación: {score} / {questions.length}
                  </span>
                </div>

                {/* BARRA DE PROGRESO */}
                <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-400"
                    style={{
                      width: `${((current + 1) / questions.length) * 100}%`
                    }}
                  ></div>
                </div>

                {/* TEXTO DE LA PREGUNTA */}
                <h2 className="text-lg font-medium">{currentQuestion.question}</h2>

                {/* OPCIONES */}
                <div className="flex flex-col gap-3">
                  {currentQuestion.options.map((opt, idx) => {
                    // Definimos clases base
                    let baseClass =
                      "flex items-center w-full border-2 rounded-lg px-4 py-3 transition-colors duration-200 ";

                    if (!showFeedback) {
                      // Antes de responder: fondo negro, borde gris oscuro, texto gris claro
                      baseClass +=
                        "bg-black border-gray-700 text-gray-300 hover:bg-gray-800";
                    } else {
                      // Después de responder: coloreamos según si es correcta/incorreta
                      if (opt === currentQuestion.answer) {
                        // Opción correcta: borde y texto neón verde
                        baseClass +=
                          "bg-black border-green-400 text-green-400";
                      } else if (opt === selectedOption) {
                        // Opción elegida incorrecta: neón rojo
                        baseClass += "bg-black border-red-400 text-red-400";
                      } else {
                        // Resto de opciones tras responder: opacidad reducida
                        baseClass +=
                          "bg-black border-gray-700 text-gray-500 opacity-60";
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(opt)}
                        className={baseClass}
                        disabled={showFeedback}
                      >
                        {/* “Indicador” tipo radio: círculo que se ilumina */}
                        <span
                          className={`mr-3 flex-shrink-0 h-5 w-5 rounded-full border-2 ${
                            !showFeedback
                              ? "border-gray-600"
                              : opt === currentQuestion.answer
                              ? "border-green-400 bg-green-400"
                              : opt === selectedOption
                              ? "border-red-400 bg-red-400"
                              : "border-gray-600 bg-black"
                          }`}
                        ></span>
                        <span className="text-left">{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {/* JUSTIFICACIÓN + BOTÓN “Continuar” */}
                {showFeedback && (
                  <div className="mt-4 bg-gray-900 p-4 rounded-lg space-y-4">
                    <p className="text-sm italic text-gray-300">
                      💡 {currentQuestion.justification}
                    </p>
                    <button
                      onClick={handleNext}
                      className="w-full bg-gray-300 text-gray-900 font-medium py-2 rounded-lg hover:bg-gray-200 transition"
                    >
                      Continuar
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* ────────────────────────────────────────────── */
              /* PANTALLA DE RESULTADO FINAL (cuando current === questions.length) */
              <div className="space-y-6">
                {/* TARJETA DE RESULTADOS */}
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 space-y-4">
                  <h2 className="text-2xl font-semibold">Resultados Finales</h2>
                  <p className="text-xl font-bold">
                    Nota:{" "}
                    <span className="text-green-400">
                      {((score / questions.length) * 10).toFixed(1)}
                    </span>{" "}
                    / 10
                  </p>

                  <p className="text-gray-400">
                    {score >= questions.length * 0.7
                      ? "¡Promocionado!"
                      : score >= questions.length * 0.4
                      ? "¡Aprobado!"
                      : "No aprobado. Volvé a intentar."}
                  </p>

                  {/* BARRA DE PROGRESO FINAL */}
                  <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-400"
                      style={{
                        width: `${(score / questions.length) * 100}%`
                      }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500">
                    Respuestas correctas: {score} de {questions.length} | Nota
                    mínima para aprobar: 7.0
                  </p>
                </div>

                {/* LISTADO DETALLADO DE CADA RESPUESTA */}
                <div className="flex flex-col gap-4">
                  {answers.map((ans, i) => (
                    <div
                      key={i}
                      className={`p-4 border-2 rounded-lg ${
                        ans.correct
                          ? "bg-black border-green-400 text-green-400"
                          : "bg-black border-red-400 text-red-400"
                      }`}
                    >
                      <p className="font-medium">{i + 1}. {ans.question}</p>
                      <p className="mt-1 text-sm">
                        Tu respuesta:{" "}
                        <span className={`${ans.correct ? "text-green-400" : "text-red-400"}`}>
                          {ans.selected}{" "}
                          {ans.correct ? "(Correcta)" : "(Incorrecta)"}
                        </span>
                      </p>
                      {!ans.correct && (
                        <p className="mt-1 text-sm text-green-400">
                          Respuesta correcta: {questions[i].answer}
                        </p>
                      )}
                      <p className="mt-1 text-xs italic text-gray-300">
                        💡 Justificación: {ans.justification}
                      </p>
                    </div>
                  ))}
                </div>

                {/* BOTÓN “Volver al menú” */}
                <button
                  onClick={resetQuiz}
                  className="w-full bg-green-400 text-black font-medium py-2 rounded-lg hover:bg-green-300 transition"
                >
                  Volver al menú
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}

