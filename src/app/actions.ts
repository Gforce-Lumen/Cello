"use server";

export type EnquiryFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export const initialEnquiryState: EnquiryFormState = {
  status: "idle",
  message: "",
};

export async function submitEnquiry(
  _previousState: EnquiryFormState,
  formData: FormData,
): Promise<EnquiryFormState> {
  const enquiryType = String(formData.get("enquiryType") ?? "reservation");
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const date = String(formData.get("date") ?? "").trim();
  const guests = String(formData.get("guests") ?? "").trim();

  if (!name || !email || !phone || !date || !guests) {
    return {
      status: "error",
      message: "Please complete all required fields before submitting your enquiry.",
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 900));

  return {
    status: "success",
    message:
      enquiryType === "private-booking"
        ? "Your private booking enquiry has been received. Cello will reply with availability and next steps."
        : "Your reservation enquiry has been received. Cello will confirm timing and availability shortly.",
  };
}
