import { ButtonClickSetup } from "@/components/trackers";

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
    <ButtonLink
      buttonId={buttonId}
      darkMode={darkMode}
      download
      href="/Corey%20Collins%20-%20Resume.pdf"
      page={tPage}
      size="small"
      style="secondary"
      text="Resume"
    />
  );
};
