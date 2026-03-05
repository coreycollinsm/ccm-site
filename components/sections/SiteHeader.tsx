import { SectionWrapper } from "@/components/sections";
import { ContactButton, LogoLink, ResumeDownloadButton } from "@/components/ui";

export const SiteHeader = () => {
  return (
    <SectionWrapper>
      <div className="w-full flex items-center justify-between mt-4 p-4 round card">
        <LogoLink
          className="ml-2"
          buttonId="ccm-nav-logo"
          page="nav"
          text={null}
        />
        <nav className="flex items-center gap-2">
          <ResumeDownloadButton
            tracking={{ page: "nav", buttonId: "ccm-nav-resume" }}
          />
          <ContactButton
            tracking={{ page: "nav", buttonId: "ccm-nav-contact" }}
          />
        </nav>
      </div>
    </SectionWrapper>
  );
};
