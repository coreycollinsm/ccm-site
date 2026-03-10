"use client";
import { getTimestamp } from "@/utils/dateUtils";
import Link from "next/link";
import { ReactNode } from "react";
import { CgExternal } from "react-icons/cg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
type ButtonSize = "small" | "medium";
type ButtonStyle = "primary" | "secondary" | "tertiary";

export interface BaseButtonProps {
  buttonId: string;
  className?: string;
  darkMode?: boolean;
  page: string;
  size?: ButtonSize;
  style?: ButtonStyle;
  text: string | null;
}

export interface LinkButtonProps extends BaseButtonProps {
  href: string;
  backwards?: boolean;
  download?: boolean;
  external?: boolean;
  newTab?: boolean;
}

interface SubmitButtonProps extends BaseButtonProps {
  disabled: boolean;
}

///////////////////////////
// Button Styling
///////////////////////////
const baseClasses =
  "flex items-center justify-center gap-1 cursor-pointer transition-all group whitespace-nowrap duration-300";

const styleClasses = {
  primary: "bg-(--black) border-(--black) text-white rounded-full border-2",
  secondary: "border-(--black) rounded-full border-2",
  tertiary: "border-b-2 border-(--black)",
};

const darkStyleClasses = {
  primary: "bg-white border-white text-(--black) rounded-full border-2",
  secondary: "text-white border-white rounded-full border-2",
  tertiary: "border-b-2 bg-white border-white shadow-sm",
};

const hoverClasses = {
  primary: "hover:bg-(--dark-gray) hover:border-(--dark-gray)",
  secondary: "hover:bg-(--black) hover:text-white",
  tertiary: "hover:border-b-(--gray)",
};

const darkHoverClasses = {
  primary: "hover:bg-(--bright-gray) hover:border-(--bright-gray)",
  secondary: "hover:bg-white hover:text-(--black)",
  tertiary: "hover:bg-(--primary)/70 hover:text-white",
};

const sizeClasses = {
  small: "py-1 px-3",
  medium: "py-3 px-4",
};

///////////////////////////
// Button Components
///////////////////////////

export const ButtonLink = ({
  backwards = false,
  buttonId,
  className,
  darkMode = false,
  download = false,
  external = false,
  href,
  page,
  newTab = false,
  size = "medium",
  style = "primary",
  text,
}: LinkButtonProps) => {
  return (
    <Link
      className={`${baseClasses} ${darkMode ? darkStyleClasses[style] : styleClasses[style]} ${sizeClasses[size]} ${darkMode ? darkHoverClasses[style] : hoverClasses[style]} ${className}`}
      download={download}
      href={href}
      onClick={() => handleClickTracking(page, buttonId)}
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
  buttonId,
  className,
  darkMode = false,
  disabled = false,
  page,
  size = "medium",
  style = "primary",
  text,
}: SubmitButtonProps) => {
  return (
    <button
      className={`${baseClasses} ${darkMode ? darkStyleClasses[style] : styleClasses[style]} ${sizeClasses[size]} ${darkMode ? darkHoverClasses[style] : hoverClasses[style]} ${className}`}
      disabled={disabled}
      onClick={() => handleClickTracking(page, buttonId)}
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

import Image from "next/image";
import Logo from "@/public/logo.webp";
import LightLogo from "@/public/logo-light.webp";
import { useTrackingConsent } from "@/context/TrackingConsentContext";

export const LogoLink = ({
  buttonId,
  className,
  darkMode = false,
  page,
}: BaseButtonProps) => {
  return (
    <Link
      className={className}
      href="/"
      onClick={() => handleClickTracking(page, buttonId)}
    >
      {darkMode ? (
        <Image src={LightLogo} loading="eager" height="30" alt="CCM Logo" />
      ) : (
        <Image src={Logo} loading="eager" height="30" alt="CCM Logo" />
      )}
    </Link>
  );
};

///////////////////////////
// Button Animated Icon
///////////////////////////

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

///////////////////////////
// Click Tracking
///////////////////////////

const handleClickTracking = (page: string, buttonId: string) => {
  // Get the API URL
  const API_URL = process.env.NEXT_PUBLIC_API_ENDPOINT
    ? `${process.env.NEXT_PUBLIC_API_ENDPOINT}/tracking/button-clicks`
    : "https://api.coreycollinsm.com/tracking/button-clicks";

  const timestamp = getTimestamp();

  const sessionId = window.sessionStorage.getItem("sessionId");
  const CONSENT_STORAGE_KEY = "canCollectData";
  const canTrack = window.localStorage.getItem(CONSENT_STORAGE_KEY);

  if (!sessionId || !canTrack) return;

  // Format API payload
  const payload = {
    page,
    buttonId,
    sessionId: sessionId ? sessionId : "null",
    timestamp,
  };

  void fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Button click tracking request failed");
      }
    })
    .catch(() => {
      // Intentionally silent; user should not be alerted.
    });
};
