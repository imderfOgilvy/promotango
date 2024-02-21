import axios from 'axios'
import howPracticePng from '/how-practice.png'
import winPng from '/win.png'
import certifedPng from '/certifed.png'
import miniTangoPng from '/mini-tango.png'
import marketPng from '/market-d.png'
import checkedHow from '/checked-d.png'
import numberRdPng from '/number-d.png'
import checkedWinPng from '/checked-win.png'
import gameBoyPng from '/game-boy.png'
import keyBoardPng from '/keyboard.png'
import parPng from '/par.png'
import sirGamerPng from '/sir-gamer.png'
import headSetPng from '/headset.png'
import tangoManiPng from '/tango-manicero-j.png'
import tangoMilkPng from '/tango-leche-j.png'
import tangoMegaPng from '/tango-mega.png'
import tangoClasicPng from '/tango-clasic.png'
import tangoWhitePng from '/tango-white.png'
import tangoMiniPng from '/tango-mini.png'
import tangoMiniWhitePng from '/tango-mini-white.png'
import tangoUntablePng from '/tango-untable.png'
import tangoBombonPng from '/tango-new-bombom.png'

export const TITLE_APP = 'Tango'
export const SITE_KEY_CAPTCHA = '6LfZvTkpAAAAABpLutCFeWeBpTSR7R-H_13XazW5'
export const URL_API = 'https://python-nestle-production.up.railway.app/api/v1'
export const URL_API_LOCAL = 'http://127.0.0.1:8888/api/v1'
export const axiosInstance = axios.create({
  baseURL: URL_API,
})

export const normas = [
  {
    photo: howPracticePng,
    label: '¿COMO PARTICIPAR?',
    path: '/how-to-take-part',
    text: 'INGRESA AHORA',
  },
  {
    photo: winPng,
    label: 'PREMIOS',
    path: '/awards',
    text: 'INGRESA AHORA',
  },
  {
    photo: certifedPng,
    label: 'GANADORES',
    path: '/win',
    text: 'INGRESA AHORA',
  },
  {
    photo: miniTangoPng,
    label: 'PRODUCTOS PARTICIPANTES',
    path: '/products',
    text: 'INGRESA AHORA',
  },
]

export const howToTakePart = [
  {
    label: 'Compra un producto TANGO® en tu supermercado favorito.',
    photo: marketPng,
    step: 'Paso 1',
  },
  {
    label: 'Regístrate con tus datos.',
    photo: checkedHow,
    step: 'Paso 2',
  },
  {
    label:
      'Ingresa el número de lote y sube una foto de tu producto donde se visualice el número de lote.',
    photo: numberRdPng,
    step: 'Paso 3',
  },
  {
    label: 'Participa en el sorteo de premios semanales.',
    photo: checkedWinPng,
    step: 'Paso 4',
  },
]

export const products = [
  {
    label: 'Tango® Manicero',
    value: 'TANGO Manicero',
  },
  {
    label: 'Tango® Leche',
    value: 'TANGO Leche',
  },
  {
    label: 'Tango® Mega',
    value: 'TANGO Mega',
  },
  {
    label: 'Tango® Clásico',
    value: 'TANGO Clasico',
  },
  {
    label: 'Tango® Bombón',
    value: '',
  },
  {
    label: 'Tango® Untable',
  },
]

export const markets = [
  {
    label: 'Supermaxi',
  },
  {
    label: 'Megamaxi ',
  },
  {
    label: 'Aki ',
  },
  {
    label: 'Gran Aki',
  },
  {
    label: 'Tia ',
  },
  {
    label: 'Mi Comisariato',
  },
  {
    label: 'Hipermarket',
  },
  {
    label: 'Santa Maria',
  },
  {
    label: 'Coral Hipermercados',
  },
  {
    label: 'Mini',
  },
  {
    label: 'Tipti',
  },
  {
    label: 'Rappi',
  },
  {
    label: 'Pedidos Ya',
  },
  {
    label: 'Super Easy',
  },
  { label: 'Otros' },
]

