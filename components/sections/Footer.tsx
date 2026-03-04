import { ContactButton, LogoLink, ResumeDownloadButton } from "@/components/ui";
import { SectionWrapper } from "./SectionWrapper";

export const Footer = () => {
  return (
    <div className="bg-(--black) text-white">
      <SectionWrapper className="section-wrap pt-16">
        <div className="padding card-dark round flex-1">
          <LogoLink
            darkMode
            tracking={{
              page: "footer",
              buttonId: "ccm-footer-logo",
            }}
          />
          <h6 className="mt-4">CoreyCollinsM.com</h6>
          <p className="text-sm">Project & Operations Manager</p>
          <p className="text-xs mt-4 text-(--bright-gray) max-w-120">
            I build digital systems and lead teams that turn complexity into
            growth. With over a decade of experience aligning people, process,
            and technology, I specialize in delivering real-time visibility,
            scalable operations, and measurable business impact.
          </p>
        </div>
        <div className="card-dark round padding flex-2 flex flex-col gap-4 items-start">
          <div className="flex flex-col gap-4">
            <h5>Quick Links</h5>
            <ResumeDownloadButton
              darkMode
              tracking={{ page: "footer", buttonId: "ccm-footer-resume" }}
            />
            <ContactButton
              className="text-(--black)"
              darkMode
              tracking={{ page: "footer", buttonId: "ccm-footer-contact" }}
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
