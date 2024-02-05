import { Link } from 'wouter'
import iconCamera from '/icon-camera.png'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import termJpgT from '/term-t.jpg'
import termJpgJ from '/term-s.jpg'
import ReactGA from 'react-ga4'
import { useEffect } from 'preact/hooks'

export default function TermPage() {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname,
      title: 'terminos y condiciones Tango',
    })
  }, [])
  return (
    <section class="bg-c-coffe min-h-screen bg-[url('/new-bg-term-mobile.png')] lg:bg-[url('/new-bg-term.png')] bg-no-repeat bg-top">
      <Navbar />
      <div class='grid place-items-center'>
        <div class='lg:mt-4'>
          <div class='pt-16'>
            <h2 class='text-center text-red-500 text-2xl px-2 text-balance md:text-4xl font-amsi-bold mt-8 uppercase'>
              Términos y condiciones
            </h2>
          </div>

          <div class='container pt-8'>
            <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
              <strong>
                <span style='font-size:21px;font-family:"Arial !important",sans-serif;'>
                  BASES LEGALES PARA LA PROMOCI&Oacute;N
                </span>
              </strong>
            </p>
            <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
              <strong>
                <span style='font-size:21px;font-family:"Arial !important",sans-serif;'>
                  &ldquo;S&Eacute; UN GAMER DISTINTO CON TANGO&reg;&rdquo;
                </span>
              </strong>
            </p>
            <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
              <strong>
                <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                  &nbsp;
                </span>
              </strong>
            </p>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <strong>
                <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                  NESTL&Eacute; ECUADOR S.A
                </span>
              </strong>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                .
              </span>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                , representada por su Controller del negocio de Confites,
                se&ntilde;ora Mariela Romero, domiciliado en la Av. Sim&oacute;n
                Bol&iacute;var y v&iacute;a a Nay&oacute;n, Complejo Ekopark,
                torre 2, de la ciudad de Quito, en adelante &ldquo;
                <u>Nestl&eacute;</u>&rdquo;, con el objeto de evitar cualquier
                duda o error de interpretaci&oacute;n relacionado con la
                promoci&oacute;n del t&iacute;tulo, establece las siguientes
                bases, en adelante &ldquo;las Bases&rdquo;:
              </span>
            </p>
            <p
              class='pb-1 pt-4'
              style='margin-bottom:0cm;text-align:justify;line-height:normal;'
            >
              <strong>
                <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                  PRIMERO: PROMOCI&Oacute;N&nbsp;
                </span>
              </strong>
            </p>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                Nestl&eacute; efectuar&aacute; una promoci&oacute;n, de acuerdo
                con los t&eacute;rminos establecidos en las presentes Bases.
              </span>
            </p>
            <p
              class='pb-1 pt-4'
              style='margin-bottom:0cm;text-align:justify;line-height:normal;'
            >
              <strong>
                <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                  SEGUNDO: PRODUCTOS EN PROMOCI&Oacute;N
                </span>
              </strong>
            </p>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                Nestl&eacute; efectuar&aacute; una promoci&oacute;n abarcando
                los productos de la marca TANGO&reg;, detallados en el Anexo 1
                de las presentes bases legales, en adelante los &ldquo;Productos
                en Promoci&oacute;n&rdquo;.
              </span>
            </p>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                Participan en la promoci&oacute;n los lotes de los empaques con
                fecha de fabricaci&oacute;n desde el{' '}
                <strong>1 de abril del 2023&nbsp;</strong>Quedan excluidos de la
                promoci&oacute;n todos los dem&aacute;s productos de
                NESTL&Eacute;&reg;.&nbsp;
              </span>
            </p>
            <p class='pb-1 pt-4'>
              <strong>
                <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                  TERCERO:&nbsp;
                </span>
              </strong>
              <strong>
                <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                  DESCRIPCI&Oacute;N Y MEC&Aacute;NICA DE LA PROMOC&Iacute;ON
                </span>
              </strong>
            </p>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                Para poder participar en la Promoci&oacute;n, el consumidor
                final &ldquo;Participante&rdquo;, deber&aacute; seguir los
                siguientes pasos:
              </span>
            </p>
            <ul style='list-style-type: undefined;'>
              <li class='py-1'>
                <span style='font-family:"Arial !important",sans-serif;font-size:13px;'>
                  Comprar uno de los Productos en Promoci&oacute;n en los
                  principales supermercados del pa&iacute;s
                </span>
              </li>
              <li class='py-1'>
                <span style='font-family:"Arial !important",sans-serif;font-size:13px;'>
                  Buscar el c&oacute;digo de 8 d&iacute;gitos en el empaque del
                  Producto en Promoci&oacute;n (es el n&uacute;mero de lote)
                </span>
              </li>
              <li class='py-1'>
                <span style='font-family:"Arial !important",sans-serif;font-size:13px;'>
                  Ingresar a&nbsp;
                </span>
                <a href='https://www.nestle-contigo.ec/promotangogamers'>
                  <span style='font-family:"Arial !important",sans-serif;'>
                    https://www.nestle-contigo.ec/promotangogamers
                  </span>
                </a>
                <span style='font-family:"Arial !important",sans-serif;'>
                  &nbsp;y:
                </span>
                <ol style='list-style-type: circle;'>
                  <li class='py-1'>
                    <span style='font-family:"Arial !important",sans-serif;'>
                      Registrarse&nbsp;con&nbsp;sus&nbsp;datos (Nombre /
                      Apellido / Correo Electr&oacute;nico / N&uacute;mero
                      de&nbsp;C&eacute;dula&nbsp;vigente y legalmente emitida en
                      Ecuador / Ciudad)
                    </span>
                  </li>
                  <li class='py-1'>
                    <span style='font-family:"Tahoma",sans-serif;'>⁠</span>
                    <span style='font-family:"Arial !important",sans-serif;font-size:10.0pt;'>
                      Subir&nbsp;una foto&nbsp;clara y legible del&nbsp;producto
                      con el n&uacute;mero de lote
                    </span>
                  </li>
                  <li class='py-1'>
                    <span style='font-family:"Tahoma",sans-serif;'>⁠</span>
                    <span style='font-family:"Arial !important",sans-serif;font-size:10.0pt;'>
                      Responder con qu&eacute; presentaci&oacute;n de producto
                      est&aacute; participando, para poder hacerlo, el
                      concursante deber&aacute; escoger seg&uacute;n la lista
                      que se le despliega
                    </span>
                  </li>
                  <li class='py-1'>
                    <span style='font-family:"Arial !important",sans-serif;'>
                      Enviar el n&uacute;mero del lote impreso en el
                      empaque&nbsp;
                    </span>
                  </li>
                  <li class='py-1'>
                    <span style='font-family:"Arial !important",sans-serif;'>
                      *
                    </span>
                    <span style='font-family:"Arial !important",sans-serif;'>
                      Guardar su&nbsp;factura hasta el final de la
                      promoci&oacute;n, ser&aacute;
                      necesaria&nbsp;para&nbsp;redimir&nbsp;el&nbsp;premio en
                      caso de ser ganador*
                    </span>
                  </li>
                </ol>
              </li>
              <li>
                <span style='font-family:"Arial !important",sans-serif;font-size:13px;'>
                  Si el Sistema reconoce que los datos est&aacute;n siendo mal
                  ingresados, le enviar&aacute; un mensaje por la misma
                  p&aacute;gina web que menciona que el n&uacute;mero de lote no
                  es el correcto.
                </span>
              </li>
              <li>
                <span style='font-family:"Arial !important",sans-serif;font-size:13px;'>
                  Una vez verificados los datos, el sistema guarda la
                  informaci&oacute;n de todos los participantes v&aacute;lidos,
                  y si es ganador de uno de los premios:
                </span>
                <ol style='list-style-type: circle;' class='ml-2'>
                  <li>
                    <span style='font-family:"Arial !important",sans-serif;'>
                      Ser&aacute; informado a trav&eacute;s de redes sociales.
                      As&iacute; mismo, se le informar&aacute; que en un plazo
                      m&aacute;ximo de 72 horas recibir&aacute; una llamada /
                      mensaje para coordinar la entrega del premio. Si el plazo
                      coincide con fin de semana o feriado se considerar&aacute;
                      un d&iacute;a adicional.
                    </span>
                  </li>
                  <li>
                    <span style='font-family:"Arial !important",sans-serif;'>
                      El ganador recibir&aacute; una llamada en la cual se
                      coordinar&aacute; la entrega del premio
                    </span>
                    <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                      &nbsp;
                    </span>
                  </li>
                </ol>
              </li>
            </ul>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                En caso de que el ganador no pueda ser contactado hasta 3 (tres)
                d&iacute;as despu&eacute;s de haber sido informado que es
                ganador, Nestl&eacute; podr&aacute; disponer del premio y no se
                ver&aacute; obligado a cancelarlo, sin que esto genere
                responsabilidad a Nestl&eacute;, sus aliados estrat&eacute;gicos
                ni a sus proveedores.
              </span>
            </p>
            <p
              class='pt-4'
              style='margin-bottom:0cm;text-align:justify;line-height:normal;'
            >
              <strong>
                <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                  &nbsp;
                </span>
              </strong>
              <strong>
                <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                  CUARTO:&nbsp;
                </span>
              </strong>
              <strong>
                <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                  PREMIOS
                </span>
              </strong>
            </p>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                Los premios a entregarse en esta promoci&oacute;n son los
                siguientes:&nbsp;
              </span>
            </p>
            <ol style='margin-top:0cm;' type='A'>
              <li style='margin-bottom:0cm;text-align:justify;line-height:     normal;'>
                <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                  12 (doce) consolas para videojuego PlayStation&reg; 5 con
                  Almacenamiento de 835GB.{' '}
                  <strong>
                    Ser&aacute;n entregados en las oficinas seleccionadas de
                    NESTL&Eacute; en un m&aacute;ximo 10 d&iacute;as laborables
                    con previa validaci&oacute;n de sus datos.
                  </strong>
                </span>
              </li>
            </ol>
            <ol style='margin-top:0cm;' type='A'>
              <li style='margin-bottom:0cm;text-align:justify;line-height:     normal;'>
                <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                  12 (doce) Nintendo Switch - 64 GB led 7 pulgadas - con joy
                  stick de rojo y azul ne&oacute;n
                  <strong>
                    . Ser&aacute;n entregados en las oficinas seleccionadas de
                    NESTL&Eacute; en un m&aacute;ximo 10 d&iacute;as laborables
                    con previa validaci&oacute;n de sus datos.
                  </strong>
                </span>
              </li>
            </ol>
            <ol style='margin-top:0cm;' type='A'>
              <li style='margin-bottom:0cm;text-align:justify;line-height:     normal;'>
                <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                  54 (cincuenta y cuatro) aud&iacute;fonos gaming primus - tipo
                  diadema con micr&oacute;fono phs - s 110at arcus 110t ahsok
                  tano conexi&oacute;n 3.5 mm + usb para luz. incluye cable con
                  dos enchufes trs para conexi&oacute;n a un pc. sonido
                  est&eacute;reo - alta voz 50 mm con control de volumen y
                  silenciamiento en linea. microfono desmontable y flexibl
                  <ins cite='mailto:Guest%20User' datetime='2023-12-20T21:22'>
                    e
                  </ins>
                  , certificado de autenticidad. pin coleccionable Star Wars
                  edici&oacute;n
                  <del cite='mailto:Guest%20User' datetime='2023-12-20T21:23'>
                    n
                  </del>{' '}
                  limitada. cable 1.8 m.{' '}
                  <strong>
                    Ser&aacute;n entregados en las oficinas seleccionadas de
                    NESTL&Eacute; en un m&aacute;ximo 10 d&iacute;as laborables
                    con previa validaci&oacute;n de sus datos.
                  </strong>
                </span>
              </li>
            </ol>
            <ol style='margin-top:0cm;' type='A'>
              <li style='margin-bottom:0cm;text-align:justify;line-height:     normal;'>
                <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                  219 (doscientos diecinueve) Parlantes HP - multimedia speaker
                  DHE - 6002 . sonido en est&eacute;reo, control de volumen con
                  luces led multicolor. tama&ntilde;o de 440 x 85 x 87 mm peso
                  de 770g. connectors de 3.5 mm y poder USB. speakers de 52 mm.{' '}
                  <strong>
                    Ser&aacute;n entregados en las oficinas seleccionadas de
                    NESTL&Eacute; en un m&aacute;ximo 10 d&iacute;as laborables
                    con previa validaci&oacute;n de sus datos.
                  </strong>
                </span>
              </li>
            </ol>
            <ol style='margin-top:0cm;' type='A'>
              <li style='margin-bottom:0cm;text-align:justify;line-height:     normal;'>
                <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                  12 (doce) sillas giratorias - tipo Gamer - con estructura
                  met&aacute;lica - con mecanismo multifunci&oacute;n
                  <del cite='mailto:Guest%20User' datetime='2023-12-20T21:26'>
                    &nbsp;
                  </del>
                  , giratorio, reclinable con posici&oacute;n de ajuste de
                  90&deg;-180&ordm;.{' '}
                  <strong>
                    Ser&aacute;n entregados en las oficinas seleccionadas de
                    NESTL&Eacute; en un m&aacute;ximo 10 d&iacute;as laborables
                    con previa validaci&oacute;n de sus datos.
                  </strong>
                </span>
              </li>
            </ol>
            <ol class='ml-2' style='margin-top:0cm;'>
              <li style='margin-bottom:0cm;text-align:justify;line-height:     normal;'>
                <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                  12 (doce) Teclado Gaming Wireless - Logitech - USB multimedia
                  iluminado G213.{' '}
                  <strong>
                    Ser&aacute;n entregados en las oficinas seleccionadas de
                    NESTL&Eacute; en un m&aacute;ximo 10 d&iacute;as laborables
                    con previa validaci&oacute;n de sus datos.
                  </strong>
                </span>
              </li>
            </ol>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                Se verificar&aacute;n los datos de los ganadores, en caso de
                determinar que alg&uacute;n dato no es correcto, no se
                entregar&aacute; el premio y el participante reconoce que no
                podr&aacute; realizar ning&uacute;n reclamo. Asimismo,
                s&oacute;lo se realizar&aacute;n 5 intentos de contacto en un
                m&aacute;ximo de 3 d&iacute;as con la persona ganadora, para la
                coordinaci&oacute;n del premio. En caso de que no conteste, el
                premio pasa a sortearse nuevamente.
              </span>
            </p>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                Cuando se entregue el premio, el ganador deber&aacute; presentar
                la factura del producto ganador en buen estado para comprobar
                los datos ingresados para participar, en caso de que se le
                solicite.&nbsp;
              </span>
            </p>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                &nbsp;
              </span>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                Los participantes podr&aacute;n participar hasta 10 (diez) veces
                al d&iacute;a con el mismo c&oacute;digo del producto y un
                m&aacute;ximo de 10 (diez) veces al d&iacute;a por
                c&eacute;dula. Excedido este l&iacute;mite diario, el sistema
                bloquear&aacute; autom&aacute;ticamente su participaci&oacute;n.
                Los mismos podr&aacute;n ganar hasta m&aacute;ximo 2 veces
                durante la vigencia de la promoci&oacute;n y no podr&aacute;n
                beneficiarse de un mismo premio m&aacute;s de una vez.
              </span>
            </p>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                La conformidad de la entrega del premio quedar&aacute;
                registrada mediante firma del cargo de entrega.
              </span>
            </p>
            <p style='margin-bottom:0cm;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                *
              </span>
              T
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                odos los premios deber&aacute;n ser &uacute;nicamente retirados
                en las oficinas de NESTL&Eacute;&reg; en Guayaquil, Quito y
                Cuenca, cuya direcci&oacute;n ser&aacute; notificada a cada
                ganador al momento de su contacto.
              </span>
            </p>
            <p
              class='pb-1 pt-4'
              style='margin-bottom:0cm;text-align:justify;line-height:normal;'
            >
              <strong>
                <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                  QUINTO: DEFINICI&Oacute;N DE GANADORES
                </span>
              </strong>
              <strong>
                <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                  &nbsp;
                </span>
              </strong>
            </p>
            <ol style='margin-top:0cm;' type='A'>
              <li style='margin-bottom:0cm;text-align:justify;line-height:     normal;'>
                <strong>
                  <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                    PARA LA ENTREGA DE LOS PREMIOS
                  </span>
                </strong>
              </li>
            </ol>
            <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:18.0pt;text-align:justify;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                Los participantes ganadores, ser&aacute;n seleccionados de
                manera digital y aleatoria mediante la aplicaci&oacute;n &ldquo;
                App Sorteos - https://app-sorteos.com/&rdquo;, quien, de manera
                aleatoria, seleccionar&aacute; el participante ganador, siempre
                y cuando haya cumplido con los requisitos establecidos.
              </span>
            </p>
            <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:18.0pt;text-align:justify;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                En caso de que haya ganado, recibir&aacute; en un plazo de 72
                horas un mensaje en el que aparecer&aacute; un mensaje
                confirmando que GAN&Oacute; y ser&aacute; comunicado a
                trav&eacute;s de las redes sociales @tangodenestle y en la
                secci&oacute;n de ganadores en la web:
                https://www.nestle-contigo.ec/promotangogamers.
              </span>
            </p>
            <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:18.0pt;text-align:justify;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                Los participantes podr&aacute;n ganar un m&aacute;ximo de 2
                veces durante la vigencia de la promoci&oacute;n, y no
                podr&aacute;n beneficiarse de un mismo premio m&aacute;s de una
                vez. Una vez que un mismo usuario haya ganado 3 veces, el
                sistema bloquear&aacute; el n&uacute;mero de
                identificaci&oacute;n del ganador.
              </span>
            </p>
            <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:18.0pt;text-align:justify;line-height:14.65pt;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                NESTLE publicar&aacute; los nombres de los ganadores a
                trav&eacute;s de una publicaci&oacute;n en su p&aacute;gina
                corporativa en&nbsp;
              </span>
              https://www.nestle-contigo.ec/promotangogamers
            </p>
            <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:18.0pt;text-align:justify;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                Una vez entregado el premio, no habr&aacute; ning&uacute;n lugar
                a reclamo a NESTLE, sus aliados estrat&eacute;gicos ni
                proveedores que desarrollar&aacute;n la log&iacute;stica de la
                promoci&oacute;n.&nbsp;
              </span>
            </p>
            <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:18.0pt;text-align:justify;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                &nbsp;
              </span>
            </p>
            <div>
              <table class='table-auto w-full'>
                <tbody>
                  <tr>
                    <td style='width:272.0pt;border:solid windowtext 1.0pt;background:#D0CECE;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                      <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                        <strong>
                          <span style='color:#0D0D0D;'>
                            Fecha de participaci&oacute;n
                          </span>
                        </strong>
                      </p>
                    </td>
                    <td style='width:149.25pt;border:solid windowtext 1.0pt;border-left:none;background:  #D0CECE;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                      <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                        <strong>
                          <span style='color:#0D0D0D;'>Fecha de sorteo</span>
                        </strong>
                      </p>
                    </td>
                    <td style='width:91.75pt;border:solid windowtext 1.0pt;border-left:none;background:  #D0CECE;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                      <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                        <strong>
                          <span style='color:#0D0D0D;'>
                            Cantidad de premios
                          </span>
                        </strong>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style='width:272.0pt;border:solid windowtext 1.0pt;border-top:none;padding:  0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                      <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                        <span style='color:#0D0D0D;'>
                          Participantes desde el 01/01/2024 al 07/01/2024
                          11:59pm
                        </span>
                      </p>
                    </td>
                    <td style='width:149.25pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                      <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                        <span style='color:#0D0D0D;'>
                          lunes, 8 de enero de 2024
                        </span>
                      </p>
                    </td>
                    <td style='width:91.75pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                      <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                        <span style='color:#0D0D0D;'>41 premios</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style='width:272.0pt;border:solid windowtext 1.0pt;border-top:none;padding:  0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                      <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                        <span style='color:#0D0D0D;'>
                          Participantes desde el 08/01/2024 al 14/01/2024
                          11:59pm
                        </span>
                      </p>
                    </td>
                    <td style='width:149.25pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                      <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                        <span style='color:#0D0D0D;'>
                          lunes, 15 de enero de 2024
                        </span>
                      </p>
                    </td>
                    <td style='width:91.75pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                      <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                        <span style='color:#0D0D0D;'>41 premios</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style='width:272.0pt;border:solid windowtext 1.0pt;border-top:none;padding:  0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                      <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                        <span style='color:#0D0D0D;'>
                          Participantes desde el 15/01/2024 al 21/01/2024
                          11:59pm
                        </span>
                      </p>
                    </td>
                    <td style='width:149.25pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                      <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                        <span style='color:#0D0D0D;'>
                          lunes, 22 de enero de 2024
                        </span>
                      </p>
                    </td>
                    <td style='width:91.75pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                      <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                        <span style='color:#0D0D0D;'>35 premios</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style='width:272.0pt;border:solid windowtext 1.0pt;border-top:none;padding:  0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                      <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                        <span style='color:#0D0D0D;'>
                          Participantes desde el 22/01/2024 al 28/01/2024
                          11:59pm
                        </span>
                      </p>
                    </td>
                    <td style='width:149.25pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                      <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                        <span style='color:#0D0D0D;'>
                          lunes, 29 de enero de 2024
                        </span>
                      </p>
                    </td>
                    <td style='width:91.75pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                      <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                        <span style='color:#0D0D0D;'>35 premios</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style='width:272.0pt;border:solid windowtext 1.0pt;border-top:none;padding:  0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                      <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                        <span style='color:#0D0D0D;'>
                          Participantes desde el 29/01/2024 al 04/02/2024
                          11:59pm
                        </span>
                      </p>
                    </td>
                    <td style='width:149.25pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                      <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                        <span style='color:#0D0D0D;'>
                          lunes, 5 de febrero de 2024
                        </span>
                      </p>
                    </td>
                    <td style='width:91.75pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                      <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                        <span style='color:#0D0D0D;'>32 premios</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style='width:272.0pt;border:solid windowtext 1.0pt;border-top:none;padding:  0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                      <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                        <span style='color:#0D0D0D;'>
                          Participantes desde el 05/02/2024 al 11/02/2024
                          11:59pm
                        </span>
                      </p>
                    </td>
                    <td style='width:149.25pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                      <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                        <span style='color:#0D0D0D;'>
                          lunes, 12 de febrero de 2024
                        </span>
                      </p>
                    </td>
                    <td style='width:91.75pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                      <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                        <span style='color:#0D0D0D;'>34 premios</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style='width:272.0pt;border:solid windowtext 1.0pt;border-top:none;padding:  0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                      <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                        <span style='color:#0D0D0D;'>
                          Participantes desde el 12/02/2024 al 18/02/2024
                          11:59pm
                        </span>
                      </p>
                    </td>
                    <td style='width:149.25pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                      <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                        <span style='color:#0D0D0D;'>
                          lunes, 19 de febrero de 2024
                        </span>
                      </p>
                    </td>
                    <td style='width:91.75pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                      <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                        <span style='color:#0D0D0D;'>35 premios</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style='width:272.0pt;border:solid windowtext 1.0pt;border-top:none;padding:  0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                      <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                        <span style='color:#0D0D0D;'>
                          Participantes desde el 19/02/2024 al 25/02/2024
                          11:59pm
                        </span>
                      </p>
                    </td>
                    <td style='width:149.25pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                      <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                        <span style='color:#0D0D0D;'>
                          lunes, 26 de febrero de 2024
                        </span>
                      </p>
                    </td>
                    <td style='width:91.75pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                      <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                        <span style='color:#0D0D0D;'>35 premios</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style='width:272.0pt;border:solid windowtext 1.0pt;border-top:none;padding:  0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                      <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                        <span style='color:#0D0D0D;'>
                          Participantes desde el 26/02/2024 al 28/02/2024
                          11:59pm
                        </span>
                      </p>
                    </td>
                    <td style='width:149.25pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                      <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                        <span style='color:#0D0D0D;'>
                          jueves, 29 de febrero de 2024
                        </span>
                      </p>
                    </td>
                    <td style='width:91.75pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                      <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                        <span style='color:#0D0D0D;'>33 premios</span>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                &nbsp;
              </span>
            </p>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <strong>
                <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                  &nbsp;
                </span>
              </strong>
            </p>
            <p
              class='pt-4'
              style='margin-bottom:0cm;text-align:justify;line-height:normal;'
            >
              <strong>
                <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                  SEXTO:&nbsp;
                </span>
              </strong>
              <strong>
                <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                  QUIENES PUEDEN PARTICIPAR
                </span>
              </strong>
            </p>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                Podr&aacute;n participar en la Promoci&oacute;n los consumidores
                finales mayores de edad, que cuenten con un documento de
                identificaci&oacute;n legalmente emitido (c&eacute;dula de
                identidad ecuatoriana o c&eacute;dula de ciudadan&iacute;a
                ecuatoriana) y que cumplan con los requisitos establecidos en
                estas Bases. No podr&aacute;n participar personas que no tengan
                c&eacute;dula emitida en Ecuador y que &uacute;nicamente tenga
                pasaporte.
              </span>
            </p>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                Queda expresamente prohibido y por ende no podr&aacute;n
                participar en esta promoci&oacute;n, ni tener acceso a cobrar
                premios en la misma, los trabajadores de NESTLE, y de las
                agencias relacionadas con la Promoci&oacute;n, o intervinientes
                en forma directa o indirecta en la organizaci&oacute;n, puesta
                en marcha y eventos de esta Promoci&oacute;n.
              </span>
            </p>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                La prohibici&oacute;n de participaci&oacute;n que afecta a los
                citados trabajadores se extiende tambi&eacute;n a aquellos
                profesionales o t&eacute;cnicos que, no siendo trabajadores,
                presten servicios en las citadas empresas a cualquier
                t&iacute;tulo. Se hace extensiva esta prohibici&oacute;n a los
                c&oacute;nyuges, y parientes de los citados trabajadores,
                profesionales, t&eacute;cnicos y prestadores de servicios, hasta
                el segundo grado de consanguinidad o afinidad.
              </span>
            </p>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                Estar&aacute; prohibido y ser&aacute; anulado cualquier intento
                o m&eacute;todo de participaci&oacute;n en esta Promoci&oacute;n
                que se realice por cualquier proceso, t&eacute;cnica o
                mec&aacute;nica de participaci&oacute;n distinta a la detallada
                precedentemente. La utilizaci&oacute;n de t&eacute;cnicas de
                participaci&oacute;n en esta Promoci&oacute;n de naturaleza
                rob&oacute;tica, repetitiva, autom&aacute;tica, programada,
                mecanizada o similar llevar&aacute; a la anulaci&oacute;n de la
                participaci&oacute;n de que se trate, o hasta la
                anulaci&oacute;n de la promoci&oacute;n.
              </span>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                &nbsp;
              </span>
            </p>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                En caso de controversia relacionada con la identidad de un
                participante, el titular de Documento de Identidad utilizada
                durante el proceso de participaci&oacute;n en la
                Promoci&oacute;n ser&aacute; considerado como el usuario
                participante. NESTLE, ni las empresas organizadoras no
                ser&aacute;n responsables por aquellas participaciones que no se
                reciban a causa de fallas de transmisi&oacute;n o
                t&eacute;cnicas de cualquier tipo no imputables a NESTLE.
              </span>
            </p>
            <p
              class='pt-4'
              style='margin-bottom:0cm;text-align:justify;line-height:normal;'
            >
              <strong>
                <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                  S&Eacute;PTIMO
                </span>
              </strong>
              <strong>
                <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                  : VIGENCIA DE LA PROMOCI&Oacute;N&nbsp;
                </span>
              </strong>
            </p>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <span
                lang='ES-EC'
                style='font-size:13px;font-family:"Arial !important",sans-serif;'
              >
                La Promoci&oacute;n estar&aacute; vigente desde el 01 de enero
                de 2024 al 29 de febrero de 2024, inclusive.&nbsp;
              </span>
            </p>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                La web estar&aacute; operativa de lunes a domingo las 24 horas
                del d&iacute;a.
              </span>
              <span style='font-size:11px;'>&nbsp;</span>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                &nbsp;
              </span>
            </p>
            <p
              class='pt-4'
              style='margin-bottom:0cm;text-align:justify;line-height:normal;'
            >
              <strong>
                <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                  OCTAVO
                </span>
              </strong>
              <strong>
                <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                  :&nbsp;
                </span>
              </strong>
              <strong>
                <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                  LUGAR DE LA PROMOCI&Oacute;N
                </span>
              </strong>
            </p>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                La Promoci&oacute;n ser&aacute; v&aacute;lida a nivel nacional.
                NESTL&Eacute;&reg; no tendr&aacute; proveedores de
                log&iacute;stica, todos los premios deber&aacute;n ser
                &uacute;nicamente retirados en las oficinas de
                NESTL&Eacute;&reg; en Guayaquil, Quito y Cuenca, cuya
                direcci&oacute;n ser&aacute; notificada a cada ganador al
                momento de su contacto.
              </span>
            </p>
            <p
              class='pt-4'
              style='margin-bottom:0cm;text-align:justify;line-height:normal;'
            >
              <strong>
                <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                  NOVENO: DISPOSICIONES GENERALES
                </span>
              </strong>
            </p>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                Se entender&aacute; que todas las personas que directa o
                indirectamente toman parte como concursante o en cualquier otra
                forma en la presente Promoci&oacute;n, han conocido y aceptado
                &iacute;ntegramente estas Bases, careciendo del derecho a
                deducir reclamo o acci&oacute;n de cualquier naturaleza en
                contra de NESTL&Eacute;, as&iacute; como otorgando su
                consentimiento para la difusi&oacute;n de su imagen con motivo
                de la presente Promoci&oacute;n.
              </span>
            </p>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                El solo hecho que una persona cobre un premio de esta
                Promoci&oacute;n, habilitar&aacute; a NESTL&Eacute; para
                divulgar su imagen y su nombre como participante en la forma que
                estime conveniente. Sin perjuicio de lo anterior, por el
                s&oacute;lo hecho de participar en la Promoci&oacute;n descrita
                en estas Bases y por aceptarlas, el o la participante autoriza
                en forma expresa en tal sentido a NESTL&Eacute;, para comunicar
                su identidad grabar, filmar y fotografiarlo, y para exhibir
                tales grabaciones, filmaciones o fotograf&iacute;as en cualquier
                medio de comunicaci&oacute;n social y por cualquier medio
                digital, incluyendo internet.
              </span>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                &nbsp;
              </span>
            </p>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                Es condici&oacute;n indispensable para recibir el Premio que el
                participante otorgue su consentimiento para que su identidad sea
                divulgada y para que su voz, las im&aacute;genes filmadas y/o
                las fotograf&iacute;as tomadas, sean exhibidas por cualquier
                medio de comunicaci&oacute;n, incluyendo medios de
                comunicaci&oacute;n masiva, tales como internet,
                televisi&oacute;n, radio, prensa, puntos de venta, etc. si
                Nestl&eacute; lo dispusiere, sin que el participante pueda
                reclamar exclusividad ni cobrar derecho alguno por su
                exhibici&oacute;n o reproducci&oacute;n. El participante no
                recibir&aacute; pago alguno por estos conceptos, y deber&aacute;
                prestar toda su colaboraci&oacute;n para su obtenci&oacute;n.
              </span>
            </p>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                Nestl&eacute; no se responsabiliza del destino que los ganadores
                den a los Premios a los que se hagan acreedores en virtud de la
                presente promoci&oacute;n. Nestl&eacute; no se responsabiliza
                del adecuado uso que los ganadores den a los premios a los que
                se hagan acreedores en virtud de la presente promoci&oacute;n.
              </span>
            </p>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                Nestl&eacute; se reserva el derecho exclusivo, inobjetable e
                inapelable de interpretar o modificar las Bases a su arbitrio en
                caso de presentarse situaciones imponderables o imprevistas.
                Cualquier situaci&oacute;n que no se haya previsto en estas
                Bases deber&aacute; ser resuelta por Nestl&eacute;. En el evento
                que ocurra un caso fortuito o de fuerza mayor, que haya habido
                intento de fraude, a trav&eacute;s de intentos de hackeo o
                control por parte de terceros del sistema, o de que a su solo
                juicio lo considere apropiado, y se obliga a comunicar tal
                modificaci&oacute;n a los participantes a trav&eacute;s de
                www.nestle.com.ec pudiendo cancelar la promoci&oacute;n y los
                pagos de los premios que se obtuvieran luego de cometido el
                fraude.
              </span>
            </p>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                Quien no complete toda la informaci&oacute;n requerida, la
                complete incorrectamente y/o entregue datos falsos, podr&aacute;
                ser descalificado de la Promoci&oacute;n, sin que ello -bajo
                ninguna circunstancia- acarree responsabilidad de ninguna
                &iacute;ndole para Nestl&eacute; ni las dem&aacute;s empresas
                del Grupo Nestl&eacute;, sus funcionarios, administradores ni
                empleados frente al participante ni frente a terceros.
              </span>
            </p>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                Cualquier informaci&oacute;n de la promoci&oacute;n se
                pondr&aacute;n a disposici&oacute;n de los participantes la
                central telef&oacute;nica 1800 637853 en horarios de 09:30am a
                05:30pm, de lunes a viernes.
              </span>
            </p>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                Nestl&eacute; se reserva el derecho de modificar las Bases de
                esta Promoci&oacute;n en forma total o parcial.
              </span>
            </p>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                Las presentes Bases, acompa&ntilde;adas de sus Anexos, se
                publicar&aacute;n en www.nestle.com.ec.
              </span>
            </p>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                Quito, 1 de enero de 2024
              </span>
              <br />
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                &nbsp;
              </span>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                &nbsp;
              </span>
            </p>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                Mariela Romero
              </span>
            </p>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <strong>
                <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                  Controller del Negocio Confites
                </span>
              </strong>
            </p>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <strong>
                <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                  NESTL&Eacute; ECUADOR S.A.
                </span>
              </strong>
              <strong>
                <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                  &nbsp;
                </span>
              </strong>
            </p>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <strong>
                <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                  &nbsp;
                </span>
              </strong>
            </p>
            <p>
              <strong>
                <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                  ANEXO I
                </span>
              </strong>
            </p>
            <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
              <strong>
                <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                  PRODUCTOS EN PROMOCI&Oacute;N&nbsp;
                </span>
              </strong>
            </p>
            <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
              <strong>
                <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                  &nbsp;
                </span>
              </strong>
            </p>
            <table class='table-auto w-full'>
              <tbody>
                <tr>
                  <td style='width: 382.5pt;border: 1pt solid windowtext;padding: 0cm 3.5pt;height: 14.5pt;vertical-align: bottom;'>
                    <p style='margin-bottom:0cm;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        DOS GALLETAS SABOR VAINILLA RELLENAS CON CREMA CUBIERTAS
                        CON SABOR A CHOCOLATE - NESTL&Eacute; TANGO
                        CL&Aacute;SICO
                      </span>
                    </p>
                  </td>
                  <td style='width:31.5pt;border:solid windowtext 1.0pt;border-left:none;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                    <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;color:black;'>
                        25g
                      </span>
                    </p>
                  </td>
                  <td style='width:79.75pt;border:solid windowtext 1.0pt;border-left:none;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                    <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        7861091131713
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style='width: 382.5pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 3.5pt;height: 14.5pt;vertical-align: bottom;'>
                    <p style='margin-bottom:0cm;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        DOS GALLETAS SABOR VAINILLA RELLENAS CON CREMA CUBIERTAS
                        CON SABOR A CHOCOLATE - NESTL&Eacute; TANGO
                        CL&Aacute;SICO
                      </span>
                    </p>
                  </td>
                  <td style='width:31.5pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                    <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        700g
                      </span>
                    </p>
                  </td>
                  <td style='width:79.75pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                    <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        7861091131164
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style='width: 382.5pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 3.5pt;height: 14.5pt;vertical-align: bottom;'>
                    <p style='margin-bottom:0cm;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        DOS GALLETAS SABOR VAINILLA RELLENAS CON CREMA CUBIERTAS
                        CON SABOR A CHOCOLATE - NESTL&Eacute; TANGO
                        CL&Aacute;SICO
                      </span>
                    </p>
                  </td>
                  <td style='width:31.5pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                    <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;color:black;'>
                        300g
                      </span>
                    </p>
                  </td>
                  <td style='width:79.75pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                    <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        7861001243345
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style='width: 382.5pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 3.5pt;height: 14.5pt;vertical-align: bottom;'>
                    <p style='margin-bottom:0cm;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        DOS GALLETAS SABOR VAINILLA RELLENAS CON CREMA CUBIERTAS
                        CON SABOR A CHOCOLATE - NESTL&Eacute; TANGO MINI NEGRO
                      </span>
                    </p>
                  </td>
                  <td style='width:31.5pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                    <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;color:black;'>
                        299g
                      </span>
                    </p>
                  </td>
                  <td style='width:79.75pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                    <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        7861091133144
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style='width: 382.5pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 3.5pt;height: 14.5pt;vertical-align: bottom;'>
                    <p style='margin-bottom:0cm;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        DOS GALLETAS SABOR VAINILLA RELLENAS CON CREMA CUBIERTAS
                        CON SABOR A CHOCOLATE - NESTL&Eacute; TANGO MINI NEGRO
                      </span>
                    </p>
                  </td>
                  <td style='width:31.5pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                    <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;color:black;'>
                        13 g
                      </span>
                    </p>
                  </td>
                  <td style='width:79.75pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                    <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        7861091132468
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style='width: 382.5pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 3.5pt;height: 14.5pt;vertical-align: bottom;'>
                    <p style='margin-bottom:0cm;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        DOS GALLETAS SABOR VAINILLA RELLENAS CON CREMA Y
                        CUBIERTAS CON SABOR A LECHE - NESTL&Eacute; TANGO BLANCO
                      </span>
                    </p>
                  </td>
                  <td style='width:31.5pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                    <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;color:black;'>
                        700g
                      </span>
                    </p>
                  </td>
                  <td style='width:79.75pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                    <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        7861091131171
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style='width: 382.5pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 3.5pt;height: 14.5pt;vertical-align: bottom;'>
                    <p style='margin-bottom:0cm;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        DOS GALLETAS SABOR VAINILLA RELLENAS CON CREMA Y
                        CUBIERTAS CON SABOR A LECHE &ndash; NESTL&Eacute; TANGO
                        MINI BLANCO
                      </span>
                    </p>
                  </td>
                  <td style='width:31.5pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                    <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;color:black;'>
                        299g
                      </span>
                    </p>
                  </td>
                  <td style='width:79.75pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                    <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        7861091133120
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style='width: 382.5pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 3.5pt;height: 14.5pt;vertical-align: bottom;'>
                    <p style='margin-bottom:0cm;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        OBLEA RELLENA CON CREMA SABOR MAN&Iacute; CON
                        ADICI&Oacute;N DE MAN&Iacute; TROCEADO, BA&Ntilde;ADO
                        CON COBERTURA SABOR CHOCOLATE -&nbsp;
                      </span>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        TANGO MEGA
                      </span>
                    </p>
                  </td>
                  <td style='width:31.5pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                    <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;color:black;'>
                        28g
                      </span>
                    </p>
                  </td>
                  <td style='width:79.75pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                    <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        7861091146908
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style='width: 382.5pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 3.5pt;height: 14.5pt;vertical-align: bottom;'>
                    <p style='margin-bottom:0cm;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        CHOCOLATE CON LECHE, MAN&Iacute; Y GALLETA - TANGO
                        MANICERO
                      </span>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        &nbsp;
                      </span>
                    </p>
                  </td>
                  <td style='width:31.5pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                    <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;color:black;'>
                        20g
                      </span>
                    </p>
                  </td>
                  <td style='width:79.75pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                    <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        7861091146878
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style='width: 382.5pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 3.5pt;height: 14.5pt;vertical-align: bottom;'>
                    <p style='margin-bottom:0cm;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        CHOCOLATE CON LECHE, MAN&Iacute; Y GALLETA - TANGO
                        MANICERO
                      </span>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        &nbsp;
                      </span>
                    </p>
                  </td>
                  <td style='width:31.5pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                    <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;color:black;'>
                        30g
                      </span>
                    </p>
                  </td>
                  <td style='width:79.75pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                    <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        7861091148780
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style='width: 382.5pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 3.5pt;height: 14.5pt;vertical-align: bottom;'>
                    <p style='margin-bottom:0cm;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        CHOCOLATE CON LECHE, MAN&Iacute; Y GALLETA - TANGO
                        MANICERO
                      </span>
                    </p>
                  </td>
                  <td style='width:31.5pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                    <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;color:black;'>
                        90g
                      </span>
                    </p>
                  </td>
                  <td style='width:79.75pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                    <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        7861091148124
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style='width: 382.5pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 3.5pt;height: 14.5pt;vertical-align: bottom;'>
                    <p style='margin-bottom:0cm;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        CHOCOLATE CON LECHE - TANGO LECHE
                      </span>
                    </p>
                  </td>
                  <td style='width:31.5pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                    <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;color:black;'>
                        30g
                      </span>
                    </p>
                  </td>
                  <td style='width:79.75pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                    <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        7861091148445
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style='width: 382.5pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 3.5pt;height: 14.5pt;vertical-align: bottom;'>
                    <p style='margin-bottom:0cm;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        CHOCOLATE CON LECHE - TANGO LECHE
                      </span>
                    </p>
                  </td>
                  <td style='width:31.5pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                    <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;color:black;'>
                        90g
                      </span>
                    </p>
                  </td>
                  <td style='width:79.75pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                    <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        7861091148476
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style='width: 382.5pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 3.5pt;height: 14.5pt;vertical-align: bottom;'>
                    <p style='margin-bottom:0cm;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        BOMBONES SABOR A CHOCOLATE CON LECHE Y TROCITOS DE
                        GALLETAS - TANGO BOMB&Oacute;N
                      </span>
                    </p>
                  </td>
                  <td style='width:31.5pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                    <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;color:black;'>
                        437.5g
                      </span>
                    </p>
                  </td>
                  <td style='width:79.75pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                    <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        7861091140180
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style='width: 382.5pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 3.5pt;height: 14.5pt;vertical-align: bottom;'>
                    <p style='margin-bottom:0cm;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        CHOCOLATE CON LECHE - TANGO LECHE
                      </span>
                    </p>
                  </td>
                  <td style='width:31.5pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                    <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;color:black;'>
                        15g
                      </span>
                    </p>
                  </td>
                  <td style='width:79.75pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                    <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        7861091249227
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style='width: 382.5pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 3.5pt;height: 14.5pt;vertical-align: bottom;'>
                    <p style='margin-bottom:0cm;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        CREMA UNTABLE SABOR A CHOCOLATE - TANGO UNTABLE
                      </span>
                    </p>
                  </td>
                  <td style='width:31.5pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                    <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;color:black;'>
                        1.2kg
                      </span>
                    </p>
                  </td>
                  <td style='width:79.75pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                    <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        7861091248251
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style='width: 382.5pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 3.5pt;height: 14.5pt;vertical-align: bottom;'>
                    <p style='margin-bottom:0cm;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        CHOCOLATE CON LECHE, MAN&Iacute; Y GALLETA - TANGO
                        MANICERO
                      </span>
                    </p>
                  </td>
                  <td style='width:31.5pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                    <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;color:black;'>
                        15g
                      </span>
                    </p>
                  </td>
                  <td style='width:79.75pt;border-top:none;border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 3.5pt 0cm 3.5pt;height:14.5pt;'>
                    <p style='margin-bottom:0cm;text-align:center;line-height:normal;'>
                      <span style='font-size:12px;font-family:"Arial !important",sans-serif;'>
                        7861091249265
                      </span>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <figure class='mt-6 px-5'>
              <img src={termJpgT} alt='images' />
            </figure>
            <p style='margin-bottom:0cm;text-align:justify;line-height:normal;'>
              <br />
            </p>
            <p style='margin-bottom:0cm;line-height:normal;'>
              <strong>
                <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                  UBICACI&Oacute;N LOTE EN PRODUCTOS
                </span>
              </strong>
            </p>
            <p style='margin-bottom:0cm;line-height:normal;'>
              <strong>
                <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                  (Im&aacute;genes referenciales &ndash; ubicaci&oacute;n del
                  n&uacute;mero de lote del producto)
                  <figure class='mt-4 px-2'>
                    <img src={termJpgJ} alt='alala' />
                  </figure>
                </span>
              </strong>
            </p>
            <p style='margin-bottom:0cm;line-height:normal;'>
              <span style='font-size:13px;font-family:"Arial !important",sans-serif;'>
                &nbsp;
              </span>
            </p>
            <p style='margin-top:0cm;margin-right:25.3pt;margin-bottom:0cm;margin-left:36.0pt;text-align:center;line-height:normal;'>
              <strong>
                <u>ANEXO 2</u>
              </strong>
            </p>
            <p style='margin-top:0cm;margin-right:25.3pt;margin-bottom:0cm;margin-left:36.0pt;text-align:center;line-height:normal;'>
              <strong>
                <u>AUTORIZACI&Oacute;N DE USO DE DATOS PERSONALES</u>
              </strong>
            </p>
            <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:36.0pt;text-align:center;line-height:normal;'>
              <strong>
                <u>
                  <span style='text-decoration:none;'>&nbsp;</span>
                </u>
              </strong>
            </p>
            <p style='margin-top:0cm;margin-right:39.45pt;margin-bottom:0cm;margin-left:36.0pt;text-align:justify;line-height:normal;'>
              El Participante por el s&oacute;lo hecho de participar en la
              Promoci&oacute;n, entrega a NESTL&Eacute; ECUADOR S.A. la
              siguiente autorizaci&oacute;n expresa e individual:
            </p>
            <p style='margin-top:0cm;margin-right:39.45pt;margin-bottom:0cm;margin-left:36.0pt;text-align:justify;line-height:normal;'>
              <em>
                Autorizo a NESTL&Eacute; ECUADOR para que utilices, transfiera y
                realice cualquier tratamiento de mis datos personales para
                enviarme informaci&oacute;n relevante sobre campa&ntilde;as,
                productos, y promociones, a trav&eacute;s de diferentes medios
                de comunicaci&oacute;n, dentro de lo permitido por la normativa
                vigente.
              </em>
            </p>
            <p style='margin-top:0cm;margin-right:39.45pt;margin-bottom:0cm;margin-left:36.0pt;text-align:justify;line-height:normal;'>
              <em>
                En caso de que el titular de los datos desee rectificar,
                modificar, actualizar y/o eliminar sus datos, deber&aacute;
                solicitarlo a NESTL&Eacute; ECUADOR enviando un correo
                electr&oacute;nico a la siguiente direcci&oacute;n de correo:{' '}
                <u>servicioalconsumidor@ec.nestle.com</u>
              </em>
            </p>
            <p style='margin-bottom:0cm;line-height:normal;'>
              <br />
            </p>
            <div id='_com_2'>
              <br />
            </div>
          </div>

          <div class='mt-10 px-6 container mx-auto'>
            <button
              type='button'
              class='border border-dashed border-c-brown p-8 mt-6 rounded-xl cursor-pointer block lg:w-max mx-auto'
            >
              <Link to='/'>
                <h3 class='text-2xl font-amsi-bold text-c-brown text-center'>
                  Sube la foto del producto TANGO® y número de lote
                </h3>
                <figure class='flex justify-center items-center py-1'>
                  <img src={iconCamera} alt='subir foto tango' class='w-16' />
                </figure>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}
