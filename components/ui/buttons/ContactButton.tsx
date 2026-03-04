import { ButtonClickTracker, ButtonClickSetup } from "@/components/trackers";
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
    <ButtonClickTracker
      className={`${className}`}
      page={tPage}
      buttonId={buttonId}
    >
      <ButtonLink
        darkMode={darkMode}
        href="/contact"
        size="small"
        style="tertiary"
        text="Contact Me"
      />
    </ButtonClickTracker>
  );
};
