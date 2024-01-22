"use client";

import Image from "next/image";
import styles from "../css/page.module.css";
import Logo from "../../public/logo.png";
import Imagen1 from "../../public/imagen-1.png";
import Imagen2 from "../../public/imagen-2.jpeg";
import Imagen3 from "../../public/image-3.jpeg";
import Imagen4 from "../../public/image-4.jpg";
import { Poppins } from "next/font/google";
import Gallery from "@/components/gallery/Gallery";
const poppins = Poppins({ weight: "600", subsets: ["latin"] });
const poppins2 = Poppins({ weight: "500", subsets: ["latin"] });
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  NextUIProvider,
  useDisclosure,
} from "@nextui-org/react";
import "animate.css";
import { useEffect } from "react";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    playAudio();
  }, []);

  const playAudio = () => {
    const audio = document.getElementById("miAudio") as HTMLAudioElement;
    audio?.play();
  };

  return (
    <NextUIProvider>
      <section className={styles.container}>
        <div onClick={playAudio}>
          <audio id="miAudio" controls style={{ display: "none" }}>
            <source src="/audio.mp3" type="audio/mp3" />
          </audio>
        </div>

        <header>
          <nav className={styles.menu}>
            <ul>
              <li className="animate__animated animate__fadeInDown">
                <Image src={Logo} alt="logo" width={40} />
              </li>
              <li className="animate__animated animate__fadeInDown">
                (+57) 3103435659
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <section className={styles["front-page"]}>
            <div className={styles.title}>
              <h1 className="animate__animated animate__fadeInUp">
                VENTA DE LOTES - ALTOS DE JOSHUA ESTEBAN
              </h1>
              <h2 className="animate__animated animate__fadeInUp">
                VILLANUEVA CASANARE
              </h2>
              <p className="animate__animated animate__fadeInUp">
                El mejor lugar para inventir en tu futuro.
              </p>
              <div className={styles["container-buttons"]}>
                <button
                  className="animate__animated animate__fadeInUp"
                  onClick={onOpen}
                >
                  Contacto
                </button>
              </div>
            </div>
          </section>

          <section className={styles["container-benefits"]}>
            <h1 className={poppins2.className}>
              BENEFICIOS DE COMPRAR EN ALTOS DE JOSHUA ESTEBAN
            </h1>

            <section className={styles["container-box"]}>
              <div className={styles.box}>
                <Image
                  src={Imagen1}
                  alt="Imagen 1"
                  style={{
                    borderRadius: 10,
                    height: 400,
                    objectFit: "cover",
                    marginBottom: 20,
                  }}
                />
                <h3 className={poppins.className}>Carretera pavimentada</h3>
                <p>
                  Disfrute de un acceso sin complicaciones con nuestras
                  ubicaciones estratégicas que cuentan con carreteras
                  pavimentadas de alta calidad. Conectarse con la ciudad y otros
                  destinos será rápido y cómodo, facilitando su día a día y
                  ofreciendo un transporte eficiente para usted y su familia.
                </p>
              </div>

              <div className={styles.box}>
                <Image
                  src={Imagen2}
                  alt="Imagen 1"
                  style={{
                    borderRadius: 10,
                    height: 400,
                    objectFit: "cover",
                    marginBottom: 20,
                  }}
                />
                <h3 className={poppins.className}>Rio rancho king</h3>
                <p>
                  Descubra la serenidad y la belleza natural de tener un río
                  cerca de su hogar. Desde vistas panorámicas hasta actividades
                  acuáticas, nuestro entorno fluvial ofrece una conexión única
                  con la naturaleza. Disfrute de paseos relajantes, pesca o
                  simplemente sumérjase en la tranquilidad que proporciona la
                  proximidad a un río.
                </p>
              </div>

              <div className={styles.box}>
                <Image
                  src={Imagen3}
                  alt="Imagen 1"
                  style={{
                    borderRadius: 10,
                    height: 400,
                    objectFit: "cover",
                    marginBottom: 20,
                  }}
                />
                <h3 className={poppins.className}>Piscilagos</h3>
                <p>
                  Refresque su vida cotidiana con la proximidad a un parque de
                  agua. Perfecto para el entretenimiento familiar, estos
                  espacios ofrecen diversión acuática, áreas de recreación y un
                  ambiente relajado. Con un parque de agua cerca, siempre tendrá
                  la opción de disfrutar de momentos emocionantes y refrescantes
                  sin tener que alejarse demasiado de casa.
                </p>
              </div>

              <div className={styles.box}>
                <Image
                  src={Imagen4}
                  alt="Imagen 1"
                  style={{
                    borderRadius: 10,
                    height: 400,
                    objectFit: "cover",
                    marginBottom: 20,
                  }}
                />
                <h3 className={poppins.className}>Cerca de la Ciudad</h3>
                <p>
                  Experimente lo mejor de ambos mundos: la tranquilidad de la
                  vida suburbana y la accesibilidad de la vida en la ciudad.
                  Nuestros lotes están estratégicamente ubicados cerca de la
                  ciudad, brindándole la comodidad de acceder a servicios,
                  entretenimiento y oportunidades culturales sin sacrificar la
                  paz y la privacidad que ofrece un entorno más rural.
                </p>
              </div>
            </section>
          </section>
          <section className={styles["container-map"]}>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d4463.858123734838!2d-72.91281931686267!3d4.621622949591718!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1705507962180!5m2!1ses!2sco"
                width="100%"
                height="100%"
                style={{ border: "5px solid white" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div>
              <h1>Ubicación de nuestros lotes</h1>
              <p>
                Sumérgete en la serenidad de nuestro enclave, donde cada lote es
                más que un simple espacio, es un oasis natural. Nuestra
                ubicación excepcional está estratégicamente diseñada para
                ofrecerte un escape diario rodeado de exuberante vegetación,
                majestuosos árboles y vistas panorámicas. Descubre la armonía
                perfecta entre la comodidad moderna y la belleza natural
                mientras disfrutas de un entorno que te invita a desconectar del
                bullicio urbano y conectarte con la tranquilidad de la
                naturaleza. Bienvenido a un hogar donde cada amanecer y cada
                atardecer se tejen con la magia de un entorno natural
                inigualable.
              </p>
            </div>
          </section>

          <section className={styles["container-video"]}>
            <div>
              <h1>Recorrido de la ciudad a nuestros lotes</h1>
              <p>
                Embárcate en un viaje visual cautivador desde el corazón del
                encantador pueblo de Villanueva Casanare hasta la puerta de tu
                futuro hogar. Nuestro video te lleva a un viaje panorámico,
                capturado desde la perspectiva aérea de un dron. Experimenta la
                transición gradual desde la vida vibrante del pueblo hasta la
                serena belleza de nuestros exclusivos lotes. Descubre la armonía
                entre la comodidad urbana y la privacidad natural mientras
                exploras cada detalle del camino que te llevará a un nuevo
                capítulo de tu vida. ¡Bienvenido a tu futuro hogar, donde la
                conexión con la naturaleza se encuentra con la conveniencia
                moderna!
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
          <Gallery />
        </main>

        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-xl">
                  <h1 className={poppins.className}>Información de contacto</h1>
                </ModalHeader>
                <ModalBody>
                  <p>
                    <strong className={poppins.className}>Télefono 1: </strong>
                    <br />
                    3103435659
                  </p>
                  <p>
                    <strong className={poppins.className}>Télefono 2:</strong>
                    <br />
                    3134799993
                  </p>
                  <p>
                    <strong className={poppins.className}>
                      Dirección de oficina:
                    </strong>
                    <br />
                    Calle 9 # 11-39 - Barrios fundadores
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button
                    onPress={onClose}
                    style={{ backgroundColor: "#f46500", color: "white" }}
                  >
                    Cerrar
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </section>
    </NextUIProvider>
  );
}
