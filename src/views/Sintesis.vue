<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.
      .row.justify-content-center
        .col-lg-10.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="Síntesis sobre supervisión, integración productiva y gobernanza de la IA generativa, con secciones de evaluación de calidad y validación técnica, diagnóstico de errores y mitigación de riesgos, ecosistemas y extensiones de productividad, y documentación y gobernanza. Incluye criterios técnicos, fundamentos, patrones de validación, errores críticos, ética y sesgos, técnicas de refinamiento, integración con herramientas como Microsoft 365 Copilot y agentes de IA, además de aspectos de privacidad, formalización y mejora continua.")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
