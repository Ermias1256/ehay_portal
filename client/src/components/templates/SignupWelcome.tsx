import React from "react";
import { Box, Email, Item, Span } from "react-html-email";
// import memoriesLogo from "../../images/memoriesLogo.png";
// import memoriesText from "../../images/TizitaText.png";

// { EmailFooter } from "./EmailFooter";

type Props = {
  subject: string;
  activationCode: string;
  userName: string;
};

const emailHeadCSS = `
  body {
    background-color: #F5F8FA;
  }
`.trim();

const backgroundStyle = {
  WebkitBoxShadow: "6px 6px 40px 3px rgba(140, 152, 164, 0.2)",
  backgroundColor: "#FFF",
  borderRadius: 7,
  boxShadow: "6px 6px 40px 3px rgba(140, 152, 164, 0.2)",
  margin: "0 auto",
  width: "100%",
  padding: "0 32px",
};

const containerStyle = {
  backgroundColor: "#F5F8FA",
  width: "100%",
};

const SignupWelcome = ({ userName, subject, activationCode }: Props) => (
  <Box align="center" style={containerStyle}>
    <Email align="center" headCSS={emailHeadCSS} title={subject}>
      <Item style={{ height: 45 }} />
      <Item align="center">
        {/* <img src= {memoriesText}
                alt="icon" height="45px" />
                <img       
                src={memoriesLogo}
                alt="logo"
                height="40px"
                /> */}
      </Item>
      <Item style={{ height: 30 }} />
      <Item align="center">
        <Box style={backgroundStyle}>
          <Item style={{ height: 40 }} />
          <Item>
            <Span fontSize={22} fontWeight="bold">
              Welcome to TIZITA
            </Span>
          </Item>
          <Item style={{ height: 25 }} />
          <Item>Hello {userName}, we are happy to have you on board!</Item>
          <Item style={{ height: 25 }} />

          <Item>
            To access the optimal experience of the system, you only need to
            activate your account below.
          </Item>
          <Item style={{ height: 20 }} />
          <Item>Please use this activation code: {activationCode}</Item>
          <Item style={{ height: 20 }} />
          <Item>With kind regards.</Item>
        </Box>
      </Item>
    </Email>
  </Box>
);

export { SignupWelcome };