export const awardsConst = [
  {
    label: '24 Consolas de juego',
    photo: gameBoyPng,
  },
  {
    label: '12 Sillas gamer',
    photo: sirGamerPng,
  },
  {
    label: '12 Teclados gamer',
    photo: keyBoardPng,
  },
  {
    label: '219 Parlantes',
    photo: parPng,
  },
  {
    label: '54 Headsets',
    photo: headSetPng,
  },
]

export const productsPage = [
  {
    label: 'Tango® Manicero',
    photo: tangoManiPng,
    gr: '15g / 20g / 30g / 90g',
    value: 'Tango Manicero',
    width: '8rem',
  },
  {
    label: 'Tango® Leche',
    photo: tangoMilkPng,
    gr: '15g / 30g / 90g',
    value: 'Tango Leche',
    width: '8rem',
  },
  {
    label: 'Tango® Mega',
    photo: tangoMegaPng,
    gr: '28g',
    value: 'Tango Mega',
  },
  {
    label: 'Tango® Clásico',
    photo: tangoClasicPng,
    gr: '13gr',
    value: 'Tango Clásico',
  },
  {
    label: 'Tango® Blanco',
    photo: tangoWhitePng,
    gr: '25g',
    value: 'Tango Blanco',
  },
  {
    label: 'Tango® Clásico Mini',
    photo: tangoMiniPng,
    gr: '13g',
    value: 'Tango Clásico Mini',
  },
  {
    label: 'Tango® Blanco Mini',
    photo: tangoMiniWhitePng,
    gr: '13gr',
    value: 'Tango Blanco Mini',
  },
  {
    label: 'Tango® Untable',
    photo: tangoUntablePng,
    gr: '1.2kg',
    value: 'Tango Untable',
  },
  {
    label: 'Tango® Bombón',
    photo: tangoBombonPng,
    gr: '437.5g',
    value: 'Tango Bombón',
  },
]

