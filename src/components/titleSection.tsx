"use client";

interface TitleSectionProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
}

export default function TitleSection({ title, subtitle }: TitleSectionProps) {
  return (
    <div>
      {title}
      {subtitle}
    </div>
  );
}
