import { ReactNode } from "react";
import { ButtonLink, LinkButtonProps } from "../buttons/Buttons";
import { CardHeader } from "../inline/CardHeader";

interface Props {
  children: ReactNode;
  cta1: LinkButtonProps;
  cta2?: LinkButtonProps;
  header: string;
  subtitle: string;
}

export const BlackParagraphCardWithButton = ({
  children,
  cta1,
  cta2,
  header,
  subtitle,
}: Props) => {
  return (
    <div className="bg-(--black) text-white flex-1 padding flex flex-col justify-between round">
      <CardHeader header={header} subtitle={subtitle} />
      <div className="flex flex-col md:flex-row md:items-end gap-16 justify-between text-(--bright-gray)">
        <div className="max-w-160 flex flex-col gap-8">{children}</div>
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center">
          {cta2 && <ButtonLink {...cta2} />}
          {cta1 && <ButtonLink {...cta1} />}
        </div>
      </div>
    </div>
  );
};
