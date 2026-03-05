import { SectionWrapper } from "@/components/sections";
import { ButtonLink, LogoLink } from "@/components/ui";

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
          <ButtonLink
            href={"/contact"}
            buttonId={"ccm-nav-contact"}
            page={"nav"}
            size="small"
            text={"Contact"}
          />
        </nav>
      </div>
    </SectionWrapper>
  );
};
