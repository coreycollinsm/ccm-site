import { SectionWrapper } from "@/components/sections";
import {
  ButtonLink,
  LogoLink,
  NavLink,
  PublicMobileNavigationMenu,
} from "@/components/ui";
import { publicNavigationLinks } from "@/config";

export const SiteHeader = () => {
  const cta = publicNavigationLinks.cta;

  return (
    <SectionWrapper>
      <div className="w-full flex items-center justify-between mt-4 p-4 round card">
        <LogoLink
          className="ml-2"
          buttonId="ccm-nav-logo"
          page="nav"
          text={null}
        />
        <nav className="hidden md:flex items-center gap-4">
          {publicNavigationLinks.links.map((link) => {
            const { href, text } = link;
            return (
              <NavLink key={href} href={href}>
                {text}
              </NavLink>
            );
          })}
          <ButtonLink
            href={cta.href}
            buttonId={"ccm-nav-contact"}
            page={"nav"}
            size="small"
            text={cta.text}
          />
        </nav>
        <div className="w-full max-w-48 md:hidden">
          <PublicMobileNavigationMenu />
        </div>
      </div>
    </SectionWrapper>
  );
};
