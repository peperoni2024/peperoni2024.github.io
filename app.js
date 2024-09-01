const questions = [
  {
    question: "como se divide nuestra estructura gubernanmental?",
    answers: [
      { text: "nacion, provincia, municipios, caba", correct: true },
      { text: "nacion, provincia, region", correct: false },
      { text: "nacion, provincia, municipios, alcaldias", correct: false },
    ],
  },
  {
    question: "cual es la norma fundamental de nuestro pais?",
    answers: [
      { text: "el codigo civil y comercial de la nacion", correct: false },
      { text: "la constitucion de la ciudad autonoma de buenos aires", correct: false },
      { text: "la constitucion nacional", correct: true },
    ],
  },
  {
    question: "indique la unica opcion correcta en cuanto a relacion de las normal",
    answers: [
      { text: "la constitucion de CABA es independiente y puede establecer normas incluso contra la constitucion nacional", correct: false },
      { text: "la constitucion nacional es la norma mas importante y fundamental,y ninguna puede contravenirla", correct: true },
      { text: "la constitucion provincial tiene la misma jerarquia que la constitucion nacional", correct: false },
    ],
  },
  {
    question: "ingresar a una propiedad privada sin autorizacion del dueño o morador...",
    answers: [
      { text: "no es aconsejable, aunque puede realizarse en el ejercicio de nuestra actividad como instaladores de sistemas de seguridad electronica", correct: false },
      { text: "esta permitido mientras se realice en horas diurnas", correct: false },
      { text: "no esta permitido, configurado como un delito previsto por el codigo penal de la nacion", correct: true },
    ],
  },
  {
    question: "la privacion legal de la libertad se produce cuando..",
    answers: [
      { text: "un personal policial advierte la comision de un ilicito, llevando al delincuente a la carcel", correct: false },
      { text: "cuando un juez asi lo determine en funcion de una norma legal vigente y aplicable, y en el marco de un debido proceso judicial", correct: true },
      { text: "cuando el ministerio de seguridad establezca que determinada persona debe ser encarcelada por afectar a la seguridad", correct: false },
    ],
  },
  {
    question: "la tortura como medio para que el delincuente confiese sus delitos",
    answers: [
      { text: "es un recurso que puede ser utilizado por el funcionario policial solo con la anuencia del juez competente", correct: false },
      { text: "puede ser medida efectiva con la autorizacion expresa del presidente de la nacion como excepcion", correct: false },
      { text: "se encuentra total y absolutamente vedada, contravieniendo a la constitucion nacional y los tratados internacionales sobre los derechos humanos ", correct: true },
    ],
  },
  {
    question: "las carceles tienen como finalidad...",
    answers: [
      { text: "separar a los delincientes de la sociendad a fin de aislarlos y que no vuelvan a tener contacto con sus semejantes", correct: false },
      { text: "castigar a los delincientes por sus delitos, conforme a las normas vigentes legales, buscando resocializar al mismo con el fin de que pueda reincertarse en la sociedad al cumplir con la condena", correct: true },
      { text: "generar sufriminento a  aquellas personas que lo han causado a otros, a fin de que puedan verificar el daño que han efectuado", correct: false },
    ],
  },
  {
    question: "las instalaciones de seguridad electronica en CABA ....",
    answers: [
      { text: "deben ser efectuadas por tecnicos especialistas habilitados para ello", correct: true },
      { text: "deben ser efectuadas por electricistas matriculados ", correct: false },
      { text: "puede realizarlo cualquier persona idonea", correct: false },
    ],
  },
  {
    question: "las normas IRAM e ISO son...",
    answers: [
      { text: "normas que regulan la actividad de la seguridad privada exclusivamente", correct: false },
      { text: "normas que determinan el uso de armas de fuego", correct: false },
      { text: "normas de calidad y normalizacion", correct: true },
    ],
  },
  {
    question: "las personas que efectuan instalaciones de seguridad electronica en CABA..",
    answers: [
      { text: "deben inscribirse en un registro creado a ese efecto", correct: true },
      { text: "no deben inscribirse en un registro creado a ese efecto", correct: false },
      { text: "no son de caracter obligatorio", correct: false },
    ],
  },
  {
    question: "los servicios de seguridad electronica en CABA ...",
    answers: [
      { text: "son considerados servicios de seguridad privada", correct: true },
      { text: "no son considerados servicios de seguridad privada ", correct: false },
      { text: "no son considerados servicios", correct: false },
    ],
  },
  {
    question: "los servicios de seguridad privada en CABA..",
    answers: [
      { text: "pueden prestarse utilizando armas de fuego con autorizacion", correct: false },
      { text: "pueden prestarse utilizando armas de fuego, aunque no tengan autorizacion", correct: false },
      { text: "no pueden prestarse utilizando armas de fuego", correct: true },
    ],
  },
  {
    question: "que establece la ley 5688 de CABA?",
    answers: [
      { text: "el sistema integral de seguridad publica en CABA ", correct: true },
      { text: "las normas contranvencionales en materia de seguridad electronica ", correct: false },
      { text: "el codigo de faltas de la CABA", correct: false },
    ],
  },
  {
    question: "que normas deben cumplir las instalaciones electricas",
    answers: [
      { text: "las normas expedidas por la autoridad policial", correct: false },
      { text: "el reglamento de conexion de nuevos suministros de instalaciones domiciliarias aprobados por el ENRE", correct: true },
      { text: "ningun tipo de normativa, solo el buen criterio del instalador ", correct: false },
    ],
  },
  {
    question: "quien es el ultimo que interpreta las normas",
    answers: [
      { text: "el abogado", correct: false },
      { text: "el presidente de la nacion", correct: false },
      { text: "el juez", correct: true },
    ],
  },
  {
    question: "INICIA LA PARTE 2... de los diferentes metodos de analisis de riesgos cual fue explicado",
    answers: [
      { text: "analisis de arbol de eventos", correct: false },
      { text: "analisis de causa efecto", correct: false },
      { text: "mosler", correct: true },
      { text: "todos ", correct: false },
      { text: "ninguno", correct: false },
    ],
  },
  {
    question: "el metodo mosler tiene",
    answers: [
      { text: "2 fases", correct: false },
      { text: "4fases", correct: true },
      { text: "6 fases", correct: false },
    ],
  },
  {
    question: "el calculo de evaluacion del riesgo ER del metodo mosler podemos decir que ER = PR x C",
    answers: [
      { text: "verdadero", correct: true },
      { text: "falso", correct: false },
    ],
  },
  {
    question: "en la fase 1 del metodo de mosler, se realiza la evaluacion de riesgo?",
    answers: [
      { text: "verdadero", correct: false },
      { text: "falso", correct: true },
    ],
  },
  {
    question: "en la fase 2 del metodo mosler donde se evalua el analisis de riesgo, se compone de distintos criterios que luego se combinan entre ellos. la pregunta es su recuerda cuantos niveles tiene cada criterio",
    answers: [
      { text: "1", correct: false },
      { text: "3", correct: false },
      { text: "5", correct: true },
      { text: "7", correct: false },
      { text: "9", correct: false },

    ],
  },
  {
    question: "para realizar un analisis de riesgo, debemos tener",
    answers: [
      { text: "un metodo", correct: false },
      { text: "entrevistas y analisis ocular", correct: false },
      { text: "construimos cronogramas de acciones", correct: false },
      { text: "estudiamos la situacion", correct: false },
      { text: "todas", correct: true },
      { text: "ninguna", correct: false },

    ],
  },
  {
    question: "pregunta concepto- usted piensa que realizar un analisis de riesgo para desarrollar un sistema de seguridad y tratar de alcanzar un nivel razonable respecto a los objetivos en cuestion. Es un analisis: elegi una de las opciones",
    answers: [
      { text: "obligatorio", correct: true },
      { text: "conveniente", correct: false },
      { text: "una perdida de tiempo", correct: false },

    ],
  },
  {
    question: "referido a la pregunta anterior en el calculo de la evaluacion de riesgoER del metodo mosler podemos decir que ER= PR x C donde PR es la probabilidad de riesgo y C es la casualidad",
    answers: [
      { text: "verdadero", correct: false },
      { text: "falso", correct: true },

    ],
  },
  {
    question: "si decimos que el analisis de riesgos es el de estudio, de las posibles amenazas, de las causas, y probables daños o eventos no deseados, y las consecuencias que estos puedan producir. podemos decir que es:",
    answers: [
      { text: "verdadero", correct: true },
      { text: "falso", correct: false },

    ],
  },
  {
    question: "si luego de realizar el metodo de mosler el resultado de ER da mayor de 550 podemos decir que esun riesgo:",
    answers: [
      { text: "bajo", correct: false },
      { text: "medio", correct: true },
      { text: "alto", correct: false },

    ],
  },
  {
    question: "una situacion donde se pone en peligro la seguridad de bienes o personas, es ",
    answers: [
      { text: "amenaza", correct: false },
      { text: "riesgo", correct: false },
      { text: "ambas", correct: true },

    ],
  },
  {
    question: "INICIA LA PARTE 3...escriba el numero de ABOGADRO ",
    answers: [
      { text: "6,2 x 10*23", correct: true },
      { text: "8,05 x 10*23", correct: false },
      { text: "4,402 x10*23", correct: false },

    ],
  },
  {
    question: "circuito paralelo en corriente continua como es la corriente",
    answers: [
      { text: "varia", correct: true },
      { text: "siempre es la misma", correct: false },

    ],
  },
  {
    question: "circuito paralelo en corriente siempre continua como es la tension",
    answers: [
      { text: "varia", correct: false },
      { text: "siempre es la misma", correct: true},

    ],
  },
  {
    question: "circuito en serie en corriente continua como es la corriente",
    answers: [
      { text: "varia ", correct: true },
      { text: "siempre es la misma", correct: false },

    ],
  },
  {
    question: "circuito en serie en corriente continua como es la tension",
    answers: [
      { text: "varia", correct: true},
      { text: "siempre es la misma", correct: false },

    ],
  },
  {
    question: "cual de las siguientes afirmaciones sobre la corriente y la corriente alterna no es correcta",
    answers: [
      { text: "la corrriente continua varia en su valor a lo largo del tiempo", correct: true },
      { text: "la corriente alterna varia su valor a lo largo del tiempo", correct: false },
      { text: "la corriente continua no varia a lo largo del tiempo", correct: false },

    ],
  },
  {
    question: "el atomo se compone de electrones, donde se encuentran?",
    answers: [
      { text: "rodeando el nucleo", correct: true },
      { text: "en el nucleo", correct: false },
      { text: "son libres", correct: false },

    ],
  },
  {
    question: "el atomo se compone de neutrones, donde se encuentran?",
    answers: [
      { text: "rodeando el nucleo", correct: false },
      { text: "en el nucleo", correct: true },
      { text: "son libres", correct: false },

    ],
  },
  {
    question: "el atomo se compone de protones donde se encuentran?",
    answers: [
      { text: "rodeando el nucleo", correct: false },
      { text: "en el nucleo", correct: true },
      { text: "son libres", correct: false },

    ],
  },
  {
    question: "escriba la formula de la ley de OHM",
    answers: [
      { text: "V=R x I", correct: true },
      { text: "R= I x V", correct: false },
      { text: "I= R x V", correct: false },

    ],
  },
  {
    question: "la corriente es una cantidad de neutrones",
    answers: [
      { text: "si", correct: false },
      { text: "no", correct: true },

    ],
  },
  {
    question: "la ley de joule relaciona la potencia con qué",
    answers: [
      { text: "con la tension o voltaje y la resistencia", correct: false },
      { text: "con la tension o voltaje y la corriente", correct: true },

    ],
  },
  {
    question: "la ley de OHM relaciona",
    answers: [
      { text: "la tension o voltaje con la corriente", correct: false },
      { text: "la tension o voltaje con la resistencia", correct: false },
      { text: "la tension o voltaje con la corriente y la resistencia ", correct: true },

    ],
  },
  {
    question: "las leyes de kichoff describen propiedades, indicar la correcta",
    answers: [
      { text: "la primera afirma que el voltsje aplicado a un circuito cerrado es igual en todas las ramas", correct: false },
      { text: "la primera afirma que el voltaje aplicado a un circuito cerrado es igual a la suma de todas las caidas en el mismo circuito", correct: true },
      { text: "la segunda afirma que la suma de las corrientes que ingresan a un nodo es igual a cero", correct: false },

    ],
  },
  {
    question: "lso cables de alimentacion se eligen por la seccion en mm2. cual NO es correcta?",
    answers: [
      { text: "para cumplir la ley de joule", correct: false },
      { text: "porque al tener mayor seccion, tiene mejor traccion para el instalador", correct: true },
      { text: "para que no se caliente cuando circula por una corriente alta", correct: false },
      { text: "porque a distancias largas, disminuye la tension entregada", correct: false },

    ],
  },
  {
    question: "materiales aislantes",
    answers: [
      { text: "son materiales matalicos", correct: false },
      { text: "no son materiales metalicos", correct: true },

    ],
  },
  {
    question: "que tipo de carga tiene el ELECTRON",
    answers: [
      { text: "negativa", correct: true },
      { text: "sin carga", correct: false },
      { text: "positiva", correct: false },

    ],
  },
  {
    question: "que tipo de carga tiene el NEUTRON",
    answers: [
      { text: "negativa", correct: false },
      { text: "sin carga", correct: true },
      { text: "positiva", correct: false },

    ],
  },
  {
    question: "que tipo de carga tiene el PROTON",
    answers: [
      { text: "negativa", correct: false },
      { text: "sin carga", correct: false },
      { text: "positiva", correct: true },

    ],
  },
  {
    question: "semiconductores cual no correcponde dentro de la tabla periodica",
    answers: [
      { text: "el silicio", correct: false },
      { text: "el indio", correct: false },
      { text: "el arsenico", correct: false },
      { text: "el hierro", correct: true },

    ],
  },
  {
    question: "INICIA LA PARTE 4 ... cual es la definicion de CAMARA DE VSS en la norma",
    answers: [
      { text: "un dispositivo para proyectar imagenes en una pantalla ", correct: false },
      { text: "un dispositivo que produce señales de video a partir de una imagen optica", correct: true },
      { text: "un equipo para grabar eventos en una instalacion de vigilancia", correct: false },
      { text: "un componente de software para el control de acceso", correct: false },

    ],
  },
  {
    question: "cual es la funcion de un IRIS ELECTRONICO segun la norma ",
    answers: [
      { text: "regular la cantidad de luz que pasa a traves de las lentes hacia el dispositivo de captura de imagen", correct: true},
      { text: "controlar la sensibilidad de la camara en funcion de las condiciones de luz", correct: false },
      { text: "variar el angulo de vision de la camara de vigilancia", correct: false },
      { text: "detectar movimientos sospechosos de una escena", correct: false },

    ],
  },
  {
    question: "que describe el termino INSTALACION DE VIGILANCIA DE VSS, segun la norma",
    answers: [
      { text: "un sistema de grabacion de videos", correct: false },
      { text: "un conjunto de equipos de VSS instalados y operativos", correct: true },
      { text: "un software para gestionar la vigilancia ", correct: false },
      { text: "un protocolo de comunicacion para dispositivos de seguridad", correct: false },

    ],
  },
  {
    question: "que funcion cumple un tecnico de VSS, segun la norma",
    answers: [
      { text: "instalar y mantener sistemas de seguridad", correct: true },
      { text: "administrar redes de comunicacion", correct: false },
      { text: "realizar inspecciones de edificios", correct: false },
      { text: "desarrollar software de vigilancia", correct: false },

    ],
  },
  {
    question: "que organismo se encarga de abastecer las normas que rigen las actividades tecnologicas y cientificas en argentina",
    answers: [
      { text: "ISO-IEC", correct: false },
      { text: "IRAM", correct: true },
      { text: "VSS", correct: false },

    ],
  },
  {
    question: "que proposito cumple la EVALUACION DE RIESGOS, segun la norma",
    answers: [
      { text: "determinar el impacto de las consecuencias de los peligros y amenazas", correct: true },
      { text: "realizar inspecciones de segridad en el lugar de trabajo", correct: false },
      { text: "desarrolar estrategias de marketing para productos de seguridad", correct: false },
      { text: "controlar el acceso fisico y logico a los sistemas de vigilancia", correct: false },

    ],
  },
  {
    question: "que significa FPS",
    answers: [
      { text: "fotogramas por segundo", correct: true },
      { text: "frecuencia de procesamiento de señales", correct: false },
      { text: "factor de potencia del sistema", correct: false },
      { text: "frecuiencia de pulso sincronico", correct: false },

    ],
  },
  {
    question: "que significa la sigla NVR en el contexto de la norma",
    answers: [
      { text: "nuevo registro de vehiculos", correct: false },
      { text: "red de vigilancia nacional", correct: false },
      { text: "grabador de videos en red", correct: true },
      { text: "sistema de vigilancia en vivo", correct: false },

    ],
  },
  {
    question: "que significa VSS en el contexto de la norma IRAM 32676",
    answers: [
      { text: "sistema de video supervision", correct: false },
      { text: "vigilancia y seguridad de vehiculos", correct: false },
      { text: "sistema de seguridad visual", correct: false },
      { text: "sistema de videovigilancia", correct: true },

    ],
  },
  {
    question: "que termino se utiliza para referirse a la proteccion fisica y/o ambiental de una camara de seguridad",
    answers: [
      { text: "resguardo de camara", correct: false },
      { text: "alojamineto de proteccion de la camara", correct: true },
      { text: "cubierta de seguridad", correct: false },
      { text: "carcsa de resguardo", correct: false },

    ],
  },
  {
    question: "INICIA LA PRTE 5 ... cual es la ley de FARADAY que dice que el voltaje es proporcional al numero de vueltas de la bobina inductora y a la variacion rapida con la que el flujo corta al conductor vind = N(AΦ /AT)",
    answers: [
      { text: "ley de coulomb", correct: false },
      { text: "ley de ampere ", correct: false },
      { text: "ley de faraday", correct: true },

    ],
  },
  {
    question: "describa un circuito paralelo, como es la tension?",
    answers: [
      { text: "la tension es directamente proporcional a la resistencia de un circuito paralelo", correct: false },
      { text: "la tension es constante en un circuito paralelo", correct: true },
      { text: "la tension es variable en un circuito paralelo", correct: false },
      { text: "la tension es inversamente proporcional a la resistencia de una circuito paralelo", correct: false },

    ],
  },
  {
    question: "describa un circuito serie, como es la corriente?",
    answers: [
      { text: "la corriente es una constante en un circuito en serie", correct: true },
      { text: "la corriente es variable en un circuito serie", correct: false },
      { text: "la corriente es inversamente proporcional a la resistencia de un circuito en serie", correct: false },
      { text: "la corriente es directamente proporcional a la resistencia de un circuito en serie", correct: false },

    ],
  },
  {
    question: "el diagrama de bloques de una fuente conmutada tipicamente incluye el siguiente componente" ,
    answers: [
      { text: "filtro de entrada a diodo", correct: false },
      { text: "transformador de entrada", correct: false },
      { text: "controlador electronico", correct: true},

    ],
  },
  {
    question: "el diodo esta conformado por una juntura",
    answers: [
      { text: "P-N", correct: true},
      { text: "silicio y germanio", correct: false },
      { text: "silicio tipo N", correct: false },

    ],
  },
  {
    question: "el diodo led es un diodo de juntira... cual de las siguientes afirmaciones NO es correcta",
    answers: [
      { text: "P-N", correct: false },
      { text: "no necesita polarizacion", correct: true },
      { text: "para que emita luz debe circular una corriente limitada", correct: false },

    ],
  },
  {
    question: "el elemento silicio dopado con el elemento indio da:",
    answers: [
      { text: "un material tipo P", correct: false },
      { text: "un material tipo N", correct: true },
      { text: "no da ninguna materia", correct: false },

    ],
  },
  {
    question: "el fotodiodo es un diodo de juntura tipo P-N que es sensible a la luz ",
    answers: [
      { text: "verdadero", correct: true },
      { text: "falso", correct: false },

    ],
  },
  {
    question: "la fotocelda es un semiconductor cuya caracteristica es:",
    answers: [
      { text: "aumenta su resistencia especifica cuando recibe luz ", correct: false },
      { text: "disminuye su resistencia cuando no es iluminada", correct: true },
      { text: "no cambia su resistencia en ninguna de ambas ocaciones", correct: false },

    ],
  },
  {
    question: "las celdas solares para que se utilizan",
    answers: [
      { text: "para generar corriente continua", correct: true },
      { text: "para generar corriente alterna", correct: false },

    ],
  },
  {
    question: "un transformador electromagnetico, NO trabaja con",
    answers: [
      { text: "corriente alterna", correct: false },
      { text: "corriente continua", correct: false },
      { text: "por la ley faraday del electromagnetismo", correct: false },

    ],
  },
  {
    question: "una fuente lineal con regulacion electronica de doble polaridad se conforma con:",
    answers: [
      { text: "un transformador de dos bobinados en el secundario con punto medio, dos diodos, un capacitor y un regulador electronico positivo o negativo segun la necesidad ", correct: false },
      { text: "un transformador de dos bobinados en el secundario con punto medio, dos diodos, un capacitor y un regulador electronico positivo o negativo segun necesidad o hay que agregar otros componentes", correct: true },

    ],
  },
  {
    question: "una fuente lineal NO se conforma con:",
    answers: [
      { text: "un transformador de dos bobinados en el secundario con punto medio, dos diodos y un capacitor", correct: false },
      { text: "un transformador de un solo bobinado en el secundario , dos diodos y un capacitor", correct: true},
      { text: "un transformador de un solo secundario, cuatro diodos y un capacitor", correct: false },

    ],
  },
  {
    question: "INICIA LA PARTE 6....  como es el comportamiento de una zona DEMORADA",
    answers: [
      { text: "brinda un tiempo para el disparo de sirena", correct: false },
      { text: "se utiliza generalmente para los tamper de las sirenas", correct: false },
      { text: "brinda un tiempo de ingreso programable para la desactivacion del panel de alarmas", correct: true },

    ],
  },
  {
    question: "como es el comportamiento de una zona instantanea",
    answers: [
      { text: "el panel brinda un tiempo de desactivacion luego de que una zona instantanea es violentada", correct: false },
      { text: "si el panel esta armado y la zona es violentada genera un disparo inmediato", correct: true },
      { text: "se dispara de manera inmediata luego de un disparo en una zona demorada", correct: false },

    ],
  },
  {
    question: "como es el comportamiento de una zona seguidora",
    answers: [
      { text: "la zona seguidora copiara el tiempo de entrada de un detector demorado siempre y cuando tenga un disparo previo", correct: false },
      { text: "la zona seguidora se dispara inmediatamente si la demora no ha sido activada", correct: false },
      { text: "ambas son correctas", correct: true },

    ],
  },
  {
    question: "cual es la funcion principal de las zonas de cruce",
    answers: [
      { text: "tener una condicion de disparo en dos zonas distintas, y asi poder asegurarse de que el disparo de alarmas es real", correct: false },
      { text: "la funcion de cruce de zonas permite dispara la misma si dos detectores son activados en una ventana de tiempo", correct: true },
      { text: "permite cruzar una zona seguidora con una zona instantanea y asi obtener zonas adicionales", correct: false },

    ],
  },
  {
    question: "en que se basa una alarma hibrida",
    answers: [
      { text: "se basa en que la alarma puede reportar por wifi y datos moviles", correct: false },
      { text: "en que la alarma permite activar perifericos inalambricos y cableados", correct: true },
      { text: "se basa en una alarma que incluye mas de 16 zonas", correct: false },

    ],
  },
  {
    question: "para que sirve la resistencia final de la linea",
   answers: [
      { text: "generar una caida de tension sobre el cableado de zona ", correct: false },
      { text: "proteger de un sabotaje en el cableado", correct: true },
      { text: "proteger el sensor de una descarga electrica", correct: false },

    ],
  },
  {
    question: "que es una particion",
    answers: [
      { text: "grupo de zonas que actuan como sistema de alarma independiente dentro del mismo panel", correct: true },
      { text: "grupo de sensores del mismo tipo", correct: false },
      { text: "sector similares del sitio a proteger", correct: false },

    ],
  },
  {
    question: "que es una zona",
    answers: [
      { text: "una entrada del panel de alarmas donde se conectan los sensores", correct: true },
      { text: "un conjunto de sirenas", correct: false },
      { text: "un conjunto de sensores agrupados por tipo de sensor", correct: false },

    ],
  },
  {
    question: "se pueden conectar varios sensores normalmente cerrados en la misma zona",
    answers: [
      { text: "verdadero", correct: true },
      { text: "falso", correct: false },

    ],
  },
  {
    question: "una particion a cuantas zonas puede pertenecer",
    answers: [
      { text: "a una particion", correct: false },
      { text: "a dos particiones", correct: false },
      { text: "a todas las particiones disponibles del panel", correct: true},

    ],
  },
  {
    question: "las PGM dentro del panel estan asociadoas a un RELE?",
    answers: [
      { text: "si", correct: false },
      { text: "no", correct: true },

    ],
  },
  {
    question: "INICIA LA PARTE 7... CHIC-MOS NO es:",
    answers: [
      { text: "un sistema de captacion de iluminacion", correct: false },
      { text: "un sistema de normatividad para VSS", correct: true },
      { text: "un dispositivo de sustrato composite metal oxide semiconductor", correct: false },

    ],
  },
  {
    question: "chip CCD NO  significa:",
    answers: [
      { text: "un sistema de captacion de iluminacion", correct: false },
      { text: "un sistema para normatividad para VSS", correct: true },
      { text: "un dispositivo de carga acoplada", correct: false },

    ],
  },
  {
    question: "cual es la resolucion resultante de una camara de 1920x1080 pixels, que significa y cuales son los pixeles horizontales y cuales son los verticales , CORREGIR",
    answers: [
      { text: "780", correct: false },
      { text: "1080", correct: true },
      { text: "1920 son verticales", correct: false },
      { text: "1080 son verticales", correct: false },

    ],
  },
  {
    question: "cuando hay muchas camaras , que se conectan por red de datos , que NO utiliza para grabar imagenes",
    answers: [
      { text: "NVR mas dispositivo de HD ", correct: true },
      { text: "NVR mas dispositivo RAID 5 mas software de control", correct: false },
      { text: "software de control de VMS y dispositivo NAS", correct: false },

    ],
  },
  {
    question: "cuando se utiliza el protocolo TCP/IP  para conexionado en redes, que se tiene:",
    answers: [
      { text: "velocidad y capacidad de transmision sin limites", correct: false },
      { text: "capacidad limitada de transmision de datos y velocidad limitada", correct: true},

    ],
  },
  {
    question: "el filtro de bayer se compone de:",
    answers: [
      { text: "puntos de un solo color", correct: false },
      { text: "puntos verdes y rojos", correct: false },
      { text: "sin puntos de color", correct: false },
      { text: "puntos rojos, verdes y azules", correct: true},

    ],
  },
  {
    question: "el sistema de compresion h264 permite",
    answers: [
      { text: "mejorar la luminancia de la imagen", correct: false },
      { text: "mejorar la dinamica de los objetos en movimiento sobre fondos fijos", correct: true },
      { text: "aumentar la resolucion", correct: false },

    ],
  },
  {
    question: "el sistema de compresion JPEG  es:",
    answers: [
      { text: "un sistema estatico", correct: true },
      { text: "un sistema dinamico", correct: false },
      { text: "un sistema secuencial", correct: false },
      { text: "un sistema digital de analisis de señales de video", correct: false },

    ],
  },
  {
    question: "el sistema de compresion MPEG es:",
    answers: [
      { text: "un sistema digital de analisis de señal de video", correct: false },
      { text: "un sistema estatico", correct: false },
      { text: "un sistema dinamico", correct: true },
      { text: "un sistema analogico", correct: false },

    ],
  },
  {
    question: "en un lente para camara , el diafragma esta adentro del lente ,en que lugar",
    answers: [
      { text: "en la parte frontal", correct: false },
      { text: "en la parte trasera", correct: false },
      { text: "en el centro y equidistante", correct: true },
      { text: "en el centro y pegado a la pupila de salida", correct: false },

    ],
  },
  {
    question: "en un sensor C-MOS, cuales son los puntos sensibles a la luz y como se componen",
    answers: [
      { text: "son fotodiodos", correct: false },
      { text: "son FETS fotosensibles", correct: true },
      { text: "son de germanio dopado", correct: false },

    ],
  },
  {
    question: "la iluminacion para una camara de VSS  es fundamental",
    answers: [
      { text: "verdadero", correct: true },
      { text: "false", correct: false },

    ],
  },
  {
    question: "la palabra CIF se entiende como",
    answers: [
      { text: "una marca", correct: false },
      { text: "un sistema de normatividad para resolucion para VSS", correct: true },
      { text: "un formato analogico de video", correct: false },

    ],
  },
  {
    question: "la palabra IP es:",
    answers: [
      { text: "una marca", correct: false },
      { text: "un protocolo de transmision de paquetes digitales", correct: true },
      { text: "un sistema de conectividad analogico", correct: false },

    ],
  },
  {
    question: "la resolucion horizontal de una camara de TV determina:",
    answers: [
      { text: "la calidad de imagen a vizualizar", correct: true },
      { text: "la cantidad de lineas a transmitir", correct: false },
      { text: "la cantidad de pixeles a visualizar", correct: false },

    ],
  },
  {
    question: "las camaras con conexion por protocolo TCP/IP tienen:",
    answers: [
      { text: "una salida digital para el protocolo normalizado", correct: true },
      { text: "una fuente de alimentacion incluida", correct: false },
      { text: "una entrada para otra camara", correct: false },

    ],
  },
  {
    question: "las camaras con DSP NO son camaras de tipo:",
    answers: [
      { text: "analogico", correct: true },
      { text: "con procesado digital de la señal", correct: false },
      { text: "con salida analogica y procesado digital de la señal", correct: false },
      { text: "con salida digital", correct: false },

    ],
  },
  {
    question: "las camaras HD-TVI , HD-CVI y AHD son:",
    answers: [
      { text: "analogicas y de salida analogica", correct: false },
      { text: "digitales DSP y de salida analogica", correct: true },

    ],
  },
  {
    question: "las camaras IP se conectan a:",
    answers: [
      { text: "un tablero de control", correct: false },
      { text: "una red de datos con protocolo TCP/IP", correct: false },
      { text: "un grabador digital", correct: false },

    ],
  },
  {
    question: "las camaras termicas poseen un sensor especial y utilizan lentes de:",
    answers: [
      { text: "CCD termico", correct: false },
      { text: "lente de fluorita", correct: false },
      { text: "bolometro sin salto de temperatura", correct: true },

    ],
  },
  {
    question: "las sensibilidades de las camaras color y blaco y negro NO dependen de ",
    answers: [
      { text: "de la construccion electronica", correct: false },
      { text: "se utilizan filtro de color dicroico", correct: false },
      { text: "de la tension de alimentacion", correct: true },
      { text: "de la luminocidad del lente empleado", correct: false },

    ],
  },
  {
    question: "los grabadores digitales almacenan las imagenes en:",
    answers: [
      { text: "un archivo digital", correct: true },
      { text: "una memoria ram", correct: false },

    ],
  },
  {
    question: "para que se utiliza el sistema de compresion H265",
    answers: [
      { text: "posee mayor control de la iluminacion ", correct: false },
      { text: "disminuye la utilizacion de grandes archivos de datos", correct: true},
      { text: "es un sistema digital simple", correct: false },

    ],
  },
  {
    question: "que ventajas NOprevee una camara de 180º de cobertura y de alta resolucion",
    answers: [
      { text: "permite el control total de un area pequeña, aun con deformacion optica", correct: false },
      { text: "se le puede aplicar una correccion optica al lente mediante proceso digital", correct: false },
      { text: "se le puede aplicar una correcion digital a la imafen para verla normal", correct: false },
      { text: "la imagen se distorciona por el lente gran angular, como se llama a este ", correct: true },

    ],
  },
  {
    question: "que ventajas NO tiene usar camaras megapixel",
    answers: [
      { text: "permite tener mayor captacion de la escena ", correct: false },
      { text: "mediante la utilizacion de parte de la escena, es igual a un numero mayor de camaras", correct: false },
      { text: "permite visualizar detalles parciales de gran interes para el observador", correct: false },
      { text: " nose obtiene ventajas", correct: true },

    ],
  },
  {
    question: "un grabafor digital de video graba:",
    answers: [
      { text: "imagenes analogicas", correct: false },
      { text: "señales de audio", correct: true },
      { text: "imagenes digitales", correct: false },

    ],
  },
  {
    question: "un lente gran angular sirve para:",
    answers: [
      { text: "tomas cercanas", correct: true },
      { text: "tomas lejanas", correct: false },
      { text: "tomas de detalle a gran distancia", correct: false },

    ],
  },
  {
    question: "un lente gran angular tiene un angulo:",
    answers: [
      { text: "agudo", correct: false },
      { text: "por encima de un angulo normal", correct: true },
      { text: "menor que un angul normal", correct: false },

    ],
  },
  {
    question: "un lente NO esta hecho de ",
    answers: [
      { text: "plastico", correct: false },
      { text: "vidrio", correct: false },
      { text: "cristal", correct: true },
      { text: "germanio", correct: false },

    ],
  },
  {
    question: "ub monitor LCD tiene en la parte trasera una fuente de luz de color :",
    answers: [
      { text: "monocromatica", correct: false },
      { text: "policromatica", correct: true},
      { text: "verde", correct: false },

    ],
  },
  {
    question: "una red IP es una :",
    answers: [
      { text: "una red electrica de potencia", correct: false },
      { text: "una red de conectividad digital", correct: true },
      { text: "un sistema de conectiviad exclusiva para VSS", correct: false },

    ],
  },
  {
    question: "INICIA LA PARTE 8.... cuando vimos el formato de comunicacion de WIEGAND entre un lector y el controlador son 2 cables de comando y dos de alimentacion. las señales de comando se denominan:",
    answers: [
      { text: "DATA 0 y DATA1", correct: true },
      { text: "DATA 2 y DATA 4", correct: false },
      { text: "DATA SERIE", correct: false },
      { text: "DATA OSDP y DATA ABA", correct: false },

    ],
  },
  {
    question: "entre dos sistemas de seguridad biometrica cual elegiria para mejor seguridad:",
    answers: [
      { text: "lectura de la huella", correct: true },
      { text: "lectura de la palma", correct: false },

    ],
  },
  {
    question: "lso sistemas de control de acceso, consisten en sistemas sonde por distintos madios de validacion se logra verificar una entidad o un permiso. en ese caso podemos decir que puede ser logico o fisico",
    answers: [
      { text: "verdadero", correct: true },
      { text: "falso", correct: false },

    ],
  },
  {
    question: "se explico que los sistemas de control de accesos , pueden ser autonomos o en red. usted que ofreceria para un sistema que controle una sola puerta, pero con 1000 ususarios",
    answers: [
      { text: "autonomo con base de datos ", correct: true},
      { text: "en red con base de datos", correct: false },

    ],
  },
  {
    question: "si decidimos que el control de acceso fisico involucra la identificacion positiva de personas que entra o sale del area bajo control. lo podriamos comparar a una persona que entra o sale de una sistema logico bajo control",
    answers: [
      { text: "verdadero", correct: true},
      { text: "falso", correct: false },

    ],
  },
  {
    question: "si mi sistema de identificacion me permite saber quien soy me estoy refiriendo al uso de ",
    answers: [
      { text: "clave", correct: false },
      { text: "pin", correct: false },
      { text: "llavero tag", correct: false },
      { text: "biometria", correct: true },
      { text: "tarjeta", correct: false },

    ],
  },
  {
    question: "si tengo una cerradura y dice que es FAIL SAFE: la puerta permanece abierta cuando la cerradura ni esta alimentada o cerrada",
    answers: [
      { text: "abierta", correct: true},
      { text: "cerrada", correct: false },

    ],
  },
  {
    question: "un sistema biometrico utiliza la foto del registro o utilizan caracteres de la imagen para procesar la informacion",
    answers: [
      { text: "foto ", correct: false },
      { text: "caracteristicas", correct: true },
      { text: "ambas", correct: false },
      { text: "ninguna", correct: false },

    ],
  },
  {
    question: "vimos que los sistemas de identificacion se comunican con los controladores por formatos prederteminados. identificalos",
    answers: [
      { text: "RS92, RS232, OSDP", correct: false },
      { text: "WIEGAND, ABA, RS232, OSDP", correct: true },
      { text: "WIEGAND, ABA, RS942", correct: false },

    ],
  },
  {
    question: "INICIA LA PARTE 9... como pueden ser las asignaciones de direcciones IP?",
    answers: [
      { text: "manuales o dinamicas", correct: true},
      { text: "no hace falta asignar direccion IP en una red", correct: false },
      { text: "ninguna es correcta", correct: false },

    ],
  },
  {
    question: "con que programa se puedo activar el shell de la linea de comandos de windows",
    answers: [
      { text: "nslookup", correct: false },
      { text: "cmd", correct: true },
      { text: "exit", correct: false },
      { text: "ninguna es correcta", correct: false },

    ],
  },
  {
    question: "cual de las siguientes definiciones es correcta",
    answers: [
      { text: "las direcciones IP fijas no existen", correct: false },
      { text: "las direcciones IP dinamicas las asiggna un servidor DHCP", correct: true },
      { text: "pueden coexistir una direccion IP fija y una dinamica con el mismo numero dentro de la misma red LAN", correct: false },
      { text: "las direcciones IP de un dispositivo de red LAN solo la asignara el proovedor de internet", correct: false },

    ],
  },
  {
    question: "cual de los siguientes protocolos no se suele usar en internet",
    answers: [
      { text: "FTP", correct: false },
      { text: "HTTP", correct: false },
      { text: "SMTP", correct: false },
      { text: "SSH", correct: true },

    ],
  },
  {
    question: "cual es aun el cable mas utilizado en redes de computadoras LAN hoy en dia?",
    answers: [
      { text: "coaxial", correct: false },
      { text: "fibra optica", correct: false },
      { text: "utp", correct: true },
      { text: "ningunno de los anteriores", correct: false },

    ],
  },
  {
    question: "cual es el dispositivo que se utiliza para realiar conexiones entre redes distintas?",
    answers: [
      { text: "router", correct: true },
      { text: "switch", correct: false },
      { text: "hub", correct: false },
      { text: "host", correct: false },

    ],
  },
  {
    question: "cuantas capas tiene el protocolo TCP-IP",
    answers: [
      { text: "3", correct: false },
      { text: "5", correct: false },
      { text: "4", correct: true },
      { text: "2", correct: false },

    ],
  },
  {
    question: "de que tipo de tecnologia mas difundida puede ser una placa de red",
    answers: [
      { text: "wifi", correct: true },
      { text: "usb", correct: false },
      { text: "ninguna es correcta", correct: false },

    ],
  },
  {
    question: "para que sirve el DHCP",
    answers: [
      { text: "sirve para traducir los nombres de dominio entendible por los humanos a direcciones IP", correct: false },
      { text: "asigna y controla direcciones IP dentro de una red", correct: true },
      { text: "mantiene una tabla con las direcciones fisicas o mac adrees de los equipos en la red", correct: false },
      { text: "sirve para conectar dos redes diferentes", correct: false },

    ],
  },
  {
    question: "para que sirve el protocolo TCP-IP? ",
    answers: [
      { text: "para enlazar computadoras que solo utilizan sistemas operativos iguales en redes locales", correct: false },
      { text: "para enlazar computadoras que utilizan diferentes sstemas operativos en LAN Y WAN", correct: true },
      { text: "para enlazar computadoras excepto que se conecten a internet", correct: false },
      { text: "ninguna es correcta", correct: false },

    ],
  },
  {
    question: "que es una red informatica?",
    answers: [
      { text: "es un grupo de profesionales y tecnicos con conocimientos agrupados para la realizacion de instalaciones e intercambio de informacion", correct: false },
      { text: "es un conjunto de computadoras interconectadas entre si entre conexiones fisicas o por medios inalambricos", correct: true },
      { text: "es la suma de routers, switches , hubs y cables que estan siendo utilizados por los ususarios finales ", correct: false },
      { text: "es un conjunto de protocolos que permiten la transmision de datagramas entre equipos informaticos ", correct: false },

    ],
  },
  {
    question: "el comando PING sirve para:",
    answers: [
      { text: "confirmar la comunicacion entre dispositivos de una red", correct: true },
      { text: "obtener una direccion MAC", correct: false },
      { text: "salir de la linea de comandos de windows", correct: false },
      { text: "ninguna de las anteriores", correct: false },

    ],
  },
  {
    question: "el comando IPCONFIG sirve para obtener:",
    answers: [
      { text: "la mascara de subred", correct: false },
      { text: "la direccion IP local", correct: false },
      { text: "la direccion IP deL gateway o puerta de enlace", correct: false },
      { text: "todas las anteriores", correct: true },

    ],
  },
  {
    question: "en el modelo TCP-IP, que capa determina la mejor ruta a travez de la red ?",
    answers: [
      { text: "aplicacion", correct: false },
      { text: "transporte", correct: false },
      { text: "internet", correct: true },
      { text: "accesos a la red", correct: false },

    ],
  },
  {
    question: "las IP privadas estan en cierto modo aisladas de las publicas",
    answers: [
      { text: "siempre", correct: true },
      { text: "a veces ", correct: false },
      { text: "nunca", correct: false },
      { text: "todas pueden ser ", correct: false },

    ],
  },
  {
    question: "marque la definicion incorrecta",
    answers: [
      { text: "la direcciones IP pueden ser privadas o publicas", correct: false },
      { text: "las direcciones IP privadas son VISIBLES unicamente por otors equipos de su propia red", correct: false },
      { text: "las direcciones IP pueden ser fijas ( estaticas) o dinamicas ", correct: false },
      { text: "puede haber 2 o mas equipos con la misma direccion IP dentro de una misma red", correct: true },

    ],
  },
  {
    question: "marcas la defincion correcta",
    answers: [
      { text: "una red lan es una red local", correct: true },
      { text: "una red wan es una red pequeña", correct: false },
      { text: "la red lan mas utilizada es internet", correct: false },
      { text: "un ejemplo clasico de una red wan es una red de computadoras dentro de una oficina ", correct: false },

    ],
  },
  {
    question: "marque la definicion correcta",
    answers: [
      { text: "en una red privada los medios de conexion de las lineas utilizadas son propiedad de la empresa", correct: true },
      { text: "un ejemplo de red lan es internet", correct: false },
      { text: "todas son correctas", correct: false },

    ],
  },
  {
    question: "se denomina GATEWAY o puerta de enlace a:",
    answers: [
      { text: "un protocolo de conectividad", correct: false },
      { text: "una direccion mac", correct: false },
      { text: "un equipo informatico que da acceso a la red local con la red exterior", correct: true },
      { text: "ninguna de las anteriores", correct: false },

    ],
  },
  {
    question: "segun su crierio profesional, a que se asemeja una camara IP en una red informatica",
    answers: [
      { text: "a un router", correct: false },
      { text: "a una minicomputadora", correct: true },
      { text: "a un switch", correct: false },
      { text: "a una placa de red", correct: false },

    ],
  },
  {
    question: "INICIA LA PARTE 10... cuando mencionamos los tipos y estilos de cableados para las centrales de incendio,indiquen cual no mencionamos",
    answers: [
      { text: "clase a ", correct: false },
      { text: "clase 4 ", correct: false },
      { text: "clase b", correct: false },
      { text: "estilo 8 y amp;9", correct: true },
      { text: "estilo 6 y amp;7", correct: false },

    ],
  },
  {
    question: "cuando utilizamos sensores de humo combinamos un censado termico:",
    answers: [
      { text: "verdadero", correct: true },
      { text: "falso", correct: false },

    ],
  },
  {
    question: "en los sistemas de deteccion de incendio podemos incorporar camaras de video preparadas para tal efecto , la pregunta es si las mismas detectan:",
    answers: [
      { text: "humo", correct: false },
      { text: "fuego", correct: false },
      { text: "ambos", correct: true },

    ],
  },
  {
    question: "en un sistema convencional se pueden conectar dispositivos T",
    answers: [
      { text: "verdadero", correct: false },
      { text: "falso", correct: true },

    ],
  },
  {
    question: "en un sistema de deteccion de incendio, los avisadores se conectan en el lazo o zona o se conectan en el NAC ya que podemos interpretar que se utiliza para la identificacion de una alarma de incendio",
    answers: [
      { text: "lazo o zona", correct: true },
      { text: "circuita NAC", correct: false },
      { text: "todos segun la central", correct: false },
      { text: "ninguno segun la central", correct: false },

    ],
  },
  {
    question: "es un sistema de extincion de incendio vimos que pueden ser de distintas maneras, y de distintos agentes. la pregunta es , si voy  a inundar un forma total con un gas determinado, la difusion es por medio de:",
    answers: [
      { text: "rociadores", correct: false },
      { text: "toberas", correct: true },
      { text: "ambas opciones", correct: false },
      { text: "ninguna de las opciones", correct: false },

    ],
  },
  {
    question: "la carga de fuego se define como la cantidad d eenergia que resulta de la combustion completa de todos los materiales inflamables en un incendio",
    answers: [
      { text: "verdadero", correct: true },
      { text: "falso", correct: false },

    ],
  },
  {
    question: "las centrales de incendio convencionales trabajan por zonas- la capacidad maxima de sispositivos por zona segun esta normado y la mayria de los fabricantes es de 100 dispositivos",
    answers: [
      { text: "verdadero", correct: false },
      { text: "falso", correct: true },

    ],
  },
  {
    question: "las centrales direccionales tienen zonas o lazos que atienden zonas?",
    answers: [
      { text: "zonas", correct: false },
      { text: "lazos", correct: true },

    ],
  },
  {
    question: "lso dispositivos para notificacion de aviso de incendio pueden ser",
    answers: [
      { text: "acusticos", correct: false },
      { text: "opticos", correct: false },
      { text: "opticos y acusticos", correct: false },
      { text: "todos los anteriores", correct: true },
      { text: "ninguno de los anteriores", correct: false },

    ],
  },
  {
    question: "si hablamos de un detector lineal de humo me refiero a :",
    answers: [
      { text: "un detector de humo spot", correct: false },
      { text: "un sistema de aspiracion", correct: false },
      { text: "una barrera detectora de humo", correct: false },
      { text: "nignuo de ellos", correct: true},
      { text: "todos los presentados", correct: false },

    ],
  },
  {
    question: "siguiendo con los sistemas de deteccion de incendio utilizando camaras de video preparadas para tal efecto. la pregunta es si las mismas sirven para actuar como camaras de video para VSS",
    answers: [
      { text: "verdadero", correct: true },
      { text: "falso", correct: false },

    ],
  },
  {
    question: "triangulo de fuego- hay elementos que lo conforman, puede decir cuales son para producir fuego",
    answers: [
      { text: "oxigeno, material combustible, material de ignicion", correct: true },
      { text: "CO , material combustible, polvo quimico", correct: false },
      { text: "material combustible, material de ignicion, CO ", correct: false },

    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "SIGUIENTE";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.classList.add(
      "btn",
      "fw-bold",
      "text-start",
      "border",
      "border-dark",
      "mb-3",
      "text-capitalize"
    );
    button.innerHTML = answer.text;
    answerButtons.appendChild(button);
    if (answer.correct == true) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}
function selectAnswer(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct == "true";

  if (isCorrect) {
    selectedButton.classList.add("btn-success");
    score++;
  } else {
    selectedButton.classList.add("btn-danger");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct) {
      button.classList.add("btn-success");
    } else {
      button.disabled = true;
    }
  });
  nextButton.style.display = "block";
}
function showScore() {
  resetState();
  questionElement.innerHTML = `TU PUNTAJE FUE ${score} DE ${questions.length}!`;
  nextButton.innerHTML = "JUGUEMOS DE NUEVO";
  nextButton.style.display = "block";
}
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextButton.addEventListener("click", function () {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
window.onload = startQuiz();
