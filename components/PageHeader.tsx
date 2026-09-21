import type { ReactNode } from 'react';

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

/**
 * Navy page banner used at the top of /services, /about and /contact so every
 * inner page opens with the same visual weight as the homepage hero.
 */
export default function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-br from-primary via-primary to-primary-950">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="eyebrow-light">{eyebrow}</p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
            {description}
          </p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
