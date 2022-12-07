<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Accidentes de tránsito con heridos o muertos
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5.px-5(titulo="Ley 769 Art. 3 de 2002" :icono="require('@/assets/curso/temas/tema2/2.svg')" style='background-color: #fffaf2')
        .row
          .col-lg-6.mb-4.mb-md-0
            h4 Ley 769 Art. 3 de 2002:
            p En los casos donde se presenten hechos punibles en accidentes viales en Colombia, las autoridades operativas de tránsito en sus cuerpos de Agentes de tránsito y personal de la Dirección de Tránsito y Transporte de la Policía Nacional y donde no existiere autoridad operativa, las autoridades administrativas serán las encargadas de llevar a cabo el procedimiento de policía judicial, con arreglo a la Ley 906 “Código de procedimiento penal”, cumpliendo los protocolos de criminalística de campo para realizar los actos urgentes. 
          .col-lg-6: img(src='@/assets/curso/temas/tema2/1.png', alt='')
      .py-4.py-md-5.px-5(titulo="Ley 769 Art, 149 de 2002" :icono="require('@/assets/curso/temas/tema2/2.svg')" style='background-color: #fffaf2')
        div
          h4 Ley 769 Art, 149 de 2002:
          p Se deberá diligenciar el informe policial de accidentes de tránsito, siguiendo estrictamente las indicaciones estipuladas por el “Manual para el diligenciamiento del informe policial de accidentes de tránsito” avalado por la Resolución 0011268 de 2012. 
            br
            br
            | Es importante mencionar que esta norma también obliga a la autoridad que atiende el hecho punible en accidente de tránsito a enviar las partes implicadas (conductores) a la realización de la prueba de embriaguez y de no realizar dicho procedimiento sin causa justificada, esta omisión será considerada como falta disciplinaria grave. 
            br
            br
            | La atención de estos casos debe dar prioridad a la protección de los derechos fundamentales de las víctimas e involucrados donde el derecho a la vida prima sobre los demás, la atención pre hospitalaria, el traslado de heridos y salvaguardar a todos los que estén en el lugar de los hechos es prioridad como autoridad de tránsito.
            br
            br
            | Cuando se realice el Informe Policial de Accidente de Tránsito o el croquis, el funcionario deberá entregar estos documentos inmediatamente a los interesados y a la autoridad competente en materia penal que es la fiscalía, acotando que la Ley indica claramente que su omisión será considerada como causal de mala conducta. 
            br
            br
            | Luego del procesamiento de la escena cumpliendo los protocolos de criminalística y del correcto diligenciamiento del IPAT, la autoridad de tránsito debe diligenciar los formatos de policía judicial, llevar a los conductores a la práctica del examen de embriaguez y poner las evidencias bajo cadena de custodia y llevarlas al almacén de evidencias de la fiscalía general de la nación.
    //TODO agregar iconos
    .tarjeta-iconos(style="background-color: #ffd8a5").p-3.position-relative
      .adorno__1.d-none.d-lg-block: img(src='@/assets/curso/temas/tema2/a1.svg', alt='' )
      .adorno__2.d-none.d-lg-block: img(src='@/assets/curso/temas/tema2/a2.svg', alt='')
      p.px-5.mb-0 Es por este motivo que en accidentes de tránsito, el arma con el cual se ocasionan lesiones u homicidios son los vehículos los cuales deben ir al parqueadero autorizado por la fiscalía y será la fiscalía la que haga entrega del elemento una vez realizado el procedimiento técnico.
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1. Aspectos normativos que regulan el accidente de tránsito

    .d-inline-block(style="background-color: #ffd817").p-2.justify-content-center.m-auto.mb-3
        h4.mb-0 Accidente de tránsito de solo daños materiales 
    br
    .titulo-senal.d-inline-block.p-2.mb-4
      img(src='@/assets/curso/temas/tema1/senal.svg', alt='' style='width: 34px')
      h3.text-white.mb-0.ms-4 Artículo 143 Ley 769 de 2002:
    .row.justify-content-center.align-items-end.mb-5
      .col-lg-9(data-aos="fade-right")
        p El procedimiento para la atención de accidentes de tránsito de solo daños materiales donde se causen daños materiales en los que resulten afectados vehículos asegurados no asegurados, inmuebles, cosas o semovientes, fue recientemente actualizado extractando los nuevos amparos jurídicos establecidos en el artículo 143 de la Ley 769 así:
          br
          br
          span.fst-italic(style="background-color: #fff5c5 ") “… los conductores, entidades aseguradoras y demás interesados en el accidente recaudará todas las pruebas relativas a la colisión mediante la utilización de herramientas técnicas y tecnológicas, que permitan la atención del mismo en forma oportuna, segura y que garantice la autenticidad, integridad, conservación y posterior consulta  y uso probatorio de la información. Para tal efecto, el material probatorio recaudado con estas condiciones reemplazará el informe de accidente de tránsito que expide la autoridad competente”.
          br
          br
          | Ley 2251 artículo 16 de 2022:
          br
          br
          span.fst-italic(style="background-color: #fff5c5 ") “… los conductores deben retirar inmediatamente los vehículos colisionados y todo elemento que pueda interrumpir el tránsito y acudir a los centros de conciliación debidamente autorizados por el Ministerio de Justicia y del Derecho. Si fracasa la conciliación, cualquiera de las partes puede acudir a los demás mecanismos de acceso a la justicia. Para tal efecto, no será necesaria la expedición del informe de accidente de tránsito, ni la presencia de autoridad de tránsito en la respectiva audiencia de conciliación”.
          br
          br
          | Lo anterior busca descongestionar y agilizar los procedimientos, donde ahora los conductores no requieren la presencia de la autoridad de tránsito para el diligenciamiento del IPAT, solo tomarán ellos mismos los tomar datos y remitirse a un centro de conciliación para solucionar el impase.  
        .titulo-senal.d-inline-block.p-2.mb-4
          img(src='@/assets/curso/temas/tema1/senal.svg', alt='' style='width: 34px')
          h3.text-white.mb-0.ms-4 Artículo 144 de la Ley 769 del 2002:
        p Sobre el Informe Policial se encuentra vigente, y establece que “…en los casos en que no fuere posible la conciliación entre los conductores, el agente de tránsito que conozca el hecho levantará un informe descriptivo de sus pormenores, con copia inmediata a los conductores, quienes deberán suscribirlas, y si éstos se negaren a hacerlo bastará la firma de un testigo mayor de edad”, por lo que será el deber de la autoridad de tránsito que llegue a conocer el hecho asesorar a los conductores en la toma de la información para que vayan a un centro de conciliación con las evidencias, pero también según el caso, apoyar esta labor de toma de información diligenciando el IPAT. 
      .col-lg-3.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/5.svg', alt='')
    h4(data-aos="fade-right").mb-5
      span(style="background-color: #ffd817").p-3 Personas lesionadas o fallecidas
    .titulo-senal.d-inline-block.p-2.mb-4
      img(src='@/assets/curso/temas/tema1/senal.svg', alt='' style='width: 34px')
      h3.text-white.mb-0.ms-4 Código Nacional  de tránsito Ley 769 de 2002 Art. 148:
    .cajon-2
      .cajon-b.color-primario.p-3.mb-5.arriba-derecha
        .row.justify-content-center.align-items-center
          .col-lg-11.mb-lg-0.mb-3 
            p.mb-0 Por otra parte, el accidente de tránsito donde haya personas lesionadas o fallecidas debe ser atendido siguiendo los protocolos de policía judicial y puesto de manera inmediata a disposición de la Fiscalía General de la Nación en la jurisdicción donde haya ocurrido el hecho, siendo el deber de las autoridades de tránsito realizar el procedimiento, por esto es necesario recordar quiénes son las autoridades de tránsito en cada jurisdicción así:
          .col-lg-1.col-4: img(src='@/assets/curso/temas/tema2/6.svg', alt='')
    .bg-c-2.movil1.mn
      .row.justify-content-center.mb-5
        .col-lg-8
          .d-lg-block.d-md-block.d-none.mb-5
            img(src='@/assets/curso/temas/tema2/7.svg', alt='')
          .d-lg-none.d-md-none.d-block.mb-5
            img(src='@/assets/curso/temas/tema2/8.svg', alt='')
    h4(data-aos="fade-right").mb-5
      span(style="background-color: #ffd817").p-3 Policía Judicial
    .titulo-senal.d-inline-block.p-2.mb-4
      img(src='@/assets/curso/temas/tema1/senal.svg', alt='' style='width: 34px')
      h3.text-white.mb-0.ms-4 Código penal Ley 599/2000 y el Código de Procedimiento Penal Ley 906 /2004:
    .cajon-1
      .cajon-b.color-primario.p-3.mb-5
        .row.justify-content-center.align-items-center
          .col-lg-1.col-3.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema2/9.svg', alt='')
          .col-lg-11.mb-lg-0.mb-3 
            p.mb-0 Las autoridades de tránsito al tener las funciones de policía judicial de manera permanente dentro de su competencia, están en la obligación de cumplir todos los aspectos normativos.
    h4(data-aos="fade-right").mb-5
      span(style="background-color: #ffd817").p-3 Seguridad y salud en el trabajo
    .titulo-senal.d-inline-block.p-2.mb-4
      img(src='@/assets/curso/temas/tema1/senal.svg', alt='' style='width: 34px')
      h3.text-white.mb-0.ms-4 Resolución 20223040040595 del 12 de julio de 2022, Ministerio de Transporte:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/10.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p.mb-0 Las normas de seguridad y salud en el trabajo aplicado a eventos de tránsito, la cual adopta la metodología para el diseño , implementación y verificación de los planes estratégicos de seguridad vial, estableciendo que todas las entidades que cuenten para su funcionamiento con diez (10) o más vehículos automotores, están obligadas a desarrollar planes estratégicos de seguridad vial en función de su misionalidad y tamaño, el cual debe estar articulado con el sistema de gestión de seguridad y salud en el trabajo SGSST quienes verificarán el cumplimiento del mismo en cada organización.
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2. Procedimientos judiciales para desarrollar los actos urgentes
    LineaTiempoD.color-acento-contenido.mb-5
      .row(numero="1" titulo="Ley 906 Artículo 202")
        .col-lg-11.mb-lg-0.mb-3
          p.mb-0  Los procedimientos judiciales hacen referencia a todas las actuaciones de los servidores e investigadores en condición de autoridad de tránsito (DITRA, agente de tránsito, inspector de policía, corregidor), que tienen funciones de policía judicial en accidentes de tránsito, donde haya personas lesionadas o fallecidas, por lo tanto, todos sus procedimientos se encuentran protocolizados a través de la Fiscalía General de la Nación.
        .col-lg-1.col-4: img(src='@/assets/curso/temas/tema2/11.svg', alt='')
      .row(numero="2" titulo="Código de Procedimiento Penal Artículo 205")
        .col-lg-11.mb-lg-0.mb-3
          p.mb-0  Los actos urgentes hacen referencia a todas las actuaciones por parte de las autoridades para atender el hecho punible, bien sea accidente con heridos o con personas fallecidas, estando estos actos reglamentados jurídicamente en el que reglamenta lo siguiente:
            br
            br
            |La finalidad de los actos urgentes es recolectar y embalar todos y cada uno de los elementos materiales de prueba y evidencias físicas (EMP Y EF) encontradas en el lugar de los hechos, por lo que debe realizarse una documentación descriptiva, fotográfica y topográfica del lugar y las evidencias para su posterior análisis forense.
            br
            br
            |La norma también establece que cuando deba practicarse examen médico-legal a la víctima o al indiciado, por ejemplo, descripción de lesiones o examen de embriaguez, necropsia entre otros, es deber de la autoridad trasladar las personas al centro médico oficial y autorizado por la fiscalía para desarrollar el procedimiento, entendiendo que el código de tránsito establece obligatoria la obligación de realizar el examen de embriaguez a los conductores inmersos en un accidente de tránsito.
        .col-lg-1.col-4: img(src='@/assets/curso/temas/tema2/11.svg', alt='')
      .row(numero="3" titulo="Ley 906 de 2004, Artículos 254 a 266 y Manual Único de Policia Judicial")
        .col-lg-11.mb-lg-0.mb-3
          p.mb-0 Para desarrollar la actividad de policía judicial, la Fiscalía General de la Nación estableció normas generales para las entidades que tienen estas funciones, estableciendo un manual de cadena de custodia y acompañados de protocolos sobre las actuaciones y formatos de Policía Judicial (FPJ) para diligenciar al momento de los hechos, presentando la siguiente imagen que presenta los principales procedimientos y formatos a tener en cuenta para la atención de un accidente de tránsito. 
        .col-lg-1.col-4: img(src='@/assets/curso/temas/tema2/11.svg', alt='')
    .mn(style="background-color: #f9f9f9")
      img(src='@/assets/curso/temas/tema2/12.png', alt='')
      .row.justify-content-center
        .col-lg-5.mb-lg-0.mb-3
          .tarjeta.p-4(style="background-color: #fff5c5").h-100
            .rounded-pill(style="background-color: #000000").d-inline-block.p-2.px-3.mb-3
              h5.text-white.mb-0.d-inline-block PROTOCOLOS FGN
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta.py-3.px-0(style="background-color: #ffd817; width: 88px")
                  span(style="color: black").text-small.m-0 010 
                | Observación y análisis de lugar de los hechos

              li
                .lista-ol--cuadro__vineta.py-3.px-0(style="background-color: #ffd817; width: 88px")
                  span(style="color: black").text-small.m-0  013  
                | Protección preservación y entrega Lugar H.
              li
                .lista-ol--cuadro__vineta.py-3.px-0(style="background-color: #ffd817; width: 88px")
                  span(style="color: black").text-small.m-0  016
                | Inspección a lugar de los hechos y/o cadáver
              li
                .lista-ol--cuadro__vineta.py-3.px-0(style="background-color: #ffd817; width: 88px")
                  span(style="color: black").text-small.m-0  018
                | Medidas de bioseguridad
              li
                .lista-ol--cuadro__vineta.py-3.px-0(style="background-color: #ffd817; width: 88px")
                  span(style="color: black").text-small.m-0  020
                | Fijación fotográfica
              li
                .lista-ol--cuadro__vineta.py-3.px-0(style="background-color: #ffd817; width: 88px")
                  span(style="color: black").text-small.m-0  023
                | Fijación topográfica
              li
                .lista-ol--cuadro__vineta.py-3.px-0(style="background-color: #ffd817; width: 88px")
                  span(style="color: black").text-small.m-0  028
                | Entrevistas
              li
                .lista-ol--cuadro__vineta.py-3.px-0(style="background-color: #ffd817; width: 88px")
                  span(style="color: black").text-small.m-0  050
                | Registro cadena de custodia
            img(src='@/assets/curso/temas/tema2/13.jpg', alt='')
        .col-lg-7
          .tarjeta.p-4(style="background-color: #fff5c5").h-100
            .rounded-pill(style="background-color: #000000").d-inline-block.p-2.px-3.mb-3
              h5.text-white.mb-0.d-inline-block FORMATOS FPJ BLANCO
            .row.justify-content-center.mb-5
              .col-lg-6
                ol.lista-ol--cuadro
                  li
                    .lista-ol--cuadro__vineta.py-3.px-0(style="background-color: #ffd817; width: 88px")
                      span(style="color: black").text-small.m-0 FPJ 1  
                    |Reporte de inicio
                  li
                    .lista-ol--cuadro__vineta.py-3.px-0(style="background-color: #ffd817; width: 88px")
                      span(style="color: black").text-small.m-0 FPJ 2
                    | Formato único de noticia criminal   
                  li
                    .lista-ol--cuadro__vineta.py-3.px-0(style="background-color: #ffd817; width: 88px")
                      span(style="color: black").text-small.m-0 FPJ 3
                    |Informe ejecutivo    
                  li
                    .lista-ol--cuadro__vineta.py-3.px-0(style="background-color: #ffd817; width: 88px")
                      span(style="color: black").text-small.m-0 FPJ 4 
                    |Primer responsable    
                  li
                    .lista-ol--cuadro__vineta.py-3.px-0(style="background-color: #ffd817; width: 88px")
                      span(style="color: black").text-small.m-0 FPJ 5 
                    |Captura en flagrancia    
                  li
                    .lista-ol--cuadro__vineta.py-3.px-0(style="background-color: #ffd817; width: 88px")
                      span(style="color: black").text-small.m-0 FPJ 6
                    | Derechos del capturado   
                  li
                    .lista-ol--cuadro__vineta.py-3.px-0(style="background-color: #ffd817; width: 88px")
                      span(style="color: black").text-small.m-0 FPJ 7 
                    | Rótulo EMP Y EF   
                  li
                    .lista-ol--cuadro__vineta.py-3.px-0(style="background-color: #ffd817; width: 88px")
                      span(style="color: black").text-small.m-0 FPJ 8
                    | Registro cadena de custodia.   
                  li
                    .lista-ol--cuadro__vineta.py-3.px-0(style="background-color: #ffd817; width: 88px")
                      span(style="color: black").text-small.m-0 FPJ 9
                    |Inspección a lugar
                  li
                    .lista-ol--cuadro__vineta.py-3.px-0(style="background-color: #ffd817; width: 88px")
                      span(style="color: black").text-small.m-0 FPJ 10
                    | Acta inspección técnica de cadáver   
                  li
                    .lista-ol--cuadro__vineta.py-3.px-0(style="background-color: #ffd817; width: 88px")
                      span(style="color: black").text-small.m-0 FPJ 11
                    | Informe investigador de campo   
                  li
                    .lista-ol--cuadro__vineta.py-3.px-0(style="background-color: #ffd817; width: 88px")
                      span(style="color: black").text-small.m-0 FPJ 12
                    |Solicitud de análisis    
                  li
                    .lista-ol--cuadro__vineta.py-3.px-0(style="background-color: #ffd817; width: 88px")
                      span(style="color: black").text-small.m-0 FPJ 13
                    | Informe investigador de laboratorio   
              .col-lg-6
                ol.lista-ol--cuadro
                  li
                    .lista-ol--cuadro__vineta.py-3.px-0(style="background-color: #ffd817; width: 88px")
                      span(style="color: black").text-small.m-0 FPJ 14
                    |  Entrevista   
                  li
                    .lista-ol--cuadro__vineta.py-3.px-0(style="background-color: #ffd817; width: 88px")
                      span(style="color: black").text-small.m-0 FPJ 16
                    |Bosquejo topográfico IPAT  
                  li
                    .lista-ol--cuadro__vineta.py-3.px-0(style="background-color: #ffd817; width: 88px")
                      span(style="color: black").text-small.m-0 FPJ 17
                    |Dibujo topográfico 
                  li
                    .lista-ol--cuadro__vineta.py-3.px-0(style="background-color: #ffd817; width: 88px")
                      span(style="color: black").text-small.m-0 FPJ 22
                    |Inspección a vehículo   
                  li
                    .lista-ol--cuadro__vineta.py-3.px-0(style="background-color: #ffd817; width: 88px")
                      span(style="color: black").text-small.m-0 FPJ 28
                    |Acta consentimiento   
                  li
                    .lista-ol--cuadro__vineta.py-3.px-0(style="background-color: #ffd817; width: 88px")
                      span(style="color: black").text-small.m-0 FPJ 30
                    |Acta de entrega   
                  li
                    .lista-ol--cuadro__vineta.py-3.px-0(style="background-color: #ffd817; width: 88px")
                      span(style="color: black").text-small.m-0 FPJ 32  
                    |Claqueta    
                  li
                    .lista-ol--cuadro__vineta.py-3.px-0(style="background-color: #ffd817; width: 88px")
                      span(style="color: black").text-small.m-0 FPJ 34
                    |Arraigo  
                  li
                    .lista-ol--cuadro__vineta.py-3.px-0(style="background-color: #ffd817; width: 88px")
                      span(style="color: black").text-small.m-0 FPJ 35
                    |Citación   
                  li
                    .lista-ol--cuadro__vineta.py-3.px-0(style="background-color: #ffd817; width: 88px")
                      span(style="color: black").text-small.m-0 FPJ 36
                    |Solicitud historia clínica   
                  li
                    .lista-ol--cuadro__vineta.py-3.px-0(style="background-color: #ffd817; width: 88px")
                      span(style="color: black").text-small.m-0 FPJ 37
                    |Solicitud de antecedentes  
                  li
                    .lista-ol--cuadro__vineta.py-3.px-0(style="background-color: #ffd817; width: 88px")
                      span(style="color: black").text-small.m-0 FPJ 39
                    |Solicitud de valoración médico legal    

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

<style lang="sass">
.adorno__1
  height: 100%
  position: absolute
  top: 0
  left: 0
  transform: translate(-50%, 30%)
  img
    margin: 0 auto
.adorno__2
  position: absolute
  top: 0
  right: 0
  transform: translate(-40%, 0%)
</style>
