type SectionHeadingProps = {
  /** Applied to the h2 so the parent <section> can use aria-labelledby. */
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  /** Centre aligned by default; use "left" inside two-column layouts. */
  align?: 'center' | 'left';
  /** Invert the text colours for use on the navy sections. */
  tone?: 'dark' | 'light';
};

/**
 * Consistent eyebrow + heading + intro block used by every section so the
 * vertical rhythm and type scale stay identical across the site.
 */
export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'dark',
}: SectionHeadingProps) {
  const isCentered = align === 'center';

  return (
    <div className={isCentered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {/* Light tone = navy section, so the label uses the lighter orange */}
      <p className={tone === 'light' ? 'eyebrow-light' : 'eyebrow'}>{eyebrow}</p>
      <h2
        id={id}
        className={`mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl ${
          tone === 'light' ? 'text-white' : ''
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            tone === 'light' ? 'text-white/75' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