export const win = [
  {
    week: 'Semana 1',
    wind: [
      { label: '092XXXX851', name: 'ANA VARGAS GONZÁLEZ' },
      { label: '099XXXX773', name: 'ANDREA ESTEFANÍA ALEGRÍA BARTOLOMÉ' },
      { label: '172XXXX640', name: 'ANDREINA ORTEGA MUÑOZ' },
      { label: '131XXXX736', name: 'ANGIE STEFANY CEVALLOS BAQUERIZO' },
      { label: '095XXXX137', name: 'BETY DEL ROCIO VERA CARPIO' },
      { label: '093XXXX383', name: 'BRUNO VALENZUELA' },
      { label: '172XXXX365', name: 'DANILO LLUMIQUINGA' },
      { label: '172XXXX968', name: 'DAYANNA LUCERO' },
      { label: '095XXXX006', name: 'DIEGO GARCIA' },
      { label: '093XXXX242', name: 'DOMENICA FRANCO' },
      { label: '095XXXX947', name: 'EDISON MORA' },
      { label: '171XXXX542', name: 'ELIANA ELIZABETH RODRÍGUEZ SIERRA' },
      { label: '095XXXX438', name: 'ESTEFANIA CAROLINA FRANCO ALVARADO' },
      { label: '091XXXX624', name: 'FLOR GRACIELA MONTOYA SILVA' },
      { label: '092XXXX744', name: 'FRANCISCA ZURITA' },
      { label: '135XXXX980', name: 'ISMAEL FRANCISCO FLORES PILLIGUA' },
      { label: '090XXXX161', name: 'JAIME SALAZAR' },
      { label: '030XXXX635', name: 'JAIME CARPIO CHIMA' },
      { label: '131XXXX408', name: 'JOCELYNE MURILLO' },
      { label: '091XXXX233', name: 'JOHANNA VILLACIS' },
      { label: '172XXXX675', name: 'JONATHAN LUCERO' },
      { label: '092XXXX130', name: 'JUANA ELIZABETH ALCIVAR ALVARADO' },
      { label: '090XXXX576', name: 'JULIA SILVA LEÓN' },
      { label: '091XXXX873', name: 'LORENA MARIA SORIANO FIGUEROA' },
      { label: '095XXXX515', name: 'MALLY JARAMILLO' },
      { label: '171XXXX849', name: 'MONICA GALLEGOS' },
      { label: '090XXXX355', name: 'OTO AGUSTIN RUGEL ANCHUNDIA' },
      { label: '131XXXX314', name: 'ROBERTO ESPINALES CALDERON' },
      { label: '091XXXX569', name: 'ROLANDO MORA' },
      { label: '091XXXX235', name: 'SILVIA MORA' },
      { label: '095XXXX545', name: 'STEFANIA FUENTES' },
      { label: '100XXXX598', name: 'TATIANA JANETH AYALA AYALA' },
      { label: '092XXXX891', name: 'VICENTE RODOLFO RONDAN ALLAUCA' },
      { label: '130XXXX648', name: 'FERMIN ESPINALES' },
      { label: '130XXXX487', name: 'KELVIN ZAMBRANO' },
    ],
  },
  {
    week: 'Semana 2',
    wind: [
      { label: '100XXXX941', name: 'AARON IMBAQUINGO' },
      { label: '172XXXX989', name: 'ALEXEI RAMOS' },
      { label: 'XXXXXXXXX', name: 'ANGIE STEFANY CEVALLOS BAQUERIZO' },
      { label: '131XXXX744', name: 'ARTURO CRISTHOFER STACEY BAQUERIZO' },
      { label: '130XXXX416', name: 'BEATRIZ ALCIVAR' },
      { label: '092XXXX926', name: 'DENISSE CABRERA GUTIÉRREZ' },
      { label: '092XXXX060', name: 'DIANA LORENA ACOSTA SORIANO' },
      { label: '170XXXX631', name: 'DIANA PAREDES' },
      { label: '171XXXX756', name: 'DIANA PAREDES' },
      { label: '120XXXX708', name: 'FERNANDO SÁNCHEZ GARCIA' },
      { label: '175XXXX453', name: 'FRANCISCO PAREDES' },
      { label: '172XXXX300', name: 'FRANKLIN SALAZAR GONZÁLEZ' },
      { label: '093XXXX249', name: 'FREDDY GUEVARA' },
      { label: '091XXXX722', name: 'JENNIFER JEANNETTE VIÑA MEJIA' },
      { label: '095XXXX598', name: 'JEREMY ESPINALES' },
      { label: '131XXXX821', name: 'JONATHAN ESPINALES' },
      { label: '171XXXX411', name: 'JOSÉ GRANDA' },
      { label: '095XXXX997', name: 'JOSE ALVARADO' },
      { label: '091XXXX736', name: 'JUAN HIDALGO' },
      { label: '172XXXX702', name: 'JULIETH PINCHA' },
      { label: '092XXXX557', name: 'KARINA ANCHUNDIA ALVARADO' },
      { label: '131XXXX448', name: 'KARLA MENDOZA' },
      { label: '172XXXX818', name: 'KATHERINE RAMÍREZ' },
      { label: '130XXXX748', name: 'KENNEDY ORLANDO FLORES HOLGUIN' },
      { label: '175XXXX829', name: 'MARCOS TOAPANTA' },
      { label: '090XXXX394', name: 'MARÍA TORRES' },
      { label: 'XXXXXXXXX', name: 'MARTHA CARRASCO' },
      { label: '175XXXX550', name: 'MARYURI CARRERA' },
      { label: '171XXXX749', name: 'MAURICIO PAREDES' },
      { label: '091XXXX002', name: 'MERCEDES GÓMEZ TOMALÁ' },
      { label: '091XXXX975', name: 'MERCY BELTRAN' },
      { label: '091XXXX643', name: 'NUKMOY MARIA HASING QUINTANA' },
      { label: '090XXXX355', name: 'OTRO RUGEL ANCUNDIA' },
      { label: '092XXXX960', name: 'PATRICIA CARPIO CHIMA' },
      { label: '092XXXX954', name: 'PAUL ALEJANDRO MACAY MONTERO' },
      { label: '091XXXX569', name: 'ROLANDO MORA' },
      { label: 'XXXXXXXXX', name: 'RONALD MARQUEZ' },
      { label: '091XXXX235', name: 'SILVIA MORA' },
    ],
  },
  {
    week: 'Semana 3',
    wind: [
      { label: '091XXXX460', name: 'ALINA CADMELEMA ESPINOZA' },
      { label: '080XXXX034', name: 'ANTHONY QUIÑÓNEZ' },
      { label: '095XXXX983', name: 'CHRISTIAN MORA' },
      { label: '170XXXX145', name: 'CONSUELO VILLAVICENCIO' },
      { label: '095XXXX509', name: 'DANIEL SEBASTIAN CASTRO VERA' },
      { label: '095XXXX496', name: 'DIANA JARAMILLO GÓMEZ' },
      { label: '092XXXX770', name: 'EDUARDO LEÓN' },
      { label: '131XXXX469', name: 'ERICK GARCIA' },
      { label: '120XXXX708', name: 'FERNANDO SÁNCHEZ GARCIA' },
      { label: 'XXXXXXXXX', name: 'GEORGE VEGA' },
      { label: '095XXXX071', name: 'GIOVANNY VERA' },
      { label: '091XXXX616', name: 'KARLA BAJAÑA ALAVA' },
      { label: '093XXXX023', name: 'LIZ NADIA SAMANIEGO' },
      { label: '131XXXX463', name: 'LUCIA ALCIVAR PACHAY' },
      { label: '091XXXX587', name: 'MARCO CAMILO HERRERA REINOSO' },
      { label: '090XXXX714', name: 'MARIA ANGELA ALLAUCA AISABUCHA' },
      { label: '171XXXX749', name: 'MAURICIO PAREDES' },
      { label: '090XXXX881', name: 'MONICA BARTOLOME' },
      { label: '094XXXX822', name: 'PAULO BERNABE ALTAMIRANO' },
      { label: '091XXXX316', name: 'PEDRO HÉCTOR ANCHUNDIA ALVARADO' },
      { label: '091XXXX887', name: 'RAFAEL LEONIDAS MONTOYA SILVA' },
      { label: '172XXXX760', name: 'STEFANI GRIJALVA' },
      { label: '094XXXX675', name: 'VICTOR ENRIQUE NAVARRETE' },
      { label: '095XXXX253', name: 'WILLY JOSE VERA CARPIO' },
    ],
  },
  {
    week: 'Semana 4',
    wind: [
      { label: '094XXXX736', name: 'ADRIÁN MACÍAS' },
      { label: '070XXXX125', name: 'ALLISON MEDINA' },
      { label: '172XXXX922', name: 'ANDRES SALAZAR' },
      { label: '172XXXX599', name: 'ARACELY HERRERA' },
      { label: '171XXXX244', name: 'BURGOS VITERI' },
      { label: '185XXXX576', name: 'CYNTHIA TIBAN' },
      { label: '175XXXX917', name: 'ESTEBAN ADRIAN MEJIA' },
      { label: '030XXXX036', name: 'FRANCISCO GUZNAY' },
      { label: '107XXXX597', name: 'HUGO BARRERA' },
      { label: '131XXXX106', name: 'JOHANA BRAVO' },
      { label: '095XXXX557', name: 'KATHERINE YULISA RAMIREZ NAVARRETE' },
      { label: '131XXXX564', name: 'KRISTEL CEDEÑO' },
      { label: '090XXXX923', name: 'LUIS BORJA' },
      { label: '010XXXX725', name: 'MARCO PINOS' },
      { label: '1005208812', name: 'MARIO TITO' },
      { label: '092XXXX341', name: 'MARIUXI MOLINA' },
      { label: '172XXXX404', name: 'PEDRO ROBALINO' },
      { label: '095XXXX976', name: 'SAÚL ABAD' },
      { label: '131XXXX463', name: 'SLEIDER PARRALES' },
      { label: '091XXXX248', name: 'WENDY NAVARRETE' },
    ],
  },
  {
    week: 'Semana 5',
    wind: [
      { label: '172XXXX612', name: 'ANDRES ALMEIDA' },
      { label: '175XXXX923', name: 'ANGÉLICA TAPIA' },
      { label: '095XXXX243', name: 'ANTONIO ANDRADE' },
      { label: '094XXXX853', name: 'BLANCA LEONELA RONDAN ALLAUCA' },
      { label: '172XXXX352', name: 'BRANDON SUAREZ' },
      { label: '131XXXX280', name: 'BRUNO DAMIAN ESPINALES' },
      { label: '171XXXX512', name: 'BRYAN BENAVIDES' },
      { label: '015XXXX137', name: 'EDISSON BUENO' },
      { label: '094XXXX929', name: 'FAUSTO RONQUILLO' },
      { label: '092XXXX720', name: 'GEN VELEZ' },
      { label: '092XXXX695', name: 'GINO VERA' },
      { label: '050XXXX077', name: 'JAVIER RECALDE' },
      { label: '130XXXX823', name: 'JESUS PACHAY' },
      { label: '172XXXX021', name: 'JONATHAN EDUARDO HERRERA MEJIA' },
      { label: '093XXXX347', name: 'JOSE VIÑAN' },
      { label: '010XXXX244', name: 'LEONARDO BARRERA' },
      { label: '176XXXXX705', name: 'LEONARDO JOSE ALTUVE NAVA' },
      { label: '090XXXX944', name: 'MARITZA ARACELY ALVARADO ORDOÑEZ' },
      { label: '172XXXX075', name: 'MARTÍN MANOSALVAS' },
      { label: '131XXXX665', name: 'MERCEDES ALCIVAR' },
      { label: '100XXXX161', name: 'MIRIAN DE LA CRUZ' },
      { label: '172XXXX665', name: 'SEBASTIÁN CHABLAY' },
      { label: '175XXXX986', name: 'SEBASTIÁN PONCE' },
    ],
  }
]


