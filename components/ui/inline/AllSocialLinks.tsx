import { socialLinks, SocialLinkType } from "@/config";
import Link from "next/link";

export const AllSocialLinks = () => {
  return (
    <div className="flex items-center gap-4 cursor-pointer">
      {Object.values(socialLinks).map((link: SocialLinkType) => {
        const { href, icon: Icon } = link;
        return (
          <Link href={href} key={href} target="_blank" rel="noreferrer">
            <Icon className="text-2xl hover:text-(--primary)" />
          </Link>
        );
      })}
    </div>
  );
};
