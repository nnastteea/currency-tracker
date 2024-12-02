import React from "react";
import { ReactComponent as Dribble } from "@assets/Dribble.svg";
import { ReactComponent as Facebook } from "@assets/Facebook.svg";
import { ReactComponent as Instagram } from "@assets/Instagram.svg";
import { ReactComponent as LinkedIn } from "@assets/LinkedIn.svg";
import { ReactComponent as YouTube } from "@assets/YouTube.svg";

import * as S from "./style";

const SocialLinks = [
  {
    href: "https://dribbble.com/ModsenDesign",
    icon: <Dribble alt="link to the dribble" />,
  },
  {
    href: "https://www.facebook.com/ModsenSoftware",
    icon: <Facebook alt="link to the facebook" />,
  },
  {
    href: "https://www.instagram.com/modsencompany/",
    icon: <Instagram alt="link to the instagram" />,
  },
  {
    href: "https://www.linkedin.com/company/modsen/?originalSubdomain=pl",
    icon: <LinkedIn alt="link to the linkedIn" />,
  },
  {
    href: "https://www.youtube.com/@modsencompany",
    icon: <YouTube alt="link to the youtube" />,
  },
];

function ContactLinks() {
  return (
    <S.ContactContainer>
      <div>
        <S.ContactHeader>Contact us</S.ContactHeader>
        <S.ContactParagraph>contact@modsen-software.com</S.ContactParagraph>
        <S.ContactParagraph>Phone:+48501157180</S.ContactParagraph>
        <S.ContactParagraph>ul.Żelazna 59 Warsaw, Poland</S.ContactParagraph>
      </div>
      <S.ImageLinkWrapper>
        <S.ImageContainer>
          {SocialLinks.map(({ href, icon }, index) => (
            <S.LinkContainer href={href} target="_blank" key={index}>
              {icon}
            </S.LinkContainer>
          ))}
        </S.ImageContainer>
      </S.ImageLinkWrapper>
    </S.ContactContainer>
  );
}

export default ContactLinks;
