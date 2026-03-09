import { IconType } from "react-icons";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";

export type SocialLinkType = { href: string; icon: IconType };

export const socialLinks = {
  github: {
    href: "https://github.com/coreycollinsm",
    icon: BsGithub,
  },
  linkedIn: {
    href: "https://linkedin.com/in/coreycollinsm",
    icon: BsLinkedin,
  },
  facebook: {
    href: "https://www.facebook.com/thecormeistro",
    icon: BsFacebook,
  },
  instagram: {
    href: "https://instagram.com/cormeistro",
    icon: BsInstagram,
  },
  x: {
    href: "https://x.com/cormeistro",
    icon: BsTwitterX,
  },
};
