import Link from 'next/link'

export default function CtaSection({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  title: string
  description: string
  primaryHref: string
  primaryLabel: string
  secondaryHref?: string
  secondaryLabel?: string
}) {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="cta-buttons">
          <Link
            href={primaryHref}
            className="btn btn-lg"
            style={{ background: 'var(--white)', color: 'var(--primary)' }}
          >
            {primaryLabel}
          </Link>
          {secondaryHref && secondaryLabel && (
            <Link href={secondaryHref} className="btn btn-outline-white btn-lg">
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
