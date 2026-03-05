import { StaticImageData } from "next/image";

interface Props {
  backgroundAlignment: {
    alignX: "left" | "center" | "right";
    alignY: "top" | "center" | "bottom";
  };
  backgroundImage: StaticImageData;
  className?: string;
  noGradient?: boolean;
}

export const ImageOnlyCard = ({
  backgroundAlignment,
  backgroundImage,
  className,
  noGradient = false,
}: Props) => {
  const { alignX, alignY } = backgroundAlignment;
  const gradient = noGradient
    ? ""
    : "linear-gradient(to top, rgba(0,0,0,.8), rgba(0,0,0,0)),";

  return (
    <div
      className={`${className} card round padding-top`}
      style={{
        backgroundImage: `
        ${gradient}
        url('${backgroundImage.src}')
        `,
        backgroundPosition: `${alignY}, ${alignX}`,
        backgroundSize: "cover",
      }}
    />
  );
};
