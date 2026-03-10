"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: string;
}) => {
  const path = usePathname();

  const underlineBaseStyles =
    "w-full h-0.5 bg-(--black) group-hover:scale-x-100 transition-all absolute bottom-0 left-0 right-0";
  const underlineActiveStyles = `${path == href ? "scale-x-100" : "scale-x-0"} `;

  return (
    <Link className="text-sm cursor-pointer group relative" href={href}>
      <div>{children}</div>
      <div className={`${underlineBaseStyles} ${underlineActiveStyles}`} />
    </Link>
  );
};
