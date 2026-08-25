type Tone = "critical" | "high" | "medium" | "success" | "neutral";

const toneClasses: Record<Tone, string> = {
  critical: "bg-status-criticalBg text-status-criticalText",
  high: "bg-status-highBg text-status-highText",
  medium: "bg-status-mediumBg text-status-mediumText",
  success: "bg-status-successBg text-status-successText",
  neutral: "bg-brand-tint text-brand-deep",
};

export default function StatusBadge({
  label,
  tone = "neutral",
}: {
  label: string;
  tone?: Tone;
}) {
  return (
    <span
      className={`inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-md ${toneClasses[tone]}`}
    >
      {label}
    </span>
  );
}
