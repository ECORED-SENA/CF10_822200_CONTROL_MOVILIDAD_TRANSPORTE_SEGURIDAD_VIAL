export default {
  global: {
    componenteFormativo:
      'Generalidades y actos urgentes en accidente de tránsito',
    descripcionCurso:
      'El componente formativo presenta las generalidades del accidente de tránsito como los conceptos, definiciones y el marco jurídico que regula los procedimientos que deben tenerse en cuenta para atender accidentes de tránsito con daños materiales o con personas lesionadas o fallecidas, de acuerdo con protocolos de criminalística y cadena de custodia establecidos por la Fiscalía General de la Nación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/a4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Generalidades del accidente de tránsito',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Marco jurídico del accidente de tránsito',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Accidente de solo daños materiales	',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Accidentes de tránsito con heridos o muertos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Aspectos normativos que regulan el accidente de tránsito',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Procedimientos judiciales para desarrollar los actos urgentes	',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Procedimientos judiciales	',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Actuaciones del primer responsable',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Actuaciones del coordinador	',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Documentación topográfica',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Documentación fotográfica',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo:
              'Documentación descriptiva y diligenciamiento de formatos de policía judicial (FPJ)',
            hash: 't_3_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.2	Accidente de solo daños materiales',
      referencia:
        'Ley 769 de 2002. Por la cual se expide el Código Nacional de Tránsito Terrestre y se dictan otras disposiciones . Diario Oficial No. 44.932 de 13 de septiembre de 2002.',
      tipo: 'Página web',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0769_2002.html',
    },
    {
      tema:
        '2.2. 	Procedimientos judiciales para desarrollar los actos urgentes.',
      referencia:
        'Ley 906 DE 2004. Por la cual se expide el Código de Procedimiento Penal. Diario Oficial No. 45.657 de 31 de agosto de 2004. ',
      tipo: 'Página web',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0906_2004.html',
    },
    {
      tema:
        '2.2. 	Procedimientos judiciales para desarrollar los actos urgentes',
      referencia:
        'Policía Nacional de Colombia. (2017). investigación accidentes de tránsito en Colombia. https://www.policia.gov.co/.',
      tipo: 'Libro',
      link:
        'https://www.policia.gov.co/sites/default/files/publicaciones-institucionales/libro-investigacion-accidentes-de-transito-en-colombia.pdf',
    },
    {
      tema: '3. 	Procedimientos Judiciales',
      referencia: 'PROTOCOLOS FGN. (2022). polijudicial. ',
      tipo: 'Página web',
      link: 'https://oscarbasico.wixsite.com/polijudicial/protocolos-fgn',
    },
  ],
  glosario: [
    {
      termino: 'Bosquejo',
      significado:
        'Representación gráfica general del lugar de los hechos, se caracteriza por ser a mano alzada, sin escala y se obtiene de manera inmediata en el lugar en donde se practiquen las diferentes diligencias judiciales.',
    },
    {
      termino: 'Conciso',
      significado:
        'Esto se logra utilizando oraciones cortas, palabras usuales y breves sin sacrificar detalles de exactitud, integridad o claridad.',
    },
    {
      termino: 'EMP y EF',
      significado: 'Elemento material probatorio y/o evidencia física.',
    },
    {
      termino: 'Embriaguez',
      significado:
        'Estado de alteración transitoria de las condiciones físicas y mentales, causada por intoxicación aguda que no permite una adecuada realización de actividades de riesgo.',
    },
    {
      termino: 'Fijación',
      significado:
        'Es la forma de registrar el lugar de los hechos para su posterior conocimiento o análisis, al perpetuar con exactitud el aspecto original, lo que permite observar lo ocurrido a pesar de no haber estado presente.',
    },
    {
      termino: 'Indiciado',
      significado:
        'Persona objeto de un despliegue de diligencias de averiguación y que no ha asistido a una audiencia de formulación de la imputación.',
    },
    {
      termino: 'Imputado',
      significado:
        'Persona quien se responsabiliza de una conducta que es reconocida como delito y contra quien se direcciona una acusación por esa acción.',
    },
    {
      termino: 'Inspección',
      significado:
        'Es la observación objetiva, detallada y metódica del lugar de los hechos o lugar distinto al del hecho que permite descubrir, identificar, fijar, recolectar y embalar técnicamente los EMP y EF bajo los protocolos de cadena de custodia, para demostrar la comisión de una conducta punible (Artículo 213 de la Ley 906 de 2004).',
    },
    {
      termino: 'Planimetría',
      significado:
        'Parte de la topografía que se ocupa de representar las superficies terrestres, teniendo en cuenta la proyección del terreno sobre un plano horizontal.',
    },
    {
      termino: 'Punto de amarre',
      significado:
        'Se denomina al hecho de referenciar un plano a un punto fijo estable que puede ser artificial, natural o geo-referenciado.',
    },
    {
      termino: 'Topografía',
      significado:
        'Es la ciencia que permite la representación gráfica de las características artificiales y naturales de un lugar utilizando la planimetría y altimetría. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Ley 769 de 2002. Por la cual se expide el Código Nacional de Tránsito Terrestre y se dictan otras disposiciones.  Diario Oficial 44.893 de Agosto 07 de 2002.',
      link:
        'http://www.movilidadbogota.gov.co/web/sites/default/files/ley-769-de-2002-codigo-nacional-de-transito_3704_0.pdf',
    },
    {
      referencia:
        'Ley 906 de 2004. Código de Procedimiento Penal. Diario Oficial número 45.657 del 31 de agosto de 2004.',
      link:
        'https://perso.unifr.ch/derechopenal/assets/files/legislacion/l_20190708_03.pdf',
    },
    {
      referencia:
        'Ley 1503 de 2011. Por la cual se promueve la formación de hábitos, comportamientos y conductas seguros en la vía y se dictan otras disposiciones. Diario Oficial No. 48.298 de 30 de diciembre de 2011. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1503_2011.html',
    },
    {
      referencia:
        'Decreto 1079 de 2015. [Ministerio de transporte].  Por medio del cual se expide el Decreto Único Reglamentario del Sector Transporte. 26 de mayo de 2015.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77889#:~:text=Tiene%20por%20objeto%20la%20ejecuci%C3%B3n,por%20el%20Ministerio%20de%20Transporte.',
    },
    {
      referencia:
        'Instituto Nacional de Medicina Legal y Ciencias Forenses. (2022). Boletines Estadísticos Mensuales.',
      link:
        'https://www.medicinalegal.gov.co/cifras-estadisticas/boletines-estadisticos-mensuales ',
    },
    {
      referencia:
        'Limpert, R. (1999). Motor Vehicle Accident Reconstruction and Cause Analysis. Lexis Publishing.',
      link: 'https://www.redalyc.org/pdf/849/84917310035.pdf',
    },
    {
      referencia:
        'Resolución 0011268 de 2012. [Ministerio de Transporte]. . Por la cual se adopta el nuevo informe policial de accidentes de tránsito (IPAT), su Manual de diligenciamiento y se dictan otras disposiciones. 06 de Diciembre de 2012.',
      link:
        'https://web.mintransporte.gov.co/rnat/app/ayudas/Resolucion_0011268_2012.pdf',
    },
    {
      referencia:
        'Ramos Enriquez, H., & Quiroga Amaya, L. (2017). Investigación de Accidentes de Tránsito en Colombia. Imprenta Nacional.',
      link:
        'https://www.policia.gov.co/contenido/investigacion-accidentes-transito-colombia',
    },
    {
      referencia:
        'Rivani , B., Brougham, D., & Mason, R. (1981). Pedestrian PostImpact Kinematics and Injury Patterns. SAE Technical Paper 811024, 42.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de diseño instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lino Andrés Quiroga Amaya',
        cargo: 'Experto temático',
        centro: 'Centro de Tecnologías del Transporte',
      },
      {
        nombre: 'Diego E. Acevedo Guevara',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - CIES Norte de Santander ',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesor metodológico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Corrector de estilo ',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Fabian Zarate',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
