import { ButtonClickSetup } from "@/components/trackers";
import { ButtonLink } from "./Buttons";

export const ContactButton = ({
  className,
  darkMode = false,
  tracking,
}: {
  className?: string;
  darkMode?: boolean;
  tracking: ButtonClickSetup;
}) => {
  const { page: tPage, buttonId } = tracking;

  return (
    <ButtonLink
      buttonId={buttonId}
      className={className}
      darkMode={darkMode}
      href="/contact"
      page={tPage}
      size="small"
      style="tertiary"
      text="Contact Me"
    />
  );
};
