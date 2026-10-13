import type { Metadata } from "next";
import { LinkTree, type TreeLinkItem, type TreeSocial } from "@/components/link-tree";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Mana Tech",
  description: "Connections that make a difference.",
};

const icon = (src: string, width = 18, height = 18) => ({ src, width, height });

const links: TreeLinkItem[] = [
  {
    id: "anji",
    href: "https://www.youtube.com/watch?v=JVSYlk2mqyM&t=5s",
    icon: icon("/tech/icon-youtube.svg"),
    label: (
      <>
        <span className="block">
          <span className="font-bold">Anji Ismail: </span>
          <span>Empowering the Future </span>
        </span>
        <span className="block">of Finance with AI</span>
      </>
    ),
  },
  {
    id: "member",
    href: "https://tech.manacommon.com/become-a-member/?utm_source=linktree&utm_medium=instagram&utm_campaign=membership",
    icon: icon("/tech/icon-plus.svg"),
    label: "Become a Member | Book a Tour!",
  },
  {
    id: "events",
    href: "https://luma.com/manatech",
    icon: icon("/tech/icon-events.svg"),
    label: "Events Calendar",
  },
  {
    id: "whatsapp",
    href: "https://chat.whatsapp.com/HJonBVoXJTD2FGKMLScY4T",
    icon: icon("/tech/icon-chat.svg"),
    label: "Join Mana Tech WhatsApp Community!",
  },
  {
    id: "news",
    href: "https://tech.manacommon.com/news/",
    icon: icon("/tech/icon-news.svg"),
    label: "News – Mana Tech",
  },
  {
    id: "visit",
    href: "https://tech.manacommon.com/",
    icon: icon("/tech/icon-tech.svg"),
    label: "Visit Mana Tech",
  },
  {
    id: "linkedin",
    href: "https://linkedin.com/company/manatech-basemiami/?skipRedirect=true",
    icon: icon("/tech/icon-linkedin.svg"),
    label: "LinkedIn",
  },
];

const socials: TreeSocial[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/manatechmiami/",
    icon: icon("/tech/social-instagram.svg", 17.75, 17.75),
  },
];

export default function TechPage() {
  return (
    <LinkTree
      label="Mana Tech"
      canvasClassName="bg-[#dfdfdf]"
      desktopImage="/desktop-background.png"
      tone="ink"
      linksLabel="Mana Tech links"
      panelClassName="gap-[69px] bg-[rgba(197,212,255,0.58)]"
      headerClassName="border-b border-solid border-black"
      footerClassName="px-[19px]"
      socialClassName="justify-center"
      background={
        <div className="mana-phone-bg pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-[#dfdfdf]" />
          <img
            src={asset("/tech/bg-1.png")}
            alt=""
            className="absolute inset-0 h-full w-full max-w-none object-cover"
          />
          <img
            src={asset("/tech/bg-2.png")}
            alt=""
            className="absolute inset-0 h-full w-full max-w-none object-cover"
          />
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={asset("/tech/bg-3.png")}
              alt=""
              className="absolute top-[-23.05%] left-[-213.33%] h-[139.53%] w-[502.53%] max-w-none"
            />
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={asset("/tech/bg-4.png")}
              alt=""
              className="absolute top-[-9.35%] left-[-230.8%] h-[134.82%] w-[461.6%] max-w-none"
            />
          </div>
        </div>
      }
      logo={
        <div className="flex size-[60.721px] shrink-0 items-center justify-center rounded-[427px] bg-[#459af7]">
          <img
            src={asset("/tech/logo.svg")}
            alt=""
            width={24.721}
            height={35.68}
            className="block brightness-0 invert"
          />
        </div>
      }
      title={
        <>
          <span className="block">Mana</span>
          <span className="block">Tech</span>
        </>
      }
      titleClassName="text-[#0d0d10]"
      tagline={
        <>
          <span className="block">Connections </span>
          <span className="block">that make </span>
          <span className="block">a difference</span>
        </>
      }
      taglineClassName="w-[150.634px] text-[#161616]"
      links={links}
      socials={socials}
      footer="© 2026 Mana Common. All Rights Reserved."
    />
  );
}
