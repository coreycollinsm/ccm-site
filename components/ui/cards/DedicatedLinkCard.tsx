import { ButtonClickTracker, ButtonClickSetup } from "@/components/trackers";
import { ButtonLink } from "@/components/ui";

interface Props {
  className?: string;
  header?: string;
  href: string;
  paragraph: string;
  text?: string;
  tracking: ButtonClickSetup;
}

export const DedicatedLinkCard = ({
  className,
  header,
  href,
  paragraph,
  text = "Download",
  tracking,
}: Props) => {
  const { page, buttonId } = tracking;
  return (
    <ButtonClickTracker
      className={`${className} h-full w-full card round padding flex flex-col gap-16 justify-between`}
      page={page}
      buttonId={buttonId}
    >
      <div className="flex flex-col gap-4">
        {header && <h2>{header}</h2>}
        <p>{paragraph}</p>
      </div>
      <div className="flex lg:inline pt-4 border-t border-(--border)">
        <ButtonLink external href={href} newTab text={text} />
      </div>
    </ButtonClickTracker>
  );
};
