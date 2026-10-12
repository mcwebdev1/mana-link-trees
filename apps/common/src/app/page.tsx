import type { Metadata } from "next";
import { LinkTree, type TreeLinkItem, type TreeSocial } from "@/components/link-tree";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Mana Common",
  description:
    "A platform for urban revitalization & community building led by Moishe Mana.",
};

const icon = (src: string, width = 18, height = 18) => ({ src, width, height });

const links: TreeLinkItem[] = [
  {
    id: "golden-hour",
    href: "https://www.eventbrite.com",
    icon: icon("/common/icon-points.svg", 3, 15),
    label: (
      <>
        <span className="block">
          <span className="font-bold">A Golden Hour Chat </span>
          <span>with </span>
        </span>
        <span className="block">
          <span>Mana Common </span>
          <span className="font-bold">Architects</span>
        </span>
      </>
    ),
  },
  {
    id: "ecosystem",
    href: "https://manacommon.com?utm_source=chatgpt.com",
    icon: icon("/common/icon-ecosystem.svg"),
    label: "Our Ecosystem",
  },
  {
    id: "rent",
    href: "https://properties.manacommon.com?utm_source=chatgpt.com",
    icon: icon("/common/icon-properties.svg"),
    label: "Rent a Space",
  },
  {
    id: "website",
    href: "https://manacommon.com?utm_source=chatgpt.com",
    icon: icon("/common/icon-web.svg"),
    label: "Website",
  },
  {
    id: "events",
    href: "https://manacommon.com/events?utm_source=chatgpt.com",
    icon: icon("/common/icon-events.svg"),
    label: "Upcoming Events",
  },
  {
    id: "tech",
    href: "https://www.instagram.com/manatechmiami",
    icon: icon("/common/icon-tech.svg"),
    label: "Visit Mana Tech",
  },
  {
    id: "fashion",
    href: "https://www.instagram.com/manafashionservices/?utm_medium=organic_social&utm_source=linktr.ee&utm_campaign=explore%20mana%20fashion",
    icon: icon("/common/icon-fashion.svg"),
    label: "Explore Mana Fashion",
  },
  {
    id: "wynwood",
    href: "https://www.instagram.com/manawynwood/?utm_medium=organic_social&utm_source=linktr.ee&utm_campaign=enter%20mana%20wynwood",
    icon: icon("/common/icon-points.svg", 3, 15),
    label: "Enter Mana Wynwood",
  },
  {
    id: "contemporary",
    href: "https://www.instagram.com/manacontemporary/?utm_medium=organic_social&utm_source=linktr.ee&utm_campaign=view%20mana%20contemporary",
    icon: icon("/common/icon-contemporary.svg"),
    label: "View Mana Contemporary",
  },
];

const socials: TreeSocial[] = [
  {
    label: "YouTube",
    href: "https://youtube.com/@manacommon",
    icon: icon("/common/social-youtube.svg", 18, 18),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@manacommon",
    icon: icon("/common/social-tiktok.svg", 17.75, 17.75),
  },
  {
    label: "X",
    href: "https://x.com/manacommon",
    icon: icon("/common/social-x.svg", 18, 18),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/manacommon",
    icon: icon("/common/social-facebook.svg", 18, 17.75),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/manacommon",
    icon: icon("/common/social-instagram.svg", 17.75, 17.75),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/manacommon",
    icon: icon("/common/social-linkedin.svg", 17.5, 17.5),
  },
];

export default function CommonPage() {
  return (
    <LinkTree
      label="Mana Common"
      canvasClassName="bg-[#dfdfdf]"
      desktopImage="/desktop-background.jpg"
      tone="ink"
      linksLabel="Mana Common links"
      panelClassName="gap-[19px] bg-[rgba(255,255,255,0.44)]"
      headerClassName="border-b border-solid border-black"
      footerClassName="px-[19px]"
      socialClassName="px-1"
      background={
        <div className="mana-phone-bg pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-[#dfdfdf]" />
          <img
            src={asset("/common/bg.png")}
            alt=""
            className="absolute inset-0 h-full w-full max-w-none object-cover"
          />
        </div>
      }
      logo={
        <img
          src={asset("/common/logo.svg")}
          alt=""
          width={60.7209}
          height={60.7209}
          className="block shrink-0"
        />
      }
      title={
        <>
          <span className="block">Mana</span>
          <span className="block">Common</span>
        </>
      }
      titleClassName="text-[#0d0d10]"
      tagline={
        <>
          <span className="block whitespace-nowrap">A platform for urban</span>
          <span className="block whitespace-nowrap">revitalization & community</span>
          <span className="block whitespace-nowrap">building led by Moishe Mana.</span>
        </>
      }
      taglineClassName="w-[168px] text-[#161616]"
      links={links}
      socials={socials}
      footer="© 2026 Mana Common. All Rights Reserved."
    />
  );
}
