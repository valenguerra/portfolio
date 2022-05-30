import { Card } from "../../components/Card";
import { TitleIcon } from "../../components/TitleIcon";

import credentials from "../../assets/images/credentials.png";
import { TextField } from "../../components/TextField";
import { useContext, useState } from "react";
import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";
import { useLanguage } from "../../hooks/useLanguage";
import { LanguageContext } from "../../App";

interface ContactFields {
  fullName: string;
  email: string;
  message: string;
}

export const ContactMe = (): JSX.Element => {
  const language = useContext(LanguageContext);
  const { section5 } = language?.texts;
  const empty: ContactFields = { email: "", fullName: "", message: "" };
  const [fields, setFields] = useState<ContactFields>(empty);

  const onFieldChange = (v: string, n: string) =>
    setFields({ ...fields, [n]: v });

  return (
    <Card>
      <TitleIcon iconSrc={credentials} title={section5.title} />
      <div className="flex flex-col items-stretch gap-4">
        <div className="flex flex-wrap justify-between gap-4">
          <TextField
            name="fullName"
            value={fields.fullName}
            placeholder={section5.placeholder1}
            onChange={onFieldChange}
            className="flex-1"
          />
          <TextField
            name="email"
            value={fields.email}
            placeholder={section5.placeholder2}
            onChange={onFieldChange}
            className="flex-1"
          />
        </div>
        <TextField
          name="message"
          value={fields.message}
          placeholder={section5.placeholder3}
          onChange={onFieldChange}
          textarea
          className="h-48 resize-none"
        />
        <Button className="sm:self-end" primary>
          Enviar <Icon name="arrowRight" color="black" />
        </Button>
      </div>
    </Card>
  );
};
