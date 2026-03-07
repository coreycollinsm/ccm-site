import { ButtonLink, LogoLink } from "@/components/ui";
import { SectionWrapper } from "./SectionWrapper";

export const Footer = () => {
  return (
    <div className="bg-(--black) text-white">
      <SectionWrapper className="section-wrap pt-16">
        <div className="padding card-dark round flex-1">
          <LogoLink
            darkMode
            page="footer"
            buttonId="ccm-footer-logo"
            text={null}
          />
          <h6 className="mt-4">CoreyCollinsM.com</h6>
          <p className="text-sm">Full Stack Developer</p>
          <p className="text-xs mt-4 text-(--bright-gray) max-w-120">
            I design and ship full-stack product features using Next.js,
            Node.js, and MongoDB — from frontend UX to backend APIs,
            integrations, and deployment.
          </p>
        </div>
        <div className="card-dark round padding flex-2 flex flex-col gap-4 items-start">
          <div className="flex flex-col gap-4">
            <h4>Quick Links</h4>
            <ButtonLink
              buttonId={"ccm-footer-resume"}
              darkMode
              download
              href={"/Corey%20Collins%20-%20Resume.pdf"}
              page={"footer"}
              size="small"
              style="secondary"
              text={"Resume"}
            />
            <ButtonLink
              href={"/data-policy"}
              buttonId={"ccm-footer-datapolicy"}
              page={"footer"}
              darkMode
              size="small"
              style="secondary"
              text={"Data Policy"}
            />
            <ButtonLink
              href={"/contact"}
              buttonId={"ccm-footer-contact"}
              page={"footer"}
              darkMode
              size="small"
              text={"Contact"}
            />
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper
        className="section-wrap border-t-2 border-(--dark-gray)"
        noMargin
      >
        <p className="text-sm padding text-center w-full text-(--light-gray)">
          &copy;2026 Corey Collins
        </p>
      </SectionWrapper>
    </div>
  );
};
