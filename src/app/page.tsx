import Image from "next/image";
import styles from "../css/page.module.css";
import Logo from "../../public/logo.png";
import Imagen1 from "../../public/image-1.jpg";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "600", subsets: ["latin"] });
const poppins2 = Poppins({ weight: "500", subsets: ["latin"] });

export default function Home() {

  return (
    <section className={styles.container}>
      <header>
        <nav className={styles.menu}>
          <ul>
            <li>
              <Image src={Logo} alt="logo" width={40} />
            </li>
            <li>(+57) 3103435659</li>
          </ul>
        </nav>
      </header>

      <main>
        <section className={styles["front-page"]}>
          <div className={styles.title}>
            <h1>VENTA DE LOTES - CAMPO JOSHUA ESTEBAN</h1>
            <h2>VILLANUEVA CASANARE</h2>
            <p>El mejor lugar para inventir en tu futuro.</p>
            <div className={styles["container-buttons"]}>
              <button>Contacto</button>
            </div>
          </div>
        </section>

        <section className={styles["container-benefits"]}>
          <h1 className={poppins2.className}>
            BENEFICIOS DE COMPRAR EN CAMPOS JOSHUA ESTEBAN
          </h1>

          <section className={styles["container-box"]}>
            <div className={styles.box}>
              <Image
                src={Imagen1}
                alt="Imagen 1"
                style={{ borderRadius: 10, height: 400, objectFit: "cover" }}
              />
              <h3 className={poppins.className}>Carretera pavimentada</h3>
              <p>
                Disfrute de un acceso sin complicaciones con nuestras
                ubicaciones estratégicas que cuentan con carreteras pavimentadas
                de alta calidad. Conectarse con la ciudad y otros destinos será
                rápido y cómodo, facilitando su día a día y ofreciendo un
                transporte eficiente para usted y su familia.
              </p>
            </div>

            <div className={styles.box}>
              <Image
                src={Imagen1}
                alt="Imagen 1"
                style={{ borderRadius: 10, height: 400, objectFit: "cover" }}
              />
              <h3 className={poppins.className}>Rio</h3>
              <p>
                Descubra la serenidad y la belleza natural de tener un río cerca
                de su hogar. Desde vistas panorámicas hasta actividades
                acuáticas, nuestro entorno fluvial ofrece una conexión única con
                la naturaleza. Disfrute de paseos relajantes, pesca o
                simplemente sumérjase en la tranquilidad que proporciona la
                proximidad a un río.
              </p>
            </div>

            <div className={styles.box}>
              <Image
                src={Imagen1}
                alt="Imagen 1"
                style={{ borderRadius: 10, height: 400, objectFit: "cover" }}
              />
              <h3 className={poppins.className}>Piscilagos</h3>
              <p>
                Refresque su vida cotidiana con la proximidad a un parque de
                agua. Perfecto para el entretenimiento familiar, estos espacios
                ofrecen diversión acuática, áreas de recreación y un ambiente
                relajado. Con un parque de agua cerca, siempre tendrá la opción
                de disfrutar de momentos emocionantes y refrescantes sin tener
                que alejarse demasiado de casa.
              </p>
            </div>
          </section>
        </section>
        <section className={styles["container-map"]}>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1705350803024!6m8!1m7!1sFdcHl_Y71SIFKKA92CC4Zw!2m2!1d4.620893731189287!2d-72.914141009768!3f193.00417578866413!4f-15.130574685098125!5f0.7820865974627469"
              width="100%"
              height="100%"
              style={{ border: "5px solid white" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div>
            <h1>Ubicacion de nuestros lotes</h1>
            <p>
              Experimente lo mejor de ambos mundos: la tranquilidad de la vida
              suburbana y la accesibilidad de la vida en la ciudad. Nuestros
              lotes están estratégicamente ubicados cerca de la ciudad,
              brindándole la comodidad de acceder a servicios, entretenimiento y
              oportunidades culturales sin sacrificar la paz y la privacidad que
              ofrece un entorno más rural.
            </p>
          </div>
        </section>

        <section className={styles["container-video"]}>
          <div>
            <h1>Recorrido del pueblo a nuestros lotes</h1>
            <p>
              Embárcate en un viaje visual cautivador desde el corazón del
              encantador pueblo de Villanuieva hasta la puerta de tu futuro
              hogar. Nuestro video te lleva a un viaje panorámico, capturado
              desde la perspectiva aérea de un dron. Experimenta la transición
              gradual desde la vida vibrante del pueblo hasta la serena belleza
              de nuestros exclusivos lotes. Descubre la armonía entre la
              comodidad urbana y la privacidad natural mientras exploras cada
              detalle del camino que te llevará a un nuevo capítulo de tu vida.
              ¡Bienvenido a tu futuro hogar, donde la conexión con la naturaleza
              se encuentra con la conveniencia moderna!
            </p>
          </div>

          <div>
            <video
              width="100%"
              height={"100%"}
              controls
              style={{ border: 0, borderRadius: 10 }}
            >
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>
        </section>
      </main>
    </section>
  );
}