export const howPart = [
  {
    step: 1,
    description:
      'Comprar uno de los Productos en Promoción en los principales supermercados del país',
  },
  {
    step: 2,
    description:
      'Buscar el código de 8 dígitos en el empaque del Producto en Promoción (es el número de lote)',
  },
  {
    step: 3,
    description: 'Ingresar a https://www.nestle-contigo.ec/promotangogamers',
  },
  {
    step: 4,
    description:
      'Registrarse con sus datos (Nombre / Apellido / Correo Electrónico / Número de Cédula vigente y legalmente emitida en Ecuador / Ciudad)',
  },
  {
    step: 5,
    description:
      'Subir una foto clara y legible del producto con el número de lote',
  },
  {
    step: 6,
    description:
      'Responder con qué presentación de producto está participando, para poder hacerlo, el concursante deberá escoger según la lista que se le despliega',
  },
  {
    step: 7,
    description: 'Enviar el número de código del lote impreso en el empaque',
  },
]

export const participants = [
  {
    info: 'Participantes desde el 01/01/2024 al 07/01/2024 11:59pm (SORTEO - lunes, 8 de enero de 2024)',
  },
  {
    info: 'Participantes desde el 08/01/2024 al 14/01/2024 11:59pm (SORTEO - lunes, 15 de enero de 2024)',
  },
  {
    info: 'Participantes desde el 15/01/2024 al 21/01/2024 11:59pm (SORTEO - lunes, 22 de enero de 2024)',
  },
  {
    info: 'Participantes desde el 22/01/2024 al 28/01/2024 11:59pm (SORTEO - lunes, 29 de enero de 2024)',
  },
  {
    info: 'Participantes desde el 29/01/2024 al 04/02/2024 11:59pm (SORTEO - lunes, 5 de febrero de 2024)',
  },
  {
    info: 'Participantes desde el 05/02/2024 al 11/02/2024 11:59pm (SORTEO - lunes, 12 de febrero de 2024)',
  },
  {
    info: 'Participantes desde el 12/02/2024 al 18/02/2024 11:59pm (SORTEO - lunes, 19 de febrero de 2024)',
  },
  {
    info: 'Participantes desde el 19/02/2024 al 25/02/2024 11:59pm (SORTEO - lunes, 26 de febrero de 2024)',
  },
  {
    info: 'Participantes desde el 26/02/2024 al 28/02/2024 11:59pm (SORTEO - jueves, 29 de febrero de 2024)',
  },
]

