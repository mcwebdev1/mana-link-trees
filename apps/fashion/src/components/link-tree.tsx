import type { ReactNode } from "react";
import { asset } from "@/lib/asset";

export type TreeIcon = {
  src: string;
  width: number;
  height: number;
};

export type TreeLinkItem = {
  id: string;
  href: string;
  icon: TreeIcon;
  label: ReactNode;
};

export type TreeSocial = {
  label: string;
  href: string;
  icon: TreeIcon;
};

type LinkTreeProps = {
  label: string;
  background: ReactNode;
  logo: ReactNode;
  title: ReactNode;
  titleClassName: string;
  tagline: ReactNode;
  taglineClassName: string;
  linksLabel: string;
  links: TreeLinkItem[];
  socials: TreeSocial[];
  footer: string;
  tone: "ink" | "paper";
  panelClassName: string;
  headerClassName: string;
  footerClassName: string;
  socialClassName: string;
  canvasClassName: string;
};

const focusInk =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#161616]";
const focusPaper =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

export function LinkTree({
  label,
  background,
  logo,
  title,
  titleClassName,
  tagline,
  taglineClassName,
  linksLabel,
  links,
  socials,
  footer,
  tone,
  panelClassName,
  headerClassName,
  footerClassName,
  socialClassName,
  canvasClassName,
}: LinkTreeProps) {
  const ink = tone === "ink";
  const linkColor = ink ? "text-[#161616]" : "text-white";
  const border = ink ? "border-[rgba(22,22,22,0.2)]" : "border-[rgba(255,255,255,0.2)]";
  const focus = ink ? focusInk : focusPaper;
  const footerColor = ink ? "text-[#0d0d10]" : "text-white";

  return (
    <main className={`flex min-h-dvh items-center justify-center ${canvasClassName}`}>
      <div className="mana-hubs-stage">
        <article className="mana-hubs-frame overflow-hidden" aria-label={label}>
          {background}
          <div className="relative flex h-full flex-col items-start justify-center px-4 py-[31px]">
            <div
              className={`flex min-h-px w-full flex-1 flex-col items-start rounded-[19px] px-[10px] py-[27px] ${panelClassName}`}
            >
              <header
                className={`flex w-full shrink-0 items-end justify-between px-[15px] pb-[19px] ${headerClassName}`}
              >
                <div className="flex w-[148px] shrink-0 flex-col items-start">
                  <div className="flex w-full flex-col items-start gap-[14px]">
                    {logo}
                    <h1
                      className={`w-min min-w-full text-[33.363px] leading-[30.027px] font-bold [text-box-edge:cap_alphabetic] [text-box-trim:trim-both] ${titleClassName}`}
                    >
                      {title}
                    </h1>
                  </div>
                </div>
                <p
                  className={`shrink-0 text-right text-[12px] leading-[18px] font-normal ${taglineClassName}`}
                >
                  {tagline}
                </p>
              </header>

              <nav aria-label={linksLabel} className="flex w-full shrink-0 flex-col items-start">
                <div className="flex w-full flex-col gap-[6px]">
                  {links.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex w-full items-center overflow-hidden border-b border-solid py-[13px] pr-5 pl-[19.5px] transition-opacity hover:opacity-70 ${border} ${linkColor} ${focus}`}
                    >
                      <span className="min-w-px flex-1 text-left text-[16px] leading-[20.5px]">
                        {link.label}
                      </span>
                      <span className="flex size-[18px] shrink-0 items-center justify-center">
                        <img
                          src={asset(link.icon.src)}
                          alt=""
                          width={link.icon.width}
                          height={link.icon.height}
                          className="block shrink-0"
                        />
                      </span>
                    </a>
                  ))}
                </div>
              </nav>

              <footer
                className={`flex w-full shrink-0 flex-col items-center gap-4 pt-[15px] ${footerClassName}`}
              >
                <div className={`flex h-9 w-full items-start justify-between ${socialClassName}`}>
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`block shrink-0 transition-opacity hover:opacity-70 ${focus}`}
                    >
                      <img
                        src={asset(social.icon.src)}
                        alt=""
                        width={social.icon.width}
                        height={social.icon.height}
                        className="block"
                      />
                    </a>
                  ))}
                </div>
                <p
                  className={`w-full min-w-full text-center text-[12px] leading-[36.5px] font-normal [text-box-edge:cap_alphabetic] [text-box-trim:trim-both] ${footerColor}`}
                >
                  {footer}
                </p>
              </footer>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
