import Image from "next/image";
import Link from "next/link";

import { ButtonClickTracker, ButtonClickSetup } from "@/components/trackers";

import Logo from "@/public/logo.webp";
import LightLogo from "@/public/logo-light.webp";

export const LogoLink = ({
  className,
  darkMode = false,
  tracking,
}: {
  className?: string;
  darkMode?: boolean;
  tracking: ButtonClickSetup;
}) => {
  const { page, buttonId } = tracking;

  return (
    <ButtonClickTracker className={className} page={page} buttonId={buttonId}>
      <Link href="/">
        {darkMode ? (
          <Image src={LightLogo} loading="eager" height="30" alt="CCM Logo" />
        ) : (
          <Image src={Logo} loading="eager" height="30" alt="CCM Logo" />
        )}
      </Link>
    </ButtonClickTracker>
  );
};
