import { CtaButton } from "@/components/cta-button";
import { mobileStickyCtas } from "@/lib/site-data";

export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#0f0d10]/95 px-3 py-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-4 gap-2">
        {mobileStickyCtas.map((cta) => (
          <CtaButton
            key={cta.label}
            href={cta.href}
            variant="secondary"
            analyticsEvent={cta.event}
            className="min-h-12 px-2 text-[0.62rem]"
          >
            {cta.label}
          </CtaButton>
        ))}
      </div>
    </div>
  );
}
