import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import RevealWrapper from '@/components/RevealWrapper'
import CtaSection from '@/components/CtaSection'

export const metadata: Metadata = {
  title: 'Real Stories — Learning Moments That Changed Everything',
  description:
    "True-to-life stories about Indian families discovering experiential learning — the resistance, the breakthroughs, and the everyday moments that transformed how their children learn.",
  alternates: { canonical: '/stories' },
  openGraph: { url: 'https://cbsexperientalabs.in/stories' },
}

const storyPreviews = [
  {
    id: 'story1', tag: 'Class 2 · Maths',
    title: 'The Boy Who Hated Numbers — Until the Sabzi Wala Changed Everything',
    excerpt: 'Arjun scored 4 out of 20 in his Class 2 maths test. His mother tried worksheets, tuitions, and guilt. Then one Saturday she handed him ₹100 at the vegetable market...',
    location: 'Delhi · 2024',
    colorStyle: {},
  },
  {
    id: 'story2', tag: 'Nursery · Science',
    title: 'What My 4-Year-Old Taught Me About Asking the Right Questions',
    excerpt: "Meera's daughter Priya asked \"Why is the sky blue?\" for the 11th time. Instead of explaining, Meera asked her what she thought — and sat down to listen to the most extraordinary answer...",
    location: 'Bengaluru · 2025',
    colorStyle: { background: 'linear-gradient(90deg,var(--secondary),var(--accent))' },
  },
  {
    id: 'story3', tag: 'Class 4 · History',
    title: "Dead Kings and Old Dates — How One Road Trip Brought History to Life",
    excerpt: "Rohit's son refused to read his history chapter. \"It's all dead people and boring dates.\" So Rohit drove him to a 400-year-old building 12 kilometres from their home...",
    location: 'Hyderabad · 2024',
    colorStyle: { background: 'linear-gradient(90deg,var(--accent),var(--primary))' },
  },
  {
    id: 'story4', tag: 'Class 5 · Entrepreneurship',
    title: 'She Sold Lemonade and Learned More Economics Than Her Textbook Could Teach',
    excerpt: "Nadia set up a lemonade stall on her apartment building's society day. She priced it wrong, ran out of stock, and made her first real financial loss — and it was the best thing that ever happened to her education...",
    location: 'Mumbai · 2025',
    colorStyle: { background: 'linear-gradient(90deg,#7C3AED,var(--secondary))' },
  },
  {
    id: 'story5', tag: 'Class 3 · Biology',
    title: "The Ant Colony That Saved My Daughter's Relationship with Science",
    excerpt: "Kavita's daughter Diya had decided she \"hated science\" after a difficult Chapter 3. Then Kavita noticed an ant colony on the balcony and asked one question that changed everything...",
    location: 'Chennai · 2024',
    colorStyle: { background: 'linear-gradient(90deg,var(--secondary),#7C3AED)' },
  },
  {
    id: 'story6', tag: 'Class 1 · Confidence',
    title: 'From Silent to Unstoppable: How One Engineering Project Rebuilt a Child\'s Confidence',
    excerpt: "Vikram's son had become progressively quieter in school after a teacher publicly marked his drawing \"incorrect.\" An afternoon with newspaper and tape changed the story...",
    location: 'Pune · 2025',
    colorStyle: { background: 'linear-gradient(90deg,var(--primary),#7C3AED)' },
  },
]

