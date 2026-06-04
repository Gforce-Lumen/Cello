type MessageBlockProps = {
  status: "success" | "error";
  message: string;
};

export function MessageBlock({ status, message }: MessageBlockProps) {
  const colorClass =
    status === "success"
      ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-100"
      : "border-rose-400/30 bg-rose-500/10 text-rose-100";

  return (
    <div className={`rounded-2xl border px-4 py-3 text-sm leading-6 ${colorClass}`}>
      {message}
    </div>
  );
}
