// Components
import { ProjectsCard, SectionWrapper } from "@/components/sections";
import {
  BulletListCard,
  ImageOnlyCard,
  DedicatedLinkCard,
  ImageWithTextBottomCard,
  ParagraphImageCard,
  VerticalIconListCard,
  BlackParagraphCardWithButton,
  MetricsCard,
} from "@/components/ui";

// Links
import { socialLinks } from "@/config";
const gitHubLink = socialLinks.github.href;

// Images
import HeroImage from "@/assets/home-hero.webp";
import CoffeeShopImage from "@/assets/corey-coffee-shop.webp";
import WritingImage from "@/assets/corey-writing.webp";
import ServerImage from "@/assets/corey-server.webp";
import CobaImage from "@/assets/coba.webp";

// Icons
import {
  PiBroadcastBold,
  PiChartLineUpBold,
  PiGearSixBold,
  PiPlugBold,
  PiPuzzlePieceBold,
  PiStackBold,
  PiTreeStructureBold,
} from "react-icons/pi";

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
            cta={{
              buttonId: "ccm-home-githubExternalLink",
              href: gitHubLink,
              page: "home",
              text: "View This Repo on GitHub",
            }}
            header="This Site Is A Full Stack Application "
            paragraph="I've built this site as a proof-of-capability with a public repo on GitHub. This site includes basic analytics, form handling, AI-enhanced spam filtering, MongoDB blacklisting, and integration with Asana as a workflow tool."
          />
        </SectionWrapper>
        <SectionWrapper className="section-wrap">
          <MetricsCard
            className="flex-1"
            header="The Numbers"
            metrics={[
              {
                metric: "$100M+",
                description: "in managed revenue",
              },
              {
                metric: "$40K+",
                description: "projects completed",
              },
              {
                metric: "$2M+",
                description: "in prevented waste",
              },
              {
                metric: "10",
                description: "business sectors",
              },
            ]}
            subtitle="I've delivered measurable impact"
          />
          <BulletListCard
            bulletListAsTextArray={[
              {
                header: "Full-Stack Product Development",
                listItems: [
                  "End-to-end feature ownership",
                  "UI → API → Database → Deployment",
                ],
              },
              {
                header: "Authentication & Security",
                listItems: [
                  "Session authentication",
                  "JWT flows",
                  "HTTP-only cookies",
                  "Rate limiting and credential hashing",
                ],
              },
              {
                header: "AI-Assisted Automation",
                listItems: [
                  "Gemini AI spam classification",
                  "Blacklist filtering",
                  "Workflow automation",
                ],
              },
              {
                header: "Custom Analytics Systems",
                listItems: [
                  "Visit tracking",
                  "Event logging",
                  "UTM attribution",
                  "Session deduplication",
                ],
              },
              {
                header: "API Integrations",
                listItems: [
                  "SendGrid",
                  "Google Cloud Storage",
                  "Asana",
                  "Monday",
                  "ClickUp",
                ],
              },
              {
                header: "Admin Platforms",
                listItems: [
                  "Protected portals",
                  "Search + filtering",
                  "CSV exports",
                  "Multi-tenant RBAC access control",
                ],
              },
            ]}
            className="flex-2"
            header="Engineering Highlights"
            subtitle="Examples of systems and features I've built across production applications."
          />
        </SectionWrapper>
        <SectionWrapper>
          <ProjectsCard
            className="flex-2"
            header="My Featured Projects"
            projects={[
              {
                header: "Portfolio Analytics & Contact Automation Platform",
                description:
                  "Custom analytics and workflow automation system powering this portfolio site.",
                features: [
                  "Visit tracking and UTM attribution",
                  "Button click event logging",
                  "AI spam filtering using Gemini",
                  "MongoDB blacklist validation",
                  "Automated Asana task creation",
                ],
                ctas: [
                  {
                    buttonId: "ccm-home-project01-frontendrepo",
                    href: "https://github.com/coreycollinsm/coreycollinsm",
                    page: "home",
                    text: "Front End Repo",
                  },
                  {
                    buttonId: "ccm-home-project01-backendrepo",
                    href: "https://github.com/coreycollinsm/ccm-api",
                    page: "home",
                    text: "API Repo",
                  },
                ],
                tags: [
                  "Next.js",
                  "Node.Js",
                  "MongoDB Atlas",
                  "Render Cloud Hosting",
                  "Google Gen AI Integration",
                  "Asana Integration",
                ],
              },
              {
                header: "Property Management Rental Listings Platform",
                description:
                  "Full-stack property listing platform with authenticated management portal.",
                features: [
                  "Listing CRUD APIs",
                  "Image upload pipeline to Google Cloud Storage",
                  "JWT authentication",
                  "Listing lifecycle states (active, archived, featured)",
                ],
                tags: [
                  "Next.js",
                  "Node.Js",
                  "MongoDB Atlas",
                  "Google Cloud Storage API",
                  "HTTP-Only Cookie Auth",
                  "Licensing",
                ],
              },
              {
                header: "Policital Campaign Newsletter Management Platform",
                description:
                  "Admin portal and subscriber management system for campaign teams.",
                features: [
                  "Session-based authentication",
                  "SendGrid automation",
                  "Subscriber search and CSV export",
                  "Multi-tenant access control",
                ],
                tags: [
                  "Next.js",
                  "Node.Js",
                  "MongoDB Atlas",
                  "ngrok Tunneling",
                  "Rotating Secret Keys",
                  "SengGrid API",
                  "Anonymous Analytics",
                ],
              },
            ]}
            subtitle="How I've solved real-world problems using full-stack technologies"
          />
        </SectionWrapper>
        <SectionWrapper className="section-wrap-reverse">
          <VerticalIconListCard
            className="flex-1"
            header="My Approach to Building Systems"
            list={[
              {
                icon: PiTreeStructureBold,
                title: "Design before automation",
                description:
                  "Clean data models and workflows before introducing automation.",
              },
              {
                icon: PiStackBold,
                title: "Ship complete features",
                description:
                  "I build across the stack — UI, APIs, database design, and deployment.",
              },
              {
                icon: PiPlugBold,
                title: "Reduce work with better tools",
                description:
                  "Automating workflows between applications like Asana, SendGrid, and analytics systems.",
              },
              {
                icon: PiChartLineUpBold,
                title: "Measure product behavior",
                description:
                  "I instrument applications with event tracking and attribution data to understand usage.",
              },
            ]}
            subtitle="The standard of how I design systems & develop architectures"
          />
          <ParagraphImageCard
            backgroundAlignment={{ alignX: "center", alignY: "center" }}
            backgroundImage={WritingImage}
            className="flex-1 text-white"
            paragraph={
              <p>
                &quot;I build clean systems first.
                <br />
                Then I automate them.&quot;
              </p>
            }
          />
        </SectionWrapper>

        <SectionWrapper className="section-wrap-reverse">
          <ParagraphImageCard
            backgroundAlignment={{ alignX: "center", alignY: "center" }}
            backgroundImage={ServerImage}
            className="flex-1 text-white"
            paragraph={
              <p>
                I have field deployment experience
                <br />
                in the telecom industry.
              </p>
            }
          />
          <BulletListCard
            bulletListAsTextArray={[
              {
                header: "Frontend",
                listItems: ["Next.js", "React", "TypeScript", "Tailwind"],
              },
              {
                header: "Backend",
                listItems: ["Node.js", "Express", "REST APIs"],
              },
              {
                header: "Database",
                listItems: [
                  "MongoDB - Atlas",
                  "MongoDB - Community",
                  "Google Firebase",
                ],
              },
              {
                header: "Integrations",
                listItems: [
                  "SendGrid",
                  "Gemini AI",
                  "Google Cloud Storage",
                  "Asana API",
                  "Monday API",
                  "ClickUp API",
                ],
              },
              {
                header: "Infrastructure",
                listItems: [
                  "Netlify",
                  "Render",
                  "NGROK Tunneling",
                  "Environment Config",
                  "Git Workflows",
                ],
              },
              {
                header: "Some Experience",
                listItems: ["Java (Backend)", "Python", "Django"],
              },
            ]}
            className="flex-1"
            header="My Tech Stack"
            subtitle="These are the systems I use to build cool things."
          />
        </SectionWrapper>
        <SectionWrapper className="section-wrap">
          <VerticalIconListCard
            className="flex-1"
            header="Seasoned Business Developer"
            list={[
              {
                icon: PiBroadcastBold,
                title: "Telecommunications Integration",
                description:
                  "Integrating Nokia Airscale technology across the midwest cellular markets.",
              },
              {
                icon: PiPuzzlePieceBold,
                title: "Tool Integration Consulting",
                description:
                  "I've helped many business owners improve operations by connecting their tools.",
              },
              {
                icon: PiGearSixBold,
                title: "Software Implementation",
                description:
                  "I've organized business workflows across departments to improve operations",
              },
              {
                icon: PiChartLineUpBold,
                title: "Efficiency Tracking",
                description:
                  "I've implemented real-time workflow tracking to understand operational bottlenecks",
              },
            ]}
            subtitle="I've built and developed multiple businesses across business sectors"
          />
          <ParagraphImageCard
            backgroundAlignment={{ alignX: "left", alignY: "center" }}
            backgroundImage={CobaImage}
            className="flex-1 text-white"
            cta={{
              href: "https://coba.digital",
              buttonId: "ccm-home-cobalink",
              darkMode: true,
              newTab: true,
              page: "home",
              style: "secondary",
              text: "Visit Website",
            }}
            paragraph={
              <p>
                I am a full stack web consultant
                <br />
                operating as Coba Digital LLC
              </p>
            }
          />
        </SectionWrapper>
        <SectionWrapper>
          <BlackParagraphCardWithButton
            cta1={{
              href: "/Corey%20Collins%20-%20Resume.pdf",
              buttonId: "ccm-home-jobsearch-resume",
              darkMode: true,
              download: true,
              page: "home",
              text: "Download My Resume",
            }}
            cta2={{
              href: "/contact",
              buttonId: "ccm-home-jobsearch-contact",
              darkMode: true,
              page: "home",
              style: "secondary",
              text: "Contact Me",
            }}
            header="Let's Build Something Together"
            subtitle="I'm currently seeking a full-time Full Stack Developer role
              where I can build product features and ship systems end-to-end."
          >
            <p>
              My experience building tools combined with over a decade of
              managing projects and initiatives with measureable progress makes
              me a powerhouse for any team looking for someone who can just get
              started. I am a lifetime learner and my experience with technology
              is a direct result of my passion to never stop learning new
              things.
            </p>
            <p>
              If you are looking for someone with project experience who you can
              trust to be a driving force on your team, someone who encourages
              others, who accepts critique and stays motivated, I&apos;m
              you&apos;re guy.
            </p>
          </BlackParagraphCardWithButton>
        </SectionWrapper>
      </main>
    </div>
  );
}
