import { SectionWrapper } from "@/components/sections";
import { ContactForm } from "@/components/forms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me - Corey Collins M.",
};

const Page = () => {
  return (
    <main>
      <SectionWrapper className="section-wrap">
        <div className="card round padding flex-1 flex flex-col justify-between">
          <div>
            <h2>Send Me A Message</h2>
            <h3 className="mt-2 text-(--bright-gray)">
              I want to speak with you
            </h3>
          </div>
          <p className="mt-4 text-sm text-(--light-gray)">
            I&apos;m a full-stack developer who enjoys building end-to-end web
            applications and solving real product problems. If you&apos;re
            working on something interesting or think I could contribute to your
            team, I&apos;d love to connect.
          </p>
        </div>
        <div className="flex-1">
          <ContactForm />
        </div>
      </SectionWrapper>
    </main>
  );
};

export default Page;
