import { StaticImageData } from "next/image";

export const ImageWithTextBottomCard = ({
  backgroundAlignment = { alignX: "center", alignY: "center" },
  className,
  header,
  paragraph,
  src,
  subheading,
}: {
  backgroundAlignment?: {
    alignX: "left" | "center" | "right";
    alignY: "top" | "center" | "bottom";
  };
  className?: string;
  header: string;
  paragraph: string;
  src: StaticImageData;
  subheading?: string;
}) => {
  const { alignX, alignY } = backgroundAlignment;

  return (
    <div
      className={`card round padding-top text-white text-shadow-lg ${className}`}
      style={{
        backgroundImage: `
        linear-gradient(to top, rgba(0,0,0,.8), rgba(0,0,0,0)),
        url('${src.src}')
        `,
        backgroundPosition: `${alignX}, ${alignY}`,
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-160 flex flex-col gap-4">
        <h1>{header}</h1>
        {subheading && <h4>{subheading}</h4>}
        <p>{paragraph}</p>
      </div>
    </div>
  );
};
