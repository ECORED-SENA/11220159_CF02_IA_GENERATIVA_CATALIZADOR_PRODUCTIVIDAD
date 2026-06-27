<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Auditoría, calidad y gobernanza en el uso de IA Generativa',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> Evaluar la capacidad del aprendiz para diagnosticar errores técnicos (como alucinaciones y misgrounding), aplicar métricas cualitativas de calidad y proponer mejoras en flujos de trabajo automatizados, asegurando el cumplimiento de la gobernanza de datos y la supervisión humana experta bajo el marco normativo de protección de datos personales.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué criterio técnico evalúa si la respuesta de la IA está alineada con la instrucción original y el contexto suministrado?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Coherencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pertinencia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Utilidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Originalidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cómo se define técnicamente el error conocido como <em>Misgrounding</em>?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La incapacidad de la IA para generar texto fluido en español.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El proceso de entrenamiento de un modelo con datos públicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La interpretación errónea del contexto o la contradicción de una fuente real proporcionada.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La generación de información completamente inventada que no figura en los documentos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es la principal característica de la IA fundamentada bajo el modelo <em>RAG</em>?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Funciona como un sistema de "libro abierto" que ancla afirmaciones en fuentes externas verificables.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Depende exclusivamente de su memoria de entrenamiento o conocimiento paramétrico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Prioriza la creatividad artística sobre la veracidad técnica de los datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Es una tecnología que solo puede ser utilizada por programadores expertos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿En qué consiste el <em>Patrón de Reflexión</em> aplicado a la validación de resultados?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'En comparar manualmente los resultados de tres herramientas diferentes al mismo tiempo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'En instruir al modelo para que analice su propia respuesta y explique la racionalidad de su inferencia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'En esperar un tiempo prudencial antes de implementar la respuesta en un documento oficial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'En solicitar a la IA que genere una imagen que resuma el concepto analizado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Bajo la Ley 1581 de 2012 en Colombia, ¿qué acción es obligatoria antes de suministrar documentos a un modelo de IA?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Traducir la información al idioma inglés para mayor precisión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Realizar una anonimización proactiva de datos identificables y sensibles.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solicitar permiso al proveedor de la herramienta de IA.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Guardar el historial de chat en una base de datos pública.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'En <em>Power Automate</em>, ¿cuál es el componente que permite usar modelos GPT para procesar datos no estructurados en la ejecución de flujos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Microsoft Teams.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'AI Builder.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'SharePoint.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'OneDrive.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué herramienta se especializa en ser un motor de búsqueda conversacional que cita fuentes web en tiempo real?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Microsoft Word.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Excel.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Perplexity AI.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'PowerPoint.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué garantiza el concepto de <em>Enterprise Data Protection (EDP)</em> en el entorno de Microsoft 365?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que la IA nunca cometa errores de alucinación factual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que todas las respuestas de la IA sean menores a 100 palabras.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que el software funcione sin necesidad de conexión a internet.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que los datos de la organización no se utilicen para entrenar modelos públicos de terceros.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué técnica estimula al modelo a realizar una revisión exhaustiva mediante el cuestionamiento de su exactitud inicial?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Silencio estratégico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Prompting acusatorio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Fórmula R-SPA.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Grounding paramétrico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es el propósito fundamental de una auditoría <em>Post-Hoc</em> en sistemas de alto riesgo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reemplazar definitivamente al trabajador humano por un agente automatizado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Supervisar los resultados mediante expertos humanos para controlar el riesgo residual de error.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Aumentar la velocidad de respuesta de la herramienta de inteligencia artificial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Documentar únicamente los aciertos de la herramienta para fines publicitarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿A qué se refiere el término <em>Ungrounding</em> en el diagnóstico de errores?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'A realizar afirmaciones factuales sin proporcionar citas o basándose en información inexistente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'A la conexión exitosa entre la IA y una base de datos vectorial externa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Al uso de términos demasiado técnicos en una respuesta dirigida a un público general.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'A la caída de los servicios de red que impide el funcionamiento de la IA.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Según las estrategias híbridas, ¿cuál es la fortaleza principal del modelo <em>Claude</em>?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La generación masiva de imágenes para redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El análisis de contexto masivo y el cumplimiento de principios éticos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Su integración exclusiva con el sistema operativo Windows.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ser la herramienta más económica del mercado actual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Si una respuesta de la IA no presenta contradicciones internas y las ideas se conectan lógicamente, cumple con:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El criterio de pertinencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El criterio de coherencia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El principio de soberanía de datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El patrón de Fact Check List.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Cómo se denominan los eventos (como recibir un correo) que inician un flujo en <em>Power Automate</em>?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Acciones o tareas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Desencadenadores (triggers).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tokens.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Embeddings.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'En la fórmula de <em>prompt</em> estructurado R-SPA, ¿qué elemento representa la letra "A"?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Análisis de datos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Automatización de procesos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Auditoría técnica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Alineadores.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            'Un analista pide a Copilot en Excel identificar el proyecto con mayor presupuesto en una tabla. La IA señala el "Proyecto A" ($5.000.000), ignorando que el "Proyecto B" tiene $12.000.000. ¿Qué fallo se presentó?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Alucinación extrínseca.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Misgrounding por procesamiento incompleto de datos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Falta de coherencia en el lenguaje natural (PLN).',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Error de sintaxis en el comando de Excel por ausencia de un <em>prompt</em> adecuado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            'Un docente usa ChatGPT para crear un examen. La IA cita un libro de texto con el autor correcto, pero inventa un capítulo que no existe. ¿Cómo se clasifica técnicamente este error?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Alucinación extrínseca.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Criterio de utilidad operativa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Uso correcto de IA paramétrica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mejora continua institucional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            'Una oficina de Recursos Humanos implementa un flujo que recibe CVs, los resume y asigna un puntaje de idoneidad contrastándolos contra un perfil de cargo en SharePoint. ¿Qué etapa del flujo está realizando la IA?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Recepción del estímulo (Trigger).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Procesamiento cognitivo y contraste de idoneidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Almacenamiento físico de archivos en servidores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Envío de correos electrónicos sin contenido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'Recibes un informe de IA que es "demasiado vago". Aplicas un segundo comando: "Esta respuesta es muy general. Revisa el capítulo X y extrae porcentajes exactos". ¿Qué técnica estás aplicando?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Silencio estratégico o abstención.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Follow-up prompt de refinamiento iterativo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Documentación técnica estructurada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Auditoría Post-Hoc.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            'Configuras un asistente de IA para que, si no encuentra la respuesta exacta en los manuales de la empresa, responda "No poseo información suficiente" en lugar de adivinar. ¿Cómo se llama este protocolo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Alucinación paramétrica selectiva.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Protocolo de silencio estratégico.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Patrón de Persona avanzado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Hiperautomatización cognitiva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
