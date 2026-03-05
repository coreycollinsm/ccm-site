import { ButtonLink, LinkButtonProps } from "@/components/ui";

interface Props {
  cta: LinkButtonProps;
  className?: string;
  header?: string;
  paragraph: string;
}

export const DedicatedLinkCard = ({
  cta,
  className,
  header,
  paragraph,
}: Props) => {
  const { buttonId, href, page, text } = cta;
  return (
    <div
      className={`${className} h-full w-full card round padding flex flex-col gap-16 justify-between`}
    >
      <div className="flex flex-col gap-4">
        {header && <h2>{header}</h2>}
        <p>{paragraph}</p>
      </div>
      <div className="flex lg:inline pt-4 border-t border-(--border)">
        <ButtonLink
          buttonId={buttonId}
          external
          href={href}
          newTab
          page={page}
          text={text}
        />
      </div>
    </div>
  );
};
