import { ButtonClickTracker, ButtonClickSetup } from "@/components/trackers";

import { ButtonLink } from "./Buttons";

export const ResumeDownloadButton = ({
  darkMode = false,
  tracking,
}: {
  darkMode?: boolean;
  tracking: ButtonClickSetup;
}) => {
  const { page: tPage, buttonId } = tracking;

  return (
    <ButtonClickTracker page={tPage} buttonId={buttonId}>
      <ButtonLink
        darkMode={darkMode}
        download
        href="/Corey%20Collins%20-%20Resume.pdf"
        size="small"
        style="secondary"
        text="Resume"
      />
    </ButtonClickTracker>
  );
};
