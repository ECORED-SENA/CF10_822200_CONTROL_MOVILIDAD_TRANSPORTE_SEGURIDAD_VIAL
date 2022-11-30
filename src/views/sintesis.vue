<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 El presente contenido formativo logra presentar los aspectos generales que, sobre los accidentes de tránsito, principalmente aspectos normativos sobre la atención de accidentes de solo daños materiales y los procedimientos judiciales necesarios para atender los accidentes de tránsito con personas lesionadas o fallecidas, analizando los protocolos más importantes para la atención de accidentes como las actuaciones del primer responsable y del coordinador del procedimiento judicial o los procedimientos de documentación topográfica, fotográfica y descriptiva que son la base de una investigación penal. A continuación se representa en el siguiente diagrama:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
