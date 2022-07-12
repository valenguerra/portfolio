import { SOCIOS_AOM, WEB_AOM, PHOTOGRAPHY_SELLER, VALENTINO_GUERRA, SPLITNOW_GITHUB, SPLITNOW } from "../consts";

export const es = {
  hero: {
    btn: "Change to english",
    superTitle: "Valentino Guerra",
    superSubtitle: "Desarrollador Web de Frontend",
    cardTitle: "Hola!",
    ph1: [
      "Soy un desarrollador de sofware de",
      "Mar del Plata, Argentina",
      ", que le encanta",
      "explorar",
      "y",
      "crear",
      "cosas nuevas.",
    ],
    ph2: "Si quieres hacer algo asmobroso, hazlo simple.",
    btn1: "Sobre mí",
    btn2: "Habilidades",
    btn3: "Proyectos",
    btn4: "¡Contáctame!",
  },
  aboutMe: {
    title: "Sobre mí",
    ph1: "Tengo 21 años.",
    ph2: "Me gusta explorar, ir de viaje, conocer gente y lugares nuevos en la naturaleza.",
    ph3: "Desde pequeño me gusta crear cosas, ya sea para solucionar algún problema o simplemente por diversión.",
    ph4: "Empecé a programar hace unos 5 años con la idea de crear apps móviles y juegos, pero luego me decidí por el desarrollo web.",
    expandable1: {
      title: "Mis estudios",
      ph1: "No estudié en la universidad.",
      ph2: [
        'Todos mis conocimientos vienen de mis estudios de "autodidacta" y la experiencia adquirida en mis proyectos.',
        "¿Por qué dejé la universidad?",
      ],
      ph3: "Cada cierto tiempo, me gusta armar un plan de estudio basándome en las cosas que tengo ganas de aprender y creo que me serán mas útiles. Y luego dedicarle un par de horas cada día hasta completarlo.",
    },
    expandable2: {
      title: "Mi día a día",
      ph1: "Considero sumamente importante mantener una vida balanceada, lo cual implica:",
      list: [
        "No exceder mis horas de trabajo.",
        "Hacer deporte varias veces por semana.",
        "Cada cierto tiempo usando la computadora, salir a caminar para despejar la mente.",
        "Dejar tiempo para desconectar de todo y disfrutar de la vida.",
        "Dormir bien, 8 horas por día.",
      ],
    },
    expandable3: {
      title: "Mis notas",
      ph1: "Cuando aprendo algo nuevo, me gusta anotarlo para no olvidarlo. Explicado con mis propias palabras de forma que, al menos para mí, me sea más fácil de entender.",
      ph2: ["A alguien podría servirle asi que acá lo dejo:", "Un lugar donde escribo cosas..."],
    },
  },
  skills: {
    title: "Habilidades",
    subtitle1: "Manejo con confianza",
    subtitle2: "He utilizado en proyectos pasados",
    subtitle3: "Quiero aprender/profundizar en un futuro próximo",
  },
  projects: {
    title: "Projects",
    projects: {
      0: {
        title: "Mobile games",
        description: `En mis inicios con la programación, allá por el 2017, mientras aún iba a la escuela secundaria, tenía una fascinación por las aplicaciones móviles. Mi objetivo era volverme millonario haciendo un aplicación o un juego exitoso, pero era innegable que también disfrutaba mucho del proceso de crear algo nuevo. Poner en existencia y al alcance de todos, algo que previamente solo existía en mi cerebro, era la mejor parte. Durante un par de años, me dedique principalmente a desarrollar aplicaciones, muchas de ellas juegos. Considero que crear juegos es la manera más divertida de aprender a programar. Ya que involucra diseño, planeación, resolución de problemas y trabajo en equipo. Habilidades fundamentales para desarrollar cualquier cosa.`,
      },
      1: {
        title: "Enigmath: ¿Puedes resolverlos todos?",
        description: `Mi etapa de creación de juegos concluye con Enigmath. Un juego que desarrollé junto con mi compañero Iñaki Miranda, con quien desarrollé muchos de los siguientes proyectos. Después de muchos intentos fallidos de intentar hacer juegos demasiado ambiciosos, nos dimos cuenta que había que empezar por algo más simple, pero tomándonos el tiempo necesario para cada una de las 3 etapas del proceso. Planeación completa, diseño de las interfaces, y programación. Un juego de acertijos matemáticos en el cual debes descubrir el patrón para pasar al siguiente nivel. Puedes descargarlo desde Google Play`,
      },
      2: {
        title: "Socios AOM",
        description: `Mi último proyecto en forma de app móvil. Es una herramienta para la Asociación de Odontólogos de Mar del Plata y todos sus clientes. $$ El resultado final es de una excelente calidad, ya que nos enfocamos en hacer algo simple pero al mismo tiempo estar presentes en todos los detalles y no dejar nada sin revisar. ${SOCIOS_AOM}/#Se-encuentra-en-Google-Play y en App Store de forma privada.`,
      },
      3: {
        title: "Web AOM",
        description: `Uno de las primeros sitios web que desarrollamos, también para la Asociación de Odontólogos de Mar del Plata. ${WEB_AOM}/#aom.org.ar`,
      },
      4: {
        title: "Venta de fotografías",
        description: `Sitio web de tipo e-commerce pero muy simplificado. Esta orientado a la venta de fotografías, pero podría usarse para vender cualquier otro tipo de productos. $$ Hecho con React y Next.js, me sirvió para entender a fondo el uso del server-side rendering que ofrece Next.js. El sitio web no está en funcionamiento actualmente pero puedes visitar el ${PHOTOGRAPHY_SELLER}/#repositorio-de-GitHub ya que es público.`,
      },
      5: {
        title: "Centro de estudiantes",
        description: `Sitio web para el centro de estudiantes de una universidad local. Fue un trabajo pequeño, pero todo suma a la experiencia. $$ Hecho con React (create-react-app). Si bien no aprendimos nada nuevo al desarrollar este sitio, nos sirvió para solidificar nuestro entendimiento de React y dar estilo con StyledComponents.`,
      },
      6: {
        title: "Valentino Guerra",
        description: `Lo primero fue diseñar la interfaz, para lo cual usé Figma. Me encanta diseñar interfaces, pero es una tarea agotadora aunque no lo parezca. $$ Posteriormente, era el momento de elegir con que tecnologías programarla. Me decidí por no utilizar Next.js, pero tampoco create-react-app ya que quería tener la experiencia de configurar React yo mismo, utilizando Webpack. También elegí Typescript, hacía mucho que no lo utilizaba en proyectos y tenía ganas de retomarlo. Por último me quedé con TailwindCSS por sobre StyledComponents, simplemente porque quería probar algo distinto. ${VALENTINO_GUERRA}/#Repositorio-de-GitHub`,
      },
      7: {
        title: "Splitnow",
        description: `Es un pequeño proyecto que hice para resolver un problema que suelo tener con mis amigos. Sirve para calcular como repartir el dinero equitativamente entre un grupo de persona en base a cuánto gastó cada uno. $$ Diseñado en Figma, desarrollado con React (create-react-app), Typescript y TailwindCSS. Puedes visitarlo entrando a ${SPLITNOW}/#splitnow.app, también puedes ver el ${SPLITNOW_GITHUB}/#repositorio-de-GitHub`,
      },
    },
  },
  contactMe: {
    title: "¡Contáctame!",
    placeholder1: "Nombre",
    placeholder2: "Correo electrónico",
    placeholder3: "Mensaje",
    btn: "Enviar",
    sent: {
      subtitle: "¡Muchas gracias!",
      ph1: "Me contactaré contigo lo antes posible",
    },
  },
  footer: "hecho por Valentino Guerra, 2022",
  backToTop: "Subir",
};
