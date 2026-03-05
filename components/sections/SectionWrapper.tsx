import { ReactNode } from "react";

export const SectionWrapper = ({
  children,
  className,
  noMargin = false,
}: {
  children: ReactNode;
  className?: string;
  noMargin?: boolean;
}) => {
  const marginStyles = noMargin ? "" : "mb-16";

  return (
    <section
      className={`w-full flex px-2 sm:px-4 justify-center ${marginStyles}`}
    >
      <div className={`w-full max-w-350 ${className}`}>{children}</div>
    </section>
  );
};
