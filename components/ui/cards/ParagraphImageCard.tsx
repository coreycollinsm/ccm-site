import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export const ParagraphImageCard = ({
  backgroundAlignment,
  backgroundImage,
  className,
  paragraph,
}: {
  backgroundAlignment: {
    alignX: "left" | "center" | "right";
    alignY: "top" | "center" | "bottom";
  };
  backgroundImage: StaticImageData;
  className?: string;
  paragraph: ReactNode;
}) => {
  const { alignX, alignY } = backgroundAlignment;

  return (
    <div
      className={`${className} card round padding-top flex items-end`}
      style={{
        backgroundImage: `
        linear-gradient(to top, rgba(0,0,0,.8), rgba(0,0,0,0)),
        url('${backgroundImage.src}')
        `,
        backgroundPosition: `${alignY}, ${alignX}`,
        backgroundSize: "cover",
      }}
    >
      {paragraph}
    </div>
  );
};
