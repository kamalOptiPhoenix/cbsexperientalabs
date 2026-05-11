import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import RevealWrapper from '@/components/RevealWrapper'
import CtaSection from '@/components/CtaSection'

export const metadata: Metadata = {
  title: "What's Missing in How We Teach Our Children",
  description:
    "A clear-eyed look at the 10 biggest limitations of rote-based CBSE learning — not to blame, but to understand and change. With stats, root causes, long-term impacts and experiential fixes.",
  alternates: { canonical: '/whats-broken' },
  openGraph: { url: 'https://cbsexperientalabs.in/whats-broken' },
}

const stats = [
  { num: '93%', label: 'of Class 10 students cannot apply maths concepts to real-life scenarios' },
  { num: '68%', label: 'of Indian children report fear as their primary motivation to study' },
  { num: '4 hrs', label: 'average daily tuition time for urban Indian school children' },
  { num: '1 in 7', label: 'Indian college graduates are considered employable in their chosen field' },
]

const issues = [
  {
    num: '01', icon: '📝',
    title: 'The Memorisation Culture',
    tagline: 'Learning as storage, not as understanding',
    why: 'School exams are primarily text-reproduction exercises. Questions follow predictable formats and reward precise repetition of textbook language. Teachers teach to the test because the test is the only currency that matters in the current system.',
    impact: 'Children graduate with excellent short-term recall and poor conceptual understanding. They can solve Q2(b) from a 2023 paper but cannot explain why the principle behind it is true — or apply it to a situation they\'ve never seen before.',
    punchy: '"Children are not filing cabinets. They are thinking machines — and we are using them as printers."',
    fix: 'When a child measures ingredients in the kitchen and calculates ratios, they don\'t memorise the concept of proportion — they understand it bodily. The formula becomes a description of something real, not a magic spell to recite.',
  },
  {
    num: '02', icon: '😱',
    title: 'Exam Obsession',
    tagline: 'When the test becomes the goal, education becomes its casualty',
    why: 'India\'s higher education entry system is built on competitive examination scores. "Will this come in the exam?" is the most asked question in Indian classrooms. This pressure cascade ripples all the way back to Class 1.',
    impact: 'Children learn to optimise for marks rather than mastery. They develop "performance orientation" — wanting to appear intelligent rather than become intelligent. This leads to avoidance of hard problems and intellectual cowardice.',
    punchy: '"We\'ve created a generation that is brilliant at passing tests and terrified of being tested by life."',
    fix: 'Real-world tasks have no marks — they have outcomes. When a child builds a circuit and it doesn\'t work, they don\'t get a zero; they get a reason to try differently. This builds the growth mindset that research consistently links to lifelong achievement.',
  },
  {
    num: '03', icon: '😨',
    title: 'Fear-Based Learning',
    tagline: 'When shame replaces curiosity as the engine of education',
    why: 'Public correction, poor marks sent home, teacher disapproval, parent disappointment — the consequences of getting things wrong are social and emotional. Children quickly learn that the safest strategy is silence.',
    impact: 'Fear permanently narrows the range of what children believe they are capable of. They self-select away from subjects where they once struggled, deciding "I\'m not a maths person" based on a few early experiences of public failure.',
    punchy: '"Fear is the most efficient teacher — and the most destructive one. It teaches what NOT to do, but never builds the courage to try."',
    fix: 'Home-based experiential activities happen in a psychologically safe environment. There is no audience, no grade, no shame. A child who cracks an egg wrong and learns from it builds more confidence than one who gets 10/10 on a worksheet about eggs.',
  },
  {
    num: '04', icon: '🎨',
    title: 'The Death of Creativity',
    tagline: 'Standardisation as the enemy of original thought',
    why: 'Creativity cannot be standardised, so it has been systematically removed from the mainstream curriculum. Art, drama, music, and project-based work are treated as extras. What remains is a diet of right-answer subjects with no room for interpretation or invention.',
    impact: 'The World Economic Forum consistently ranks creativity as a top-5 skill for the future of work. India produces millions of technically educated graduates who cannot innovate. We are training excellent followers in a world that needs creative leaders.',
    punchy: '"We spend 14 years teaching children to colour inside the lines. Then we wonder why they can\'t design their own lives."',
    fix: 'Open-ended making activities — building with scraps, inventing stories, designing solutions to everyday problems — exercise the prefrontal cortex in ways that rote learning never reaches.',
  },
  {
    num: '05', icon: '🧠',
    title: 'Low Critical Thinking',
    tagline: 'Accepting answers rather than questioning them',
    why: 'Indian classrooms largely operate on a transmission model: the teacher is the authority, the textbook is correct, and the student\'s job is to receive and reproduce. Questions that challenge the material are implicitly discouraged.',
    impact: 'Adults who were never taught to question what they are told are easily misled, poor at evaluating information, and less effective at complex decision-making. In an age of misinformation, critical thinking is not a soft skill — it is a survival skill.',
    punchy: '"Asking \'Is this true?\' is the first lesson of philosophy, science, law, and democracy. We teach children none of these things."',
    fix: 'Asking children "Why do you think this happened?" and "What would happen if we changed one thing?" after every activity builds the habit of analysis. Science experiments and news discussions train the argumentative, evaluative mind.',
  },
  {
    num: '06', icon: '💰',
    title: 'Zero Financial Literacy',
    tagline: 'Eighteen years of schooling with no instruction in money',
    why: 'CBSE covers compound interest as a maths problem but never explains what a bank account does, how to read a salary slip, what insurance means, or how inflation affects purchasing power.',
    impact: 'India has one of the world\'s lowest financial literacy rates. Adults make poor saving decisions, fall into debt, fail to invest early, and are vulnerable to financial fraud — because no one ever explained how money actually works.',
    punchy: '"Every child learns quadratic equations. No child learns to read their parents\' electricity bill."',
    fix: 'Give a child a budget for one week\'s vegetables. Let them negotiate, count change, and decide between options. They learn more about practical mathematics and economic decision-making in one Saturday market trip than in a full semester of textbook maths.',
  },
  {
    num: '07', icon: '🌍',
    title: 'Disconnected from Real-World Application',
    tagline: 'Knowledge that cannot be used is not knowledge — it is trivia',
    why: 'Textbooks teach concepts in isolation. Photosynthesis happens in Chapter 6 with no relationship to the salad on the lunch plate. The fragmentation of subjects into sealed boxes prevents children from seeing connections that make learning relevant.',
    impact: 'Adults educated in isolated subject silos struggle with interdisciplinary thinking. Entrepreneurship, innovation, medicine, and policy-making all require cross-domain intelligence. Our education system systematically prevents it from developing.',
    punchy: '"The child who knows photosynthesis but has never grown a plant is like the adult who knows swimming theory but has never entered a pool."',
    fix: 'When a child tracks weather patterns, grows a plant, and reads about droughts in the news — all in the same week — they begin to see science as a lens for understanding reality.',
  },
  {
    num: '08', icon: '❤️',
    title: 'Emotional Disconnect',
    tagline: 'Schools teach everything except how to feel and relate',
    why: 'Emotional intelligence has historically been excluded from academic curricula as "soft" and unmeasurable. Children are taught to suppress distress and perform composure — the opposite of emotional development.',
    impact: 'Adults with poor emotional intelligence struggle in every area involving other people. India\'s mental health crisis among young adults is, in part, a consequence of an education system that never taught them how to feel.',
    punchy: '"We teach children to name the parts of the heart in biology. We never teach them what to do when it breaks."',
    fix: 'Storytelling, role-play, care for animals or plants, community service, and family conversations about emotions build EQ as naturally as reading builds vocabulary. The home is the original emotional laboratory.',
  },
  {
    num: '09', icon: '❓',
    title: 'Curiosity Suppression',
    tagline: 'The systematic training of children to stop wondering',
    why: 'Curiosity is disruptive in a classroom of 45 children. A curious child asks questions that derail the lesson plan. The institutional incentive is to answer quickly and move on — or to signal that the question is irrelevant.',
    impact: 'The greatest predictor of a child\'s future intellectual engagement is not their IQ — it\'s whether their curiosity survived their schooling. Curious adults read, learn, explore, and adapt throughout life.',
    punchy: '"Curiosity is the engine of intelligence. Schools are not killing ignorance. They are killing the desire to cure it."',
    fix: 'The single most powerful thing a parent can do is ask "What do you wonder about?" instead of "What did you learn today?" One is an invitation. The other is an audit. Choose the invitation.',
  },
  {
    num: '10', icon: '🏋️',
    title: 'The Over-Coaching Culture',
    tagline: 'When more tutoring becomes the answer to every educational problem',
    why: 'When school doesn\'t work, the obvious response is more school. India\'s private tuition industry is worth ₹1.6 lakh crore and growing. Kota is not an exception — it is the logical extreme of a system that measures only one dimension of human intelligence.',
    impact: 'Children in heavy coaching environments have almost no free time — the time in which natural learning, creative play, social bonding, and emotional regulation all develop.',
    punchy: '"We are so focused on filling children\'s heads that we\'ve forgotten they also need time to think."',
    fix: 'One hour of genuine, curious, hands-on learning at home can replace two hours of passive tuition in terms of retention and conceptual depth. Quality of engagement beats quantity of exposure every time.',
  },
]

