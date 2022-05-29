import { Paragraph, Title } from "../../../components/Text";
import { Link } from "../../../components/Link";
import { ImageRow } from "./ImageRow";

import ball from "../../../assets/images/screenshots/ball.jpg";
import blackBullets from "../../../assets/images/screenshots/black_bullets.jpg";
import blockRain from "../../../assets/images/screenshots/block_rain.jpg";
import newtonsApple from "../../../assets/images/screenshots/newtons_apple.jpg";
import enigmath1 from "../../../assets/images/screenshots/enigmath_1.jpg";
import enigmath2 from "../../../assets/images/screenshots/enigmath_2.jpg";
import enigmath3 from "../../../assets/images/screenshots/enigmath_3.jpg";
import sociosAom1 from "../../../assets/images/screenshots/socios_aom_1.jpg";
import sociosAom2 from "../../../assets/images/screenshots/socios_aom_2.jpg";
import sociosAom3 from "../../../assets/images/screenshots/socios_aom_3.jpg";
import webAom from "../../../assets/images/screenshots/web_aom_1.jpeg";
import students1 from "../../../assets/images/screenshots/students_1.png";
import students2 from "../../../assets/images/screenshots/students_2.png";
import phSeller1 from "../../../assets/images/screenshots/ph_seller_1.png";
import phSeller2 from "../../../assets/images/screenshots/ph_seller_2.png";

