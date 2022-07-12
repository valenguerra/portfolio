import axios from "axios";
import { Card } from "../Card";
import { TitleIcon } from "../TitleIcon";
import credentials from "../../assets/images/credentials.png";
import { TextField } from "../TextField";
import React, { RefObject, useContext, useRef, useState } from "react";
import { Button } from "../Button";
import { ColoredIcon, Icon } from "../Icon";
import { LanguageContext } from "../../App";
import { Paragraph, Subtitle } from "../Text";

import smile from "../../assets/images/smile.png";
import { Loader } from "../loader";
import { FormStatus } from "../../types";
import { EMAIL_REGEX } from "../../app/consts";

interface ContactFields {
  fullName: string;
  email: string;
  message: string;
}

export const ContactMe = React.forwardRef<HTMLElement, {}>(({}, ref): JSX.Element => {
  const empty: ContactFields = { email: "", fullName: "", message: "" };

  const language = useContext(LanguageContext);
  const formRef = useRef<HTMLFormElement>(null);
  const [fields, setFields] = useState<ContactFields>(empty);
  const [status, setStatus] = useState<FormStatus>("normal");

  const { contactMe: texts } = language?.texts;
  const allFieldsAreValid = fields.email.match(EMAIL_REGEX) && fields.fullName.length > 2 && fields.message.length > 8;

  const onFieldChange = (v: string, n: string) => setFields({ ...fields, [n]: v });

  const sendMessage = async () => {
    if (!formRef?.current) return;
    setStatus("sending");
    const data = new FormData(formRef?.current);
    const res = await axios.post("https://formsubmit.co/700a640f30963340f50aca3b451a482a", data);
    if (res.status === 200) setStatus("sent");
  };

  return (
    <Card ref={ref}>
      <TitleIcon iconSrc={credentials} title={texts.title} />
      {status !== "normal" && (
        <div className="flex h-96 flex-col items-center justify-center gap-4">
          {status === "sending" && <Loader />}
          {status === "sent" && (
            <>
              <div className="flex items-center gap-4">
                <ColoredIcon src={smile} alt="happy face" size="big" />
                <Subtitle>{texts.sent.subtitle}</Subtitle>
              </div>
              <Paragraph>{texts.sent.ph1}</Paragraph>
            </>
          )}
        </div>
      )}
      {status === "normal" && (
        <form
          ref={formRef}
          action="https://formsubmit.co/700a640f30963340f50aca3b451a482a"
          method="POST"
          className="flex flex-col items-stretch gap-4"
        >
          <input type="text" name="_honey" className="hidden" />
          <input type="hidden" name="_captcha" value="false" />
          <div className="flex flex-wrap justify-between gap-4">
            <TextField
              name="fullName"
              value={fields.fullName}
              placeholder={texts.placeholder1}
              onChange={onFieldChange}
              className="flex-1"
            />
            <TextField
              name="email"
              type="email"
              value={fields.email}
              placeholder={texts.placeholder2}
              onChange={onFieldChange}
              className="flex-1"
            />
          </div>
          <TextField
            name="message"
            value={fields.message}
            placeholder={texts.placeholder3}
            onChange={onFieldChange}
            textarea
            className="h-48 resize-none"
          />
          <Button className="sm:self-end" primary onClick={sendMessage} disabled={!allFieldsAreValid}>
            {texts.btn} <Icon name="arrowRight" color="black" />
          </Button>
        </form>
      )}
    </Card>
  );
});
