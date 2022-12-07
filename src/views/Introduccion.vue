<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info

      h1 Introducción
    .bg-gradient-izq.mn.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
          p El presente componente 
            span(style="background-color: #fff5c5 ") pretende instruir al aprendiz sobre la investigación de accidentes de tránsito, desde su parte conceptual, hasta su análisis técnico, con el fin de formar competencias cognitivas prácticas para el estudio detallado de la accidentología vial.
            br
            br
            |Las actuaciones en casos de accidentes de tránsito están enmarcadas en los parámetros normados de la Ley y en procedimientos judiciales.

          p.fw-bold En el siguiente video se comprende de manera genérica, así: 
        .col-lg-5.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/intro/1.svg', alt='')
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/h6gRMbwgPtU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
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
