import Reveal from "./Reveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
  <Reveal className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
    <h2 className="display text-5xl font-medium md:text-7xl">{title}</h2>
    {subtitle && (
      <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted">{subtitle}</p>
    )}
  </Reveal>
);

export default SectionHeading;
