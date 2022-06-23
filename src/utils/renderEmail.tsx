import React, { ComponentType } from "react";
import { renderEmail } from "react-html-email";
import { SignupWelcome } from "../components/templates/SignupWelcome";

type Props = {
  subject: string;
  activationCode: string;
  userName: string;
};

const renderReactEmail = (Component: ComponentType<Props>, data: Props) => {
  return renderEmail(<Component {...data} />);
};

export const renderSignupWelcomeEmail = (props: Props) => {
  return renderReactEmail(SignupWelcome, props);
};
