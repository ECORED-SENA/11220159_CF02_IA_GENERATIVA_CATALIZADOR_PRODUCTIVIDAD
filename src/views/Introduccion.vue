<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p Una vez dominada la interacción técnica mediante prompts, se debe transitar hacia una supervisión experta. En este componente se analizan criterios de calidad como #[b la coherencia, la originalidad y la utilidad], además de desarrollar habilidades para identificar fallos críticos como el #[i misgrounding] y las alucinaciones extrínsecas. También se exploran métodos de verificación post-hoc y el uso de agentes de IA para auditar resultados antes de su implementación final.
          .caja-1(data-aos="fade-right")
            p.mb-0 En el entorno productivo, el uso de la IA sin supervisión representa un riesgo asociado a la “#[b fabricación de autoridad]” y a posibles errores procesales. La capacidad de proponer ajustes en los flujos de trabajo y documentar procesos de configuración permite que la tecnología no sustituya el juicio humano, sino que lo fortalezca de manera segura y responsable.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/intro/img1.png', alt='').m-auto
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/intro/img2.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 El aprendizaje es eminentemente analítico y orientado a la resolución de problemas reales. El aprendiz utilizará herramientas de evaluación, como rúbricas y pruebas de comprensión, para diagnosticar comportamientos de la herramienta y registrar procedimientos según formatos técnicos establecidos.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