export default function WhatsBrokenPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "What's Missing in How We Teach Our Children",
    description: "10 core limitations of rote-based CBSE education and how experiential learning addresses them.",
    author: { '@type': 'Organization', name: 'CBSExperientalabs' },
    publisher: { '@type': 'Organization', name: 'CBSExperientalabs' },
    url: 'https://cbsexperientalabs.in/whats-broken',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        badge="The Honest Truth"
        title="What's Missing in How We Teach Our Children"
        description="A closer look at the limitations of rote-based learning — not to blame the system, but to understand how parents can help children develop beyond academics."
      />

      {/* STATS */}
      <section className="section-sm bg-light">
        <div className="container">
          <RevealWrapper className="broken-stats">
            {stats.map(({ num, label }) => (
              <div key={num} className="broken-stat-card">
                <div className="big-num">{num}</div>
                <p>{label}</p>
              </div>
            ))}
          </RevealWrapper>
        </div>
      </section>

      {/* ISSUES */}
      <section className="section">
        <div className="container">
          <RevealWrapper className="section-header text-center" style={{ marginBottom: '48px' }}>
            <div className="section-badge">10 Core Problems</div>
            <h2 className="section-title" style={{ marginTop: '12px' }}>The Gaps in the System</h2>
            <p className="section-subtitle">
              These are not criticisms of teachers or parents, but long-standing patterns that have shaped
              learning for generations — often leaving little room for curiosity, creativity, and real-world exploration.
            </p>
          </RevealWrapper>

          {issues.map(({ num, icon, title, tagline, why, impact, punchy, fix }) => (
            <RevealWrapper key={num} style={{ marginBottom: '32px' }}>
              <article className="issue-card">
                <div className="issue-card-header">
                  <div className="issue-number">{num}</div>
                  <div className="issue-icon">{icon}</div>
                  <div>
                    <h2>{title}</h2>
                    <p>{tagline}</p>
                  </div>
                </div>
                <div className="issue-card-body">
                  <div className="issue-grid">
                    <div className="issue-col">
                      <h3>Why It Happens</h3>
                      <p>{why}</p>
                    </div>
                    <div className="issue-col">
                      <h3>Long-Term Impact</h3>
                      <p>{impact}</p>
                    </div>
                  </div>
                  <div className="punchy-line">{punchy}</div>
                  <div className="fix-box">
                    <h3>How Experiential Learning Addresses It</h3>
                    <p>{fix}</p>
                  </div>
                </div>
              </article>
            </RevealWrapper>
          ))}
        </div>
      </section>

      <CtaSection
        title="Now That You Know — Let's Fix It"
        description="Start with the simplest thing possible: one activity this weekend. No curriculum, no pressure, no marks."
        primaryHref="/activities"
        primaryLabel="See Home Activities by Age →"
        secondaryHref="/alternatives"
        secondaryLabel="Explore Better Learning Systems"
      />
    </>
  )
}
