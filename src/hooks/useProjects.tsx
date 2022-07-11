import { useContext } from "react";
import { LanguageContext } from "../App";
import { Project } from "../types";

// Thumbnails
import aomThumbnail from "../assets/images/thumbnails/aom.png";
import enigmathThumbnail from "../assets/images/thumbnails/enigmath.png";
import mobileGamesThumbnail from "../assets/images/thumbnails/mobile_games.png";
import photographyThumbnail from "../assets/images/thumbnails/photography.png";
import sociosAomThumnail from "../assets/images/thumbnails/socios_aom.png";
import splitnowThumbnail from "../assets/images/thumbnails/splitnow.png";
import studentsThumbnail from "../assets/images/thumbnails/students.png";
import valenguerra from "../assets/images/thumbnails/valenguerra.png";

// Screenshots
import ball from "../assets/images/screenshots/ball.jpg";
import blackBullets from "../assets/images/screenshots/black_bullets.jpg";
import blockRain from "../assets/images/screenshots/block_rain.jpg";
import enigmath1 from "../assets/images/screenshots/enigmath_1.jpg";
import enigmath2 from "../assets/images/screenshots/enigmath_2.jpg";
import enigmath3 from "../assets/images/screenshots/enigmath_3.jpg";
import newtonsApple from "../assets/images/screenshots/newtons_apple.jpg";
import phSeller1 from "../assets/images/screenshots/ph_seller_1.png";
import phSeller2 from "../assets/images/screenshots/ph_seller_2.png";
import sociosAom1 from "../assets/images/screenshots/socios_aom_1.png";
import sociosAom2 from "../assets/images/screenshots/socios_aom_2.png";
import sociosAom3 from "../assets/images/screenshots/socios_aom_3.png";
import splitnow from "../assets/images/screenshots/splitnow.jpeg";
import students1 from "../assets/images/screenshots/students_1.png";
import students2 from "../assets/images/screenshots/students_2.png";
import webAom1 from "../assets/images/screenshots/web_aom_1.jpeg";
import webAom2 from "../assets/images/screenshots/web_aom_2.jpeg";

// Tech stack
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import javascript from "../assets/images/javascript.png";
import jQuery from "../assets/images/jQuery.png";
import nodejs from "../assets/images/nodejs.png";
import react from "../assets/images/react.png";
import styledComponents from "../assets/images/styled_components.png";
import webpack from "../assets/images/webpack.png";
import nextjs from "../assets/images/nextjs.png";
import tailwind from "../assets/images/tailwind.png";
import figma from "../assets/images/figma.png";
import typescript from "../assets/images/typescript.png";
import sass from "../assets/images/sass.png";
import flutter from "../assets/images/flutter.png";
import mongodb from "../assets/images/mongodb.png";

export const useProjects = (): Project[] => {
  const language = useContext(LanguageContext);
  const { section4 } = language?.texts;

  let projects = [
    {
      id: 0,
      thumbnail: mobileGamesThumbnail,
      images: [ball, blackBullets, blockRain, newtonsApple],
      year: 2018,
      techStack: [html, css],
    },
    {
      id: 1,
      thumbnail: enigmathThumbnail,
      images: [enigmath1, enigmath2, enigmath3],
      year: 2019,
      techStack: [html, css],
    },
    {
      id: 2,
      thumbnail: sociosAomThumnail,
      images: [sociosAom1, sociosAom2, sociosAom3],
      year: 2020,
      techStack: [flutter],
    },
    {
      id: 3,
      thumbnail: aomThumbnail,
      images: [webAom1, webAom2],
      year: 2021,
      techStack: [html, sass, javascript, nodejs, mongodb, jQuery],
    },
    {
      id: 4,
      thumbnail: photographyThumbnail,
      images: [phSeller1, phSeller2],
      year: 2021,
      techStack: [react, nextjs, javascript, styledComponents],
    },
    {
      id: 5,
      thumbnail: studentsThumbnail,
      images: [students1, students2],
      year: 2022,
      techStack: [react, javascript, styledComponents, figma],
    },
    {
      id: 6,
      thumbnail: valenguerra,
      year: 2022,
      techStack: [react, webpack, typescript, tailwind, figma],
    },
    {
      id: 7,
      thumbnail: splitnowThumbnail,
      images: [splitnow],
      year: 2022,
      techStack: [react, typescript, tailwind, figma],
    },
  ];

  return projects.map((project) => {
    const { title, description } = section4.projects[project.id];
    return { ...project, title, description };
  });
};