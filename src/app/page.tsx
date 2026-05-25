import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import RevealWrapper from '@/components/RevealWrapper'
import NewsletterForm from '@/components/NewsletterForm'
import { siteConfig } from '@/lib/metadata'

export const metadata: Metadata = {
  title: `${siteConfig.name} — Learning Beyond Textbooks`,
  description: siteConfig.description,
  alternates: { canonical: '/' },
  openGraph: { url: siteConfig.url },
}

const problemCards = [
  {
    icon: '📖',
    title: 'Understanding Over Memorisation',
    body: 'Children often remember concepts for exams but struggle to connect them with everyday life. True learning happens when knowledge becomes meaningful, practical, and experiential.',
  },
  {
    icon: '😰',
    title: 'Fear-Based Learning',
    body: 'When children become too focused on avoiding mistakes, they stop asking bold questions and trying new ideas. Curiosity grows best in environments where exploration feels encouraged, not judged.',
  },
  {
    icon: '🔢',
    title: 'Marks Define Worth',
    body: 'Academic performance matters, but it is only one part of a child\'s growth. Confidence, creativity, communication, empathy, and problem-solving shape how children thrive in the real world.',
  },
  {
    icon: '🚫',
    title: 'Curiosity Needs Space to Grow',
    body: 'Many children naturally ask deep and imaginative questions. When curiosity is nurtured through conversations, exploration, and real-world experiences, learning becomes joyful and lasting.',
  },
  {
    icon: '🏭',
    title: 'Every Child Learns Differently',
    body: 'Some children learn through books. Others through movement, stories, experiments, observation, or hands-on experiences. A richer learning environment helps every child discover how they learn best.',
  },
  {
    icon: '🌍',
    title: 'Connection with Reality',
    body: 'Children understand concepts more deeply when they experience them in everyday life — through nature, conversations, projects, travel, creativity, money, cooking, and play.',
  },
]

const realLifeCards = [
  { icon: '🍲', title: 'Cooking is Chemistry', body: 'Why does baking soda make the cake rise? Why does salt preserve food? Your kitchen is a chemistry lab waiting to be explored.' },
  { icon: '💸', title: 'Shopping is Maths', body: 'Discounts, budgets, unit prices, comparing value — the supermarket teaches financial literacy better than any textbook chapter.' },
  { icon: '🚗', title: 'Travel is History & Geography', body: 'Every city has a story. Every road has a reason. Every temple or monument is a living textbook of time.' },
  { icon: '🌱', title: 'Garden is Biology', body: 'Soil, roots, water, sunlight, insects, seasons — a small pot on your balcony is a complete lesson in living systems.' },
  { icon: '🗣️', title: 'Arguments are Logic', body: 'When your child argues about screen time, let them make their case. Teach them to reason, not just demand. Critical thinking starts at the dinner table.' },
  { icon: '📰', title: 'News is Social Science', body: 'Read one news story with your child per week. Ask: "What happened? Why? Who is affected?" Civic understanding begins at home.' },
  { icon: '⭐', title: 'Night Sky is Astronomy', body: 'Step outside at night. Name three stars. Track the moon phase for a month. The oldest science lab is free and open every clear night.' },
  { icon: '🛠️', title: 'Broken Things are Engineering', body: 'Before replacing a broken toy, open it. Ask your child what went wrong. Curiosity about mechanics leads to engineering thinking.' },
]

const compareRows = [
  ['Memorise the formula', 'Discover why the formula works'],
  ['Read about photosynthesis', 'Grow a plant and observe it'],
  ['Pass the exam', 'Solve a real problem'],
  ['One right answer', 'Many possible solutions'],
  ['Fear of failure', 'Learning from mistakes'],
  ['Teacher tells', 'Child discovers'],
]

