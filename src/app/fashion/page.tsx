import type { Metadata } from "next";
import { LinkTree, type TreeLinkItem, type TreeSocial } from "@/components/link-tree";

export const metadata: Metadata = {
  title: "Mana Fashion Services",
  description: "The heart of South Florida's fashion community.",
};

const icon = (src: string, width = 18, height = 18) => ({ src, width, height });

const links: TreeLinkItem[] = [
  {
    id: "join",
    href: "https://fashion.manacommon.com/join/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAac-UUv6WbLCdLWVdL0w_S_GX72bunuK3nhG-VQsgUM4D6rQcApkGRyWXnLN8A_aem_KC4-weFFyqWGgORxQj1mGg",
    icon: icon("/fashion/icon-member.svg"),
    label: "Join Comunity",
  },
  {
    id: "mfs-showroom",
    href: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1ZPyd7WAyCTGnYX8G8D9ZHFwzT7qCNPmZlBqjd8pr8MtlkhmjACZtcWVzVF3A_y0TT0pO6uVqx?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAaf7prdfM21zVFBSi8W0Uxd9J9FQNiG2co8gHoeIaARl2BhvjqIToJ-RGqSkRQ_aem_HJQUzj3a24mHuWomcZyzQg",
    icon: icon("/fashion/icon-common.svg", 18.0018, 17.9994),
    label: "MFS Showroom Appoinment",
  },
  {
    id: "fabric-showroom",
    href: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1ZPyd7WAyCTGnYX8G8D9ZHFwzT7qCNPmZlBqjd8pr8MtlkhmjACZtcWVzVF3A_y0TT0pO6uVqx",
    icon: icon("/fashion/icon-fashion.svg"),
    label: "Fabric Showroom Appoinment",
  },
  {
    id: "sample-sale",
    href: "https://l.instagram.com/?u=https%3A%2F%2Fcalendar.google.com%2Fcalendar%2Fu%2F0%2Fappointments%2Fschedules%2FAcZssZ3ML-K5Ow2waYgCEAJ2tf5ea5eNGoVrAWS1OQzebOr7LM5dfC10a3WQt1wxBcuOLd3W70cz_ALd%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAaf88w1gRwt57-TYM7tQYGH4GHW_hJWGNybCczWjuP4KytBJX_lBBasVqWmxjw_aem_x5L32sGD3tNVAlKPp0a6vg&e=AUCBgRnsuqo8Pq9Lj_01ODXE9e4ABHWcIMoZwn_ArzCPEOZxt9WIj0jIfJDzSbmwTpgHr2qDYwUh6bPkhD0XsxA4WzqTFy6Xidtiulo4YmysXQ68ah_tzbEhHN9NXuHPJ44FlAtkY8vnuYdZ4VuLBl-w-x_E",
    icon: icon("/fashion/icon-star.svg"),
    label: "Sample Sale RSVP",
  },
  {
    id: "website",
    href: "https://fashion.manacommon.com/",
    icon: icon("/fashion/icon-web.svg"),
    label: "Website",
  },
];

const socials: TreeSocial[] = [
  {
    label: "YouTube",
    href: "https://youtube.com/@manacommon",
    icon: icon("/fashion/social-youtube.svg", 18, 18),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@manafashionservices",
    icon: icon("/fashion/social-tiktok.svg", 17.75, 17.75),
  },
  {
    label: "X",
    href: "https://x.com/manacommon",
    icon: icon("/fashion/social-x.svg", 18, 18),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/manacommon",
    icon: icon("/fashion/social-facebook.svg", 18, 17.75),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/manafashionservices/",
    icon: icon("/fashion/social-instagram.svg", 17.75, 17.75),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/mana-fashion/",
    icon: icon("/fashion/social-linkedin.svg", 17.5, 17.5),
  },
];

export default function FashionPage() {
  return (
    <LinkTree
      label="Mana Fashion Services"
      tone="paper"
      linksLabel="Mana Fashion links"
      panelClassName="gap-[131px]"
      headerClassName=""
      footerClassName=""
      socialClassName="px-4"
      background={
        <div className="pointer-events-none absolute inset-0 bg-[#5f1711]" aria-hidden="true" />
      }
      logo={
        <div className="relative h-[60px] w-[83.077px] shrink-0 overflow-hidden">
          <img
            src="/fashion/logo-mark.svg"
            alt=""
            width={61.5348}
            height={60}
            className="absolute top-0 left-0 block"
          />
          <img
            src="/fashion/logo-letters.svg"
            alt=""
            width={14.0989}
            height={42.744}
            className="absolute top-[8.628px] left-[68.979px] block"
          />
        </div>
      }
      title={
        <>
          <span className="block">Mana</span>
          <span className="block">Fashion</span>
          <span className="block">Services</span>
        </>
      }
      titleClassName="font-bodoni text-white"
      tagline={
        <>
          <span className="block">The Heart of </span>
          <span className="block">South Florida&apos;s </span>
          <span className="block">Fashion Community</span>
        </>
      }
      taglineClassName="w-[150.634px] text-white"
      links={links}
      socials={socials}
      footer="Connections That Make a Difference"
    />
  );
}
