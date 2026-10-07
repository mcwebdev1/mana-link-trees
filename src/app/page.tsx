const links = [
  {
    label: "Book a Tour",
    href: "https://hubs.manacommon.com/contact/",
    icon: "/icon-star.svg",
  },
  {
    label: "Mana Hubs curated by Mana Tech",
    href: "https://tech.manacommon.com/spaces/",
    icon: "/icon-star-alt.svg",
  },
  {
    label: "Biscayne Showroom by Mana Fashion",
    href: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1ZPyd7WAyCTGnYX8G8D9ZHFwzT7qCNPmZlBqjd8pr8MtlkhmjACZtcWVzVF3A_y0TT0pO6uVqx",
    icon: "/icon-star-alt.svg",
  },
] as const;

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/manahubs/",
    icon: "/icon-facebook.svg",
    width: 18,
    height: 17.75,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/manahubs",
    icon: "/icon-instagram.svg",
    width: 17.75,
    height: 17.75,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/102137867/?skipRedirect=true",
    icon: "/icon-linkedin.svg",
    width: 17.5,
    height: 17.5,
  },
] as const;

export default function Home() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-[#dfdfdf]">
      <div className="mana-hubs-stage">
        <article className="mana-hubs-frame overflow-hidden">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute inset-0 bg-[#dfdfdf]" />
            <img
              src="/card-hubs-bg.png"
              alt=""
              className="absolute inset-0 h-full w-full max-w-none object-cover"
            />
            <img
              src="/card-hubs-photo.png"
              alt=""
              className="absolute inset-0 h-full w-full max-w-none object-cover"
            />
          </div>

          <div className="relative flex h-full flex-col items-start justify-center px-4 py-[31px]">
            <div className="flex min-h-px w-full flex-1 flex-col items-start gap-[131px] rounded-[19px] bg-[rgba(255,255,255,0.44)] px-[10px] py-[27px] backdrop-blur-[8px]">
              <header className="flex w-full shrink-0 items-end justify-between px-[15px] pb-[19px]">
                <div className="flex w-[148px] max-w-[46%] shrink-0 flex-col items-start">
                  <div className="flex w-full flex-col items-start gap-[14px]">
                    <img
                      src="/icon-mana-common.svg"
                      alt=""
                      width={60.7209}
                      height={60.7209}
                      className="block shrink-0"
                    />
                    <h1 className="w-min min-w-full text-[33.363px] leading-[30.027px] font-bold text-[#0d0d10] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
                      <span className="block">Mana</span>
                      <span className="block">Hubs</span>
                    </h1>
                  </div>
                </div>
                <p className="w-[150.634px] max-w-[48%] shrink-0 text-right text-[12px] leading-[18px] font-normal text-[#161616]">
                  <span className="block">Miami’s Only</span>
                  <span className="block">Community-led </span>
                  <span className="block">Coworking Ecosystem</span>
                </p>
              </header>

              <nav aria-label="Mana Hubs links" className="flex w-full shrink-0 flex-col items-start">
                <div className="flex w-full flex-col gap-[6px]">
                  {links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center overflow-hidden border-b border-solid border-[rgba(22,22,22,0.2)] py-[13px] pr-5 pl-[19.5px] text-[#161616] transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#161616]"
                    >
                      <span className="min-w-px flex-1 text-left text-[16px] leading-[20.5px]">
                        {link.label}
                      </span>
                      <img
                        src={link.icon}
                        alt=""
                        width={18}
                        height={18}
                        className="block shrink-0"
                      />
                    </a>
                  ))}
                </div>
              </nav>

              <footer className="flex w-full shrink-0 flex-col items-center gap-4 px-[19px] pt-[15px]">
                <div className="flex h-9 w-full items-start justify-between px-[57px]">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="block shrink-0 transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#161616]"
                    >
                      <img
                        src={social.icon}
                        alt=""
                        width={social.width}
                        height={social.height}
                        className="block"
                      />
                    </a>
                  ))}
                </div>
                <p className="w-full min-w-full text-center text-[12px] leading-[36.5px] font-normal text-[#0d0d10] [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]">
                  © 2026 Mana Common. All Rights Reserved.
                </p>
              </footer>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
