'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import type { SanityActivity } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

type AgeGroupMeta = {
  id: string
  label: string
  sub: string
  badge: string
  heading: string
  description: string
}

const ageGroupMeta: AgeGroupMeta[] = [
  {
    id: 'nursery',
    label: 'Nursery & KG',
    sub: 'Ages 3–5',
    badge: '🌱',
    heading: 'Nursery & Kindergarten — Ages 3 to 5',
    description:
      "At this age, everything is play, and play is everything. These activities honour the child's natural drive to explore with all five senses. The goal is not to teach — it is to wonder together.",
  },
  {
    id: 'class1',
    label: 'Class 1 & 2',
    sub: 'Ages 6–7',
    badge: '📚',
    heading: 'Class 1 & 2 — Ages 6 to 7',
    description:
      'Children at this stage are beginning to read, count, and reason more formally. These activities bridge school concepts and real life — showing children that what they learn in class actually exists outside the classroom.',
  },
  {
    id: 'class3',
    label: 'Class 3 & 4',
    sub: 'Ages 8–9',
    badge: '🔬',
    heading: 'Class 3 & 4 — Ages 8 to 9',
    description:
      'Children this age are developing logical reasoning, beginning to think abstractly, and are hungry for complexity. These activities challenge them to connect, apply, and create — moving from passive receivers to active investigators.',
  },
  {
    id: 'class5',
    label: 'Class 5',
    sub: 'Age 10',
    badge: '🚀',
    heading: 'Class 5 — Age 10',
    description:
      'At 10, children are developing abstract reasoning and beginning to form opinions about the world. These activities challenge them to investigate, create systems, think ethically, and take on real responsibility — the hallmarks of genuine intelligence.',
  },
]

type Props = {
  activities: SanityActivity[]
}

export default function ActivityTabs({ activities }: Props) {
  const [activeId, setActiveId] = useState('nursery')

  // Support hash-based navigation on mount
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (ageGroupMeta.some((g) => g.id === hash)) setActiveId(hash)
  }, [])

  const activeMeta = ageGroupMeta.find((g) => g.id === activeId)!
  const activeActivities = activities.filter((a) => a.ageGroup === activeId)

  return (
    <>
      {/* Tabs */}
      <div className="age-tabs" id="age-tabs">
        {ageGroupMeta.map(({ id, badge, label, sub }) => (
          <button
            key={id}
            className={`age-tab${activeId === id ? ' active' : ''}`}
            onClick={() => setActiveId(id)}
            aria-pressed={activeId === id}
          >
            {badge} {label}
            <br />
            <small>{sub}</small>
          </button>
        ))}
      </div>

      {/* Active age group */}
      <div id={activeMeta.id}>
        <div className="activity-header">
          <div className="class-badge">{activeMeta.badge}</div>
          <div>
            <h2>{activeMeta.heading}</h2>
            <p>{activeMeta.description}</p>
          </div>
        </div>

        <div className="activity-grid">
          {activeActivities.map(({ _id, title, time, skill, what, materials, connection, questions, backgroundImage, videoLink }) => (
            <article key={_id} className="activity-card">
              {/* Background image — shown only if uploaded in Studio */}
              {backgroundImage?.asset && (
                <div className="activity-card-image">
                  <Image
                    src={urlFor(backgroundImage).width(600).height(280).fit('crop').url()}
                    alt={backgroundImage.alt ?? title}
                    width={600}
                    height={280}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
              )}

              <div className="activity-card-header">
                <h3>{title}</h3>
              </div>
              <div className="activity-card-body">
                <div className="activity-meta">
                  <span className="meta-tag time">⏱ {time}</span>
                  <span className="meta-tag skill">{skill}</span>
                </div>
                <p>
                  <strong>What to do:</strong> {what}
                </p>
                <p>
                  <strong>Materials:</strong> {materials}
                </p>
                <p>
                  <strong>Real-world connection:</strong> {connection}
                </p>
                <div className="activity-questions">
                  <h4>Ask your child:</h4>
                  <ul>
                    {questions?.map((q) => (
                      <li key={q}>{q}</li>
                    ))}
                  </ul>
                </div>

                {/* Video link — shown only if added in Studio */}
                {videoLink && (
                  <a
                    href={videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="activity-video-link"
                  >
                    ▶ Watch Video
                  </a>
                )}
              </div>
            </article>
          ))}

          {activeActivities.length === 0 && (
            <p style={{ gridColumn: '1/-1', textAlign: 'center', opacity: 0.6 }}>
              No activities yet for this age group.
            </p>
          )}
        </div>
      </div>
    </>
  )
}
