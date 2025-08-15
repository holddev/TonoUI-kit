import type { Palette } from "../../types/types";

interface Props {
  colors: Palette;
}

export const LandingPage = ({ colors }: Props) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Fluid background shapes */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-0 size-52 sm:size-72 md:size-96 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
          style={{ background: `linear-gradient(to top, ${colors.primary}, ${colors.primary})` }}
        />
        <div
          className="absolute top-0 right-0 size-44 sm:size-64 md:size-80 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
          style={{ background: `linear-gradient(to top, ${colors.secondary}, ${colors.secondary})`, animationDelay: '0.2s' }}
        />
        <div
          className="absolute -bottom-8 left-20 size-40 sm:size-60 md:size-72 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float"
          style={{ background: `linear-gradient(to top, ${colors.accent}, ${colors.accent})`, animationDelay: '0.4s' }}
        />
        <div
          className="absolute bottom-20 right-20 size-32 sm:size-56 md:size-64 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float"
          style={{ background: colors.accent, animationDelay: '0.6s' }}
        />

      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
          Modern
          <span
            style={{ color: colors.primary }}
          > Design</span>
        </h1>

        <p className="text-xl md:text-2xl  mb-8" style={{ color: colors.foreground }}>
          Empower your startup with innovative designs and exceptional digital experiences
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '0.4s' }}>
          <button
            className="py-1.5 px-3 rounded-md text-white shadow-sm"
            style={{ background: colors.primary }}
          >
            Start Now
          </button>
          <button className="py-1.5 px-3 rounded-md shadow-sm"
            style={{ border: `1.5px solid ${colors.primary}`, color: colors.primary }}
          >
            Explore Projects
          </button>
        </div>
      </div>
    </section>
  );
};
