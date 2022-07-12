import { Project } from "./../../types/index";
import { BackToTop } from "./../../components/BackToTop";
import { SOCIOS_AOM, WEB_AOM, PHOTOGRAPHY_SELLER, VALENTINO_GUERRA, SPLITNOW_GITHUB, SPLITNOW } from "../consts";

/*
  Markdown

  - Links: {url}/#{name} => https://google.com/#{Google}
  - Line break: $$
*/

export const en = {
  hero: {
    btn: "Cambiar a español",
    superTitle: "Valentino Guerra",
    superSubtitle: "Web Developer / Frontend / React",
    cardTitle: "Hello!",
    ph1: [
      "I am a software developer from",
      "Mar del Plata, Argentina",
      ", who loves to",
      "explore",
      "and",
      "create",
      "new things.",
    ],
    ph2: "To make something awesome, make it simple",
    btn1: "About me",
    btn2: "Skills",
    btn3: "Projects",
    btn4: "Contact me!",
  },
  aboutMe: {
    title: "About me",
    ph1: "I am 21 years old.",
    ph2: "I like to explore, travel, meet new people and places in nature.",
    ph3: "Since I was a kid I like to create things, either to solve a problem or just for fun.",
    ph4: "I started programming about 5 years ago with the idea of creating mobile apps and games, but then I decided to go into web development.",
    expandable1: {
      title: "My studies",
      ph1: "I did not study at the university.",
      ph2: [
        'All my knowledge comes from my "self-taught" studies and the experience acquired in my projects.',
        "Why did I drop out of college? (spanish)",
      ],
      ph3: "From time to time, I like to put together a study plan based on the things that I feel like learning and think will be most useful to me. Then I dedicate a couple of hours each day until I complete it.",
    },
    expandable2: {
      title: "My daily life",
      ph1: "I consider it extremely important to maintain a balanced life, which implies:",
      list: [
        "Not to exceed my working hours.",
        "Doing sports several times a week.",
        "Every so often while using the computer, go for a walk to clear my mind.",
        "Leave some time to disconnect from everything and enjoy life.",
        "Have a good sleep, 8 hours a day.",
      ],
    },
    expandable3: {
      title: "My notes",
      ph1: "When I learn something new, I like to write it down so I don't forget it. Explained in my own words so that, at least for me, it is easier to understand.",
      ph2: ["Someone might find it useful, so here it is:", "A place where I write things... (mostly spanish)"],
    },
  },
  skills: {
    title: "Skills",
    subtitle1: "I am confident with",
    subtitle2: "I have used in past projects",
    subtitle3: "I want to learn/deepen in the near future.",
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
    title: "Contact Me!",
    placeholder1: "Name",
    placeholder2: "Email",
    placeholder3: "Message",
    btn: "Send",
    sent: {
      subtitle: "Thank you!",
      ph1: "I will contact you as soon as possible",
    },
  },
  footer: "by Valentino Guerra, 2022",
  backToTop: "Back to top",
};
