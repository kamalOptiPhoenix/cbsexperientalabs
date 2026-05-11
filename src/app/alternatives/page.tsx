import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import RevealWrapper from '@/components/RevealWrapper'
import CtaSection from '@/components/CtaSection'

export const metadata: Metadata = {
  title: 'Better Learning Systems From Around the World',
  description:
    'Explore Montessori, Waldorf, Reggio Emilia, Finnish education, Forest Schools, Project-Based Learning and more — and what Indian parents can borrow from each one tonight.',
  alternates: { canonical: '/alternatives' },
  openGraph: { url: 'https://cbsexperientalabs.in/alternatives' },
}

const philosophies = [
  {
    id: 'montessori',
    flag: '🏫',
    name: 'Montessori Method',
    origin: 'Maria Montessori · Italy · 1907',
    difficulty: 'Easy to adopt at home',
    diffClass: 'diff-easy',
    core: "Children are naturally motivated learners. Given a thoughtfully prepared environment, they will choose meaningful work and develop at their own pace. The adult's role is to observe, prepare the environment, and step back.",
    benefits: ['Strong intrinsic motivation', 'Deep concentration spans', 'Self-discipline without external force', 'Practical life skills from early age', 'Respect for child\'s own pace'],
    limits: ['Can be misapplied as "no structure"', 'Transition to traditional exams needs support', 'Authentic materials are expensive'],
    homeTitle: 'Create a "Yes Space" & Practical Life',
    homeBody: 'Dedicate a low shelf with 3–4 activities your child can access independently — puzzles, art materials, building blocks, books. Let your child pour their own water, fold napkins, sort laundry by colour, set the table. These build coordination, sequence-thinking, and self-confidence simultaneously.',
    vsCbse: 'CBSE defines what children learn and when. Montessori trusts children to direct their own learning within a prepared environment. At home, this means creating conditions for exploration rather than directing what is explored.',
  },
  {
    id: 'waldorf',
    flag: '🎨',
    name: 'Waldorf / Steiner Education',
    origin: 'Rudolf Steiner · Germany · 1919',
    difficulty: 'Moderate adoption',
    diffClass: 'diff-medium',
    core: 'Education should nurture the whole child — head (thinking), heart (feeling), and hands (doing). Learning follows the rhythms of nature and the arts are central, not supplementary.',
    benefits: ['Strong artistic and creative development', 'Deep relationship with nature and seasons', 'Storytelling as a core learning tool', 'Holistic development of thinking, feeling, willing'],
    limits: ['Deliberately delays reading and formal academics', 'Some spiritual elements may not suit all families', 'Technology is actively discouraged'],
    homeTitle: 'Storytelling Every Night & Handwork',
    homeBody: 'Tell your child a story about where water comes from, where food grows, or what happened in your grandparents\' village. Make it vivid, sensory, and personal. Supplement with handwork — knitting, clay, cooking, weaving. Waldorf considers handwork essential for cognitive development.',
    vsCbse: 'CBSE treats arts as extracurricular. Waldorf considers artistic activity the primary mode through which children process and understand all subjects — science, history, maths, and language.',
  },
  {
    id: 'reggio',
    flag: '🇮🇹',
    name: 'Reggio Emilia Approach',
    origin: 'Loris Malaguzzi · Italy · 1945',
    difficulty: 'Moderate adoption',
    diffClass: 'diff-medium',
    core: 'Children have "100 languages" — 100 ways of expressing, understanding, and communicating. Projects emerge from children\'s own interests and investigations. The environment is considered "the third teacher."',
    benefits: ['Deep, sustained project-based investigation', 'Multiple modes of expression valued equally', 'Child\'s interests drive curriculum', 'Strong documentation of learning'],
    limits: ['Difficult to scale beyond early childhood', 'Requires deep teacher training', 'Hard to combine with standardised assessment'],
    homeTitle: 'Follow Your Child\'s Obsession',
    homeBody: "If your 5-year-old is obsessed with ants, go deep. Find books about ants, observe an ant colony, draw ant tunnels, read about what ants eat. Keep a \"Wonder Journal\" — a scrapbook where your child draws and writes about things they've discovered.",
    vsCbse: "CBSE's curriculum is predetermined and universal. Reggio Emilia's curriculum emerges from each child's questions. The parent's job is to notice what your child is interested in and help them go deeper.",
  },
  {
    id: 'finland',
    flag: '🇫🇮',
    name: 'Finnish Education Model',
    origin: 'Finland · National Reform · 1970s onwards',
    difficulty: 'Easy to adopt at home',
    diffClass: 'diff-easy',
    core: 'Trust children and teachers completely. Eliminate standardised testing until age 16. Prioritise teacher quality over quantity of schooling. Value play as a fundamental right.',
    benefits: ['#1 or top-3 in global PISA rankings consistently', 'Lowest student stress levels in OECD', 'Strong intrinsic motivation to learn', 'No private tutoring industry needed', 'Excellent outcomes for struggling students'],
    limits: ['Works in a small, homogeneous, high-trust society', 'Difficult to replicate at India\'s scale', 'Requires fundamental shift in how we measure success'],
    homeTitle: 'Protect Free Play Time',
    homeBody: 'Ensure your child has at least 60–90 minutes of completely unstructured free time every day — no screens, no structured activity, no supervision agenda. When you meet teachers, ask about your child\'s curiosity and enjoyment of learning — not just their grades.',
    vsCbse: 'CBSE is test-heavy from Class 1. Finland proves that less testing, more trust, and more play produces better long-term outcomes. The Indian parent\'s version: stop adding to your child\'s schedule and start protecting empty time.',
  },
  {
    id: 'forest',
    flag: '🌲',
    name: 'Forest Schools',
    origin: 'Scandinavia → UK → Global · 1950s onwards',
    difficulty: 'Easy to adopt at home',
    diffClass: 'diff-easy',
    core: 'Nature is the best learning environment for young children. Regular outdoor experiences in natural settings build confidence, resilience, emotional regulation, and environmental awareness. Risk is considered essential.',
    benefits: ['Dramatically improved physical health', 'Strong emotional regulation and resilience', 'Deep environmental literacy', 'Risk assessment skills from early age', 'Better attention spans for indoor learning'],
    limits: ['Difficult in urban India with limited green spaces', 'Safety concerns in Indian outdoor environments', 'Seasonal constraints in extreme weather'],
    homeTitle: 'Nature Saturday & Safe Risk-Taking',
    homeBody: 'Once a month, go to any green space with zero agenda. Let your child dig, climb, collect, and observe. Let them take safe physical risks — climbing trees, jumping puddles. Overprotecting children from minor physical risk creates adults unable to manage emotional and professional risk.',
    vsCbse: 'CBSE\'s Environmental Studies is primarily textbook-based. Forest school practice says: skip the chapter, go outside, observe an actual ant, leaf, cloud, or bird. Real observation of real nature is infinitely more educational.',
  },
  {
    id: 'pbl',
    flag: '🔧',
    name: 'Project-Based Learning (PBL)',
    origin: 'John Dewey → Buck Institute · USA · Modern',
    difficulty: 'Moderate adoption',
    diffClass: 'diff-medium',
    core: 'Deep learning happens when students work on extended, real-world projects that require them to investigate, collaborate, present, and revise. Projects have genuine audiences and real stakes. Learning is interdisciplinary.',
    benefits: ['Deep conceptual understanding vs surface memorisation', 'Strong collaborative and communication skills', 'Real-world problem-solving experience', 'Student agency and ownership of learning'],
    limits: ['Time-intensive; hard to fit into packed schedules', 'Requires skilled facilitation, not just instruction', 'Assessment is complex and non-standardised'],
    homeTitle: 'One Weekend Project Per Month',
    homeBody: 'Choose a real question your child cares about — "How does our building get water?", "Why is traffic so bad near our school?", "Where does our garbage go?" Spend a weekend investigating. Interview people. Draw diagrams. Present findings to the family.',
    vsCbse: 'CBSE science projects are often done by parents for children. Real PBL requires the child to own the investigation, make the mistakes, revise the approach, and present the learning. Even a simple weekend project done genuinely produces more learning than an elaborate project done for show.',
  },
  {
    id: 'inquiry',
    flag: '❓',
    name: 'Inquiry-Based Learning',
    origin: 'Constructivist Theory · Global',
    difficulty: 'Easy to adopt at home',
    diffClass: 'diff-easy',
    core: 'Learning begins with a question, not an answer. Students are given open-ended provocations — phenomena, problems, or mysteries — and asked to investigate before being told the explanation.',
    benefits: ['Questions become learning fuel, not interruptions', 'Deep understanding rather than surface recall', 'Builds scientific and philosophical thinking', 'Highly motivating — children drive the investigation'],
    limits: ['Can be slow; covers less content breadth', 'Requires patience from adults who want to give answers', 'Messier and less predictable than direct instruction'],
    homeTitle: 'Ask Before Telling & Set Up Provocations',
    homeBody: 'When your child asks "Why is the sky blue?", resist the urge to explain immediately. Say "That\'s a brilliant question — what do you think?" Place a magnet and a collection of objects on the table. Ask: "Which ones will the magnet attract? Why?" Don\'t explain. Let them test and figure out the pattern.',
    vsCbse: 'CBSE begins with definitions and explanations, then tests comprehension. Inquiry-based learning begins with an experience or question, lets children work toward understanding, and treats the textbook explanation as a confirmation of what they discovered — not a starting point.',
  },
  {
    id: 'unschooling',
    flag: '🌍',
    name: 'Unschooling',
    origin: 'John Holt · USA · 1970s',
    difficulty: 'Advanced — lifestyle change required',
    diffClass: 'diff-hard',
    core: 'Children are innately driven to learn, and given complete freedom, they will learn everything they need — naturally, joyfully, and at precisely the right time for their development. Life itself is the curriculum.',
    benefits: ['Maximal intrinsic motivation', 'Deep expertise in areas of genuine interest', 'No separation between learning and living', 'Freedom from exam anxiety entirely'],
    limits: ['Not legally viable as full replacement in India', 'College entry requires traditional credentials', 'Requires enormous parental time and commitment', 'Risk of gaps in foundational skills'],
    homeTitle: 'Trust Your Child\'s Natural Curiosity',
    homeBody: 'You cannot fully unschool in India\'s current system — but you can bring its spirit into home life. Once a week, ask your child "What would you like to learn about this week?" and organise a morning around their answer. When they are deeply absorbed in something — even something that looks like play — they are learning.',
    vsCbse: 'The unschooling insight most relevant to Indian parents: your child\'s enthusiasm is data. If they are enthusiastic, they are learning. If they are resistant, something is wrong. CBSE\'s one-size framework ignores this signal entirely. You don\'t have to.',
  },
]

