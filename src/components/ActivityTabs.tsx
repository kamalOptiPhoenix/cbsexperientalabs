'use client'

import { useState, useEffect } from 'react'

type Activity = {
  emoji: string
  title: string
  time: string
  skill: string
  what: string
  materials: string
  connection: string
  questions: string[]
}

type AgeGroup = {
  id: string
  label: string
  sub: string
  badge: string
  heading: string
  description: string
  activities: Activity[]
}

const ageGroups: AgeGroup[] = [
  {
    id: 'nursery',
    label: 'Nursery & KG',
    sub: 'Ages 3–5',
    badge: '🌱',
    heading: 'Nursery & Kindergarten — Ages 3 to 5',
    description: "At this age, everything is play, and play is everything. These activities honour the child's natural drive to explore with all five senses. The goal is not to teach — it is to wonder together.",
    activities: [
      { emoji: '🌱', title: 'Seed in a Bottle', time: '20 mins setup + 5 days observation', skill: '🧬 Biology & Observation', what: 'Place a bean or moong seed between moist cotton wool inside a transparent bottle or zip-lock bag. Tape it to a sunny window. Observe daily for 5–7 days as the root and shoot emerge.', materials: 'Bean/moong seeds, cotton wool, transparent bottle or zip-lock bag, tape, water.', connection: 'This is exactly how every mango, wheat grain, and rice plant begins. Your child is watching the origin of all food.', questions: ['Which direction does the root grow — up or down? Why?', 'What do you think the seed needs to grow?', 'What would happen if we kept it in the dark?'] },
      { emoji: '🌈', title: 'Colour Mixing Lab', time: '30 mins', skill: '🎨 Art & Colour Science', what: 'Give your child three cups of water coloured with red, yellow, and blue food colouring. Provide empty cups and let them mix freely. Encourage them to predict what colour will form before mixing.', materials: 'Food colouring (red, yellow, blue), clear cups or bowls, water, pipette or spoon.', connection: 'Printers, TVs, and painters all use colour mixing. Your child is discovering the basic science behind all visual art and display technology.', questions: ['What do you think red and yellow will make?', 'Can you make brown? How?', 'Which is your favourite colour you made?'] },
      { emoji: '🧊', title: 'Ice & Water Experiments', time: '45 mins', skill: '🔬 States of Matter', what: 'Freeze coloured water in ice cube trays. Give your child the ice cubes and let them explore — touch, smell, watch them melt. Try melting on different surfaces: plastic, metal, fabric. Which melts fastest?', materials: 'Water, ice cube tray, freezer, food colouring, different surfaces to test on.', connection: 'The water cycle your child studies in Class 4 begins here — solid, liquid, gas, and back again. They are touching the concept, not reading it.', questions: ['Why is the ice cold?', 'Where does the water go when it all melts?', 'What would make it melt faster?'] },
      { emoji: '🥄', title: 'Sink or Float', time: '30 mins', skill: '⚗️ Physics & Prediction', what: 'Fill a large basin with water. Collect 10–15 household objects (spoon, stone, cork, leaf, coin, sponge, rubber ball). Ask your child to predict — sink or float? — then test each one.', materials: 'Large basin, water, 10–15 assorted household objects.', connection: 'Why do massive ships float while a small coin sinks? This is the principle of buoyancy — the same physics that keeps every boat, submarine, and life jacket working.', questions: ['Which surprised you the most?', 'What do all the floaters have in common?', 'Can you make the coin float somehow?'] },
      { emoji: '👃', title: 'Smell & Taste Blindfold Game', time: '20 mins', skill: '🧠 Senses & Observation', what: 'Blindfold your child. Let them smell 5–6 familiar things (lemon, ginger, coffee, soap, banana). Can they name each one? Then taste small amounts of sweet, sour, salty, and bitter foods.', materials: 'Blindfold or soft cloth, 5–6 strongly scented foods/items, 4 taste samples.', connection: 'Our senses are our first scientific instruments. Animals use smell to identify food, danger, and family. This is the beginning of biology and neuroscience.', questions: ['How did you know what it was without seeing?', 'Which sense feels most powerful to you?', 'How do you think animals use their senses differently?'] },
      { emoji: '🌀', title: 'Shape Hunt Around the House', time: '20 mins', skill: '📐 Geometry & Observation', what: 'Teach your child three shapes (circle, square, triangle). Then go on a "shape hunt" through the house — find as many of each as possible. Keep a tally. Which is most common? Why?', materials: 'Just your home and your eyes. Optional: paper and crayon to tally.', connection: 'Geometry was invented to describe and build the physical world. Shapes are not abstract — they are everywhere, chosen deliberately by engineers, architects, and designers.', questions: ['Why do you think most tables and doors are rectangles?', 'Can you find a shape that isn\'t any of the three?', 'What shape would you use to build the strongest house?'] },
      { emoji: '🎶', title: 'Kitchen Band', time: '30 mins', skill: '🎵 Music & Physics of Sound', what: 'Collect pots, spoons, glasses of varying water levels, rubber bands stretched across a box. Let your child experiment with making sounds. Which makes the highest pitch? The lowest? Can they play a simple rhythm?', materials: 'Pots, lids, wooden spoons, glasses with different amounts of water, rubber bands, an empty box.', connection: 'Sound is vibration. Every musical instrument in the world — from a sitar to a drum to a violin — works on the same physics your child is discovering by banging a pot.', questions: ['Why does the fuller glass make a different sound?', 'Can you make a song using only these sounds?', 'What makes something sound loud vs. soft?'] },
      { emoji: '🌦️', title: 'Weather Diary', time: '5 mins daily for 2 weeks', skill: '🌍 Earth Science & Habits', what: 'Each morning, your child looks outside and draws a simple picture of the weather — sunny, cloudy, rainy, or windy. After 2 weeks, look at the pattern together. Can they predict what tomorrow will be like?', materials: 'A notebook or folded paper, crayons, 2 weeks of daily attention.', connection: 'Meteorologists do exactly this — observe patterns to make predictions. Your child is becoming a scientist through one of the most ancient human activities: watching the sky.', questions: ['What type of weather have we had most?', 'What do you think makes it rain?', 'What weather do you like best and why?'] },
    ],
  },
  {
    id: 'class1',
    label: 'Class 1 & 2',
    sub: 'Ages 6–7',
    badge: '📚',
    heading: 'Class 1 & 2 — Ages 6 to 7',
    description: 'Children at this stage are beginning to read, count, and reason more formally. These activities bridge school concepts and real life — showing children that what they learn in class actually exists outside the classroom.',
    activities: [
      { emoji: '🛒', title: 'Grocery Budget Manager', time: '60 mins (weekend market trip)', skill: '💰 Maths, Money & Decision-Making', what: 'Give your child ₹50–₹100. Ask them to plan and buy 4–5 vegetable items for the week. They hold the money, speak to the vendor, count change, and make trade-off decisions if they go over budget.', materials: 'Real currency (₹50–100), a local vegetable market.', connection: 'Every concept taught in Class 2 maths — addition, subtraction, comparison, units — comes alive when money is real and the stakes are small but genuine.', questions: ['Which vegetable costs the most? Is it worth it?', 'If we have ₹20 left, what else can we buy?', 'Why do you think onions cost more this week?'] },
      { emoji: '📏', title: 'Measure Everything Day', time: '45 mins', skill: '📐 Measurement & Units', what: 'Give your child a tape measure or ruler. Spend an afternoon measuring objects around the house. How wide is the door? How tall is your child? How long is the dining table? Record everything in a "Measurement Book."', materials: 'Measuring tape or ruler, notebook, pencil.', connection: 'Architects, tailors, cooks, and engineers measure constantly. Measurement is the language that makes building, cooking, and designing possible.', questions: ['What is the biggest thing you measured today?', 'How many of your hand-spans fit across the table?', 'Why do we need standard measurements instead of just using hands?'] },
      { emoji: '🌿', title: 'Leaf & Bark Printing', time: '45 mins', skill: '🌱 Nature Science & Art', what: 'Collect leaves of different shapes and sizes. Place each leaf face-down under paper and rub a wax crayon over it to reveal the pattern of veins. Compare the vein patterns across different leaves.', materials: 'Various leaves, white paper, wax crayons, outdoor time.', connection: 'Leaf veins are the plant\'s transport system — carrying water and nutrients exactly as veins carry blood in our bodies. Biology, art, and botany in one afternoon.', questions: ['Why do you think leaves have different vein patterns?', 'What do you think would happen if a leaf had no veins?', 'Which leaf made the most beautiful print?'] },
      { emoji: '📖', title: 'Bedtime Story Retelling', time: '20 mins daily', skill: '🗣️ Language, Memory & Communication', what: 'Read a short story to your child. The next evening, ask them to retell it to you — or to a toy, or to a grandparent on video call. Encourage them to add expression, change the ending, or add a new character.', materials: 'Any story book — or make one up together.', connection: 'Storytelling is the foundation of communication, empathy, memory, and language — the most important skill for any career, relationship, or leadership role.', questions: ['What was the most important part of the story?', 'How do you think the main character felt?', 'If you could change one thing in the story, what would it be?'] },
      { emoji: '🏗️', title: 'Build the Tallest Tower', time: '40 mins', skill: '🔧 Engineering & Problem-Solving', what: 'Give your child 20 sheets of newspaper and a roll of tape. Challenge them to build the tallest free-standing tower possible. Let them try, fail, redesign, and try again. Time: 30 minutes.', materials: '20 sheets of newspaper, tape, a ruler or measuring tape.', connection: 'Every architect and structural engineer in the world faces this same challenge: how to build tall structures that don\'t fall. Your child is doing engineering.', questions: ['Why did your first design fall? What did you change?', 'What shape made the strongest base?', 'If you had 20 more minutes, what would you do differently?'] },
      { emoji: '🌡️', title: 'Shadow Clock', time: 'All day observation (5 min checks)', skill: '☀️ Earth Science & Time', what: 'On a sunny day, place a stick in the ground (or in a pot of soil) in the morning. Mark the shadow\'s tip with a stone. Return every 2 hours and mark again. By evening, you have a sundial.', materials: 'A stick, soil or a pot, small stones to mark positions, sunlight.', connection: 'Before clocks existed, humans told time by the sun\'s shadow. This is the original clock — and it teaches the Earth\'s rotation more viscerally than any textbook diagram.', questions: ['Which direction did the shadow move?', 'Why do you think the shadow changes length?', 'What would happen if you did this experiment on a cloudy day?'] },
      { emoji: '🔢', title: 'Number Hunt in the Kitchen', time: '30 mins', skill: '🔢 Number Sense & Reading Labels', what: 'Go through your kitchen with your child. Find numbers on packaging — expiry dates, weights, quantities, prices, nutrition values. Read and discuss what each number means.', materials: 'Your kitchen cupboard, packaged food items.', connection: 'Numbers are not abstract — every number on every package in your kitchen is there because a real decision needed to be made. Reading labels is a life skill most adults were never taught.', questions: ['What does "expires on" mean? What happens after that date?', 'Which is heavier — this packet or that one?', 'Why do you think companies put nutrition information on packets?'] },
      { emoji: '🐜', title: 'Ant Observation Station', time: '30 mins observation + 1 week tracking', skill: '🧬 Biology & Scientific Observation', what: 'Find an ant trail near your home. Place a small piece of food near the trail. Observe for 15 minutes. Watch how ants communicate, share food, and carry loads many times their body weight. Draw what you see.', materials: 'A magnifying glass (optional), a small food sample, a notebook.', connection: 'Ants invented social organisation, agriculture, construction, and communication systems millions of years before humans did. Studying ants is studying biology, sociology, and engineering simultaneously.', questions: ['How does one ant tell another ant where the food is?', 'How do ants carry something heavier than themselves?', 'What would happen if you moved the food to a different spot?'] },
    ],
  },
  {
    id: 'class3',
    label: 'Class 3 & 4',
    sub: 'Ages 8–9',
    badge: '🔬',
    heading: 'Class 3 & 4 — Ages 8 to 9',
    description: "Children this age are developing logical reasoning, beginning to think abstractly, and are hungry for complexity. These activities challenge them to connect, apply, and create — moving from passive receivers to active investigators.",
    activities: [
      { emoji: '🗺️', title: 'Map Your Neighbourhood', time: '90 mins', skill: '🌍 Geography, Scale & Spatial Thinking', what: 'Walk your neighbourhood with your child. Ask them to draw a map of your area from memory first. Then go on the walk and correct it. Add landmarks, estimate relative distances, mark compass directions. Compare to a maps app.', materials: 'Large paper, pencil, compass (phone), maps app to verify.', connection: 'Cartography, navigation, urban planning, and logistics all depend on the same spatial reasoning your child is building right now.', questions: ['What did your mental map get wrong?', 'Why do maps need to use scale?', 'If you had to give a stranger directions from our house to school, what would you say?'] },
      { emoji: '💡', title: 'Simple Circuit Builder', time: '60 mins', skill: '⚡ Physics & Electrical Engineering', what: 'Using a 9V battery, connecting wires, and a small LED, help your child build a working circuit. Once it lights up, add a second bulb. Explore series vs. parallel by trial and error.', materials: '9V battery, insulated wire (stripped at ends), small LED or torch bulb, battery clip connector. Available at any electronics store for under ₹100.', connection: 'Every device your child uses — phone, TV, ceiling fan, laptop — runs on circuits. Understanding this is the beginning of electrical engineering.', questions: ['Why did the bulb not light when you disconnected one wire?', 'What do you think happens when a circuit "breaks" at home?', 'How does a switch work?'] },
      { emoji: '📰', title: 'Weekly Family News Report', time: '45 mins weekly', skill: '📝 Language, Critical Thinking & Civics', what: 'Every Sunday, your child reads one short news article (you select an age-appropriate one). They write or narrate a 5-sentence summary: What happened? Where? Who was involved? Why does it matter? What do you think should happen next?', materials: 'A newspaper or curated news website for kids, paper, pen.', connection: 'Reading, comprehending, summarising, and forming opinions about real events is the foundation of civic intelligence, media literacy, and effective writing.', questions: ['Do you agree with what the article says? Why or why not?', 'Who might think differently about this event?', 'How does this news affect people in our city?'] },
      { emoji: '🌱', title: 'Balcony Kitchen Garden', time: '2 hrs setup + daily 5-min care for 4 weeks', skill: '🌿 Biology, Responsibility & Food Systems', what: 'Plant methi, coriander, or spinach seeds in pots or old plastic containers. Your child is responsible for daily watering. Track growth with weekly photographs. Harvest and use in cooking.', materials: '2–3 plastic pots, potting soil, seeds (methi, coriander, spinach — cheap and fast-growing), water.', connection: 'Every vegetable on your plate began exactly this way. Understanding where food comes from and what it needs to grow changes how children eat, waste, and relate to nature permanently.', questions: ['What does the plant need to grow? How do you know?', 'What would happen if we forgot to water it for a week?', 'How long did it take from seed to food? What does that tell you about farming?'] },
      { emoji: '🧮', title: 'Family Budget Worksheet', time: '60 mins', skill: '💰 Financial Literacy & Maths', what: 'Share simplified versions of your monthly expenses with your child (groceries, electricity, transport, fun). Ask them to add it up, find where the biggest money goes, and suggest one way the family could save ₹500 this month.', materials: 'Paper, pen, and simplified real numbers from your household expenses.', connection: 'Personal finance — budgeting, saving, deciding between needs and wants — is the single most universally useful life skill that school never teaches.', questions: ['What costs the most in our home? Does that surprise you?', 'What is the difference between something we need and something we want?', 'If we saved ₹500 every month, how much would we have in a year?'] },
      { emoji: '⚗️', title: 'Vinegar & Baking Soda Lab', time: '45 mins', skill: '🧪 Chemistry & Experimentation', what: 'Mix baking soda and vinegar. Watch the fizzing reaction. Try different amounts — what happens with more baking soda? More vinegar? Add food colouring. Inflate a balloon using the gas produced.', materials: 'Baking soda, white vinegar, food colouring, a plastic bottle, a balloon.', connection: 'This is an acid-base reaction — the same chemistry that makes bread rise, gives fizzy drinks their bubbles, and is used in fire extinguishers. Chemistry is not in a laboratory far away. It is in your kitchen.', questions: ['What caused the fizzing? Where did the gas come from?', 'What would happen if you used cold vinegar vs. warm vinegar?', 'Can you use this reaction to do something useful?'] },
      { emoji: '🗣️', title: 'Debate: Should School Have Homework?', time: '30 mins', skill: '🧠 Critical Thinking & Argumentation', what: 'Assign your child one side of the debate — "Yes, homework is good" or "No, homework is bad." They must prepare 3 arguments for their assigned side. Debate for 5 minutes each. Switch sides and do it again.', materials: 'Just you, your child, and 30 minutes of genuine engagement.', connection: 'Argumentation, evidence-based reasoning, and the ability to argue for a position you personally disagree with are the foundations of law, science, democracy, and good business thinking.', questions: ['Which argument surprised you when you had to argue it?', 'Did arguing the other side change your own opinion?', 'What evidence would make the strongest argument either way?'] },
      { emoji: '🔭', title: 'Moon Phase Tracker', time: '5 mins nightly for 4 weeks', skill: '🌙 Astronomy & Pattern Recognition', what: 'Every clear night for a full month, your child looks at the moon and draws its shape in a notebook. After 28–30 days, they will have mapped the full lunar cycle. Can they predict what the moon will look like tomorrow?', materials: 'A notebook, pencil, clear night sky, patience.', connection: 'The lunar calendar governs festivals, tides, agricultural planting, and navigation. Astronomy is the world\'s oldest science, and your balcony is the oldest observatory.', questions: ['How long does a full moon cycle take?', 'Why does the moon appear to change shape?', 'How did people use the moon\'s phases before we had calendars?'] },
    ],
  },
  {
    id: 'class5',
    label: 'Class 5',
    sub: 'Age 10',
    badge: '🚀',
    heading: 'Class 5 — Age 10',
    description: "At 10, children are developing abstract reasoning and beginning to form opinions about the world. These activities challenge them to investigate, create systems, think ethically, and take on real responsibility — the hallmarks of genuine intelligence.",
    activities: [
      { emoji: '🏪', title: 'Run a Mini Business', time: 'Weekend project (2 days)', skill: '💼 Entrepreneurship, Finance & Communication', what: 'Help your child choose a product they can make or service they can offer (lemonade, bookmarks, phone case art, garden watering for neighbours). Plan costs, set a price, serve 5 "customers." Count profit or loss. Discuss what went right.', materials: 'Depends on the chosen product — materials cost ₹50–200 maximum.', connection: 'Every business in the world — from a street stall to a tech company — runs on the same fundamentals: cost, price, value, customer satisfaction, and iteration.', questions: ['Did you make a profit or a loss? Why?', 'What would you charge differently next time?', 'What did customers like most? How do you know?'] },
      { emoji: '💧', title: 'Water Audit at Home', time: 'Half-day investigation', skill: '🌍 Environmental Science & Systems Thinking', what: 'Your child spends a day tracking every use of water at home (with a notebook). Bathing, cooking, washing, flushing. Estimate amounts. Where does your household water come from? Where does wastewater go?', materials: 'Notebook, pen, a measuring jug for estimation, and genuine curiosity.', connection: 'India is facing a water crisis. Children who understand water systems and usage patterns are the citizens who will design solutions.', questions: ['Which activity in our home uses the most water?', 'Where does the water in our taps come from?', 'If water cost 10x more, what would we do differently?'] },
      { emoji: '📊', title: 'Electricity Bill Detective', time: '60 mins', skill: '🔢 Applied Maths, Energy & Financial Literacy', what: 'Give your child your actual electricity bill. Ask them to identify: total units consumed, cost per unit, highest consumption month. Which appliances use the most electricity? If you reduced fan usage by 2 hours a day, how much would you save per month?', materials: '2–3 months of actual electricity bills, calculator, notebook.', connection: 'Understanding utility bills, energy consumption, and cost is a life skill almost no Indian adult was taught in school — yet everyone needs it.', questions: ['Which month did we use the most electricity? Why?', 'What is one thing we could do to reduce our bill?', 'What does our electricity use have to do with the environment?'] },
      { emoji: '🧬', title: 'Body Systems Investigation', time: '90 mins', skill: '🫀 Biology & Health Literacy', what: 'Measure your child\'s resting heart rate. Then they do 2 minutes of jumping jacks. Measure again. Do 5 minutes of rest. Measure again. Track the pattern. Discuss: why does the heart speed up?', materials: 'A watch with a second hand (or phone), a notebook, and a willing child.', connection: 'When a child feels their own heartbeat change and understands why, biology becomes personal — not theoretical.', questions: ['How fast does your heart recover to normal after exercise?', 'Why does the heart beat faster when you exercise?', 'What do you think would happen to heart rate during sleep?'] },
      { emoji: '🎙️', title: 'Interview a Local Expert', time: '30 mins preparation + 45 mins interview', skill: '🗣️ Communication, Research & Social Awareness', what: 'Choose a local person with expertise — a vegetable vendor, a local doctor, a tailor, a mechanic. Your child prepares 7 questions, conducts the interview (with your accompaniment), and writes a 1-page profile. Present it at dinner.', materials: 'A notebook for questions, pen, phone to record (with permission).', connection: 'Every professional journalist, researcher, doctor, and diplomat started by learning how to ask good questions and listen carefully.', questions: ['What surprised you most about what they said?', 'What challenges does this person face that you never thought about?', 'Did they answer any question in a way you didn\'t expect?'] },
      { emoji: '🌐', title: 'Local History Detective', time: 'One weekend', skill: '📜 History, Research & Critical Thinking', what: 'Ask your child to investigate one historical question about your neighbourhood: Why is the main road called by that name? When was this building built? What was here before our colony? Interview older residents and family members.', materials: 'Notebook, pen, phone to photograph, willingness to ask elders questions.', connection: 'History is not about kings and dates in textbooks. It is about why the world looks the way it does. Your neighbourhood is a living history book.', questions: ['What did you discover that no one in the family knew?', 'How has this area changed in the past 20 years?', 'Who are the people whose stories are not being told?'] },
      { emoji: '🤔', title: 'Ethical Dilemma Dinner Table', time: '20 mins at dinner, once a week', skill: '⚖️ Ethics, Reasoning & Empathy', what: 'Once a week at dinner, pose one ethical dilemma. Example: "If you found ₹500 on the road with no one around, what would you do — and why?" or "If your friend copied your answers in a test, would you tell the teacher?" Discuss. No right answer. Explore the reasoning.', materials: 'Just dinner and genuine conversation.', connection: 'Ethical reasoning — the ability to navigate situations where values conflict — is the most important skill for every adult, in every profession, in every relationship.', questions: ['Why did you make that choice?', 'What would your decision cost you? Is it worth it?', 'Could someone reasonable disagree with you? How?'] },
      { emoji: '🎨', title: 'Redesign Something Broken', time: '2 hours', skill: '🔧 Design Thinking & Creativity', what: 'Choose one thing in your home or neighbourhood that doesn\'t work well. Your child defines the problem, interviews 2–3 people who experience it, and designs a solution — sketched on paper with explanation.', materials: 'Paper, pencil, observation skills, and the willingness to see problems as invitations.', connection: 'Every product and service in the world was designed by someone who first noticed a problem and imagined it differently. Design thinking is the foundation of engineering, architecture, and innovation.', questions: ['Who else is affected by this problem? Did they all feel it the same way?', 'What would your solution cost to build?', 'What might go wrong with your solution? How would you fix that?'] },
    ],
  },
]

