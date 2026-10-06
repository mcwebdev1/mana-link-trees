import Image from "next/image";

const links = [
  {
    label: "Book a Tour",
    href: "https://tech.manacommon.com/become-a-member/",
  },
  {
    label: "Mana Hubs curated by Mana Tech",
    href: "https://tech.manacommon.com/spaces/",
  },
  {
    label: "Biscayne Showroom by Mana Fashion",
    href: "https://fashion.manacommon.com/showroom/",
  },
] as const;

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/manacommon/",
    icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/manatechmiami/",
    icon: InstagramIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/manatech-basemiami/",
    icon: LinkedInIcon,
  },
] as const;

export default function Home() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-[#1e1e1e]">
      <article className="relative h-dvh w-full max-w-[430px] overflow-hidden md:h-[min(932px,100dvh)] md:w-[430px]">
        <Image
          src="/hubs-space.jpg"
          alt=""
          fill
          priority
          sizes="430px"
          className="object-cover object-[24%_10%] scale-[1.55] blur-[4px]"
        />
        <div className="relative flex h-full flex-col p-[11px]">
          <div className="flex min-h-0 flex-1 flex-col rounded-[30px] border border-white/50 bg-white/42 px-[22px] pt-[22px] pb-8 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.28)] backdrop-blur-[6px]">
            <ManaMark />
            <div className="mt-4 flex items-end justify-between gap-4">
              <h1 className="text-[42px] leading-[0.92] font-extrabold tracking-[-0.035em] text-black">
                Mana
                <br />
                Hubs
              </h1>
              <p className="max-w-[132px] pb-1 text-right text-[12.5px] leading-[1.28] font-medium tracking-[-0.01em] text-[#1c1c1c]">
                Miami&apos;s Only
                <br />
                Community-led
                <br />
                Coworking Ecosystem
              </p>
            </div>

            <div className="min-h-10 flex-1" />

            <nav aria-label="Mana Hubs links" className="mt-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 border-b border-black/25 py-[15px] text-[15px] leading-none font-medium tracking-[-0.011em] text-[#161616] transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
                >
                  <span>{link.label}</span>
                  <Sparkle />
                </a>
              ))}
            </nav>

            <div className="min-h-8 flex-[0.72]" />

            <ul className="flex items-center justify-center gap-12">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-black transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
                  >
                    <social.icon />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-7 text-center text-[11.5px] leading-none font-medium tracking-[-0.01em] text-[#2a2a2a]">
              © 2026 Mana Common. All Rights Reserved.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}

function ManaMark() {
  return (
    <div
      className="grid size-[58px] place-items-center rounded-full"
      style={{
        background:
          "conic-gradient(from 210deg, #8fd14f, #d6e04a, #f6d34a, #f5a142, #ef5b3a, #e24b8a, #8a4db3, #3d4ea8, #2f9fd0, #3cbe7a, #8fd14f)",
      }}
      aria-hidden="true"
    >
      <div className="grid size-[46px] place-items-center rounded-full bg-[#111111]">
        <svg viewBox="0 0 32 32" className="size-7" aria-hidden="true">
          <path
            fill="#fff"
            d="M4.2 25.2 9.4 6.8h4.2l3.1 12.2L19.8 6.8h4.2l5.2 18.4h-4.1l-2.6-11.2-3.2 11.2h-3.2l-3.2-11.2-2.6 11.2H4.2Z"
          />
        </svg>
      </div>
    </div>
  );
}

function Sparkle() {
  return (
    <svg viewBox="0 0 16 16" className="size-[13px] shrink-0" aria-hidden="true">
      <path
        fill="currentColor"
        d="M8 0.4 9.7 6.3 15.6 8 9.7 9.7 8 15.6 6.3 9.7 0.4 8 6.3 6.3Z"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[18px]" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.2 20.5v-7.1h2.4l.36-2.8h-2.76V8.8c0-.8.22-1.35 1.38-1.35H17V4.95A18 18 0 0 0 14.9 4.8c-2.08 0-3.5 1.27-3.5 3.6v2.2H8.8v2.8h2.6v7.1h2.8Z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[18px]" aria-hidden="true">
      <path
        fill="currentColor"
        d="M8.2 3.8h7.6A4.4 4.4 0 0 1 20.2 8.2v7.6a4.4 4.4 0 0 1-4.4 4.4H8.2a4.4 4.4 0 0 1-4.4-4.4V8.2a4.4 4.4 0 0 1 4.4-4.4Zm7.6 1.7H8.2A2.7 2.7 0 0 0 5.5 8.2v7.6a2.7 2.7 0 0 0 2.7 2.7h7.6a2.7 2.7 0 0 0 2.7-2.7V8.2a2.7 2.7 0 0 0-2.7-2.7ZM12 8.1A3.9 3.9 0 1 1 8.1 12 3.9 3.9 0 0 1 12 8.1Zm0 1.7A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8Zm4.55-2.85a.95.95 0 1 1-.95.95.95.95 0 0 1 .95-.95Z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[18px]" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.7 9.3H3.9V20h2.8V9.3ZM5.3 4a1.65 1.65 0 1 0 .02 3.3A1.65 1.65 0 0 0 5.3 4ZM20.1 20h-2.8v-5.7c0-1.6-.57-2.7-2-2.7a2.16 2.16 0 0 0-2.02 1.44 2.7 2.7 0 0 0-.13.97V20H10.4s.04-9.5 0-10.7h2.8v1.7a3.1 3.1 0 0 1 2.8-1.55c2.05 0 3.59 1.34 3.59 4.22V20Z"
      />
    </svg>
  );
}
