import { ButtonLink } from "@/components/ui";
import { SectionWrapper } from "@/components/sections";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Data Policy - Coba Digital",
  description:
    "Learn about how we collect, use, and store your data to provide you with our services, communications and more. Understand how to request data removal and submit feedback or privacy concerns.",
};

const Page = () => {
  return (
    <main className="w-full">
      <SectionWrapper>
        <div className="flex justify-center">
          <div className="py-10 px-5 flex flex-col gap-8 max-w-220">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl">Privacy &amp; Data Policy</h1>
              <p className="leading-7">
                At <strong>CoreyCollinsM.com</strong>, I respect your privacy
                and am committed to protecting the personal information you
                provide to me. This Privacy &amp; Data Policy explains how I
                collect, use, store, and protect your data when you interact
                with my website and services.
              </p>
              <p className="leading-7">
                This is a portfolio website owned and operated by myself, Corey
                Collins. None of the data that you provide to me here is shared
                with any third parties other than what is needed to run this
                site. Please review the data below to further understand what
                that looks like.
              </p>
            </div>

            <PolicySection title="Information I Collect">
              I may collect personal information you voluntarily provide,
              including your name, email address, company details, and any other
              information submitted through the contact form, direct
              communication. I also will collect website analytics about your
              visit on this site such as (page visits, button clicks, time
              spent, timestamps, and more). You can opt out of this at any time
              by selecting the option to Opt-Out in the consent banner.
            </PolicySection>

            <PolicySection title="How I Use Your Information">
              <p className="leading-7">
                Your personal information may be used to:
              </p>
              <ul className="flex flex-col gap-2 pl-5 list-disc  leading-7 mt-3">
                <li>
                  Respond to your inquiries and provide requested services.
                </li>
                <li>
                  Share relevant updates about projects, offerings, or
                  resources.
                </li>
                <li>
                  Improve my website, systems, and overall user experience.
                </li>
                <li>Support internal operations and service delivery.</li>
                <li>Understand traffic on and using this website.</li>
              </ul>
            </PolicySection>

            <PolicySection title="Data Security">
              I take reasonable technical and organizational measures to protect
              your personal information from unauthorized access, disclosure,
              alteration, or destruction. None of the data that you provide
              (especially related to analytics) is stored with
              personally-identifiable information about yourself. It is
              completely anonymous and this repository is actually public, if
              you wish to review processes.
            </PolicySection>

            <PolicySection title="Consent">
              By submitting personal information through this website or
              agreeing to the tracking of data through the consent banner, you
              consent to the collection and use of your information as described
              in this policy.
            </PolicySection>

            <PolicySection title="Cookies and Tracking">
              This website may use cookies or similar technologies to improve
              site performance, analyze traffic, and enhance your browsing
              experience. You can manage cookie preferences through your browser
              settings.
            </PolicySection>

            <PolicySection title="Third-Party Services">
              I may use third-party providers to support website hosting,
              analytics, or communications. These providers are expected to
              handle your information securely and in accordance with applicable
              laws.
            </PolicySection>

            <PolicySection title="Changes to This Policy">
              I may update this Privacy &amp; Data Policy periodically to
              reflect operational, legal, or regulatory changes. Updates will be
              posted on this page with a revised effective date.
            </PolicySection>

            <PolicySection title="Contact Me">
              If you have questions or concerns about this policy or your data,
              contact me through the contact form on this site.
            </PolicySection>

            <p className="text-sm ">
              <em>Effective Date: March 06, 2026</em>
            </p>

            <ButtonLink
              backwards
              buttonId="data-privacy-returnhome"
              className="self-start"
              href="/"
              page="data-privacy"
              style="secondary"
              text="Return Home"
            />
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
};

const PolicySection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-2xl">{title}</h2>
      <div className="leading-7">{children}</div>
    </section>
  );
};

export default Page;