const stories = [
  {
    id: 'story1',
    tags: ['Class 2', 'Maths', 'Financial Literacy', 'Delhi'],
    authorInitials: 'SV', authorClass: 'av-orange',
    authorName: 'Sunita Verma', authorRole: 'Mother of Arjun, Class 2 · Delhi',
    title: 'The Boy Who Hated Numbers — Until the Sabzi Wala Changed Everything',
    body: [
      "Arjun came home with a maths test marked 4 out of 20. He placed it on the dining table face-down and looked at me the way only a seven-year-old who expects disappointment can look — a kind of pre-emptive apology in his eyes.",
      "I had already enrolled him in a tuition. I had bought two supplementary workbooks. I had watched YouTube videos about \"fun maths for kids\" and tried three of the methods, all of which Arjun endured politely before going back to hating numbers. The problem wasn't that he wasn't trying. The problem was that he couldn't see why any of it mattered.",
    ],
    quote: '"Mama, when do I ever need to add things? My phone has a calculator."',
    body2: [
      "The next Saturday morning, instead of sitting him in front of the workbook, I put ₹80 in his pocket and took him to our local sabzi wala. I told him we needed tomatoes, onions, coriander, and potatoes. I told him he had ₹80. I told him the rest was his job.",
      "What happened in the next 45 minutes was more educational than anything that had happened in the previous two months of tutoring. Arjun asked the vendor what each item cost. He tried to calculate the total in his head. He made an error — bought too many potatoes — and found himself ₹12 over budget. He had to decide, on his own, to put some potatoes back. He negotiated. He counted change. He was genuinely solving a maths problem — because he genuinely needed to solve it.",
      "On the walk back home, he said something I will never forget. He said: \"The tomatoes cost 12 and the onions cost 20, so together they cost...\" He paused, counting silently. \"32. Right?\"",
      "He was adding. Not because I asked him to. Because he wanted to know.",
    ],
    lesson: "Arjun's next maths test: 14 out of 20. Not because we changed his tuition. Because numbers became real. He now asks about prices, calculates discounts at shops, and told me our electricity bill this month was ₹200 higher than last month and we should check if we left the geyser running too long.",
  },
  {
    id: 'story2',
    tags: ['Nursery', 'Curiosity', 'Science', 'Bengaluru'],
    authorInitials: 'MR', authorClass: 'av-teal',
    authorName: 'Meera Rao', authorRole: 'Mother of Priya, Age 4 · Bengaluru',
    title: "What My 4-Year-Old Taught Me About Asking the Right Questions",
    body: [
      "Priya asks \"why\" approximately forty times a day. I used to count. I stopped counting because it became a source of guilt — every unanswered \"why\" felt like a small failure.",
      "She asked why the sky was blue. I was cooking. I said \"because of the atmosphere.\" She said \"what's the atmosphere?\" I said \"like a blanket of air around the Earth.\" She went quiet. I thought the conversation was over.",
      "Then she said: \"But Mama, why is the blanket blue and not orange?\"",
      "I didn't know. And I was about to say \"I don't know, go play\" — which I had said, with minor variations, probably 300 times before. But that day something made me stop. I put down the spoon. I sat on the kitchen floor. And I said, \"What do you think? Why do you think it's blue?\"",
    ],
    quote: '"Maybe," said Priya, after a very long pause, "the sky is sad. And sad things are blue. Like when I cry."',
    body2: [
      "It wasn't science. It was poetry. And it was the beginning of something extraordinary.",
      "I pulled up a simple video about light and scattering. We watched it together on the kitchen floor, Priya in my lap. At the end she said: \"So the sky is blue because the blue light bounces around more. Like how the ball bounces more when you throw it harder?\"",
      "She was four years old. She had just independently made a conceptual analogy between light scattering and ball physics. Not because I taught her. Because I asked her what she thought first.",
    ],
    lesson: "I started asking \"What do you think?\" before every explanation. The quality of Priya's thinking — and my own patience — changed dramatically. She now approaches questions differently. Instead of waiting for an answer, she tries to construct one. That instinct, more than any fact she will ever memorise, will serve her for life.",
  },
  {
    id: 'story3',
    tags: ['Class 4', 'History', 'Travel Learning', 'Hyderabad'],
    authorInitials: 'RK', authorClass: 'av-purple',
    authorName: 'Rohit Krishnamurthy', authorRole: 'Father of Aditya, Class 4 · Hyderabad',
    title: "Dead Kings and Old Dates — How One Road Trip Brought History to Life",
    body: [
      "My son Aditya had a very clear, very firm opinion about history: it was boring. It was full of dead people who had nothing to do with him, wars he couldn't visualise, and dates he couldn't keep straight. He had a history test coming up and had flatly refused to open the chapter.",
      "\"It's just old stuff, Appa. Why do I need to know what Akbar had for breakfast?\"",
      "I didn't argue. I just said: \"Put on your shoes. We're going somewhere.\"",
      "We drove 40 minutes to Golconda Fort — something we had driven past hundreds of times and never entered. The fort is massive, ancient, dramatically ruined. He was quiet for almost ten minutes. Then he said: \"Who built this?\"",
      "And I asked him: \"What do you think? Who would want to build something this large in the middle of the Deccan plateau?\"",
    ],
    quote: 'In that one sentence he had understood something the entire textbook chapter never communicated — that history is about human beings trying to protect what they loved.',
    body2: [
      "The next two hours were unlike anything that had happened in his history education. He began asking questions I didn't know the answers to — about the acoustics, the water supply system, how people climbed the rocks to build the top level. We found a guide and Aditya grilled him like a journalist. He climbed everything climbable. He looked out from the highest point over the city and said, quietly: \"So this is what they were protecting.\"",
      "We went home. He opened his history chapter without being asked. He read it cover to cover. He said: \"Appa, this chapter is wrong about one thing — I asked the guide and it's not exactly like this.\"",
    ],
    lesson: "Aditya now has opinions about history. He disagrees with his textbook occasionally. He wants to visit places he reads about. He scored 19/25 in his history test. More importantly, he knows why it matters.",
  },
  {
    id: 'story4',
    tags: ['Class 5', 'Entrepreneurship', 'Economics', 'Mumbai'],
    authorInitials: 'PS', authorClass: 'av-orange',
    authorName: 'Preethi Sharma', authorRole: 'Mother of Nadia, Class 5 · Mumbai',
    title: 'She Sold Lemonade and Learned More Economics Than Her Textbook Could Teach',
    body: [
      "Nadia had been learning about \"trade and commerce\" in her Class 5 social science textbook. She could define barter, list the functions of money, and describe the difference between producer and consumer. She could write all of this in perfect sentences in an exam and get full marks. She had no idea what any of it actually meant.",
      "Our housing society was having its annual cultural day. I suggested she set up a small lemonade stall. She spent two evenings planning: lemons, sugar, water, plastic cups, a sign. She calculated that each glass cost ₹6 to make. She decided to sell at ₹15 a glass. She made 30 glasses worth of lemonade.",
      "By 11am she had sold 18 glasses. Then she ran out of sugar. She had not planned for restocking. The next 30 minutes of watching other children walk away was the most educational business lesson she will ever have.",
    ],
    quote: '"Mama, I had demand but no supply. That\'s what the chapter was talking about!"',
    body2: [
      "She had, in one morning, experienced supply, demand, cost, price, profit, restocking failure, and customer management. Her total profit: ₹162. She counted it three times.",
    ],
    lesson: "Nadia read the entire trade and commerce chapter that evening — voluntarily — to see what else she had \"experienced\" without knowing the terms for it. She is now planning a second stall. She has already identified her pricing error as a \"lesson.\" She is ten years old and thinking like a businesswoman.",
  },
  {
    id: 'story5',
    tags: ['Class 3', 'Biology', 'Observation', 'Chennai'],
    authorInitials: 'KN', authorClass: 'av-teal',
    authorName: 'Kavita Natarajan', authorRole: 'Mother of Diya, Class 3 · Chennai',
    title: "The Ant Colony That Saved My Daughter's Relationship with Science",
    body: [
      "Diya had decided, at age eight, that she was \"not a science person.\" She had made this decision with the certainty only a child can have — fully, completely, as though it were a discovered fact rather than a response to one difficult chapter and one impatient teacher.",
      "I noticed the ant trail on our third-floor balcony on a Tuesday evening. It ran from a crack in the wall to a small puddle of spilled honey — a perfectly organised highway of perhaps two hundred ants. I called Diya. I said nothing. I just pointed.",
      "She watched for five minutes without speaking. Then: \"How do they know where to go?\" Then: \"What are they carrying?\" Then: \"How do they not bump into each other going different directions?\"",
      "I had not said the word \"science\" once.",
      "We spent that evening looking up answers together. She found that ants communicate through pheromone trails — chemical signals that other ants can follow and strengthen.",
    ],
    quote: '"So they invented the internet. But with smells."',
    body2: [
      "That metaphor was better than anything in her textbook. And it was hers.",
      "The next morning she checked the ant trail before school. She started keeping a notebook. She put a different food item near the trail each day and recorded which the ants chose and how quickly they responded. She was running a controlled experiment. She didn't know that was what it was called.",
    ],
    lesson: "Diya no longer says she is \"not a science person.\" She says she is interested in entomology — which is a word she learned herself, from her own research, without being assigned it. Her science scores have improved, but more importantly she has recovered the belief that the natural world is fascinating and she is capable of understanding it.",
  },
  {
    id: 'story6',
    tags: ['Class 1', 'Confidence', 'Engineering', 'Pune'],
    authorInitials: 'VM', authorClass: 'av-purple',
    authorName: 'Vikram Mehta', authorRole: 'Father of Rohan, Class 1 · Pune',
    title: "From Silent to Unstoppable: How One Engineering Project Rebuilt a Child's Confidence",
    body: [
      "My son Rohan used to narrate his day at dinner with the enthusiasm of a documentary presenter. He asked questions constantly. Then, in Class 1, a teacher marked his drawing \"incorrect.\" The drawing was of a house with a round door — because he liked round doors, because they reminded him of the Hobbit films we had watched together. The teacher said houses don't have round doors.",
      "He stopped drawing. He stopped asking questions at dinner. He became careful — precise and small in a way that broke my heart to watch.",
      "Then one rainy Saturday I put 20 sheets of newspaper and a roll of tape on the floor and said: \"Let's see who can build the tallest tower that doesn't fall.\"",
      "His first tower collapsed in 40 seconds. He did not seem devastated — he seemed interested. He studied the collapsed pile and said: \"The bottom was too narrow.\" He tried again. This time he rolled the newspaper into tubes before stacking.",
    ],
    quote: "His fourth tower stood for thirty minutes. It was 71 centimetres tall. He measured it himself, three times, to be sure.",
    body2: [
      "At dinner that night he spoke for twenty-two minutes without stopping. He explained his design decisions, his failures, his iterations. He drew a diagram of his final structure on a paper napkin. He said he wanted to try it with spaghetti next time, because he'd read that engineers use spaghetti to test bridge designs.",
      "He had read that. Voluntarily. After building his tower.",
    ],
    lesson: "Rohan now fills notebooks with designs for buildings and imaginary machines. He builds things constantly. He has begun asking questions again. The dinner table narrations are back. None of this required a change of school or a new curriculum. It required 20 sheets of newspaper, a roll of tape, and a rainy Saturday afternoon with no agenda except discovery.",
  },
]

