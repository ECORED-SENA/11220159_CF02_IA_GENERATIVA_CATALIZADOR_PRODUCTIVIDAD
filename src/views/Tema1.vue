<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Evaluación de calidad y validación técnica de resultados
      .caja-2.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.fit___box_container
            p.mb-0 La interacción con la Inteligencia Artificial Generativa (IAG) en el entorno profesional no culmina con la obtención de una respuesta; por el contrario, ese es el punto de partida para una supervisión experta. En esta unidad temática, el aprendiz desarrollará las competencias necesarias para auditar los resultados de herramientas como #[b ChatGPT y Microsoft Copilot], asegurando que la información no solo sea fluida, sino también técnicamente precisa y alineada con los objetivos de productividad.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t1/img1.png', alt='').m-auto
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Criterios técnicos de evaluación: pertinencia, coherencia y utilidad
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img2.svg', alt='').m-auto
        .col-xl.mb-4.mb-lg-0
          p.mb-0 Para diagnosticar el comportamiento de una herramienta de IA, es necesario aplicar métricas cualitativas que trasciendan la simple lectura del texto. En este proceso, el aprendiz debe evaluar cada salida bajo tres ejes fundamentales, los cuales permiten determinar la calidad y aplicabilidad de la información generada.
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img3.jpg', alt="" ).m-auto
              h4.text-center Pertinencia
              .caja-3_p
                p.mb-0 Se refiere al nivel de alineación de la respuesta con la instrucción original y el contexto suministrado. Una respuesta puede ser gramaticalmente correcta, pero irrelevante si no resuelve la necesidad específica planteada en la búsqueda.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img4.jpg', alt="" ).m-auto
              h4.text-center Coherencia
              .caja-3_p
                p.mb-0 Evalúa la estructura lógica del contenido. Implica verificar que las ideas se articulen de forma fluida, sin contradicciones internas y con un hilo conductor que facilite la comprensión del receptor.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img5.jpg', alt="" ).m-auto
              h4.text-center Utilidad
              .caja-3_p
                p.mb-0 Corresponde al valor práctico del resultado para la mejora continua de los procesos organizacionales. Un resultado útil es aquel que reduce efectivamente el tiempo y el esfuerzo operativo, favoreciendo una toma de decisiones informada.
      p.mb-5 A partir de estos criterios, el aprendiz puede establecer si la herramienta de IA responde de manera efectiva a los requerimientos formulados y si el resultado puede integrarse de forma confiable en contextos laborales y organizacionales.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img6.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Caso de uso: auditoría de un informe institucional en Copilot 
      p.mb-5 Para comprender la aplicación práctica de los criterios de evaluación en entornos organizacionales, se presenta el siguiente caso de uso relacionado con la validación de resultados generados por herramientas de IA.
      .row.align-items-center.mb-5
        .col-xl(data-aos="fade-right")
          LineaTiempoD.color-secundario
            p(numero="1" titulo="Escenario") Un coordinador de proyectos utiliza Microsoft Copilot para resumir un archivo extenso sobre capacitaciones digitales alojado en Microsoft OneDrive.
            p(numero="2" titulo="Concepto aplicado") El aprendiz evalúa si el resumen generado incluye los datos críticos solicitados en el prompt estructurado, especialmente la información relacionada con participantes y resultados.
            p(numero="3" titulo="Evaluación") Si Copilot entrega una descripción general del curso, pero omite las cifras de asistencia registradas en el documento, el resultado incumple los criterios de pertinencia y utilidad. En consecuencia, se requiere un refinamiento de la instrucción para forzar la extracción de datos cuantitativos y garantizar una respuesta alineada con la necesidad organizacional.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img7.png", alt="" ).m-auto
      .row.justify-content-center.align-items-center
        .col-xl-10
          .caja-4.mb-0(data-aos="flip-up")
            .row.align-items-center
              .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/t1/img8.svg', alt='' style="width: 75px").m-auto
              .col-xl.col-md-10
                p.mb-0 Este ejercicio fortalece la capacidad crítica del aprendiz frente a los resultados generados por sistemas de IA, promoviendo procesos de validación técnica orientados a la precisión y confiabilidad de la información.
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Validación de la fundamentación
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p En el ámbito de la Inteligencia Artificial Generativa (IAG), la #[b fundamentación o #[i groundedness]] constituye el nivel básico y el prerrequisito indispensable para el uso profesional de estas herramientas. Técnicamente, se define como la capacidad del sistema para anclar cada afirmación en una fuente de información externa, autorizada y verificable, en lugar de depender únicamente de su conocimiento paramétrico o “memoria” de entrenamiento.
          .caja-1(data-aos="fade-right")
            p.mb-0 Sin una fundamentación sólida, #[b los resultados carecen de la fiabilidad] necesaria para tareas críticas en sectores como el jurídico, administrativo o de salud. En consecuencia, la validación de la información generada por IA se convierte en una actividad esencial dentro de los procesos organizacionales.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img9.png', alt='').m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img6.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 El paradigma de la IA consultiva (RAG)
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img10.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La mayoría de las plataformas líderes han adoptado el modelo de #[b Generación Aumentada por Recuperación (#[i Retrieval-Augmented Generation] - RAG)] para fortalecer la fundamentación. Este enfoque transforma a la IA de un “oráculo creativo”, que predice texto basándose en probabilidades estadísticas, a un “archivero experto” que consulta un corpus documental antes de responder.
      p.mb-5 Mientras la IA paramétrica funciona bajo un esquema de “#[b libro cerrado]”, la IA fundamentada opera como un sistema de “#[b libro abierto]”, en el que la veracidad y la trazabilidad constituyen el núcleo del diseño técnico.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img6.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Fundamentación en el ecosistema Microsoft
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p En el entorno de Microsoft 365, la validación técnica se centra en el concepto de #[i grounding] o anclaje. A diferencia de los modelos paramétricos que dependen de su memoria de entrenamiento, #[b Microsoft Copilot utiliza el Índice Semántico y los datos de Microsoft Graph] para generar respuestas basadas exclusivamente en los archivos autorizados de la organización, como documentos de Word, Excel o SharePoint.
          .caja-4.mb-0(data-aos="flip-up")
            .row.align-items-center
              .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/t1/img8.svg', alt='' style="width: 75px").m-auto
              .col-xl.col-md-10
                p.mb-0 Para asegurar la veracidad de los resultados, el profesional debe supervisar #[b la tasa de #[i misgrounding]], fenómeno que ocurre cuando el modelo interpreta de manera incorrecta el contexto proporcionado o incorpora información externa no solicitada. #[b La gobernanza de datos] exige que los insumos utilizados sean #[b representativos, consistentes y libres de errores], evitando así la propagación de información falsa o imprecisa.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img11.png', alt='').m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img6.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Aplicación en otras plataformas líderes
      p.mb-5 El concepto de fundamentación es #[b transversal a la industria] y se manifiesta de distintas formas según la herramienta empleada. A continuación, se presentan algunos ejemplos representativos:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Perplexity AI
                  p.mb-0 Se especializa en búsquedas conversacionales fundamentadas, anclando cada respuesta a fuentes web verificables mediante citas directas, lo que reduce significativamente las alucinaciones factuales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img12.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 ChatGPT
                  p.mb-0 Utiliza funciones de búsqueda web en tiempo real que permiten verificar la información mediante enlaces directos asociados a la respuesta generada.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img13.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Claude
                  p.mb-0 Gracias a su amplia ventana de contexto, permite cargar documentos extensos para generar respuestas estrictamente ancladas a esos contenidos específicos, bajo principios de “IA Constitucional”.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img14.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Gemini
                  p.mb-0 Integra capacidades de búsqueda de Google y servicios en la nube para contrastar el conocimiento del modelo con información actualizada en tiempo real.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img15.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La fundamentación fortalece la confiabilidad de los sistemas de IA y permite que los resultados sean auditables, verificables y alineados con los requerimientos técnicos de cada organización.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img6.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Caso de uso: análisis de tendencias en Excel con IA
      p.mb-5 El siguiente escenario permite comprender cómo se aplica la validación de fundamentación en herramientas de análisis organizacional:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img16.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Escenario").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Un analista administrativo solicita a Microsoft Copilot en Microsoft Excel que identifique los proyectos con mejor desempeño basándose en una hoja de cálculo de avances.
            .row(titulo="Concepto aplicado").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se aplica el principio de #[i grounding]. El aprendiz debe verificar que las conclusiones generadas por la IA coincidan estrictamente con los valores registrados en la hoja de cálculo.
            .row(titulo="Riesgo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Si la IA sugiere que una campaña fue exitosa basándose en “conocimiento general del mercado” y no en los datos de ingreso contenidos en la columna E, se produce un fallo de fundamentación que debe corregirse inmediatamente mediante una instrucción de restricción temática.
      p.mb-0 Este proceso fortalece la capacidad del aprendiz para validar resultados generados por IA en entornos organizacionales, garantizando precisión, trazabilidad y confiabilidad en el manejo de la información.
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Diagnóstico de errores
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img17.svg', alt='').m-auto
        .col-xl.mb-4.mb-lg-0
          p.mb-0 Para realizar #[b una validación técnica rigurosa], el aprendiz debe desarrollar la capacidad de identificar #[b los principales fallos] que pueden presentarse en los resultados generados por herramientas de Inteligencia Artificial Generativa (IAG). Estos errores afectan directamente #[b la confiabilidad, trazabilidad y precisión] de la información utilizada en entornos organizacionales. A continuación, se describen los tipos de fallos críticos más frecuentes en sistemas de IA:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 #[i Misgrounding] (fundamentación errónea)
                  p.mb-0 Ocurre cuando la IA cita una fuente real, pero atribuye información que el documento no contiene o incluso contradice.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img18.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 #[i Ungrounding] (falta de fundamentación)
                  p.mb-0 Se presenta cuando el modelo realiza afirmaciones factuales sin proporcionar citas o utilizando información inexistente en el material recuperado.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img19.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 #[i Overclaim]
                  p.mb-0 Se produce cuando la respuesta excede, exagera o interpreta más allá de lo que las fuentes realmente respaldan.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img20.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La identificación de estos errores permite fortalecer la validación crítica de resultados y reducir riesgos asociados a desinformación, interpretaciones incorrectas o decisiones basadas en datos no verificados.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img6.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Caso de uso: validación de fundamentación en investigación de mercado
      p.mb-5 El siguiente escenario permite comprender cómo aplicar criterios de validación técnica en procesos de investigación apoyados por IA:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img21.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Escenario").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Un analista utiliza Perplexity AI o el modo de búsqueda de ChatGPT para conocer las tendencias de ciberseguridad en Colombia para el año 2026.
            .row(titulo="Proceso de validación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La IA genera un informe citando un PDF de la Superintendencia de Industria y Comercio.
            .row(titulo="Criterio de calidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El analista no debe confiar únicamente en la fluidez del texto. Debe aplicar el principio de verificación de citas para comprobar la precisión de la información generada.
            .row(titulo="Acción").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El profesional accede al enlace proporcionado por la IA y verifica que la cifra relacionada con “quejas por infracciones de datos” coincida exactamente con el dato oficial consignado en la fuente institucional.
            .row(titulo="Resultado").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se garantiza una respuesta fundamentada, argumentada e interpretada con criterios de integridad y confiabilidad de la información.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-10
          .caja-4(data-aos="flip-up")
            .row.align-items-center
              .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/t1/img8.svg', alt='' style="width: 75px").m-auto
              .col-xl.col-md-10
                p.mb-0 Este proceso fortalece las competencias del aprendiz para validar información generada por IA y detectar posibles inconsistencias antes de utilizar los resultados en contextos organizacionales.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img6.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo de #[i prompt] para validar criterios técnicos e identificar errores de fundamentación 
      p.mb-5 La siguiente propuesta presenta un ejemplo de #[i prompt] orientado a la identificación de errores de fundamentación, como #[i misgrounding] y #[i ungrounding], en respuestas generadas por herramientas de Inteligencia Artificial: 
      .row.justify-content-center.mb-5
        .col-xl-10
          .caja-5.p-5.text-white(data-aos="flip-up")
            p Actúa como un Auditor Consultor Experto en Inteligencia Artificial. Tu objetivo es enseñarme a validar técnicamente el resultado que me dio una IA tras resumir un informe financiero de mi empresa. 
            p Para lograrlo, estructura tu respuesta en tres partes:
            ol.lista-ol--cuadro.mb-0
              li
                .lista-ol--cuadro__vineta
                  span 1
                | 
                p.mb-0 El Espejo de Criterios: Analiza el texto final bajo tres métricas cualitativas: Pertinencia (si responde al objetivo), Coherencia (si no hay contradicciones internas) y Utilidad (si reduce el esfuerzo operativo). Dime qué preguntas debo hacerme para evaluar cada eje.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | 
                p.mb-0 Alerta de Fraude Teórico: Explícame de forma práctica cómo puedo detectar si la IA cometió "#[i Misgrounding]" (distorsionar un dato real del documento) o "#[i Ungrounding]" (inventar un dato que no estaba en el archivo) en este resumen. 
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | 
                p.mb-0 La Instrucción de Restricción Temática: Escribe un ejemplo de #[i prompt] de refinamiento que yo pueda usar para obligar a la IA a basarse ÚNICAMENTE en la columna "Ingresos Netos" de mi archivo de Excel, prohibiéndole usar su conocimiento general del mercado.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img6.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Funcionalidad del #[i prompt] anterior
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .caja-1(data-aos="fade-right").mb-3
            p El uso de este tipo de instrucciones permite fortalecer la capacidad analítica y crítica del aprendiz frente a los resultados generados por IA. Entre sus principales funciones se destacan las siguientes:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Aplicación práctica de la teoría:] al solicitar preguntas de evaluación, el #[i prompt] entrena al aprendiz para analizar críticamente la respuesta y no limitarse únicamente a la fluidez del texto generado. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Prevención de riesgos técnicos:] al exigir la diferenciación práctica entre #[i misgrounding] y #[i ungrounding], el usuario aprende a identificar situaciones en las que la IA presenta “alucinación paramétrica” sobre archivos o datos organizacionales. 
          p.mb-0 Estas estrategias contribuyen a consolidar procesos de validación técnica más precisos, confiables y alineados con estándares de calidad en el manejo de información digital.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img22.png', alt='').m-auto
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.4 Comparativa de razonamiento y el patrón de reflexión
      p.mb-5 Los modelos más avanzados de Inteligencia Artificial Generativa (IAG), como Claude 3.5, Gemini 1.5 y las versiones más recientes de ChatGPT, han incorporado modos de #[b “pensamiento profundo” (#[i deep thinking])]. Estas capacidades permiten que el sistema ejecute procesos de verificación en varios pasos antes de emitir una respuesta final.
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 1.
            span Opciones de pensamiento profundo en Gemini
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/t1/img23.png', alt='Captura de pantalla de la interfaz de Gemini con fondo oscuro, cuadro de texto para consultas, botones de herramientas y opciones rápidas como crear imágenes y música, además de un menú desplegable con modos de respuesta como Rápido, Razonamiento y Pro. ').m-auto
      .bg-1
        .px-5
          .row.justify-content-center.align-items-center.mb-5
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img2.svg', alt='').m-auto
            .col-xl.mb-4.mb-lg-0
              p.mb-0 En este contexto, el aprendiz debe aplicar el patrón de reflexión, estrategia mediante la cual se instruye al modelo para que analice críticamente su propia respuesta inicial, explique la racionalidad de sus inferencias y contraste el resultado con criterios de calidad previamente definidos. Este proceso iterativo resulta especialmente relevante en tareas de alta carga cognitiva, como:
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img24.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Análisis jurídico.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img25.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Depuración de código.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img26.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Evaluación de metodologías.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img27.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Interpretación de datos complejos.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img28.svg' style="max-width: 90px").m-auto
              p.mb-0.text-center Validación de argumentos técnicos.
          p.mb-5 La reflexión estructurada permite incrementar la precisión de las respuestas y reducir errores derivados de inferencias superficiales o conclusiones no verificadas.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img6.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Aplicación del patrón de reflexión
      p.mb-5 La siguiente relación presenta los elementos esenciales que intervienen en el uso del patrón de reflexión dentro de procesos de validación técnica:
      .row.justify-content-center.mb-5
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-6.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t1/img29.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Objetivo
              p.mb-0.text-center Lograr que la IA evalúe críticamente su propia respuesta antes de consolidar el resultado final.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-6.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t1/img30.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Proceso
              p.mb-0.text-center El usuario solicita al modelo justificar sus inferencias, detectar inconsistencias y comparar la respuesta con criterios de calidad definidos previamente.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-6.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t1/img31.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Beneficio técnico
              p.mb-0.text-center Se fortalecen la precisión, coherencia y trazabilidad de la información generada.
        .col-xl-3.col-md-9(data-aos="zoom-in")
          .caja-6.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t1/img32.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Ámbitos de aplicación
              p.mb-0.text-center Investigación académica, análisis jurídico, programación, auditoría documental y evaluación organizacional.
      p.mb-5 La implementación de este patrón favorece procesos más confiables y promueve un uso crítico de la IA en contextos profesionales y educativos.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img6.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Caso de uso: autocrítica en la generación de contenido académico
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          p El siguiente escenario ejemplifica cómo aplicar el patrón de reflexión en actividades de producción académica asistida por IA:
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Escenario:] un docente utiliza ChatGPT para diseñar una metodología de investigación sobre ética en la IA. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Concepto aplicado:] el docente formula un #[i follow-up prompt] con la siguiente instrucción: “Revisa el plan propuesto e identifica posibles sesgos o debilidades metodológicas basándote en estándares científicos actuales”. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Resultado:] el modelo ejecuta un proceso de reflexión crítica, identifica áreas superficiales de la propuesta y sugiere mejoras metodológicas, incrementando el rigor técnico del material pedagógico final.
          .caja-1(data-aos="fade-right")
            p.mb-0 Este enfoque fortalece la capacidad analítica del aprendiz y promueve el uso de la IA como herramienta de apoyo para procesos de revisión, validación y mejora continua del conocimiento.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img33.png', alt='').m-auto
      Separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.5 Verificación de citas y fuentes en tiempo real
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img17.svg', alt='').m-auto
        .col-xl.mb-4.mb-lg-0
          p.mb-0 Una de las defensas técnicas más robustas contra las alucinaciones en sistemas de Inteligencia Artificial Generativa (IAG) es la implementación del patrón #[b #[i Fact Check List]]. Esta estrategia consiste en solicitar a la IA que, además de la respuesta principal, entregue una relación detallada de #[b los hechos, datos o supuestos] utilizados durante la generación del contenido.
      .caja-7.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t1/img34.png', alt='').m-auto
          .col-xl.fit___box_container
            p.mb-0 En herramientas como Perplexity AI o Microsoft Copilot en #[b modo búsqueda], el sistema incorpora citas directas a fuentes externas verificables. En consecuencia, el aprendiz #[b debe desarrollar el hábito técnico de consultar estas referencias para auditar si el contenido citado respalda realmente las afirmaciones generadas por el modelo], evitando así fenómenos de “#[b fabricación de autoridad]”. La verificación de citas fortalece la trazabilidad de la información y permite integrar la IA de manera responsable en contextos profesionales y académicos.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img6.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Aplicación del patrón #[i Fact Check List]
      p.mb-5 La siguiente relación presenta los principales componentes asociados al proceso de verificación de fuentes en tiempo real:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Objetivo
                p.mb-0 Verificar que las afirmaciones generadas por la IA estén respaldadas por fuentes auténticas y verificables.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img35.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img36.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Proceso
                p.mb-0 El usuario solicita al modelo la lista de hechos, referencias o documentos utilizados para construir la respuesta.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Validación técnica
                p.mb-0 El aprendiz contrasta las citas entregadas por la IA con las fuentes originales para confirmar precisión y coherencia.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img37.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img38.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Beneficio
                p.mb-0 Reduce riesgos de alucinaciones factuales, desinformación y uso de contenido sin soporte verificable.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-10
          .caja-4.mb-0(data-aos="flip-up")
            .row.align-items-center
              .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/t1/img8.svg', alt='' style="width: 75px").m-auto
              .col-xl.col-md-10
                p.mb-0 Este enfoque fortalece las competencias de auditoría y análisis crítico en el uso de herramientas de IA consultiva.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img6.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Caso de uso: investigación normativa con IA consultiva
      p.mb-5 El siguiente escenario ejemplifica la aplicación de verificación de citas en procesos de investigación jurídica:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Escenario
                  p.mb-0 Un profesional del sector jurídico requiere conocer la aplicación del principio de #[i habeas] data en el entrenamiento de IAG según la Ley 1581 de 2012.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img39.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Concepto aplicado
                  p.mb-0 Se emplea un modelo compatible con #[i Retrieval Prompting] para consultar la normativa en tiempo real.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img40.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Validación
                  p.mb-0 Se instruye a la IA con la siguiente solicitud: “Cita textualmente el artículo que prohíbe el tratamiento de datos sensibles sin autorización explícita”. Posteriormente, el aprendiz compara la respuesta con el texto oficial de la ley para verificar precisión y fidelidad normativa.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img41.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Este procedimiento garantiza una integración responsable de la IA en procesos de consulta jurídica, fortaleciendo la confiabilidad y legitimidad de la información obtenida. A continuación, se presenta un ejemplo de prompt orientado a la corrección de errores y validación de información generada por IA:
      .row.justify-content-center.mb-5
        .col-xl-10
          .caja-5.p-5.text-white(data-aos="flip-up")
            p Quiero investigar cómo aplica la Ley 1581 de 2012 (Habeas Data en Colombia) al entrenamiento de modelos de IA. Para asegurar que tu respuesta sea 100% confiable y auditable, ejecuta los siguientes pasos:
            ol.lista-ol--cuadro.mb-0
              li
                .lista-ol--cuadro__vineta
                  span 1
                | 
                p.mb-0 Respuesta Fundamentada (RAG): Dame una explicación técnica de las restricciones sobre el uso de datos sensibles. Cada afirmación que hagas debe ir acompañada de una cita directa (número de artículo y fragmento literal).
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | 
                p.mb-0 Patrón Fact Check List: Al final de tu respuesta, genera una tabla independiente con dos columnas: [Afirmación realizada por la IA] y [Enlace o Fuente exacta que la soporta].
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | 
                p.mb-0 Patrón de Reflexión (Autocrítica): Activa tu modo de pensamiento profundo, analiza tu propia respuesta inicial e identifica si cometiste "Overclaim" (exagerar lo que la ley realmente soporta) o si hay alguna debilidad en tu interpretación jurídica en comparación con el texto oficial.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img6.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Funcionalidad del ejemplo de validación y verificación
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .caja-1.ajuste-1(data-aos="fade-right")
            p El uso de este tipo de estrategias permite consolidar prácticas de auditoría técnica orientadas a la confiabilidad de la información generada por IA. Entre sus principales aportes se destacan los siguientes:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Transformación del paradigma de uso:] la IA deja de funcionar como un “oráculo” y se convierte en un “archivero experto” de libro abierto, proporcionando al usuario los insumos necesarios para realizar contrastaciones documentales. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Incorporación de verificación en tiempo real:] el patrón #[i Fact Check List] automatiza procesos de auditoría y fortalece el hábito técnico de consultar referencias para reducir alucinaciones factuales.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img42.png', alt='').m-auto
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t1/img43.png', alt='').m-auto
        .col-xl
          p Estas prácticas fortalecen la validación crítica de resultados y promueven un uso ético y responsable de la Inteligencia Artificial Generativa.
          .row.justify-content-center.align-items-center.mb-0
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img17.svg', alt='').m-auto
            .col-xl.mb-4.mb-lg-0
              h5.mb-0 Importante:
              p.mb-0 La calidad de la IA es una responsabilidad compartida. Mientras más estructurado sea el #[i prompt], utilizando la fórmula R-SPA (Rol, Situación, Pedido y Alineadores), más sencilla será la fase de evaluación y validación técnica.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