export const participationSteps = [
  {
    step: 1,
    description:
      'Compra tu producto TANGO® favorito en tu tienda o supermercado de confianza',
  },
  {
    step: 2,
    description: 'Guarda tu factura hasta el final de la promoción',
  },
  {
    step: 3,
    description:
      'Regístrate con tus datos personales (nombres y apellidos completos, correo electrónico, número de cédula de identidad, ciudad)',
  },
  {
    step: 4,
    description: 'Sube una foto de tu producto con el número de lote',
  },
  {
    step: 5,
    description: '¡Listooo! Participa en el sorteo de premios semanales',
  },
]

export const prizes = [
  {
    prizeType: 'A',
    quantity: 12,
    description:
      '(doce) consolas para videojuego PlayStation® 5 con Almacenamiento de 835GB. Serán entregados en las oficinas seleccionadas de NESTLÉ en un máximo de 10 días laborables con previa validación de sus datos.',
  },
  {
    prizeType: 'B',
    quantity: 54,
    description:
      '(cincuenta y cuatro) audífonos gaming Primus - tipo diadema con micrófono PHS-S110AT Arcus 110T Ahsok Tano. Conexión 3.5mm + USB para luz. Incluye cable con dos enchufes TRS para conexión a una PC. Sonido estéreo - altavoz de 50 mm con control de volumen y silenciamiento en línea. Micrófono desmontable y flexible, certificado de autenticidad. Pin coleccionable Star Wars edición limitada. Cable de 1.8 m. Serán entregados en las oficinas seleccionadas de NESTLÉ en un máximo de 10 días laborables con previa validación de sus datos.',
  },
  {
    prizeType: 'C',
    quantity: 219,
    description:
      '(doscientos diecinueve) Parlantes HP - multimedia speaker DHE-6002. Sonido en estéreo, control de volumen con luces LED multicolor. Tamaño de 440 x 85 x 87 mm, peso de 770 g. Conectores de 3.5 mm y poder USB. Altavoces de 52 mm. Serán entregados en las oficinas seleccionadas de NESTLÉ en un máximo de 10 días laborables con previa validación de sus datos.',
  },
  {
    prizeType: 'D',
    quantity: 12,
    description:
      '(doce) sillas giratorias - tipo Gamer - con estructura metálica - con mecanismo multifunción, giratorio, reclinable con posición de ajuste de 90°-180º. Serán entregados en las oficinas seleccionadas de NESTLÉ en un máximo de 10 días laborables con previa validación de sus datos.',
  },
  {
    prizeType: 'E',
    quantity: 12,
    description:
      '(doce) Nintendo Switch - 64 GB LED de 7 pulgadas - con joysticks de rojo y azul neón. Serán entregados en las oficinas seleccionadas de NESTLÉ en un máximo de 10 días laborables con previa validación de sus datos.',
  },
  {
    prizeType: 'F',
    quantity: 12,
    description:
      '(doce) Teclados Gaming Inalámbricos - Logitech - USB iluminado G213 multimedia. Serán entregados en las oficinas seleccionadas de NESTLÉ en un máximo de 10 días laborables con previa validación de sus datos.',
  },
]

export const provs = [
  { id: 1, name: 'Azuay' },
  { id: 2, name: 'Bolívar' },
  { id: 3, name: 'Cañar' },
  { id: 4, name: 'Carchi' },
  { id: 5, name: 'Chimborazo' },
  { id: 6, name: 'Cotopaxi' },
  { id: 7, name: 'El Oro' },
  { id: 8, name: 'Esmeraldas' },
  { id: 9, name: 'Galápagos' },
  { id: 10, name: 'Guayas' },
  { id: 11, name: 'Imbabura' },
  { id: 12, name: 'Loja' },
  { id: 13, name: 'Los Ríos' },
  { id: 14, name: 'Manabí' },
  { id: 15, name: 'Morona-Santiago' },
  { id: 16, name: 'Napo' },
  { id: 17, name: 'Orellana' },
  { id: 18, name: 'Pastaza' },
  { id: 19, name: 'Pichincha' },
  { id: 20, name: 'Santa Elena' },
  { id: 21, name: 'Santo Domingo de los Tsáchilas' },
  { id: 22, name: 'Sucumbíos' },
  { id: 23, name: 'Tungurahua' },
  { id: 24, name: 'Zamora-Chinchipe' }
]