export const analyticsEvents = {
  menu_click: "menu_click",
  booking_click: "booking_click",
  order_click: "order_click",
  directions_click: "directions_click",
  whatsapp_click: "whatsapp_click",
  phone_click: "phone_click",
} as const;

export type AnalyticsEventName =
  (typeof analyticsEvents)[keyof typeof analyticsEvents];

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackAnalyticsEvent(
  event: AnalyticsEventName,
  label: string,
): void {
  if (typeof window === "undefined") {
    return;
  }

  const payload = {
    event,
    label,
    timestamp: Date.now(),
  };

  window.dispatchEvent(
    new CustomEvent("cello:analytics", {
      detail: payload,
    }),
  );

  window.dataLayer?.push(payload);
}
