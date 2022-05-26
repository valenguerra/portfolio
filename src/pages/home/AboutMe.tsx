import { Card } from "../../components/Card";
import { Divider } from "../../components/Divider";
import { Expandable } from "../../components/Expandable";
import { Link } from "../../components/Link";
import { SubititleIcon } from "../../components/SubtitleIcon";
import { Paragraph } from "../../components/Text";
import { TitleIcon } from "../../components/TitleIcon";

import profile from "../../assets/images/profile.png";
import dinosaur from "../../assets/images/dinosaur.png";
import reading from "../../assets/images/reading.png";
import checkCalendar from "../../assets/images/check_calendar.png";
import notebook from "../../assets/images/notebook.png";

export const AboutMe = (): JSX.Element => {
  return (
    <Card>
      <TitleIcon iconSrc={dinosaur} title="About me!" />
      <div className="flex w-full justify-between">
        <img
          src={profile}
          alt="Valentino Guerraaaaaa"
          className="h-24 rounded-full md:h-32"
        />
        <img
          src={profile}
          alt="Valentino Guerraaaaaa"
          className="h-24 rounded-full md:h-32"
        />
        <img
          src={profile}
          alt="Valentino Guerraaaaaa"
          className="h-24 rounded-full md:h-32"
        />
      </div>
      <div className="flex flex-col gap-4">
        <Paragraph>Tengo 21 años.</Paragraph>
        <Paragraph>
          Me gusta explorar, ir de viaje, conocer gente y lugares nuevos en la
          naturaleza.
        </Paragraph>
        <Paragraph>
          Desde pequeño me gusta crear cosas, siempre que tenía un problema lo
          solucionaba inventando algo. O simplemente inventaba cosas por
          diversión.
        </Paragraph>
        <Paragraph>
          Empecé a programar hace unos 5 años con la idea de crear apps móviles
          y juegos, pero luego me decidí por el desarrollo web.
        </Paragraph>
        <Divider />
        <Expandable
          title={<SubititleIcon iconSrc={reading} title="Mis estudios" />}
        >
          <Paragraph>No estudié en la universidad.</Paragraph>
          <Paragraph>
            Todos mis conocimientos vienen de mis estudios de “autodidacta” y la
            experiencia adquirida en mis proyectos.{" "}
            <Link>¿Por qué dejé la universidad?</Link>
          </Paragraph>
        </Expandable>
        <Divider />
        <Expandable
          title={<SubititleIcon iconSrc={checkCalendar} title="Mi día a día" />}
        >
          <Paragraph>
            Considero sumamente importante mantener una vida balanceada, lo cual
            implica:
            <ul className="mt-2 flex list-disc flex-col gap-2 pl-6">
              <li>No exceder mis horas de trabajo.</li>
              <li>Hacer deporte varias veces por semana.</li>
              <li>
                Cada cierto tiempo usando la computadora, salir a caminar para
                despejar la mente.
              </li>
              <li>Dejar tiempo para desconectar de todo y disfrutar.</li>
              <li>Dormir bien, 8 horas por día.</li>
            </ul>
          </Paragraph>
        </Expandable>
        <Divider />
        <Expandable
          title={<SubititleIcon iconSrc={notebook} title="Mis notas" />}
        >
          <Paragraph>
            Empecé a programar hace unos 5 años con la idea de crear apps
            móviles y juegos, pero luego me decidí por el desarrollo web.
          </Paragraph>
        </Expandable>
        <Divider />
      </div>
    </Card>
  );
};
