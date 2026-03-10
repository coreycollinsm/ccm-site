"use client";

import { publicNavigationLinks } from "@/config";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { CgChevronDown } from "react-icons/cg";
import { ButtonLink } from "../buttons/Buttons";
import { NavLink } from "../buttons/NavLink";

export const PublicMobileNavigationMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const publicNavCTA = publicNavigationLinks.cta;

  const normalizePath = (path: string) =>
    path !== "/" ? path.replace(/\/+$/, "") : path;

  const selectedLinkText =
    publicNavigationLinks.links.find(
      (link) => normalizePath(link.href) === normalizePath(pathname),
    )?.text ?? publicNavCTA.text;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowMenu(false);
      }
    };

    const handleEscKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, []);

  return (
    <div
      className="flex items-center h-12 justify-between gap-4 relative select-none"
      onClick={() => {
        setShowMenu(!showMenu);
      }}
      ref={containerRef}
    >
      <div className="w-full h-full bg-(--bright-gray) rounded-md flex items-center justify-between p-4 font-semibold text-(--medium-gray) cursor-pointer hover:bg-(--light-gray)">
        {selectedLinkText}
        <CgChevronDown
          className={`text-3xl text-(--medium-gray) ${showMenu ? "-scale-y-100" : ""} transition-all`}
        />
      </div>
      {showMenu && (
        <div className="absolute w-full -bottom-2 rounded-md translate-y-full flex flex-col gap-4 bg-(--bright-gray) p-4 border-(--light-gray) border items-center">
          {publicNavigationLinks.links.map((link) => {
            const { href, text } = link;
            return (
              <NavLink key={href} href={href}>
                {text}
              </NavLink>
            );
          })}
          <ButtonLink
            href={publicNavCTA.href}
            buttonId="ccm-nav-mobile-cta"
            page="nav"
            size="small"
            text={publicNavCTA.text}
            className="w-full"
          />
        </div>
      )}
    </div>
  );
};
