"use client";

import { useState, type CSSProperties, type ChangeEvent, type FormEvent } from "react";

const headingStyle = { fontFamily: "'Cormorant SC', serif" };
const bodyStyle = { fontFamily: "'Jost', sans-serif" };
const serifStyle = { fontFamily: "'Cormorant Garamond', serif" };

const HERO =
  "https://images.unsplash.com/photo-1744776411221-c3b8132d6715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200";

const inputBase: CSSProperties = {
  ...bodyStyle,
  fontSize: "13px",
  color: "#372821",
  backgroundColor: "transparent",
  borderBottom: "1px solid rgba(55,40,33,0.3)",
  padding: "12px 0",
  outline: "none",
  width: "100%",
};

const labelBase: CSSProperties = {
  ...bodyStyle,
  fontSize: "10px",
  color: "#372821",
  opacity: 0.5,
  textTransform: "uppercase",
  letterSpacing: "0.2em",
  display: "block",
  marginBottom: "4px",
};

const inputStyle: CSSProperties = {
  fontFamily: "'Jost', sans-serif",
  fontSize: "13px",
  color: "#372821",
  backgroundColor: "transparent",
  borderBottom: "1px solid rgba(55,40,33,0.3)",
  padding: "12px 0",
  outline: "none",
  width: "100%",
};

export function BookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "2",
    date: "",
    time: "19:00",
    occasion: "",
    notes: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setForm((previous) => ({ ...previous, [event.target.name]: event.target.value }));
  };

  return (
    <div style={{ backgroundColor: "#fbf4e9" }} className="min-h-screen">
      <div className="grid min-h-screen md:grid-cols-2">
        <div className="relative hidden md:block">
          <img src={HERO} alt="Marlund table setting" className="absolute inset-0 h-full w-full object-cover" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(55,40,33,0.5) 0%, transparent 60%)" }}
          />
          <div className="absolute inset-0 flex flex-col justify-end p-16">
            <p
              className="mb-5 uppercase tracking-[0.3em] opacity-60"
              style={{ ...bodyStyle, fontSize: "11px", color: "#fbf4e9" }}
            >
              Marlund · London
            </p>
            <h1
              className="mb-6 leading-none"
              style={{ ...headingStyle, fontSize: "72px", color: "#fbf4e9", fontWeight: 600 }}
            >
              BOOK A
              <br />
              TABLE
            </h1>
            <p
              style={{
                ...serifStyle,
                fontSize: "18px",
                color: "#fbf4e9",
                opacity: 0.75,
                fontStyle: "italic",
                lineHeight: 1.7,
              }}
            >
              We look forward to welcoming you. Reservations are available up to 60 days in
              advance.
            </p>
            <div className="mt-12 flex flex-col gap-2">
              <p style={{ ...bodyStyle, fontSize: "12px", color: "#fbf4e9", opacity: 0.55 }}>
                For same-day or large-party bookings, please call us at
              </p>
              <p style={{ ...headingStyle, fontSize: "18px", color: "#fbf4e9" }}>+020 4321 8765</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center px-8 py-32 md:px-16 md:py-24">
          <div className="mb-10 md:hidden">
            <p
              className="mb-4 uppercase tracking-[0.3em] opacity-50"
              style={{ ...bodyStyle, fontSize: "11px", color: "#372821" }}
            >
              Marlund · London
            </p>
            <h1
              className="leading-none"
              style={{
                ...headingStyle,
                fontSize: "clamp(48px, 10vw, 80px)",
                color: "#372821",
                fontWeight: 600,
              }}
            >
              BOOK A
              <br />
              TABLE
            </h1>
          </div>

          {submitted ? (
            <div className="max-w-[440px]">
              <div
                className="mb-8 flex h-12 w-12 items-center justify-center rounded-full"
                style={{ backgroundColor: "#372821" }}
              >
                <span style={{ color: "#fbf4e9", fontSize: "18px" }}>✓</span>
              </div>
              <h2
                className="mb-4"
                style={{ ...headingStyle, fontSize: "36px", color: "#372821", fontWeight: 600 }}
              >
                YOUR TABLE IS RESERVED
              </h2>
              <p
                style={{
                  ...serifStyle,
                  fontSize: "17px",
                  color: "#372821",
                  opacity: 0.7,
                  fontStyle: "italic",
                  lineHeight: 1.75,
                }}
              >
                Thank you, {form.name.split(" ")[0]}. We&apos;ve received your booking request and
                will confirm via email within one hour. We look forward to seeing you.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-10 border-b border-[#372821] pb-1 uppercase tracking-[0.2em] opacity-50 transition-opacity hover:opacity-100"
                style={{ ...bodyStyle, fontSize: "11px", color: "#372821" }}
              >
                Make another reservation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex max-w-[440px] flex-col gap-8">
              <div>
                <label style={labelBase}>Full Name</label>
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="James Croft"
                  style={inputBase}
                  className="placeholder:opacity-30 focus:border-[#372821] transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label style={labelBase}>Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="james@email.com"
                    style={inputBase}
                    className="placeholder:opacity-30"
                  />
                </div>
                <div>
                  <label style={labelBase}>Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+44 7700 900000"
                    style={inputBase}
                    className="placeholder:opacity-30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label style={labelBase}>Number of Guests</label>
                  <select
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    style={{ ...inputBase, cursor: "pointer" }}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((guestCount) => (
                      <option key={guestCount} value={guestCount}>
                        {guestCount} {guestCount === 1 ? "guest" : "guests"}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={labelBase}>Occasion</label>
                  <select
                    name="occasion"
                    value={form.occasion}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: "pointer" }}
                  >
                    <option value="">None specified</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="business">Business dinner</option>
                    <option value="celebration">Celebration</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label style={labelBase}>Date</label>
                  <input
                    name="date"
                    type="date"
                    required
                    value={form.date}
                    onChange={handleChange}
                    style={inputBase}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <div>
                  <label style={labelBase}>Preferred Time</label>
                  <select
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    style={{ ...inputBase, cursor: "pointer" }}
                  >
                    {[
                      "12:00",
                      "12:30",
                      "13:00",
                      "13:30",
                      "14:00",
                      "18:30",
                      "19:00",
                      "19:30",
                      "20:00",
                      "20:30",
                      "21:00",
                      "21:30",
                    ].map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label style={labelBase}>Special Requests</label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Dietary requirements, allergies, or anything else we should know..."
                  rows={3}
                  style={{
                    ...inputBase,
                    resize: "none",
                    borderBottom: "none",
                    border: "1px solid rgba(55,40,33,0.3)",
                    padding: "12px",
                  }}
                  className="placeholder:opacity-30"
                />
              </div>

              <button
                type="submit"
                className="py-5 uppercase tracking-[0.25em] transition-opacity hover:opacity-80"
                style={{ ...bodyStyle, fontSize: "11px", backgroundColor: "#372821", color: "#fbf4e9" }}
              >
                Confirm Reservation
              </button>

              <p
                style={{
                  ...serifStyle,
                  fontSize: "13px",
                  color: "#372821",
                  opacity: 0.45,
                  fontStyle: "italic",
                }}
              >
                You will receive an email confirmation within one hour. For groups of 9 or more,
                please call us directly.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
