import { SectionWrapper } from "@/components/sections";
import { ButtonLink, ContactButton, LogoLink } from "@/components/ui";

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
          <ButtonLink
            href={"/Corey%20Collins%20-%20Resume.pdf"}
            buttonId={"ccm-nav-resume"}
            download
            page={"nav"}
            size="small"
            style="secondary"
            text={"Resume"}
          />
          <ContactButton
            tracking={{ page: "nav", buttonId: "ccm-nav-contact" }}
          />
        </nav>
      </div>
    </SectionWrapper>
  );
};