export default function ActivityTabs() {
  const [activeId, setActiveId] = useState('nursery')

  // Support hash-based navigation on mount
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (ageGroups.some((g) => g.id === hash)) setActiveId(hash)
  }, [])

  const active = ageGroups.find((g) => g.id === activeId)!

  return (
    <>
      {/* Tabs */}
      <div className="age-tabs" id="age-tabs">
        {ageGroups.map(({ id, badge, label, sub }) => (
          <button
            key={id}
            className={`age-tab${activeId === id ? ' active' : ''}`}
            onClick={() => setActiveId(id)}
            aria-pressed={activeId === id}
          >
            {badge} {label}<br /><small>{sub}</small>
          </button>
        ))}
      </div>

      {/* Active age group */}
      <div id={active.id}>
        <div className="activity-header">
          <div className="class-badge">{active.badge}</div>
          <div>
            <h2>{active.heading}</h2>
            <p>{active.description}</p>
          </div>
        </div>

        <div className="activity-grid">
          {active.activities.map(({ emoji, title, time, skill, what, materials, connection, questions }) => (
            <article key={title} className="activity-card">
              <div className="activity-card-header">
                <div className="activity-emoji">{emoji}</div>
                <h3>{title}</h3>
              </div>
              <div className="activity-card-body">
                <div className="activity-meta">
                  <span className="meta-tag time">⏱ {time}</span>
                  <span className="meta-tag skill">{skill}</span>
                </div>
                <p><strong>What to do:</strong> {what}</p>
                <p><strong>Materials:</strong> {materials}</p>
                <p><strong>Real-world connection:</strong> {connection}</p>
                <div className="activity-questions">
                  <h4>Ask your child:</h4>
                  <ul>
                    {questions.map((q) => <li key={q}>{q}</li>)}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}
