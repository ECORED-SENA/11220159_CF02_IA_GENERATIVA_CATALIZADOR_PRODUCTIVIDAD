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
        download: 'downloads/11220159_CF02_DU.pdf',
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
      termino: 'Alucinación extrínseca',
      significado:
        'Comportamiento anómalo donde el modelo genera información que parece plausible, pero es completamente inventada, como leyes o cifras financieras ficticias.',
    },
    {
      termino: 'Auditoría post-hoc',
      significado:
        'Supervisión humana experta que actúa como el controlador de calidad final para verificar la consistencia lógica y la fidelidad de las respuestas de la IA.',
    },
    {
      termino: 'Enterprise Data Protection (EDP)',
      significado:
        'Concepto de seguridad que garantiza que los datos procesados por la IA permanezcan dentro de la frontera de la empresa y no se usen para entrenar modelos públicos.',
    },
    {
      termino: 'Groundedness (fundamentación)',
      significado:
        'Nivel básico de fiabilidad que define la capacidad del sistema para anclar sus respuestas en fuentes de información externas, autorizadas y verificables.',
    },
    {
      termino: 'Hiperautomatización cognitiva',
      significado:
        'Evolución de la automatización rígida que utiliza IA para procesar datos no estructurados y tomar decisiones complejas basadas en el lenguaje.',
    },
    {
      termino: 'Misgrounding',
      significado:
        'Error de fundamentación donde la IA cita una fuente real, pero afirma algo que el documento no dice o incluso contradice.',
    },
    {
      termino: 'Procesamiento del lenguaje natural (PLN)',
      significado:
        'Disciplina de la IA que permite a las máquinas entender, interpretar y generar lenguaje humano, facilitando la creación de flujos mediante lenguaje natural.',
    },
    {
      termino: 'Prompt',
      significado:
        'Instrucción o estímulo de texto proporcionado a un modelo de IA para guiar su respuesta hacia un objetivo específico.',
    },
    {
      termino: 'RAG (Retrieval-Augmented Generation)',
      significado:
        'Enfoque que transforma a la IA de un oráculo creativo a un archivero experto que investiga en un corpus documental antes de generar una respuesta.',
    },
    {
      termino: 'Triggers (desencadenadores)',
      significado:
        'Eventos específicos, como la recepción de un correo o una programación temporal, que inician una secuencia ordenada de operaciones en un flujo automatizado.',
    },
    {
      termino: 'Ungrounding',
      significado:
        'Fallo técnico en el que el modelo realiza afirmaciones factuales sin proporcionar citas o basándose en información inexistente en el material suministrado.',
    },
  ],
  referencias: [
    {
      referencia:
        'UBAderecho, IALAB. (2024). Evaluación del impacto de la inteligencia artificial generativa en el trabajo.',
      link: '',
    },
    {
      referencia:
        'academia-ia.com. (2024). Introducción a prompt engineering. El Club de la IA.',
      link: 'https://academia-ia.com/wp-content/uploads/2024/03/PROMPT-ENGINEERING-LA-NOTA.pptx.pdf',
    },
    {
      referencia: 'Ayuntamiento de Mérida. (2025). Microsoft Copilot. Gob.mx.',
      link: 'https://merida.gob.mx/cad/content/documents/ebooks/microsoftCopilot.pdf',
    },
    {
      referencia:
        'Dantart, A. (2025). Inteligencia artificial jurídica y el desafío de la veracidad: análisis de alucinaciones, optimización de RAG y principios para una integración responsable. arXiv.',
      link: 'https://arxiv.org/pdf/2509.09467',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (2025). Documento CONPES 4144: política nacional de inteligencia artificial.',
      link: 'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/4144.pdf',
    },
    {
      referencia:
        'Jara Rey, A. (2024). Legal prompts: guía práctica de instrucciones para uso de IA generativa. ISBN 978-987-03-4830-6.',
      link: '',
    },
    {
      referencia:
        'Méndez Solano, A., Durán Campos, J., & Quirós Artiñano, D. (2024). Ingeniería de prompts. Zenodo.',
      link: 'https://zenodo.org/records/14285388/files/Ingenier%C3%ADa%20de%20prompts.pdf?download=1',
    },
    {
      referencia:
        'Ministerio de Ciencia, Innovación y Universidades. (2019). Estrategia española de I+D+I en inteligencia artificial. Gobierno de España.',
      link: 'https://www.ciencia.gob.es/dam/jcr:5af98ba2-166c-4e63-9380-4f3f68db198e/Estrategia_Inteligencia_Artificial_IDI.pdf',
    },
    {
      referencia:
        'Prompt Engineering Guide. (s.f.). Guía de ingeniería de prompt.',
      link: 'https://www.promptingguide.ai/es',
    },
    {
      referencia:
        'República de Colombia. (2012). Ley Estatutaria 1581 de 2012.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981',
    },
    {
      referencia:
        'Varun, M., Faiz, S., Matthew, D., Mirac, S., & Christopher D, M. (2024). Hallucination-free? Assessing the reliability of leading AI legal research tools. arXiv.',
      link: 'https://doi.org/10.48550/arXiv.2405.20362',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 - Responsable ecosistema virtual de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de Línea de Producción Huila',
          centro: 'Dirección General',
        },
      ],
    },

    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Andrea Tello Zambrano',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },

    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan José Calderon Gutiérrez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristian Fernando Martínez Sánchez',
          cargo: 'Desarrollador fullstack',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },

    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
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
