import { SectionWrapper } from "@/components/sections";
import { ButtonLink } from "@/components/ui";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Message Sent - Corey Collins M.",
};

const Page = () => {
  return (
    <main>
      <SectionWrapper>
        <div className="card padding round flex flex-col gap-4 justify-between min-h-120">
          <div>
            <h2>Message Successfully Sent</h2>
            <h3 className="mt-2 text-(--bright-gray)">
              I have received your submission
            </h3>
          </div>
          <div className="flex flex-col gap-8 md:flex-row md:justify-between items-start md:items-end">
            <p className="text-sm text-(--light-gray) max-w-120">
              If you&apos;re seeing this message, your message has made it to my
              inbox. I monitor my submissions diligently and will get back to
              you as soon as possible. If you don&apos;t hear back in a timely
              manner, feel free to reach to me via social channels.
            </p>

            <ButtonLink
              backwards
              href="/"
              page="contact-success"
              buttonId="ccm-contactsuccess-returnhome"
              text="Return Home"
            />
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
};

export default Page;
