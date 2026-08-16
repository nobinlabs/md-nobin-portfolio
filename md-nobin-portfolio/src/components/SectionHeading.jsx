import React from 'react';

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  align = "center",
  className = ""
}) => {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col max-w-2xl mb-12 sm:mb-16 ${alignment} ${className}`}>
      {badge && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono tracking-wide text-accent-light bg-accent/10 border border-accent/20 mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 text-sm sm:text-base text-muted leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
