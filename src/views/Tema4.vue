<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Documentación técnica, gobernanza y mejora continua
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img1.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La fase final de integración de la Inteligencia Artificial Generativa (IAG) en el sector productivo consiste en la formalización y control institucional del conocimiento generado. En este contexto, el aprendiz debe trascender la operación individual para participar en procesos de documentación técnica y gobernanza de datos, garantizando que el uso de la IA sea trazable, seguro y alineado con el marco legal colombiano.
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Registro estructurado de procesos de configuración y operación
      p.mb-5 A continuación, se presenta un pódcast sobre la importancia del registro estructurado en los sistemas de inteligencia artificial dentro de las organizaciones, destacando su papel en la trazabilidad, auditoría técnica, mejora continua y control organizacional.
      .row.align-items-center.m-0.mb-0
        .col-xl
          .row.align-items-center.justify-content-center.caja-11(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t4/img2.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="Importancia del registro estructurado y la trazabilidad en sistemas de Inteligencia Artificial"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t4/img3.png" ).m-auto
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Gobernanza, privacidad y soberanía de datos (Ley 1581 y EDP)
      p.mb-5 La gobernanza de datos en entornos de IAG exige el cumplimiento estricto de las normas relacionadas con #[b protección de datos personales en Colombia], especialmente la Ley 1581 de 2012 y el derecho constitucional de habeas data.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.mb-3.ajuste-2(data-aos="fade-right")
            p.mb-0 El profesional encargado de implementar soluciones de IA debe asegurar que la información sensible no sea expuesta a #[b procesos de reentrenamiento] en modelos públicos ni utilizada fuera de las políticas de seguridad organizacional.
          .row.justify-content-center.align-items-center.mb-0
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img17.svg', alt='').m-auto
            .col-xl.mb-4.mb-lg-0
              p.mb-0 Dentro del ecosistema de Microsoft 365, se aplica el concepto de #[i Enterprise Data Protection] (EDP), mecanismo que garantiza que los datos procesados por Microsoft Copilot permanezcan dentro de la frontera de #[b seguridad corporativa] y no sean utilizados para mejorar modelos externos.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img4.png', alt='').m-auto
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img5.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Como práctica recomendada, se debe implementar #[b anonimización proactiva] antes de suministrar documentos a modelos de lenguaje masivo (LLM), reemplazando datos identificables por términos genéricos. De esta manera, se fortalece la protección de la información sensible y se reducen riesgos asociados al tratamiento inadecuado de datos personales.
      p.mb-5 Para garantizar un uso responsable de la Inteligencia Artificial en entornos organizacionales, es fundamental implementar prácticas orientadas a la protección de datos y al cumplimiento normativo: 
      .row.justify-content-center.mb-5
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-6.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t4/img6.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Anonimización de información
              p.mb-0.text-center Evitar exposición de datos personales sensibles.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-6.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t4/img7.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Control de permisos
              p.mb-0.text-center Restringir accesos según perfiles y responsabilidades.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-6.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t4/img8.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Protección de historiales
              p.mb-0.text-center Impedir que conversaciones institucionales sean utilizadas para entrenamiento externo.
        .col-xl-3.col-md-9(data-aos="zoom-in")
          .caja-6.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t4/img9.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Validación de cumplimiento normativo
              p.mb-0.text-center Garantizar alineación con Ley 1581 y políticas organizacionales.
      p.mb-5 Estas medidas fortalecen la soberanía de datos y reducen riesgos asociados al tratamiento indebido de información personal.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img6.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Caso de uso: tratamiento de datos en talento humano
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          p El siguiente escenario ejemplifica la aplicación práctica de #[b protocolos de privacidad y gobernanza]:
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Escenario:] se requiere utilizar IA para resumir cincuenta hojas de vida de candidatos externos.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Proceso técnico:] antes de cargar los archivos, el responsable de IA ejecuta un proceso de anonimización eliminando números de identificación y direcciones específicas para cumplir con la Ley 1581.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Validación:] se verifica que la cuenta institucional tenga activos los mecanismos de privacidad que impiden el almacenamiento del historial de conversaciones para entrenamiento.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Resultado:] se optimiza el proceso de reclutamiento sin vulnerar la privacidad ni los derechos de los titulares de los datos. 
          .caja-1(data-aos="fade-right")
            p.mb-0 Este procedimiento fortalece el uso ético y seguro de la IA en procesos organizacionales relacionados con gestión humana.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img10.png', alt='').m-auto
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 Elaboración de guías de buenas prácticas y manuales de uso
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.mb-3.ajuste-3(data-aos="fade-right")
            p Para garantizar una productividad homogénea y responsable, las organizaciones deben estandarizar el uso de la IAG mediante guías de buenas prácticas adaptadas a diferentes áreas funcionales, como:
            .row.mb-0
              .col-xl-4
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Administrativa
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Técnica
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Académica
              .col-xl-4
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Jurídica
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Operativa
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img11.png', alt='').m-auto
      .bg-1
        .px-5
          p.mb-5 Estos documentos deben incorporar lineamientos éticos y técnicos relacionados con transparencia, supervisión humana y validación de contenidos generados por IA. Un manual de uso efectivo debe contemplar los siguientes elementos:
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-9.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t4/img12.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Instrucciones funcionales
                  p.mb-0.text-center Orientar búsquedas complejas y estructuración de #[i prompts].
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-9.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t4/img13.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Protocolos de verificación ética
                  p.mb-0.text-center Validar cifras, afirmaciones y fuentes utilizadas por la IA.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-9.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t4/img14.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Uso de delimitadores y estructuras avanzadas
                  p.mb-0.text-center Mejorar precisión y coherencia de los resultados generados.
            .col-xl-3.col-md-9(data-aos="zoom-in")
              .caja-9.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t4/img15.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Directrices de transparencia
                  p.mb-0.text-center Informar cuándo un contenido fue generado o apoyado por IA.
          p.mb-5 La estandarización de prácticas fortalece la calidad institucional y promueve un uso responsable de la tecnología.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img6.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Caso de uso: manual de estilo para instructores SENA 
          p.mb-5 El siguiente ejemplo presenta una aplicación institucional de buenas prácticas:
          .row.align-items-center.mb-5
            .col-xl-auto(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/t4/img16.png", alt="" ).m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
                .row(titulo="Escenario").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 El área académica desarrolla una guía para el uso de ChatGPT y Microsoft Copilot en la creación de materiales pedagógicos.
                .row(titulo="Concepto aplicado").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Implementación de una guía de buenas prácticas institucionales.
                .row(titulo="Contenido").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 La guía establece que todo examen generado mediante IA debe ser validado por un docente experto y acompañado de una #[i Fact-Check List] de las fuentes bibliográficas utilizadas.
                .row(titulo="Resultado").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Producción de materiales pedagógicos con equilibrio entre eficiencia algorítmica y rigor académico.
          p.mb-0 Estas estrategias fortalecen la calidad educativa y consolidan procesos responsables de integración tecnológica.
      Separador
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.4 Auditoría #[i post-hoc] y supervisión humana experta
      .bg-1
        .px-5
          p.mb-5 El cierre del ciclo de mejora productiva en sistemas de IA corresponde a la auditoría post-hoc. Debido a que los modelos de lenguaje masivo operan bajo principios probabilísticos, siempre existe un riesgo residual de error, incluso en sistemas avanzados. Por esta razón, los entornos de alto impacto requieren supervisión humana especializada que actúe como mecanismo final de control de calidad. La auditoría post-hoc permite:
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-9.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t4/img17.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Validación de resultados
                  p.mb-0.text-center Confirmar coherencia y precisión de las respuestas generadas.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-9.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t4/img18.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Detección de inconsistencias
                  p.mb-0.text-center Identificar alucinaciones, sesgos o errores de interpretación.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-9.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t4/img19.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Reflexión y mejora continua
                  p.mb-0.text-center Utilizar resultados previos para optimizar futuras interacciones con IA.
            .col-xl-3.col-md-9(data-aos="zoom-in")
              .caja-9.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t4/img20.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Fortalecimiento organizacional
                  p.mb-0.text-center Consolidar bases de conocimiento institucional más precisas y confiables.
          .row.justify-content-center.align-items-center.mb-0
            .col-xl.mb-4.mb-lg-0
              .caja-1.mb-3.ajuste-2(data-aos="fade-right")
                p.mb-0 Se recomienda complementar este proceso mediante modelos secundarios de verificación lógica y técnicas de reflexión, donde una IA revisa críticamente la respuesta generada por otra. El objetivo final consiste en convertir cada interacción con sistemas de IA en una oportunidad de aprendizaje organizacional y fortalecimiento de capacidades institucionales.
              .row.justify-content-center.align-items-center.mb-0
                .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/t2/img17.svg', alt='').m-auto
                .col-xl
                  p.mb-0 Se invita al aprendiz a revisar el siguiente podcast, generado con apoyo de Inteligencia Artificial, el cual sintetiza los principales contenidos del componente formativo 2. Este recurso aborda buenas prácticas en IA, evaluación de calidad, validaciones técnicas, mitigación de errores y estrategias de aplicación avanzada más allá del uso convencional de asistentes conversacionales.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t4/img21.png', alt='').m-auto

</template>

<script>
import audio1 from '@/assets/curso/podcast/ia.mp3'
export default {
  name: 'Tema4',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
