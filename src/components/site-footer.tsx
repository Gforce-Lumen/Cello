import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[#372821] px-8 py-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-12 border-b border-[#5e5249] pb-12 md:grid-cols-4">
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="font-display text-[22px] font-semibold uppercase tracking-[0.2em] text-[#fbf4e9]"
            >
              MARLUND
            </Link>
            <p className="text-[12px] uppercase tracking-widest text-[#fbf4e9]/50">
              © 2025 All Rights Reserved
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="mb-1 text-[11px] uppercase tracking-[0.2em] text-[#fbf4e9]/50">Contact</p>
            <p className="text-[13px] text-[#fbf4e9]">Marlborough Street, London W1F 7EE</p>
            <p className="text-[13px] text-[#fbf4e9]">+020 4321 8765</p>
            <p className="text-[13px] text-[#fbf4e9]">hello@marlund.com</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="mb-1 text-[11px] uppercase tracking-[0.2em] text-[#fbf4e9]/50">
              Opening Hours
            </p>
            <p className="text-[13px] text-[#fbf4e9]">Mon-Thu: 12:00-22:00</p>
            <p className="text-[13px] text-[#fbf4e9]">Fri-Sat: 12:00-23:00</p>
            <p className="text-[13px] text-[#fbf4e9]">Sun: 12:00-20:00</p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p className="mb-1 text-[11px] uppercase tracking-[0.2em] text-[#fbf4e9]/50">Socials</p>
              <a href="#" className="text-[13px] text-[#fbf4e9] transition-opacity hover:opacity-60">
                Instagram
              </a>
              <a href="#" className="text-[13px] text-[#fbf4e9] transition-opacity hover:opacity-60">
                X (Twitter)
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="mb-1 text-[11px] uppercase tracking-[0.2em] text-[#fbf4e9]/50">Legal</p>
              <a href="#" className="text-[13px] text-[#fbf4e9] transition-opacity hover:opacity-60">
                Privacy Policy
              </a>
              <a href="#" className="text-[13px] text-[#fbf4e9] transition-opacity hover:opacity-60">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center">
          <p className="font-serif text-[13px] italic text-[#fbf4e9]/35">
            Fine dining in the heart of London since 2018
          </p>
        </div>
      </div>
    </footer>
  );
}