const testimonials = [
  {
    text: '"My daughter Priya used to dread maths. I started letting her help me with grocery budgeting. Within three months she was doing mental calculations faster than me — and she began asking what percentage discount we\'re getting on everything we buy."',
    name: 'Sunita Gupta',
    role: 'Mother of Class 4 student, Pune',
    initials: 'SG',
    avClass: 'av-orange',
  },
  {
    text: '"My son used to say \'History is boring — just dead people and old dates.\' I started telling him the story behind each monument we passed on our drives. Now he reads history books voluntarily."',
    name: 'Rajesh Kumar',
    role: 'Father of Class 3 student, Delhi',
    initials: 'RK',
    avClass: 'av-teal',
  },
  {
    text: '"When I gave my 7-year-old a broken motor from an old toy and watched her spend two hours figuring out how it worked, I understood. Curiosity is more powerful than any curriculum."',
    name: 'Anitha Menon',
    role: 'Software Engineer & Mother, Bengaluru',
    initials: 'AM',
    avClass: 'av-purple',
  },
]

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${siteConfig.name} — Learning Beyond Textbooks`,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: { '@type': 'Organization', name: siteConfig.name },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-circle c1" />
        <div className="hero-bg-circle c2" />

        {/* Desktop: image on right half */}
        <div className="hero-image-bg hero-image-desktop">
          <Image
            src="/hero.png"
            alt="Child engaged in hands-on learning at home"
            fill
            priority
            quality={85}
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>

        {/* Mobile: full-bleed background (blurred top → kid at bottom) */}
        <div className="hero-image-bg hero-image-mobile">
          <Image
            src="/hero-mobile.png"
            alt="Child learning at home"
            fill
            priority
            quality={85}
            style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
          />
        </div>

        <div className="container hero-container">
          {/* Left col: all content */}
          <div className="hero-content animate-in">
            <div className="hero-badge">🇮🇳 India&apos;s Experiential Learning Movement</div>
            <h1>
              Your Child is <span className="highlight">Brilliant.</span><br />
              Learning Should Help Them Feel That Way.
            </h1>
            <p className="hero-sub">
              Textbooks can teach answers. But children need spaces to ask questions, explore ideas,
              make mistakes, and think independently.
            </p>
            <div className="hero-buttons">
              <Link href="/activities" className="btn btn-primary btn-lg">Explore Home Activities →</Link>
              <Link href="/manifesto" className="btn btn-outline-white btn-lg">Read Our Manifesto</Link>
            </div>
          </div>

          {/* Right col spacer (desktop only) */}
          <div aria-hidden="true" />

          {/* Stats — full width below */}
          <div className="hero-stats">
            {[
              { num: '26.5M', label: 'CBSE students in India' },
              { num: '<5%', label: 'learn practical skills in school' },
              { num: '72%', label: "parents worry their child's curiosity fades through school" },
              { num: '0', label: 'exams required to learn curiosity and creativity' },
            ].map(({ num, label }) => (
              <div key={label} className="stat-item">
                <div className="stat-num">{num}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM STATEMENT */}
      <section className="section bg-sky">
        <div className="container">
          <RevealWrapper className="section-header text-center">
            <div className="section-badge">The Problem</div>
            <h2 className="section-title">Something is deeply missing in how we teach our children</h2>
            <p className="section-subtitle">
              Schools are designed to focus on academics. But children also need spaces to explore, question,
              create, and connect learning with real life — and parents can help bridge that gap every day.
            </p>
          </RevealWrapper>
          <RevealWrapper className="problem-grid">
            {problemCards.map(({ icon, title, body }) => (
              <article key={title} className="problem-card">
                <div className="problem-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </RevealWrapper>
          <RevealWrapper className="problem-quote">
            <blockquote>
              Schools teach subjects. But curiosity is nurtured at home — through conversations,
              experiences, experiments, and the freedom to ask &ldquo;why?&rdquo;
            </blockquote>
            <cite>— CBSExperientalabs</cite>
          </RevealWrapper>
        </div>
      </section>

      {/* EXPERIENTIAL LEARNING */}
      <section className="section">
        <div className="container">
          <div className="exp-split">
            <RevealWrapper className="exp-content">
              <div className="section-badge secondary">The Solution</div>
              <h2 className="section-title" style={{ marginTop: '12px' }}>What Experiential Learning Actually Means</h2>
              <p className="lead">
                It is not about abandoning textbooks. It is about making the world your classroom —
                where learning happens through doing, questioning, failing, and discovering.
              </p>
              <p style={{ color: 'var(--text-light)', marginTop: '16px' }}>
                When a child touches, builds, argues, cooks, measures, negotiates, or explores — multiple
                areas of the brain activate simultaneously. The memory formed is deeper, longer lasting,
                and connected to meaning.
              </p>
              <div className="compare-table" style={{ marginTop: '32px' }}>
                <table>
                  <thead>
                    <tr>
                      <th>Traditional CBSE</th>
                      <th>Experiential Learning</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compareRows.map(([traditional, exp]) => (
                      <tr key={traditional}>
                        <td>{traditional}</td>
                        <td>{exp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </RevealWrapper>
            <RevealWrapper className="exp-visual">
              <div className="exp-cards-stack">
                <div className="exp-mini-card featured">
                  <div className="icon">🧠</div>
                  <h4>When children learn by doing, retention increases by up to 75% vs. passive reading</h4>
                </div>
                {[
                  { icon: '🔬', label: 'Inquiry-Based Science' },
                  { icon: '🍳', label: 'Kitchen Mathematics' },
                  { icon: '🗺️', label: 'Travel Geography' },
                  { icon: '💰', label: 'Real-World Finance' },
                  { icon: '🌱', label: 'Nature as Classroom' },
                  { icon: '🎭', label: 'Story & Drama' },
                  { icon: '🔧', label: 'Build & Make' },
                ].map(({ icon, label }) => (
                  <div key={label} className="exp-mini-card">
                    <div className="icon">{icon}</div>
                    <h4>{label}</h4>
                  </div>
                ))}
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* HOME PROGRAMS PREVIEW */}
      <section className="section bg-sky">
        <div className="container">
          <RevealWrapper className="section-header text-center">
            <div className="section-badge accent">For Parents</div>
            <h2 className="section-title" style={{ marginTop: '12px' }}>Practical Activities to Do at Home — Right Now</h2>
            <p className="section-subtitle">
              You don&apos;t need a Montessori school or a special curriculum. You need 20 minutes,
              everyday curiosity, and these ideas.
            </p>
          </RevealWrapper>
          <RevealWrapper className="grid-3">
            {[
              { tag: 'Nursery – KG', icon: '🌿', title: 'Seed in a Bottle', body: 'Place a bean seed in a transparent bottle with moist cotton. Watch it sprout over 5 days. Ask: "Where does the root go? Why?"', href: '/activities#nursery' },
              { tag: 'Class 1–2', icon: '🛒', title: 'Grocery Store Game', body: 'Give your child ₹100. Let them plan the weekly vegetable shopping. Count change, compare prices, make decisions.', href: '/activities#class1' },
              { tag: 'Class 3–4', icon: '🗺️', title: 'Map Your Neighbourhood', body: 'Ask your child to draw a map of their route to school. Add landmarks, estimate distances, measure turns. Geography is now real.', href: '/activities#class3' },
            ].map(({ tag, icon, title, body, href }) => (
              <div key={title} className="card">
                <div className="card-body">
                  <div className="card-tag">{tag}</div>
                  <div className="card-icon orange">{icon}</div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                  <Link href={href} className="btn btn-outline btn-sm" style={{ marginTop: '16px' }}>
                    See Activities →
                  </Link>
                </div>
              </div>
            ))}
          </RevealWrapper>
          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link href="/activities" className="btn btn-primary btn-lg">View All Home Activity Programs →</Link>
          </div>
        </div>
      </section>

      {/* GLOBAL LEARNING SYSTEMS */}
      <section className="section">
        <div className="container">
          <RevealWrapper className="section-header text-center">
            <div className="section-badge secondary">Around the World</div>
            <h2 className="section-title" style={{ marginTop: '12px' }}>Countries That Chose Curiosity Over Conformity</h2>
            <p className="section-subtitle">These education systems prove that when you trust children, they exceed expectations.</p>
          </RevealWrapper>
          <RevealWrapper className="grid-3">
            {[
              { flag: '🇫🇮', name: 'Finland', subtitle: 'The No-Homework Revolution', body: 'No standardised tests until age 16. No homework until secondary school. Children play outdoors for 15 minutes every hour. Yet Finland consistently ranks #1 in global education outcomes.', tip: 'Give your child one unstructured hour of free play every evening. No screens, no structured activity. Just imagination.' },
              { flag: '🏫', name: 'Montessori', subtitle: 'Let the Child Lead', body: 'Children choose their own activities from a prepared environment. The teacher observes rather than instructs. Learning is self-paced. Mistakes are part of the process, not failures.', tip: 'Set up a low shelf with 3–4 activities your child can access independently. Observe without intervening.' },
              { flag: '🌲', name: 'Forest Schools', subtitle: 'Nature as the Classroom', body: 'Originating in Scandinavia, children spend all day outdoors regardless of weather. Risk-taking in nature builds confidence and resilience.', tip: 'One Saturday each month, go to a park with zero agenda. Let your child follow their curiosity. Dig, climb, collect, observe.' },
            ].map(({ flag, name, subtitle, body, tip }) => (
              <div key={name} className="alt-card">
                <div className="alt-card-flag">{flag}</div>
                <h3>{name}</h3>
                <div className="subtitle">{subtitle}</div>
                <p>{body}</p>
                <div className="home-tip">
                  <h4>Try at Home</h4>
                  <p>{tip}</p>
                </div>
              </div>
            ))}
          </RevealWrapper>
          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link href="/alternatives" className="btn btn-outline">Explore All Learning Philosophies →</Link>
          </div>
        </div>
      </section>

      {/* REAL LIFE EXAMPLES */}
      <section className="section bg-sky">
        <div className="container">
          <RevealWrapper className="section-header text-center">
            <div className="section-badge">Real Moments</div>
            <h2 className="section-title" style={{ marginTop: '12px' }}>Learning Hidden in Everyday Life</h2>
            <p className="section-subtitle">Experiential learning doesn&apos;t require expensive kits or special schools. It happens when you pay attention to the ordinary.</p>
          </RevealWrapper>
          <RevealWrapper className="grid-4">
            {realLifeCards.map(({ icon, title, body }, i) => (
              <div key={title} className="card">
                <div className="card-body">
                  <div className={`card-icon ${['orange', 'teal', 'yellow', 'purple'][i % 4]}`}>{icon}</div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </RevealWrapper>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <RevealWrapper className="section-header text-center">
            <div className="section-badge accent">Parent Voices</div>
            <h2 className="section-title" style={{ marginTop: '12px' }}>When the Learning Shifted, Everything Changed</h2>
          </RevealWrapper>
          <RevealWrapper className="testimonials-grid">
            {testimonials.map(({ text, name, role, initials, avClass }) => (
              <div key={name} className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p className="testimonial-text">{text}</p>
                <div className="testimonial-author">
                  <div className={`author-avatar ${avClass}`}>{initials}</div>
                  <div>
                    <div className="author-name">{name}</div>
                    <div className="author-role">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </RevealWrapper>
        </div>
      </section>

      {/* WHY PARENTS HESITATE */}
      <section className="section bg-sky">
        <div className="container">
          <RevealWrapper className="section-header text-center">
            <div className="section-badge">We Understand Your Fear</div>
            <h2 className="section-title" style={{ marginTop: '12px' }}>You Are Not Wrong to Worry About Marks</h2>
            <p className="section-subtitle">The pressure is real. But so is the cost of raising a child who can pass exams but cannot navigate life.</p>
          </RevealWrapper>
          <RevealWrapper className="grid-2">
            <div className="card">
              <div className="card-body">
                <h3 style={{ color: 'var(--primary)', marginBottom: '16px' }}>😟 What Parents Fear</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    'If my child doesn\'t score well, they won\'t get into a good college.',
                    'Other children are going to tuitions and scoring higher.',
                    'My relatives will judge me if my child\'s results are poor.',
                    'Experiential learning sounds nice but won\'t help in Board exams.',
                    'I don\'t have time to do activities. My child needs to finish homework.',
                  ].map((fear) => (
                    <li key={fear} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--primary)', fontWeight: 700, flexShrink: 0 }}>→</span>
                      <span style={{ fontSize: '.92rem', color: 'var(--text-light)' }}>&ldquo;{fear}&rdquo;</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 style={{ color: 'var(--secondary-dk)', marginBottom: '16px' }}>✅ What the Research Says</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    'Children who understand concepts score just as well or better in exams — with half the stress.',
                    'Curiosity-driven children are more likely to pursue subjects they love and excel professionally.',
                    '30 minutes of real-world exploration reinforces more school content than 2 hours of forced reading.',
                    'Emotional confidence from experiential learning reduces exam anxiety significantly.',
                    'These activities replace passive screen time, not study time.',
                  ].map((fact) => (
                    <li key={fact} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--secondary)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: '.92rem', color: 'var(--text-light)' }} dangerouslySetInnerHTML={{ __html: fact }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealWrapper>
          <div className="callout reveal" style={{ marginTop: '40px' }}>
            <p>
              Experiential learning does not compete with CBSE academics. It makes them stick. A child who truly
              understands why the water cycle works will never forget it — even without a revision chart on the wall.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>The Best Time to Start Was Yesterday.<br />The Second Best Time is Right Now.</h2>
          <p>Your child&apos;s curiosity is a flame. Your job is not to direct it — it&apos;s to keep it burning. Start with one activity this weekend.</p>
          <div className="cta-buttons">
            <Link href="/activities" className="btn btn-lg" style={{ background: 'var(--white)', color: 'var(--primary)' }}>
              See Home Activity Programs →
            </Link>
            <Link href="/manifesto" className="btn btn-outline-white btn-lg">Read Our Full Manifesto</Link>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="section">
        <div className="container">
          <RevealWrapper>
            <div className="newsletter-inline">
              <h3>📬 Get One Learning Idea Every Week</h3>
              <p>Free, practical, age-appropriate activities for Indian parents. No jargon. No selling. Just ideas that work.</p>
              <NewsletterForm />
            </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  )
}
