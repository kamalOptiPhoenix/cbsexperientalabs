import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Our Manifesto — We Believe in a Different Kind of Brilliant',
  description:
    'A bold but thoughtful declaration for every child who was told to sit down, memorise, and stop asking so many questions. The CBSExperientalabs manifesto for curious children and brave parents.',
  alternates: { canonical: '/manifesto' },
  openGraph: { url: 'https://cbsexperientalabs.in/manifesto' },
}

const beliefs = [
  {
    num: 1,
    bold: 'Learning is not a performance.',
    text: "Real learning happens silently, messily, slowly — and often looks like playing, arguing, building, or staring out of a window.",
  },
  {
    num: 2,
    bold: 'Failure is not the opposite of learning. It is the beginning of it.',
    text: 'A child who gets something wrong and figures out why has learned more than a child who gets it right without understanding how.',
  },
  {
    num: 3,
    bold: 'Curiosity is not a distraction.',
    text: 'When a child asks "But WHY does the earth go around the sun?", the right answer is never "That\'s not in the syllabus." That question is the beginning of physics, philosophy, and wonder.',
  },
  {
    num: 4,
    bold: 'Intelligence has many shapes.',
    text: 'The child who cannot sit still but can build anything with her hands. The boy who fails English but makes every person in the room laugh. These are not failures. They are different kinds of brilliant.',
  },
  {
    num: 5,
    bold: 'The world is the best classroom there is.',
    text: 'A kitchen, a garden, a market, a journey, a conversation, a broken clock — all of these teach more than any worksheet, if you know how to learn from them.',
  },
  {
    num: 6,
    bold: 'Marks matter less than we think, and more than we want to admit.',
    text: 'We are not here to tell you marks don\'t matter. We are here to tell you they are not the whole story — and that a child who truly understands will always outlast a child who merely memorised.',
  },
]

const pledges = [
  'A library of practical, joyful activities that any Indian family can do at home — organised by age, by skill, by time available.',
  'Stories of families who shifted from rote to real — with the mess, the resistance, and the breakthroughs intact.',
  'An honest conversation about what is missing in Indian education, without attacking the teachers and schools that are doing their best within a difficult system.',
  'A window into the world\'s best learning philosophies — and what Indian parents can borrow from them tonight, for free, at home.',
  'A movement that proves experiential learning and academic performance are not opposites — that curiosity is the best exam preparation there is.',
]

export default function ManifestoPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'CBSExperientalabs Manifesto',
    description: 'A declaration for every child who was told to sit down, memorise, and stop asking so many questions.',
    author: { '@type': 'Organization', name: 'CBSExperientalabs' },
    url: 'https://cbsexperientalabs.in/manifesto',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        badge="Our Manifesto"
        title="We Believe in a Different Kind of Brilliant"
        description="A declaration for every child who was told to sit down, memorise, and stop asking so many questions."
      />

      <div className="manifesto-full">

        <div className="opening animate-in">
          &ldquo;We are not against schools. We are against the quiet death of curiosity that happens inside them.&rdquo;
        </div>

        <h2>I. The Problem We Cannot Ignore</h2>
        <p>
          Every year, millions of children across India wake up, go to school, and come home with notebooks
          full of facts — and minds emptier of wonder than the day before. They learn that rivers flow
          north to south in chapter 4, but they have never stood at the edge of one and felt the water
          move against their feet. They know the formula for area, but they cannot tell you how much paint
          you&apos;d need for their bedroom wall.
        </p>
        <p>
          This is not their failure. This is the system&apos;s failure. And it is time we said so — clearly,
          loudly, and with deep respect for the parents and teachers who are working within it.
        </p>
        <div className="em-block">
          <p>
            The system was built to create compliant workers for an industrial age. The industrial age is over.
            The children being taught today will live and work in a world we cannot yet imagine — and we are
            still preparing them with the tools of 1965.
          </p>
        </div>

        <h2>II. What We Believe About Children</h2>
        <p>
          We believe every child is born a scientist. Watch an infant for five minutes — they are
          hypothesising, experimenting, observing, and drawing conclusions. They drop the spoon to hear
          the sound. They taste things they should not. They stare at shadows with the intensity of a philosopher.
        </p>
        <p>
          Then they go to school. And slowly, systematically — the questions stop. Not because the children
          have found all the answers. But because the system taught them that questions are inconvenient,
          that wrong answers are shameful, and that the goal of learning is a mark on a page.
        </p>
        <div className="bold-line">We reject this. Completely. Without apology.</div>
        <p>
          We believe children are not empty vessels to be filled with information. They are fires to be
          kindled. The teacher&apos;s job — and the parent&apos;s job — is not to give answers. It is to ask better
          questions.
        </p>

        <h2>III. What We Believe About Learning</h2>
        <div className="pledge-list">
          {beliefs.map(({ num, bold, text }) => (
            <div key={num} className="pledge-item">
              <div className="pledge-num">{num}</div>
              <p><strong>{bold}</strong> {text}</p>
            </div>
          ))}
        </div>

        <h2>IV. What We Believe About Parents</h2>
        <p>
          We know you are under enormous pressure. The neighbour&apos;s child scored 98%. The tuition teacher
          says your child needs to focus more. The fear that your child will be left behind is real,
          visceral, and deeply tied to your love for them.
        </p>
        <p>
          We are not asking you to stop caring about their future. We are asking you to expand your
          definition of what a good future looks like.
        </p>
        <div className="em-block">
          <p>
            A child who scores 95% and burns out by age 25 has not been educated. A child who scores 78%
            and builds a business, a family, and a life of meaning by age 35 has.
          </p>
        </div>
        <p>
          You are the most important teacher your child will ever have. Not because you know more. But
          because you are present, you love them, and you have the power to make the world a classroom —
          or a waiting room for school.
        </p>

        <h2>V. What We Are Building</h2>
        <p>CBSExperientalabs is not a school. It is not a coaching centre. It is a community of parents, educators, and curious minds who believe that the space between school and life is where the most important learning happens. We are building:</p>
        <div className="pledge-list">
          {pledges.map((pledge) => (
            <div key={pledge} className="pledge-item">
              <div className="pledge-num" style={{ background: 'var(--secondary)' }}>→</div>
              <p>{pledge}</p>
            </div>
          ))}
        </div>

        <h2>VI. Our Promise to You</h2>
        <p>
          We promise to never make you feel like a bad parent. We promise to never sell you something your
          child doesn&apos;t need. We promise to always be honest when the evidence is mixed, when something is
          hard, when a good idea doesn&apos;t work for every family.
        </p>
        <div className="bold-line">
          We will never stop believing in your child&apos;s capacity to be extraordinary — not because of what
          they score, but because of who they are becoming.
        </div>

        <div className="manifesto-closing">
          <h2>This is the Beginning of Something Important</h2>
          <p>
            Somewhere in India right now, a child is asking a question their teacher doesn&apos;t have time
            to answer. That question deserves a home. This is that home.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/activities" className="btn btn-primary btn-lg">Start at Home Today →</Link>
            <Link href="/stories" className="btn btn-outline-white btn-lg">Read Real Stories</Link>
          </div>
          <div className="signature">— CBSExperientalabs</div>
        </div>

      </div>
    </>
  )
}
