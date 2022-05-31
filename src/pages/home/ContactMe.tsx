import axios from "axios";
import { Card } from "../../components/Card";
import { TitleIcon } from "../../components/TitleIcon";
import credentials from "../../assets/images/credentials.png";
import { TextField } from "../../components/TextField";
import { useContext, useEffect, useRef, useState } from "react";
import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";
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
  const formRef = useRef<HTMLFormElement>(null);

  const onFieldChange = (v: string, n: string) => setFields({ ...fields, [n]: v });

  const allFieldsAreValid =
    fields.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) && fields.fullName.length > 2 && fields.message.length > 8;

  const sendMessage = async () => {
    if (!formRef?.current) return;
    const data = new FormData(formRef?.current);
    const res = await axios.post("https://formsubmit.co/700a640f30963340f50aca3b451a482a", data);
    console.log("DATA", res.data);
  };

  return (
    <Card>
      <TitleIcon iconSrc={credentials} title={section5.title} />
      <form
        ref={formRef}
        action="https://formsubmit.co/700a640f30963340f50aca3b451a482a"
        method="POST"
        className="flex flex-col items-stretch gap-4"
      >
        <input type="hidden" name="_next" value="http://localhost:8080/#thanks" />
        <input type="text" name="_honey" className="hidden" />
        <input type="hidden" name="_captcha" value="false" />
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
            type="email"
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
        <Button className="sm:self-end" primary onClick={sendMessage} disabled={!allFieldsAreValid}>
          Enviar <Icon name="arrowRight" color="black" />
        </Button>
      </form>
    </Card>
  );
};
