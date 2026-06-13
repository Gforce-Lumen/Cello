import type { ReactNode } from "react";

import { ScrollReset } from "@/components/scroll-reset";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollReset />
      <SiteHeader />
      <main className="flex-1 overflow-x-clip">{children}</main>
      <SiteFooter />
    </>
  );
}
