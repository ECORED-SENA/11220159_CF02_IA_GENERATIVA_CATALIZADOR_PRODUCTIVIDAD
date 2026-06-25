<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Diagnóstico de errores y mitigación de riesgos algorítmicos
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img1.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La implementación de la Inteligencia Artificial Generativa (IAG) en el flujo de trabajo requiere que el aprendiz no solo genere contenidos, sino que actúe como auditor crítico, capaz de identificar fallos en la respuesta de la máquina. El diagnóstico oportuno de errores técnicos y la aplicación de medidas correctivas son fundamentales para garantizar la seguridad digital y la integridad de la información.
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Tipología de errores críticos: alucinaciones y #[i misgrounding]
      p.mb-5 En el ecosistema de herramientas como Microsoft Copilot y ChatGPT, los errores no suelen ser de sintaxis, sino de veracidad y fundamentación. Por ello, es necesario distinguir dos comportamientos anómalos:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img2.jpg', alt="" ).m-auto
              h4.text-center Alucinación extrínseca
              .caja-3_p
                p.mb-0 También denominada fabricación. Ocurre cuando el modelo genera información que parece plausible, pero es completamente inventada, como leyes inexistentes o cifras ficticias que no figuran en el entrenamiento ni en los documentos proporcionados.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img3.jpg', alt="" ).m-auto
              h4.text-center #[i Misgrounding]
              .caja-3_p
                p.mb-0 También denominado fallo de anclaje. Es un error de interpretación del contexto: el modelo tiene la información correcta en el documento, por ejemplo, un PDF en SharePoint, pero al procesarla extrae conclusiones erróneas o ignora restricciones específicas dadas en el #[i prompt].
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-10
          .caja-4.mb-0(data-aos="flip-up")
            .row.align-items-center
              .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/t1/img8.svg', alt='' style="width: 75px").m-auto
              .col-xl.col-md-10
                p.mb-0 Distinguir estos errores permite aplicar acciones correctivas más precisas y reducir riesgos asociados a decisiones basadas en información no verificada.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img6.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo: detección de misgrounding en un análisis de datos en Excel
      p.mb-5 El siguiente caso permite comprender cómo identificar y corregir un fallo de anclaje en una tarea de análisis de datos:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Escenario")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img4.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Escenario
              p.mb-0 Un aprendiz utiliza Copilot en Excel para identificar el “proyecto con mayor presupuesto” en una hoja de cálculo de 50 filas.
        .py-3.py-md-4(titulo="Fallo detectado")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img5.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Fallo detectado
              p.mb-0 La IA señala el “Proyecto A”, con un valor de 5.000 USD, e ignora que el “Proyecto B” tiene un valor de 12.000 USD en la misma columna.
        .py-3.py-md-4(titulo="Diagnóstico")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img6.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Diagnóstico
              p.mb-0 El aprendiz identifica un fallo de #[i misgrounding], debido a que el modelo no procesó correctamente el rango completo de datos.
        .py-3.py-md-4(titulo="Acción correctiva")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img7.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Acción correctiva
              p.mb-0 Se refina la instrucción mediante el siguiente comando: “Analiza el rango A1:H50 y ordena los valores de la columna Ingreso de mayor a menor antes de responder”.
      p.mb-0 Este procedimiento fortalece la capacidad del aprendiz para auditar respuestas generadas por IA, detectar errores de interpretación y aplicar instrucciones más precisas para mejorar la calidad del resultado.
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Detección de sesgos y ética en la respuesta
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p #[b Los modelos de lenguaje] pueden reflejar #[b sesgos algorítmicos] derivados de los datos utilizados durante su entrenamiento. Como consecuencia, algunas respuestas pueden presentar interpretaciones parcializadas, discriminatorias o alejadas de principios éticos y normativos.
          .caja-1(data-aos="fade-right")
            p.mb-0 El profesional que utiliza herramientas de Inteligencia Artificial Generativa (IAG) debe evaluar las respuestas bajo criterios de #[b transparencia, responsabilidad y respeto] por los derechos fundamentales. En este contexto, plataformas como Claude implementan enfoques de “IA Constitucional”, un marco mediante el cual el modelo evalúa sus respuestas frente a principios éticos predefinidos para reducir salidas tóxicas, discriminatorias o sesgadas.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img8.png', alt='').m-auto
      .bg-2
        .px-5
          p.mb-5 En entornos corporativos y educativos, resulta indispensable garantizar que las respuestas generadas por IA:
          .row.justify-content-center.align-items-center.mb-5
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t2/img9.png', alt='').m-auto
            .col-xl
              .row.justify-content-center
                .col-xl-6.mb-3.mb-lg-0
                  .caja-8(data-aos="flip-up").mb-3
                    .row.align-items-center
                      .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                        figure
                          img(src='@/assets/curso/temas/t2/img10.svg', alt='' style="width: 75px").m-auto
                      .col-xl.col-md-10
                        p.mb-0 Respeten el derecho de #[i habeas data]. 
                  .caja-8(data-aos="flip-up").mb-3
                    .row.align-items-center
                      .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                        figure
                          img(src='@/assets/curso/temas/t2/img10.svg', alt='' style="width: 75px").m-auto
                      .col-xl.col-md-10
                        p.mb-0 No promuevan estereotipos. 
                  .caja-8(data-aos="flip-up").mb-0
                    .row.align-items-center
                      .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                        figure
                          img(src='@/assets/curso/temas/t2/img10.svg', alt='' style="width: 75px").m-auto
                      .col-xl.col-md-10
                        p.mb-0 Eviten sesgos en procesos de selección. 
                .col-xl-6
                  .caja-8(data-aos="flip-up").mb-3
                    .row.align-items-center
                      .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                        figure
                          img(src='@/assets/curso/temas/t2/img10.svg', alt='' style="width: 75px").m-auto
                      .col-xl.col-md-10
                        p.mb-0 Mantengan neutralidad en actividades formativas. 
                  .caja-8(data-aos="flip-up").mb-0
                    .row.align-items-center
                      .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                        figure
                          img(src='@/assets/curso/temas/t2/img10.svg', alt='' style="width: 75px").m-auto
                      .col-xl.col-md-10
                        p.mb-0 Reduzcan riesgos de discriminación algorítmica.
          p.mb-5 La supervisión humana continúa siendo fundamental para validar la integridad ética de los resultados generados por sistemas de IA. Los principales riesgos éticos en respuestas generadas por IA: 
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-6.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t2/img11.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Sesgo algorítmico
                  p.mb-0.text-center El modelo reproduce patrones discriminatorios presentes en los datos de entrenamiento.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-6.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t2/img12.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Discriminación indirecta
                  p.mb-0.text-center Las respuestas favorecen o excluyen determinados grupos sin una justificación objetiva.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-6.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t2/img13.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Vulneración de datos personales
                  p.mb-0.text-center La IA utiliza o interpreta información sensible sin controles adecuados de privacidad.
            .col-xl-3.col-md-9(data-aos="zoom-in")
              .caja-6.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t2/img14.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Falta de transparencia
                  p.mb-0.text-center El usuario no puede identificar el origen o la lógica detrás de una respuesta generada.   
      p.mb-0 La identificación temprana de estos riesgos permite implementar estrategias de mitigación y fortalecer un uso responsable de la IA en contextos organizacionales.
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Refinamiento iterativo (#[i Follow-up Prompts])
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.ajuste-2(data-aos="fade-right").mb-4
            p.mb-0 La calidad de las respuestas generadas por IA puede incrementarse mediante #[b técnicas de refinamiento progresivo] del #[i prompt]. Cuando la primera salida de herramientas como Microsoft Copilot o Gemini resulta superficial o incompleta, es recomendable #[b formular una segunda instrucción] orientada a cuestionar, ampliar o verificar la respuesta inicial.
          .row.justify-content-center.align-items-center.mb-0
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img17.svg', alt='').m-auto
            .col-xl.mb-4.mb-lg-0
              p.mb-0 En entornos avanzados, esta práctica se conoce como “#[b #[i prompting] acusatorio]”, debido a que induce al modelo a revisar nuevamente sus fuentes, evaluar su razonamiento y fortalecer la coherencia lógica de sus argumentos.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img15.png', alt='').m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img6.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Técnica de reflexión
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img16.png', alt='').m-auto
        .col-xl
          p Una de las estrategias más efectivas consiste en solicitar que el modelo revise críticamente su propia respuesta. 
          .caja-1.mb-3(data-aos="fade-left")
            h5.mb-0 Por ejemplo:
            p.mb-0 “Evalúa tu respuesta anterior. ¿He incluido todos los riesgos mencionados en el manual? Si falta alguno, agrégalo ahora”.
          .row.justify-content-center.align-items-center.mb-0
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t2/img17.svg', alt='').m-auto
            .col-xl
              p.mb-0 Este enfoque favorece procesos de autoverificación y mejora la precisión factual de la información generada.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img6.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Caso de uso: mejora de un informe de capacitación en Word
      p.mb-5 El siguiente escenario ejemplifica la aplicación del refinamiento iterativo en tareas organizacionales:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Escenario
                  p.mb-0 Un usuario solicita a Microsoft Copilot resumir una capacitación en Word. La IA genera inicialmente tres puntos genéricos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img18.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Acción
                  p.mb-0 El usuario aplica un #[i follow-up prompt] con la siguiente instrucción: “Esta respuesta es demasiado vaga. Revisa nuevamente el capítulo ‘Resultados Medibles’ del documento y extrae los porcentajes exactos de aprobación. Usa un tono más institucional”.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img19.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Resultado
                  p.mb-0 La IA genera una versión mejorada, incorporando precisión factual y el formato requerido por la dirección organizacional.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img20.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 El refinamiento iterativo fortalece la calidad de las respuestas y promueve procesos más rigurosos de validación técnica y documental.
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Protocolos de silencio estratégico y abstención
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p Para reducir el riesgo de “fabricación de autoridad”, es recomendable configurar las herramientas de IA para que se abstengan de responder cuando no dispongan de evidencia suficiente en el corpus documental proporcionado.
          .caja-1.mb-3(data-aos="fade-right")
            p Los protocolos de silencio estratégico permiten que el modelo reconozca límites en la información disponible y evite generar afirmaciones no verificadas o potencialmente falsas. Esta práctica resulta especialmente relevante en sectores donde la precisión documental es crítica, como:
            .row.mb-0
              .col-xl-4
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Jurídico
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Salud
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Financiero
              .col-xl-4
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Administrativo
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Gubernamental
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img21.png', alt='').m-auto
      .bg-1
        .px-5
          .row.justify-content-center.align-items-center.mb-5
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img17.svg', alt='').m-auto
            .col-xl.mb-4.mb-lg-0
              p.mb-0 La integración de mandatos de abstención dentro de las instrucciones funcionales fortalece la confiabilidad de la IA y reduce riesgos asociados a desinformación o interpretación incorrecta de datos. La aplicación de protocolos de silencio estratégico permite establecer límites claros en las respuestas generadas por IA, fortaleciendo la confiabilidad de la información y reduciendo riesgos asociados a contenido no verificado.
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-9.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t2/img22.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Objetivo
                  p.mb-0.text-center Evitar que la IA genere respuestas sin evidencia suficiente o con información no verificada.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-9.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t2/img23.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Estrategia
                  p.mb-0.text-center Incorporar instrucciones explícitas para que el modelo indique cuando no posee datos suficientes para responder.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-9.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t2/img24.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Beneficio
                  p.mb-0.text-center Reduce alucinaciones factuales y fortalece la confiabilidad del sistema.
            .col-xl-3.col-md-9(data-aos="zoom-in")
              .caja-9.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t2/img25.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Aplicación práctica
                  p.mb-0.text-center Consultas jurídicas, análisis financieros, revisión documental y procesos de auditoría técnica.
          p.mb-5 A continuación, se presenta un ejemplo de #[i prompt] orientado a solicitar silencio estratégico o abstención cuando la IA no disponga de información suficiente para responder de manera confiable.
          .row.justify-content-center.mb-0
            .col-xl-10
              .caja-5.p-5.text-white(data-aos="flip-up")
                p.mb-0 Utiliza únicamente la información adjunta. Si la respuesta no se encuentra en el texto, indica explícitamente: 'No poseo información suficiente para responder' y no generes una respuesta basada en datos externos.

</template>

<script>
export default {
  name: 'Tema2',
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
