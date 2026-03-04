import Link from "next/link";
import { ReactNode } from "react";
import { CgExternal } from "react-icons/cg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";

interface ButtonProps {
  backwards?: boolean;
  className?: string;
  darkMode?: boolean;
  download?: boolean;
  external?: boolean;
  href: string;
  newTab?: boolean;
  size?: "small" | "medium";
  style?: "primary" | "secondary" | "tertiary";
  text: string;
}

interface SubmitButtonProps {
  className?: string;
  darkMode?: boolean;
  disabled: boolean;
  size?: "small" | "medium";
  style?: "primary" | "secondary" | "tertiary";
  text: string;
}

const baseClasses =
  "flex items-center justify-center gap-1 border-2 rounded-full cursor-pointer transition-all group whitespace-nowrap duration-300";

const styleClasses = {
  primary: "bg-(--black) border-(--black) text-white",
  secondary: "border-(--black)",
  tertiary: "bg-(--primary) border-(--primary) shadow-sm",
};

const darkStyleClasses = {
  primary: "bg-white border-white text-(--black)",
  secondary: "text-white border-white",
  tertiary: "bg-(--primary) border-(--primary) shadow-sm",
};

const hoverClasses = {
  primary: "hover:bg-(--gray) hover:border-(--gray)",
  secondary: "hover:bg-(--black) hover:text-white",
  tertiary: "hover:bg-(--primary)/50",
};

const darkHoverClasses = {
  primary: "hover:bg-(--almost-white) hover:border-(--almost-white)",
  secondary: "hover:bg-white hover:text-(--black)",
  tertiary: "hover:bg-(--primary)/70 hover:text-white",
};

const sizeClasses = {
  small: "py-1 px-3",
  medium: "py-3 px-4",
};

export const ButtonLink = ({
  backwards = false,
  className,
  darkMode = false,
  download = false,
  external = false,
  href,
  newTab = false,
  size = "medium",
  style = "primary",
  text,
}: ButtonProps) => {
  return (
    <Link
      className={`${baseClasses} ${darkMode ? darkStyleClasses[style] : styleClasses[style]} ${sizeClasses[size]} ${darkMode ? darkHoverClasses[style] : hoverClasses[style]} ${className}`}
      download={download}
      href={href}
      rel={newTab ? "noreferrer" : ""}
      target={newTab ? "_blank" : "_self"}
    >
      {backwards && (
        <AnimatedIcon reverse>
          <FaArrowLeft />
        </AnimatedIcon>
      )}
      {text}
      {external ? (
        <AnimatedIcon>
          <CgExternal />
        </AnimatedIcon>
      ) : download ? (
        <IoMdDownload />
      ) : (
        !backwards && (
          <AnimatedIcon>
            <FaArrowRight />
          </AnimatedIcon>
        )
      )}
    </Link>
  );
};

export const SubmitButton = ({
  className,
  darkMode = false,
  disabled = false,
  size = "medium",
  style = "primary",
  text,
}: SubmitButtonProps) => {
  return (
    <button
      className={`${baseClasses} ${darkMode ? darkStyleClasses[style] : styleClasses[style]} ${sizeClasses[size]} ${darkMode ? darkHoverClasses[style] : hoverClasses[style]} ${className}`}
      disabled={disabled}
      type="submit"
    >
      {text}
      {!disabled && (
        <AnimatedIcon>
          <FaArrowRight />
        </AnimatedIcon>
      )}
    </button>
  );
};

const AnimatedIcon = ({
  children,
  reverse = false,
}: {
  children: ReactNode;
  reverse?: boolean;
}) => {
  const animationStyles = reverse
    ? "group-hover:-translate-x-1"
    : "group-hover:translate-x-1";

  return (
    <div className={`transition-transform ${animationStyles} duration-300`}>
      {children}
    </div>
  );
};
