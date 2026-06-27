<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Uso de extensiones IA en aplicaciones y flujos de trabajo automatizados
      .caja-2.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.fit___box_container
            p.mb-0 La verdadera transformación de la productividad no ocurre al usar la IA como un buscador aislado, sino al integrarla directamente en las herramientas de trabajo diario. Un uso más avanzado permite al aplicar alternativas de mejora productiva mediante la orquestación de #[b Microsoft Copilot, ChatGPT, Claude] y Gemini dentro del flujo operativo organizacional.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t3/img1.png', alt='').m-auto
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Copilot en la suite de productividad: del texto a los resultados
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img2.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La integración de Copilot en Microsoft 365 permite que la IA acceda al Índice Semántico de la organización y trabaje con datos reales alojados en OneDrive y SharePoint, automatizando tareas que anteriormente requerían múltiples procesos manuales.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img6.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Word: redacción asistida y transformación documental
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img3.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La IA integrada en Microsoft Word no solo genera texto, sino que también permite #[b crear borradores completos] utilizando como referencia hasta tres archivos existentes para mantener coherencia técnica y documental.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img17.svg', alt='').m-auto
        .col-xl.mb-4.mb-lg-0
          p.mb-0 Esta funcionalidad favorece procesos de mejora continua, ya que permite que el profesional concentre sus esfuerzos en #[b la validación, edición y toma de decisiones], en lugar de iniciar desde una hoja en blanco. Adicionalmente, es posible generar contenidos directamente dentro de la aplicación mediante #[i prompts] y complementos especializados de IA. En el siguiente video, se presentan diferentes aplicaciones de agentes IA dentro de Microsoft Word para fortalecer procesos de redacción, automatización y transformación documental.
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/zR_IYdt264s?si=M5pYQxZD0nLvoyXQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption #[b Video]. Agentes IA dentro de la aplicación Word
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img6.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Excel: análisis, visualización y automatización (modo agente) 
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t3/img4.png', alt='').m-auto
        .col-xl
          .caja-1.ajuste-1(data-aos="fade-left")
            p Microsoft Excel incorpora capacidades de IA que transforman instrucciones #[b en lenguaje natural en fórmulas, automatizaciones y análisis avanzados de datos]. Copilot puede identificar tendencias, detectar valores atípicos y actualizar reportes de forma dinámica. El siguiente caso ejemplifica la aplicación de estas capacidades en un contexto administrativo:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Escenario:] una oficina administrativa dispone de una hoja de cálculo con 1.000 registros de inscritos a cursos.  
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Proceso técnico:] el usuario solicita: “Identifica cuáles son los tres cursos con menor tasa de finalización y genera un gráfico de barras comparativo”. Posteriormente, agrega la instrucción: “Crea una columna nueva llamada ‘Alerta’ y escribe ‘Priorizar’ si la finalización es menor al 70 %”. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Resultado:] la IA genera un análisis automatizado y una estructura visual de apoyo para facilitar la toma de decisiones relacionadas con la oferta académica.
      p.mb-5 Estas funcionalidades permiten optimizar tiempos de análisis y fortalecer procesos de gestión basados en datos.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img6.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 PowerPoint: generación de presentaciones de alto impacto 
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img5.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La integración de IA en Microsoft PowerPoint permite #[b transformar documentos extensos de Word en presentaciones estructuradas], con diseños uniformes y notas de apoyo para el orador. Asimismo, la herramienta facilita la generación de imágenes personalizadas para complementar contenidos visuales y fortalecer la comunicación institucional.
      p.mb-5 A continuación, se presenta un recurso audiovisual relacionado con la ampliación de funcionalidades mediante complementos y herramientas de Inteligencia Artificial:
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://youtu.be/08iYa_wqsUM?si=j1tV4VMyk3L89fLI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption #[b Video]. Complementos y la IA en PowerPoint
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img6.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Agentes IA en ambiente Google
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La integración de la Inteligencia Artificial Generativa en Google Workspace se ha consolidado mediante un ecosistema de extensiones y complementos que conectan modelos como GPT-4o y Gemini con herramientas de productividad diaria.
          .caja-1.ajuste-2(data-aos="fade-right")
            p.mb-0 Aunque numerosas organizaciones priorizan entornos Microsoft, la flexibilidad de Google permite que la IA funcione como un agente de ejecución inmediata, transformando aplicaciones como Docs o Sheets en espacios de procesamiento de lenguaje natural y análisis avanzado.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img6.png', alt='').m-auto
      .caja-10.mb-5(data-aos="fade-right")   
        h4.mb-0 Extensiones y complementos especializados
      p.mb-5 La siguiente relación presenta algunas herramientas destacadas dentro del entorno Google:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="ChatGPT para Google Slides Docs Sheets")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img7.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 ChatGPT para Google Slides Docs Sheets
              p.mb-0 Permite generar borradores técnicos, sintetizar textos extensos y reescribir contenidos bajo tonos específicos en Google Docs. En Google Slides facilita la estructuración de presentaciones y la generación de contenido coherente para diapositivas.
        .py-3.py-md-4(titulo="AI for Sheets Gemini GPT")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img8.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 AI for Sheets Gemini GPT
              p.mb-0 Automatiza tareas dentro de hojas de cálculo, como clasificación de sentimientos, limpieza de bases de datos y extracción de entidades clave mediante funciones de IA aplicadas directamente en celdas.
      p.mb-5 Estas extensiones operan bajo el modelo SaaS (#[i Software as a Service]), utilizando APIs para consumir capacidades de IA sin abandonar la interfaz de trabajo de Google.
      .caja-10.mb-5(data-aos="fade-right")   
        h4.mb-0 Automatización y análisis fundamentado 
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img9.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Las herramientas basadas en Gemini aprovechan ventanas de contexto amplias para analizar información contenida #[b en documentos y hojas de cálculo], fortaleciendo la fundamentación de las respuestas y reduciendo riesgos de alucinaciones factuales.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img17.svg', alt='').m-auto
        .col-xl.mb-4.mb-lg-0
          p.mb-0 El flujo de trabajo se optimiza mediante el patrón #[i Output Automater], donde el resultado generado por la IA no se limita a texto descriptivo, sino que produce #[b acciones estructuradas] capaces de #[b organizar, clasificar y jerarquizar información] dentro de los archivos. En el siguiente video, se presenta el uso de agentes IA aplicados al entorno de Google Sheets para automatizar procesos y fortalecer el análisis de datos.
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/H5LjwQJnPE0?si=PEmNZTguBcko2X36" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption #[b Video]. Uso de agentes IA en Google Sheets
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          p La ventaja competitiva de utilizar Gemini en este entorno radica en su integración nativa con el #[b motor de búsqueda] y las capacidades multimodales de Google. Esto permite procesar no solo texto, sino también #[b gráficos e imágenes insertadas en los documentos] para generar análisis descriptivos y reportes de tendencias en tiempo real.
          .caja-1(data-aos="fade-right")
            p.mb-0 Para el profesional, esta capacidad de interpretar activos digitales dentro del ecosistema Google representa una evolución hacia la IA consultiva, donde la herramienta funciona como un “#[b archivero experto]” orientado a fortalecer procesos de análisis y toma de decisiones informadas.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img10.png', alt='').m-auto
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Estrategias híbridas: combinando ChatGPT, Claude y Copilot
      p.mb-5 Para alcanzar niveles avanzados de productividad, el profesional en el uso de Inteligencia Artificial Generativa (IAG) no debe limitarse a una única herramienta. #[b La integración estratégica de diferentes modelos] permite aprovechar las fortalezas específicas de cada plataforma dentro de un flujo de trabajo coordinado. La combinación de herramientas especializadas fortalece procesos de #[b planeación, análisis, validación y producción documental], optimizando tiempos y mejorando la calidad de los resultados.
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img11.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 ChatGPT
                  p.mb-0 Especializado en creatividad, generación de ideas y construcción de contenidos iniciales. Resulta útil en fases de planeación, lluvia de ideas y creación de mensajes para redes sociales o campañas institucionales.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img12.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Claude
                  p.mb-0 Destaca en el análisis de grandes volúmenes de contexto y en la evaluación ética de contenidos. Su arquitectura basada en “IA Constitucional” facilita la identificación de riesgos, sesgos e inconsistencias normativas.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img13.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Microsoft Copilot
                  p.mb-0 Sobresale en la ejecución de tareas organizacionales y en el trabajo con datos seguros dentro del ecosistema empresarial de Microsoft 365. Es especialmente útil para redacción, organización documental y automatización de procesos corporativos.
      p.mb-5 La aplicación de estrategias híbridas permite construir flujos de trabajo más robustos, donde cada herramienta aporta capacidades específicas según el objetivo operativo. La articulación de múltiples plataformas favorece procesos más eficientes y especializados en diferentes etapas del trabajo organizacional:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 1.
            span Integración estratégica de herramientas IA
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Etapa
                  th.ajuste-border-tabla.texto-left Herramienta recomendada
                  th.texto-left Propósito
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Planeación y creatividad
                  td.ajuste-border-tabla.texto-left ChatGPT
                  td.texto-left Generación de ideas, esquemas conceptuales y propuestas iniciales.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Validación y auditoría ética
                  td.ajuste-border-tabla.texto-left Claude
                  td.texto-left Identificación de riesgos, sesgos e inconsistencias documentales o normativas.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Producción y formalización
                  td.ajuste-border-tabla.texto-left Microsoft Copilot
                  td.texto-left Elaboración de documentos institucionales y automatización de tareas organizacionales.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-10
          .caja-4.mb-0(data-aos="flip-up")
            .row.align-items-center
              .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/t1/img8.svg', alt='' style="width: 75px").m-auto
              .col-xl.col-md-10
                p.mb-0 Este enfoque permite optimizar la productividad mediante una distribución inteligente de funciones entre modelos especializados.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img6.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Caso de uso: creación de una propuesta de proyecto multidisciplinario con flujo de trabajo inteligente
      p.mb-5 El siguiente escenario ejemplifica la aplicación práctica de una estrategia híbrida de IA dentro de un proceso organizacional:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 ChatGPT
                p.mb-0 Se utiliza ChatGPT para generar un esquema inicial de ideas innovadoras relacionadas con el proyecto.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img14.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img15.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Claude
                p.mb-0 El esquema generado se carga en Claude para identificar posibles riesgos éticos o inconsistencias legales relacionadas con la Ley 1581.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Copilot en Word
                p.mb-0 Las ideas refinadas y los controles de riesgo se integran en Microsoft Word mediante Microsoft Copilot para generar el documento oficial con formato institucional.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img16.png', alt='' style="width: 300px").m-auto
      p.mb-0 Este flujo de trabajo fortalece la calidad técnica de los resultados y promueve una integración eficiente de la IA en procesos de análisis, validación y producción documental.
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Inteligencia artificial y la automatización de procesos (Power Automate)
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p En el contexto de #[b la transformación digital], las organizaciones enfrentan la necesidad de optimizar sus #[b flujos de trabajo] para mantener la competitividad y fortalecer la eficiencia operativa. Dentro del ecosistema de Microsoft 365, Power Automate se consolida como una de las principales herramientas de Automatización de Procesos Digitales (DPA) y Automatización Robótica de Procesos (RPA).
          .caja-1(data-aos="fade-right")
            p.mb-0 Su #[b arquitectura #[i low-code] democratiza] el desarrollo de soluciones automatizadas, permitiendo que tanto desarrolladores profesionales como usuarios de negocio diseñen, implementen y gestionen flujos de trabajo que conectan aplicaciones, servicios y fuentes de datos.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img17.png', alt='').m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img6.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Funcionamiento de Power Automate
      p.mb-5 Power Automate opera bajo una lógica basada en desencadenadores (triggers) y acciones. Un flujo inicia a partir de un evento específico, como:
      .row.justify-content-center.mb-5
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-6.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t3/img18.svg', alt="" style="max-width: 90px").m-auto
              p.mb-0.text-center Recepción de un correo electrónico.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-6.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t3/img19.svg', alt="" style="max-width: 90px").m-auto
              p.mb-0.text-center Modificación de una fila en una base de datos.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-6.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t3/img20.svg', alt="" style="max-width: 90px").m-auto
              p.mb-0.text-center Carga de un archivo.
        .col-xl-3.col-md-9(data-aos="zoom-in")
          .caja-6.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t3/img21.svg', alt="" style="max-width: 90px").m-auto
              p.mb-0.text-center Ejecución programada en una fecha u hora determinada. 
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.ajuste-3(data-aos="fade-right")
            p A partir de ese evento, la plataforma ejecuta una secuencia organizada de acciones mediante conectores previamente configurados. Sin embargo, la automatización tradicional basada exclusivamente en reglas lineales presenta limitaciones frente a tareas relacionadas con:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Datos no estructurados.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Lenguaje natural.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Toma de decisiones complejas.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Análisis contextual de información.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img22.png', alt='').m-auto
      p.mb-5 En este escenario, la integración de la Inteligencia Artificial redefine las capacidades de automatización y permite evolucionar hacia modelos de hiperautomatización cognitiva.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img6.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 La IA en Power Automate
      p.mb-5 La incorporación de Inteligencia Artificial en Power Automate se materializa principalmente mediante dos componentes integrados dentro del entorno de Microsoft 365:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img23.jpg', alt="" ).m-auto
              h4.text-center Microsoft Copilot
              .caja-3_p
                p.mb-0.text-center Asistente de diseño conversacional para la creación automatizada de flujos mediante lenguaje natural.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img24.jpg', alt="" ).m-auto
              h4.text-center Modelos GPT y AI Builder
              .caja-3_p
                p.mb-0.text-center Capacidades de procesamiento semántico y ejecución inteligente dentro de los flujos automatizados.
      p.mb-5.text-center La integración de estas tecnologías permite automatizar procesos complejos con un mayor nivel de interpretación contextual y capacidad de análisis.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img6.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Microsoft Copilot: disrupción en la creación de flujos
      p.mb-5 Tradicionalmente, #[b el diseño de automatizaciones] requería conocimientos técnicos relacionados con variables, estructuras de datos y lógica de programación. Con la incorporación de Copilot, el proceso evoluciona hacia una experiencia basada en Procesamiento del Lenguaje Natural (PLN).
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.mb-3.ajuste-2(data-aos="fade-right")
            p El usuario puede describir textualmente la tarea requerida. Por ejemplo:
            p.mb-0 “Cuando se cargue un archivo PDF en OneDrive, extrae el texto y envíalo por Teams al supervisor”.
          .row.justify-content-center.align-items-center.mb-0
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t2/img17.svg', alt='').m-auto
            .col-xl
              p.mb-0 A partir de esta instrucción, Copilot interpreta la intención del usuario, selecciona #[b conectores, organiza acciones jerárquicas y propone automáticamente un borrador funcional del flujo de trabajo]. Este enfoque reduce tiempos de implementación y facilita la creación de automatizaciones sin necesidad de programación avanzada.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img25.png', alt='').m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img6.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Integración de modelos GPT y AI Builder: el cerebro de la automatización
      .bg-1
        .px-5
          .row.justify-content-center.align-items-center.mb-5
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t3/img26.svg', alt='').m-auto
            .col-xl.mb-4.mb-lg-0
              p.mb-0 Mientras Copilot facilita el diseño del flujo, los modelos GPT integrados mediante AI Builder ejecutan procesos inteligentes capaces de interpretar información no estructurada. Estas capacidades incluyen:
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-9.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t3/img27.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Procesamiento y resumen automatizado
                  p.mb-0.text-center Reducción de documentos extensos, informes o contratos a puntos clave accionables.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-9.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t3/img28.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Análisis de sentimiento y clasificación
                  p.mb-0.text-center Clasificación automática de correos, PQRS o reseñas según tono emocional o temática.
            .col-xl-3.col-md-9(data-aos="zoom-in")
              .caja-9.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t3/img29.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Extracción de entidades
                  p.mb-0.text-center Identificación de nombres, fechas, identificadores o datos relevantes dentro de textos libres.
          p.mb-5 Estas funcionalidades permiten que la automatización trascienda tareas repetitivas y evolucione hacia procesos de análisis contextual y toma de decisiones asistida por IA.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img6.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Integración de herramientas IA en entorno Microsoft 365
          p.mb-5 La siguiente relación resume los principales componentes de IA utilizados dentro de procesos automatizados:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 2.
            span Integración de componentes de IA en flujos automatizados de Microsoft 365
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Componente de IA
                  th.ajuste-border-tabla.texto-left Mecanismo de integración
                  th.texto-left Impacto funcional en el flujo
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Microsoft Copilot
                  td.ajuste-border-tabla.texto-left Interfaz de diseño conversacional (#[i UI/UX])
                  td.texto-left Reducción del tiempo de desarrollo y disminución de errores de configuración.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Modelos GPT (AI Builder)
                  td.ajuste-border-tabla.texto-left Acciones y bloques lógicos en tiempo de ejecución
                  td.texto-left Análisis semántico de datos no estructurados y toma de decisiones contextual.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Modelos personalizados
                  td.ajuste-border-tabla.texto-left Entrenamiento con datos corporativos mediante RAG
                  td.texto-left Extracción precisa de información técnica, administrativa o legal alineada con la organización.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-10
          .caja-4.mb-0(data-aos="flip-up")
            .row.align-items-center
              .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/t1/img8.svg', alt='' style="width: 75px").m-auto
              .col-xl.col-md-10
                p.mb-0 La combinación de automatización e IA fortalece la eficiencia operativa y permite construir flujos de trabajo más inteligentes y adaptativos.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img6.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Caso de uso práctico: automatización cognitiva en selección de personal
      p.mb-5 Para comprender el impacto de estas tecnologías en el sector productivo, se analiza el proceso de automatización aplicado al área de Gestión Humana en organizaciones con alto volumen de postulaciones.
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Escenario")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img30.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Escenario
              p.mb-0 Una organización recibe cientos de hojas de vida que superan la capacidad operativa del equipo de selección de personal.
        .py-3.py-md-4(titulo="Proceso automatizado")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img31.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Proceso automatizado
              p.mb-0 Power Automate integra formularios, correos y documentos para clasificar automáticamente candidatos mediante IA.
        .py-3.py-md-4(titulo="Capacidades aplicadas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img32.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Capacidades aplicadas
              p.mb-0 Extracción de datos relevantes, análisis de perfiles, clasificación por competencias y priorización automática de postulantes.
        .py-3.py-md-4(titulo="Resultado")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img33.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Resultado
              p.mb-0 Optimización del proceso de reclutamiento, reducción de tiempos operativos y fortalecimiento de la toma de decisiones en Gestión Humana.
      p.mb-5 Este enfoque evidencia cómo la integración de IA y automatización permite transformar procesos organizacionales tradicionales en flujos inteligentes orientados a la eficiencia y productividad.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img6.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Arquitectura del flujo de trabajo automatizado con IA
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img17.svg', alt='').m-auto
        .col-xl.mb-4.mb-lg-0
          p.mb-0 El flujo diseñado en Power Automate se estructura mediante una secuencia de fases automatizadas que delegan las tareas de análisis intensivo y procesamiento iterativo a modelos GPT corporativos integrados con herramientas de IA. Esta arquitectura permite automatizar procesos de selección de personal mediante capacidades de análisis semántico, clasificación y toma de decisiones asistida.
      .row.align-items-center.mb-5
        .col-xl(data-aos="fade-right")
          LineaTiempoD.color-secundario
            p(numero="1" titulo="Recepción del estímulo (<em>trigger</em>)") El flujo se activa automáticamente cuando un candidato envía su postulación mediante Microsoft Forms o adjunta su hoja de vida en formato PDF a un buzón de correo institucional compartido.
            p(numero="2" titulo="Ingesta y extracción mediante IA") Power Automate extrae el archivo adjunto y lo envía a una acción de AI Builder potenciada por modelos GPT. La IA realiza un análisis semántico del documento, independientemente de su estructura visual o formato de origen.
            p(numero="3" titulo="Procesamiento cognitivo") Mediante un #[i prompt] institucional estructurado, la IA genera un resumen ejecutivo del perfil profesional del candidato y extrae competencias técnicas (#[i hard skills]) y habilidades blandas (#[i soft skills]) de forma indexada.
            p(numero="4" titulo="Evaluación de idoneidad y contraste") El modelo GPT compara la información extraída con el perfil del cargo almacenado en listas de Microsoft SharePoint y asigna un puntaje cualitativo de afinidad.
            p(numero="5" titulo="Estructuración de datos y notificación") Los resultados del análisis, el resumen generado y el documento original se almacenan automáticamente en una base de datos centralizada mediante Dataverse. Simultáneamente, el flujo envía una tarjeta adaptativa a través de Microsoft Teams al analista de selección responsable, incluyendo opciones interactivas como “Aprobar a entrevista” o “Rechazar”.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img34.png", alt="" ).m-auto
      p.mb-5 La integración de IA dentro de este flujo permite automatizar actividades tradicionalmente repetitivas y fortalecer la eficiencia operativa en procesos de Gestión Humana.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img6.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Métrica de impacto estimada
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t3/img35.png', alt='').m-auto
        .col-xl
          .caja-1.mb-3(data-aos="fade-left")
            p.mb-0 La implementación de este flujo asistido por Inteligencia Artificial Generativa reduce significativamente los tiempos de revisión inicial de hojas de vida. Un proceso que tradicionalmente podía requerir aproximadamente diez minutos por documento puede ejecutarse en pocos segundos mediante automatización cognitiva.
          .row.justify-content-center.align-items-center.mb-0
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t2/img17.svg', alt='').m-auto
            .col-xl
              p.mb-0 Además de la optimización temporal, este enfoque favorece procesos de filtrado más consistentes y reduce sesgos preliminares relacionados con aspectos visuales o estructurales de las postulaciones.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img6.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Aplicación estratégica de la automatización cognitiva
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.ajuste-4(data-aos="fade-right")
            p La automatización apoyada por IA dentro de entornos corporativos permite:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Optimizar procesos repetitivos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Fortalecer la trazabilidad de la información.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Mejorar tiempos de respuesta organizacional.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Integrar análisis semántico en tiempo real.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Facilitar la toma de decisiones basada en datos.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img36.png', alt='').m-auto
      p.mb-5 Estas capacidades convierten a la automatización inteligente en un componente clave de los procesos de transformación digital empresarial. A continuación, se presenta un recurso audiovisual introductorio relacionado con el uso de Power Automate y la integración de componentes de IA en procesos automatizados.
      figure(data-aos="zoom-in")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/BUS-hpQHAVQ?si=QL4QTHqp6Qlk4Lk4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption #[b Video]. Orquestación de procesos con componentes IA mediante Power Automate

</template>

<script>
export default {
  name: 'Tema3',
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