export default function AlternativesPage() {
  return (
    <>
      <PageHero
        badge="Global Learning Wisdom"
        title="Education Systems That Got It Right"
        description="What the world's most effective learning philosophies teach us — and what Indian parents can borrow from each one, starting today."
      />

      <section className="section-sm">
        <div className="container">
          <div className="callout reveal" style={{ maxWidth: '860px', margin: '0 auto' }}>
            <p>
              You don&apos;t need to enrol your child in a Montessori school or move to Finland. Every one of
              these philosophies contains ideas you can apply at home — in 20 minutes, with everyday
              materials, right now. Read each one and pick one practice to try this week.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {philosophies.map(({
            id, flag, name, origin, difficulty, diffClass,
            core, benefits, limits, homeTitle, homeBody, vsCbse,
          }) => (
            <RevealWrapper key={id} style={{ marginBottom: '40px' }}>
              <article className="philosophy-card" id={id}>
                <div className="philosophy-header">
                  <div className="philosophy-flag">{flag}</div>
                  <div>
                    <h2>{name}</h2>
                    <div className="tagline">{origin}</div>
                  </div>
                  <div className={`difficulty-badge ${diffClass}`}>{difficulty}</div>
                </div>
                <div className="philosophy-body">
                  <div className="phi-grid">
                    <div className="phi-col">
                      <h3>Core Philosophy</h3>
                      <p>{core}</p>
                    </div>
                    <div className="phi-col">
                      <h3>Benefits</h3>
                      <ul>
                        {benefits.map((b) => <li key={b}>{b}</li>)}
                      </ul>
                    </div>
                    <div className="phi-col">
                      <h3>Limitations</h3>
                      <ul>
                        {limits.map((l) => <li key={l} className="con">{l}</li>)}
                      </ul>
                    </div>
                  </div>
                  <div className="home-adoption">
                    <h3>🏠 {homeTitle}</h3>
                    <p>{homeBody}</p>
                    <div className="vs-cbse"><strong>vs. CBSE approach:</strong> {vsCbse}</div>
                  </div>
                </div>
              </article>
            </RevealWrapper>
          ))}
        </div>
      </section>

      <CtaSection
        title="Theory is Wonderful. Action is Better."
        description="Pick one practice from any philosophy above and try it this weekend. You don't need a new school — you need a new Saturday."
        primaryHref="/activities"
        primaryLabel="See Practical Home Activities →"
        secondaryHref="/stories"
        secondaryLabel="Read Real Stories"
      />
    </>
  )
}
