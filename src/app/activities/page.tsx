import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ActivityTabs from '@/components/ActivityTabs'
import CtaSection from '@/components/CtaSection'
import { getAllActivities } from '@/sanity/lib/queries'

export const metadata: Metadata = {
  title: 'Home Learning Activities by Age — Nursery to Class 5',
  description:
    'Practical, joyful home activities for Indian children from Nursery to Class 5. Organised by age group, each activity builds real skills through play, exploration, and everyday life.',
  alternates: { canonical: '/activities' },
  openGraph: { url: 'https://cbsexperientalabs.in/activities' },
  keywords: [
    'home learning activities India',
    'experiential learning activities for kids',
    'CBSE home activities',
    'activities for nursery kids',
    'activities for Class 1 2 3 4 5',
    'practical learning for children',
  ],
}

export default async function ActivitiesPage() {
  const activities = await getAllActivities()
  const count = activities.length

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Home Learning Activities by Age',
    description:
      'Practical home activities for Indian children from Nursery to Class 5, organised by age group.',
    url: 'https://cbsexperientalabs.in/activities',
    publisher: { '@type': 'Organization', name: 'CBSExperientalabs' },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        badge="Home Activities"
        title="Learning That Happens at Home"
        description={`${count} practical, joyful activities organised by age — from Nursery to Class 5. No special equipment. No extra budget. Just curiosity and everyday life.`}
      />

      <section className="section-sm">
        <div className="container">
          <div className="callout reveal" style={{ maxWidth: '860px', margin: '0 auto' }}>
            <p>
              Each activity below takes 20–45 minutes and uses things you already have at home.
              They are designed around the Indian home — your kitchen, your market, your neighbourhood,
              your daily life. Pick one, try it this weekend, and watch what happens.
            </p>
          </div>
        </div>
      </section>

      <ActivityTabs activities={activities} />

      <CtaSection
        title="Want to Go Deeper?"
        description="Read about the philosophy behind these activities — and why curiosity is the best exam preparation there is."
        primaryHref="/manifesto"
        primaryLabel="Read Our Manifesto →"
        secondaryHref="/stories"
        secondaryLabel="See Real Family Stories"
      />
    </>
  )
}
