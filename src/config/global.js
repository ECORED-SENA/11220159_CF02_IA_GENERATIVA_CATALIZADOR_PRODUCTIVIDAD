export default {
  global: {
    Name: 'Supervisión, integración productiva y gobernanza de la IA generativa',
    Description:
      'Este componente formativo capacita al aprendiz en la validación de contenidos generados por Inteligencia Artificial Generativa (IAG), mediante el diagnóstico de errores, identificación de sesgos y aplicación de estrategias de optimización. Además, fortalece competencias relacionadas con documentación técnica, gobernanza de datos, trazabilidad y mejora continua, promoviendo un uso responsable, seguro y eficiente de la IA en entornos organizacionales y productivos.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-4.png',
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Evaluación de calidad y validación técnica de resultados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Criterios técnicos de evaluación: pertinencia, coherencia y utilidad',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Validación de la fundamentación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Diagnóstico de errores',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Comparativa de razonamiento y el patrón de reflexión',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Verificación de citas y fuentes en tiempo real',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Diagnóstico de errores y mitigación de riesgos algorítmicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Tipología de errores críticos: alucinaciones y <em>misgrounding</em>',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Detección de sesgos y ética en la respuesta',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Refinamiento iterativo (<em>Follow-up Prompts</em>)',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Protocolos de silencio estratégico y abstención',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Uso de extensiones IA en aplicaciones y flujos de trabajo automatizados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Copilot en la suite de productividad: del texto a los resultados',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Estrategias híbridas: combinando ChatGPT, Claude y Copilot',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Inteligencia artificial y la automatización de procesos (Power Automate)',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Documentación técnica, gobernanza y mejora continua',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Registro estructurado de procesos de configuración y operación',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Gobernanza, privacidad y soberanía de datos (Ley 1581 y EDP)',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Elaboración de guías de buenas prácticas y manuales de uso',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Auditoría <em>post-hoc</em> y supervisión humana experta',
            hash: 't_4_4',
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Líder del Ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '',
          cargo: '',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: '',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: '',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
