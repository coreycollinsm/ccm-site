import { ReactNode } from "react";
import { ButtonLink, LinkButtonProps } from "../buttons/Buttons";
import { CardHeader } from "../inline/CardHeader";

interface Props {
  children: ReactNode;
  cta: LinkButtonProps;
  header: string;
  subtitle: string;
}

export const BlackParagraphCardWithButton = ({
  children,
  cta,
  header,
  subtitle,
}: Props) => {
  return (
    <div className="bg-(--black) text-white flex-1 padding flex flex-col justify-between round">
      <CardHeader header={header} subtitle={subtitle} />
      <div className="max-w-160 flex flex-col items-start gap-8 text-(--bright-gray)">
        {children}
        {cta && <ButtonLink {...cta} />}
      </div>
    </div>
  );
};
