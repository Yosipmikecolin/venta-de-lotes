import Image from "next/image";
import styles from "../css/page.module.css";
import Logo from "../../public/logo.png";
import Imagen1 from "../../public/image-1.jpg";
import { Poppins } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
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
                style={{ borderRadius: 10, height: 500, objectFit: "cover" }}
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
              <img
                src={Imagen1.src}
                alt="Imagen 1"
                style={{ borderRadius: 10, height: 500, objectFit: "cover" }}
              />
              <h3 className={poppins.className}>Negocios de comida</h3>
              <p>
                Sumérjase en una experiencia culinaria diversa sin tener que
                viajar lejos. Nuestros lotes están estratégicamente ubicados
                cerca de una variedad de negocios de comida, desde restaurantes
                locales hasta vibrantes mercados. Deléitese con la conveniencia
                de tener opciones gastronómicas a su alcance.
              </p>
            </div>

            <div className={styles.box}>
              <Image
                src={Imagen1}
                alt="Imagen 1"
                style={{ borderRadius: 10, height: 500, objectFit: "cover" }}
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
                style={{ borderRadius: 10, height: 500, objectFit: "cover" }}
              />
              <h3 className={poppins.className}>Cerca de la ciudad</h3>
              <p>
                Experimente lo mejor de ambos mundos: la tranquilidad de la vida
                suburbana y la accesibilidad de la vida en la ciudad. Nuestros
                lotes están estratégicamente ubicados cerca de la ciudad,
                brindándole la comodidad de acceder a servicios, entretenimiento
                y oportunidades culturales sin sacrificar la paz y la privacidad
                que ofrece un entorno más rural.
              </p>
            </div>

            <div className={styles.box}>
              <Image
                src={Imagen1}
                alt="Imagen 1"
                style={{ borderRadius: 10, height: 500, objectFit: "cover" }}
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

      </main>
    </section>
  );
}
