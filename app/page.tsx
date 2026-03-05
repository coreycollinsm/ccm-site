// Components
import { ProjectsCard, SectionWrapper } from "@/components/sections";
import {
  BulletListCard,
  ImageOnlyCard,
  DedicatedLinkCard,
  ImageWithTextBottomCard,
} from "@/components/ui";

// Links
import { socialLinks } from "@/config";
const gitHubLink = socialLinks.github.href;

// Images
import HeroImage from "@/assets/home-hero.webp";
import WritingImage from "@/assets/corey-coffee-shop.webp";

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
        <SectionWrapper className="section-wrap">
          <ImageOnlyCard
            backgroundAlignment={{ alignX: "center", alignY: "top" }}
            backgroundImage={WritingImage}
            className="flex-1"
            noGradient
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
            subtitle="Examples of systems and features I’ve built across production applications."
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
                    text: "Front End Repo",
                    href: "https://github.com/coreycollinsm/coreycollinsm",
                  },
                  {
                    text: "API Repo",
                    href: "https://github.com/coreycollinsm/ccm-api",
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
      </main>
    </div>
  );
}
