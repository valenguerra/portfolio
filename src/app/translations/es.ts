import { SOCIOS_AOM, WEB_AOM, PHOTOGRAPHY_SELLER, VALENTINO_GUERRA, SPLITNOW_GITHUB, SPLITNOW, ENIGMATH } from "../consts";

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
    title: "Proyectos",
    projects: {
      0: {
        title: "Juegos para celular",
        description: `Una serie de pequeños juegos para Android, en su mayoría basados en físicas. Muy simples pero a su vez muy divertidos$$En mis inicios con la programación, allá por el 2017-2018, mientras aún iba a la escuela secundaria, tenía una fascinación por las aplicaciones móviles. Mi objetivo era volverme millonario haciendo un aplicación o un juego exitoso, pero era innegable que también disfrutaba del proceso de crear algo nuevo.$$Durante un tiempo, usé mi tiempo libre para crear aplicaciones móviles, sobre todo juegos. Considero que crear juegos es la manera más divertida de aprender a programar, ya que involucra diseño, planificación, resolución de problemas y trabajo en equipo. Habilidades fundamentales para desarrollar cualquier cosa.`,
      },
      1: {
        title: "Enigmath: ¿Puedes resolverlos todos?",
        description: `Un divertido juego para Android en el que debes resolver acertijos matemáticos y lograr reconocer los patrones para poder avanzar de nivel.$$Desarrollado junto a mi compañero Iñaki Miranda, con quien desarrollé muchos de los siguientes proyectos.$$Despues de muchos intentos fallidos de intentar hacer juegos demasiado ambiciosos, nos dimos cuenta que era mejor empezar por algo simple, pero tomandonos el tiempo necesario para hacerlo a la perfección.$$El juego está actualmente ${ENIGMATH}#disponible-en-Google-Play.`,
      },
      2: {
        title: "Socios AOM",
        description: `Una aplicación móvil diseñada como una herramienta con múltiples funciones para todos los odontólogos asociados a AOM (Asociación Odontológica Marplatense)$$El resultado finales es de excelente calidad, ya que nos enfocamos en mantenerlo simple pero al mismo tiempo estando presentes en todos los detalles y no dejar nada sin revisar. ${SOCIOS_AOM}#Se-encuentra-en-Google-Play y en App Store de forma privada.`,
      },
      3: {
        title: "Web AOM",
        description: `Un sitio web para la Asociación Odontológica Marplatense, cuenta con una parte pública que puedes visitar, y una parte de uso exclusivo para asociados.$$Fue un gran desafío, ya que era un trabajo que involucraba frontend y backend, integrado con una base de datos pre-existente. Visita ${WEB_AOM}#aom.org.ar.`,
      },
      4: {
        title: "Venta de fotografías",
        description: `Un sitio web pensado para conectar un vendedor de fotografías enmarcadas con sus clientes, mostrando todos los productos disponibles y sus precios.$$El backend de este sitio fue hecho mediante Strapi, un conocido "headless CMS" que ofrece una forma rápida y sencilla para crear una API. ${PHOTOGRAPHY_SELLER}#Repositorio-de-GitHub.`,
      },
      5: {
        title: "Centro de estudiantes",
        description: `Un sitio web para el centro de estudiantes de una universidad local, destaca por su minimalismo y su función para buscar archivos de material educativo a traves de un buscador y un navegador de carpetas.$$Si bien fue un proyecto pequeño, en este caso el reto fue integrar la API de Azure de OneDrive para poder obtener los archivos necesarios de forma dinámica.`,
      },
      6: {
        title: "Valentino Guerra",
        description: `Un sitio web diseñado y desarrollado exclusivamente para mi, a modo de página personal o portafolio para mostrar mis proyectos y demás información.$$El objetivo era lograr que sea simple y agradable a cualquiera, pero también moderno y sin dejarme ningún detalle. Estoy muy satisfecho con el resultado. ${VALENTINO_GUERRA}#Repositorio-de-GitHub.`,
      },
      7: {
        title: "Splitnow",
        description: `Una pequeña herramienta en forma de aplicación web que hice para resolver un problema que suelo tener con mis amigos. Sirve para calcular como repartir el dinero equitativamente entre un grupo de persona en base a cuánto gastó cada uno.$$Puedes visitarlo entrando a ${SPLITNOW}#splitnow.app, también puedes ver el ${SPLITNOW_GITHUB}#repositorio-de-GitHub`,
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