export const projects = [
  <>
    <Title>Juegos para móvil</Title>
    <ImageRow
      images={[
        { src: ball, alt: "ball game" },
        { src: blackBullets, alt: "black bullets game" },
        { src: blockRain, alt: "block rain game" },
        { src: newtonsApple, alt: "newtons apple game" },
      ]}
    />
    <Paragraph>
      En mis inicios con la programación, allá por el 2017, mientras aún iba a
      la escuela secundaria, tenía una fascinación por las aplicaciones móviles.
      Mi objetivo era volverme millonario haciendo un aplicación o un juego
      exitoso, pero era innegable que tambien disfrutaba mucho del proceso de
      crear algo nuevo. Poner en existencia y al alcance de todos, algo que
      previamente solo existía en mi cerebro, era la mayor satisfacción.
    </Paragraph>
    <Paragraph>
      Durante un par de años, me dedique principalmente a desarrollar
      aplicaciones, muchas de ellas juegos. Considero que crear juegos es la
      manera más divertida de aprender a programar. Ya que involucra diseño,
      planeación, resolución de problemas y trabajo en equipo. Habilidades
      fundamentales para desarrollar cualquier cosa.
    </Paragraph>
  </>,
  <>
    <Title>Enigmath ¿Puedes resolverlos todos?</Title>
    <ImageRow
      images={[
        { src: enigmath1, alt: "enigmath math puzzle game" },
        { src: enigmath2, alt: "enigmath math puzzle game" },
        { src: enigmath3, alt: "enigmath math puzzle game" },
      ]}
    />
    <Paragraph>
      Mi etapa de creación de juegos concluye con Enigmath. Un juego que
      desarrollé junto con mi compañero <Link>Iñaki Miranda</Link>, con quien
      desarrollé muchos de los siguientes proyectos.
    </Paragraph>
    <Paragraph>
      Después de muchos intentos fallidos de intentar hacer juegos demasiado
      ambiciosos, nos dimos cuenta que habia que empezar por algo más simple,
      pero tomandonos el tiempo necesario para cada una de las 3 etapas del
      proceso. Planeación completa, diseño de las interfaces, y programación.{" "}
    </Paragraph>
    <Paragraph>
      Un juego de acertijos matemáticos en el cual debes descubrir el patrón
      para pasar al siguiente nivel.{" "}
      <Link>Puedes descargarlo desde Google Play</Link>
    </Paragraph>
  </>,
  <>
    <Title>Socios AOM</Title>
    <ImageRow
      images={[
        { src: sociosAom1, alt: "Socios AOM App" },
        { src: sociosAom2, alt: "Socios AOM App" },
        { src: sociosAom3, alt: "Socios AOM App" },
      ]}
    />
    <Paragraph>
      Mi último proyecto en forma de app móvil. Es una herramienta para la
      Asociación de Odontólogos de Mar del Plata y todos sus clientes.
    </Paragraph>
    <Paragraph>
      El resultado final es de una excelente calidad, ya que nos enfocamos en
      hacer algo simple pero al mismo tiempo estar presentes en todos los
      detalles y no dejar nada sin revisar.{" "}
      <Link>Tambíen se encuentra en Google Play</Link> y en AppStore de forma
      privada.
    </Paragraph>
  </>,
  <>
    <Title>Web AOM</Title>
    <img src={webAom} alt="Web AOM" className="w-full rounded" />
    <Paragraph>
      Una de las primeros sitios web que desarrollamos, también para la
      Asociación de Odontologos de Mar del Plata. <Link>aom.org.ar</Link>
    </Paragraph>
    <Paragraph>
      La hicimos en forma de servidor con Express y Node, también incluía una
      API que conectaba con MongoDB. Utilizando EJS como motor de plantillas,
      para agregar lógica al HTML. Fue un proyecto grande, del cual aprendimos
      mucho tanto en Frontend como Backend. Lo considero el paso previo a
      utilizar herramientas como React.
    </Paragraph>
  </>,
  <>
    <Title>Centro de estudiantes</Title>
    <ImageRow
      images={[
        { src: students1, alt: "StudentsAssociation Website" },
        { src: students2, alt: "StudentsAssociation Website" },
      ]}
    />
    <Paragraph>
      Sitio web para el centro de estudiantes de una universidad local. Fue un
      trabajo pequeño, pero todo suma a la experiencia.
    </Paragraph>
    <Paragraph>
      Hecho con React (create-react-app). Si bien no aprendimos nada nuevo al
      desarrollar este sitio, nos sirvió para solidificar nuestro entendimiento
      de React y dar estilo con StyledComponents.
    </Paragraph>
  </>,
  <>
    <Title>PhotographySeller</Title>
    <ImageRow
      images={[
        { src: phSeller1, alt: "PhotographySeller Website" },
        { src: phSeller2, alt: "PhotographySeller Website" },
      ]}
    />
    <Paragraph>
      Sitio web de tipo e-commerce pero muy simplificado. Esta orientado a la
      venta de fotografías, pero podría usarse para vender cualquier otro tipo
      de productos.
    </Paragraph>
    <Paragraph>
      Hecho con React y Next.js, me sirvió para entender a fondo el uso del
      server-side rendering que ofrece. El sitio web no está en funcionamiento
      actualmente pero puedes visitar el <Link>repositorio de GitHub</Link> ya
      que es público.
    </Paragraph>
  </>,
  <>
    <Title>Valentino Guerra</Title>
    <Paragraph>
      Si, la misma página web en la que estas ahora. De poco serviría mostrar
      imágenes, simplemente queria contar como la hice.
    </Paragraph>
    <Paragraph>
      Hice el diseño en Figma, lo cual me llevo unos días. Me encanta diseñar
      interfaces, pero es una tarea agotadora aunque no lo parezca.
    </Paragraph>
    <Paragraph>
      Posteriormente, era el momento de elegir con que tecnologías programarla.
      Me decidí por no utilizar Next.js, pero tampoco create-react-app ya que
      quería tener la experiencia de configurar React yo mismo, utilizando
      Webpack. Tambien elegí Typescript, hacía mucho que no lo utilizaba en
      proyectos y tenía ganas de retomarlo. Por último me quedé con TailwindCSS
      por sobre StyledComponents, simplemente porque quería probar algo
      distinto. <Link>Repositorio de GitHub</Link>
    </Paragraph>
  </>,
];