const tagColors: Record<string, string> = {
  'Class 2': 'orange', 'Class 5': 'orange', 'Nursery': 'orange',
  'Class 4': 'orange', 'Class 3': 'orange', 'Class 1': 'orange',
}

export default function StoriesPage() {
  return (
    <>
      <PageHero
        badge="Real Families. Real Moments."
        title="Stories That Changed How We Think About Learning"
        description="These are not success stories about perfect parents and genius children. They are honest accounts of small shifts that created enormous change."
      />

      {/* PREVIEW GRID */}
      <section className="section bg-light">
        <div className="container">
          <RevealWrapper className="section-header text-center" style={{ marginBottom: '40px' }}>
            <h2>Choose a Story</h2>
            <p className="section-subtitle">
              Each story is about a real moment — a kitchen, a market, a rainy afternoon — where learning
              stopped being something that happened at a desk.
            </p>
          </RevealWrapper>
          <RevealWrapper className="grid-3">
            {storyPreviews.map(({ id, tag, title, excerpt, location, colorStyle }) => (
              <div key={id} className="story-card">
                <div className="story-card-color" style={colorStyle} />
                <div className="story-card-body">
                  <span className="story-tag">{tag}</span>
                  <h3>{title}</h3>
                  <p>{excerpt}</p>
                </div>
                <div className="story-card-footer">
                  <span>{location}</span>
                  <a href={`#${id}`} className="read-more">Read story →</a>
                </div>
              </div>
            ))}
          </RevealWrapper>
        </div>
      </section>

      {/* FULL STORIES */}
      <section className="section">
        <div className="container">
          {/* Nav index */}
          <div className="stories-nav reveal">
            <h3>📖 Stories on this page</h3>
            <ul>
              {storyPreviews.map(({ id, title }) => (
                <li key={id}>
                  <a href={`#${id}`}>
                    <span className="arrow">→</span> {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {stories.map(({
            id, tags, authorInitials, authorClass, authorName, authorRole,
            title, body, quote, body2, lesson,
          }, idx) => (
            <div key={id} id={id}>
              <RevealWrapper className="story-full">
                <div className="story-tag-row">
                  {tags.map((tag) => (
                    <span key={tag} className={`story-tag-item${tagColors[tag] ? ' orange' : ''}`}>{tag}</span>
                  ))}
                </div>
                <div className="story-meta">
                  <div className={`author-avatar ${authorClass}`}>{authorInitials}</div>
                  <div>
                    <div className="name">{authorName}</div>
                    <div className="role">{authorRole}</div>
                  </div>
                </div>
                <h2>{title}</h2>
                {body.map((para, i) => <p key={i}>{para}</p>)}
                <blockquote>{quote}</blockquote>
                {body2.map((para, i) => <p key={i}>{para}</p>)}
                <div className="lesson-box">
                  <h3>The Shift That Happened</h3>
                  <p>{lesson}</p>
                </div>
              </RevealWrapper>
              {idx < stories.length - 1 && <div className="story-divider" />}
            </div>
          ))}
        </div>
      </section>

      <CtaSection
        title="Your Story Is Waiting to Be Written"
        description="Every one of these stories began with one small decision: to try something different. Pick an activity and try it this weekend."
        primaryHref="/activities"
        primaryLabel="Explore Home Activities →"
        secondaryHref="/manifesto"
        secondaryLabel="Read Our Manifesto"
      />
    </>
  )
}
