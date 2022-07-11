export type LangCode = "en" | "es";

export interface Language {
  texts?: any;
  toggle?: () => any;
}

export interface ImageProps {
  src: string;
  alt: string;
}

export type FormStatus = "normal" | "sending" | "sent";

export interface Project {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  techStack: string[];
  year: number;
  images?: string[];
}
