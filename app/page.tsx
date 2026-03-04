import { DedicatedLinkCard, ImageWithTextBottomCard } from "@/components/ui";
import { SectionWrapper } from "@/components/sections";

import HeroImage from "@/assets/home-hero.webp";
import { socialLinks } from "@/config";
const gitHubLink = socialLinks.github.href;

export default function Home() {
  return (
    <div>
      <main>
        <SectionWrapper className="section-wrap">
          <ImageWithTextBottomCard
            className="lg: flex-2"
            backgroundAlignment={{ alignX: "center", alignY: "top" }}
            header="Full Stack Developer"
            paragraph="I design and ship full-stack product features using Next.js, Node.js, and MongoDB — from frontend UX to backend APIs, integrations, and deployment."
            src={HeroImage}
            subheading="Building end-to-end web applications with TypeScript"
          />
          <DedicatedLinkCard
            className="lg:flex-1"
            header="This Site Is A Full Stack Application "
            href={gitHubLink}
            paragraph="I've built this site as a proof-of-capability with a public repo on GitHub. This site includes basic analytics, form handling, AI-enhanced spam filtering, MongoDB blacklisting, and integration with Asana as a workflow tool."
            text="View This Repo on GitHub"
            tracking={{ page: "home", buttonId: "ccm-home-casestudy" }}
          />
        </SectionWrapper>
      </main>
    </div>
  );
}
