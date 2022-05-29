import { Card } from "../../components/Card";
import { TitleIcon } from "../../components/TitleIcon";

import credentials from "../../assets/images/credentials.png";
import { TextField } from "../../components/TextField";
import { useState } from "react";
import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";

interface ContactFields {
  fullName: string;
  email: string;
  message: string;
}

export const ContactMe = (): JSX.Element => {
  const empty: ContactFields = { email: "", fullName: "", message: "" };
  const [fields, setFields] = useState<ContactFields>(empty);

  const onFieldChange = (v: string, n: string) =>
    setFields({ ...fields, [n]: v });

  return (
    <Card>
      <TitleIcon iconSrc={credentials} title="Contact Me!" />
      <div className="flex flex-col items-stretch gap-4">
        <div className="flex flex-wrap justify-between gap-4">
          <TextField
            name="fullName"
            value={fields.fullName}
            placeholder="Nombre"
            onChange={onFieldChange}
            className="flex-1"
          />
          <TextField
            name="email"
            value={fields.email}
            placeholder="Email"
            onChange={onFieldChange}
            className="flex-1"
          />
        </div>
        <TextField
          name="message"
          value={fields.message}
          placeholder="Message"
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
