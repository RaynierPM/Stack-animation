interface ChipProps {
  content: string;
  duration?: number; // in seconds
}

export default function Chip({ content, duration = 1.5 }: ChipProps) {
  return (
    <div className="chip" style={{ animationDuration: `${duration}s` }}>
      {content}
    </div>
  );
}
