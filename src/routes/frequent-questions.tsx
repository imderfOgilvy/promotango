import { useEffect } from 'preact/hooks'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import { MyDisclosure } from '../components/ui'
import { howPart, participants, participationSteps, prizes } from '../lib/const'
import ReactGA from 'react-ga4'

export default function FrequentQuestionPage() {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname,
      title: 'Preguntas frecuentes Tango',
    })
  }, [])
  return (
    <section class="bg-n-orange min-h-screen bg-[url('/bg-how.png')] sm:bg-[url('/new-bg-quest.png')] bg-no-repeat bg-top bg-cover">
      <Navbar />
      <div class='grid place-items-center'>
        <div class='lg:mt-16'>
          <div class='pt-12'>
            <h2 class='text-center text-white text-xl text-balance lg:text-4xl font-amsi-bold uppercase my-8 px-4'>
              Preguntas frecuentes
            </h2>
          </div>
          <div>
            <MyDisclosure title='¿Cómo puedo participar? '>
              Jelouuu, así puedes participar:
              <ol>
                {howPart.map((p, i) => (
                  <li key={i} class='py-1 flex items-center gap-x-2 mt-1'>
                    <p>{`${p.step}) `}</p>
                    <p>{p.description}</p>
                  </li>
                ))}
              </ol>
            </MyDisclosure>
            <MyDisclosure title='¿Dónde encuentro el número de lote?'>
              <p>
                Jelouuu, puedes encontrar el número de lote en cualquiera de los
                empaques de TANGO®. El número de lote son 9 caracteres
                alfanúmericos, empiezan con la letra L.{' '}
              </p>
            </MyDisclosure>
            <MyDisclosure title='¿Cada cuánto se realizan los sorteos?'>
              {participants.map((p, i) => (
                <p key={i} class='py-1'>
                  {p.info}
                </p>
              ))}
            </MyDisclosure>
            <MyDisclosure title='No he recibido mi premio'>
              <p class='py-0.5'>
                Confírmanos los siguientes datos por nuestras redes sociales:
              </p>
              <p class='py-0.5'>Nombre</p>
              <p class='py-0.5'>Cédula</p>
              <p class='py-0.5'>Celular</p>
              <p class='py-0.5'>Premio</p>
              <p class='py-0.5'>Fecha de cuándo ganaste</p>
            </MyDisclosure>
            <MyDisclosure title='¿A partir de qué fecha son válidos mis TANGO® para participar?'>
              <p>
                Holiiii, gran pregunta. Participan en la promoción los lotes de
                los empaques de TANGO® con fecha de fabricación desde abril del
                2023 en adelante.{' '}
              </p>
            </MyDisclosure>
            <MyDisclosure title='Vigencia de promoción'>
              <p>
                Esta promoción estará vigente desde las 09:00 a.m. del 01 de
                enero de 2024 hasta el 29 de febrero de 2024 a las 23h59. No se
                aceptará ingresar códigos de los empaques después de la hora y
                fechas aquí establecidas.
              </p>
            </MyDisclosure>
            <MyDisclosure title='¿En qué horarios se puede participar? '>
              El horario de participación será entre las 6.00am hasta las
              24horas. De Lunes a Domingo.
            </MyDisclosure>
            <MyDisclosure title='¿Pueden participar menores de edad?'>
              <p>No, solo mayores de 18 años </p>
            </MyDisclosure>
            <MyDisclosure title='¿Cuál es la mecánica para participar?'>
              Esto es lo que debes hacer:
              <ol>
                {participationSteps.map((p, i) => (
                  <li key={i} class='py-1 flex items-center gap-x-2 mt-1'>
                    <p>{p.step}. </p>
                    <p>{p.description}</p>
                  </li>
                ))}
              </ol>
            </MyDisclosure>
            <MyDisclosure title='¿Cuántos y cuáles son los premios?'>
              Son 321 premios, que se dividen de la siguiente manera:
              <ul>
                {prizes.map((p, i) => (
                  <li key={i} class='py-1 flex items-center gap-x-2 mt-1'>
                    <p class='self-start'>{p.prizeType}. </p>
                    <p>
                      {p.quantity} {p.description}
                    </p>
                  </li>
                ))}
              </ul>
            </MyDisclosure>
            <MyDisclosure title='¿Cuántos ganadores semanales tendrán?'>
              <p>Serán entre 30 a 41 ganadores semanales.</p>
            </MyDisclosure>
            <MyDisclosure title='¿Todos los productos participan?'>
              <p>
                Estos son los productos participantes: Tango Manicero: 15G - 20G
                - 30G- 90G, Tango Leche: 15G - 30G- 90G, Tango Mega: 28G, Tango
                Clásico: 25G, Tango Blanco: 25G, Tango Clásico Mini: 13G, Tango
                Blanco Mini: 13G, Tango Untable: 1.2KG, Tango Bombón: 437.5G. No
                son productos participantes en esta PROMOCIÓN cualquier producto
                no listado anteriormente.
              </p>
            </MyDisclosure>
            <MyDisclosure title='¿Cuántas veces puedo participar al día?'>
              <p>
                Los participantes podrán ingresar hasta 10 veces por día el
                lote, durante la vigencia de la promoción. Siempre y cuando se
                visualice en la factura que se ha comprado 10 productos o más de
                ser el caso.
              </p>
            </MyDisclosure>
            <MyDisclosure title='¿Cómo me entregarán los premios si soy uno de los ganadores? '>
              <p>
                En un plazo de máximo 72 horas el equipo Tango se comunicará
                contigo y podrás retirar en las oficinas de NESTLÉ en Guayaquil,
                Quito o Cuenca. ( La dirección será notificada a cada ganador al
                momento de su contacto)
              </p>
            </MyDisclosure>
            <MyDisclosure title='¿Qué otros datos me pueden pedir para verificar si soy ganador? '>
              <p>
                Nombres completos, CI, Lugar de residencia, fotos de la Cedula
                de Identidad, teléfono o dirección. Adicional tener la factura
                de la compra realizada dentro de los principales supermercados
                del país Tienes 3 días hábiles para enviar la información
                solicitada.
              </p>
            </MyDisclosure>
            <MyDisclosure title='¿Qué pasa si no envío los datos en ese tiempo?'>
              <p>
                Si el participante no envía la confirmación y/o validación de
                datos luego de 3 días(días laborables), no podrá retirar su
                premio.{' '}
              </p>
            </MyDisclosure>
            <MyDisclosure title='¿Puedo participar si soy extranjer@?'>
              <p>
                Si, deberá presentar cédula de identidad emitida en Ecuador.
              </p>
            </MyDisclosure>
            <MyDisclosure title='Doble identidad de ganadores'>
              <p>
                Si se determina que el documento de identidad tiene algún
                problema legal se eliminará la participación. Se analizará caso
                por caso con el área legal de Nestlé.{' '}
              </p>
            </MyDisclosure>
            <MyDisclosure title='Desinfecté mi empaque con alcohol y se borró el número, ¿puedo participar?'>
              Lamentablemente no, ya que para poder participar necesitas
              ingresar el código de lote. Pero no te desanimes , puedes
              participar con otro empaque.
            </MyDisclosure>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}
