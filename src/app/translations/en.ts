import { Project } from "./../../types/index";
import { BackToTop } from "./../../components/BackToTop";
import {
  SOCIOS_AOM,
  WEB_AOM,
  PHOTOGRAPHY_SELLER,
  VALENTINO_GUERRA,
  SPLITNOW_GITHUB,
  SPLITNOW,
  ENIGMATH,
  GITHUB_PARTNER,
  COMSA,
} from "../consts";

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
        description: `A series of small, mostly physics-based, single-player games for Android. Made from simple but original ideas, ideal for having fun for a while.$$In my early days with programming, back in 2017-2018, while still going to high school, I had a fascination with mobile apps. My goal was to become a millionaire by making a successful app or game, but it was undeniable that I also enjoyed the process of creating something new.$$For a while, I used my free time to create mobile apps, mostly games. I consider creating games to be the most fun way to learn programming, as it involves design, planning, problem solving and teamwork. Fundamental skills to develop anything.`,
      },
      1: {
        title: "Enigmath: Can you solve them all?",
        description: `A fun game for Android in which you must solve mathematical puzzles and manage to recognize the patterns to move to the next level.$$Developed together with my partner Iñaki Miranda, with whom I developed many of the following projects.$$After many failed attempts of trying to make too ambitious games, we realized that it was better to start with something simple, but taking the necessary time to do it perfectly.$$The game is currently ${ENIGMATH}#available-on-Google-Play.`,
      },
      2: {
        title: "Socios AOM",
        description: `A mobile application designed as a multi-functional tool for all dentists associated to AOM (Asociación Odontológica Marplatense).$$The final result is of excellent quality, as we focused on keeping it simple but at the same time being present in every detail and leaving nothing unchecked. ${SOCIOS_AOM}#Available-on-Google-Play and App Store privately.`,
      },
      3: {
        title: "Web AOM",
        description: `A website for the dental association of Mar del Plata, with a public part that you can visit, and a part for members only.$$It was a big challenge, since it was a work that involved frontend and backend, integrated with a pre-existing database. Visit ${WEB_AOM}#aom.org.ar.`,
      },
      4: {
        title: "Photography Store",
        description: `A website designed to connect a seller of framed photographs with his customers, showing all available products and their prices.$$The backend of this site was made using Strapi, a well-known "headless CMS" that offers a quick and easy way to create an API. ${PHOTOGRAPHY_SELLER}#GitHub-repository.`,
      },
      5: {
        title: "Student Center",
        description: `A website for the student center of a local university, it stands out for its minimalism and its function to search for educational material files through a search engine and a folder browser.$$Although it was a small project, in this case the challenge was to integrate the Azure API of OneDrive to be able to obtain the necessary files dynamically.`,
      },
      6: {
        title: "Valentino Guerra",
        description: `A website designed and developed exclusively for me, as a personal page or portfolio to show my projects and other information.$$The goal was to make it simple and pleasant to anyone, but also modern and without leaving any detail. I am very satisfied with the result. ${VALENTINO_GUERRA}#GitHub-repository.`,
      },
      7: {
        title: "Splitnow",
        description: `A little tool in the form of a web application I made to solve a problem I often have with my friends. It calculates how to split the money evenly among a group of people based on how much each person spent.$$You can visit it by going to ${SPLITNOW}#splitnow.app, you can also check out the ${SPLITNOW_GITHUB}#GitHub-repository.`,
      },
      8: {
        title: "Comsa",
        description: `A presentation website for a pest control company from my city. A simple and straight forward project, which helped me to practice my skills and improve my use of technologies such as NextJS and Typescript.$$It includes a contact form, an integrated GoogleMaps map and a correct use of SEO. ${COMSA}#Visit-website`,
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
