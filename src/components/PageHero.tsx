import { ReactNode } from 'react'

export default function PageHero({
  badge,
  title,
  description,
  children,
}: {
  badge: string
  title: string
  description?: string
  children?: ReactNode
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="section-badge" style={{ marginBottom: '20px' }}>
          {badge}
        </div>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        {children}
      </div>
    </section>
  )
}
