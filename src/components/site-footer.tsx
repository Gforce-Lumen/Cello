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
              CELLO
            </Link>
            <p className="text-[12px] uppercase tracking-widest text-[#fbf4e9]/50">
              © 2025 All Rights Reserved
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="mb-1 text-[11px] uppercase tracking-[0.2em] text-[#fbf4e9]/50">Contact</p>
            <p className="text-[13px] text-[#fbf4e9]">15 First Osu Lane</p>
            <p className="text-[13px] text-[#fbf4e9]">Accra, Ghana</p>
            <p className="text-[13px] text-[#fbf4e9]">+233 55 020 4636</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="mb-1 text-[11px] uppercase tracking-[0.2em] text-[#fbf4e9]/50">
              Opening Hours
            </p>
            <p className="text-[13px] text-[#fbf4e9]">Monday: Closed</p>
            <p className="text-[13px] text-[#fbf4e9]">Tue-Thu: 4:00 PM - 12:00 AM</p>
            <p className="text-[13px] text-[#fbf4e9]">Fri-Sun: 4:00 PM - 2:30 AM</p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p className="mb-1 text-[11px] uppercase tracking-[0.2em] text-[#fbf4e9]/50">Socials</p>
              <a
                href="https://www.instagram.com/cello_accra/"
                className="text-[13px] text-[#fbf4e9] transition-opacity hover:opacity-60"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@cello_accra"
                className="text-[13px] text-[#fbf4e9] transition-opacity hover:opacity-60"
              >
                TikTok
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
            Food, cocktails, music, and evening rhythm in one warm Accra setting.
          </p>
        </div>
      </div>
    </footer>
  );
}
