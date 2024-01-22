/**
 * Schedule item data structure
 * @typedef {Object} ScheduleItem
 * @property {string} start - The beginning of the schedule item
 * @property {string} end - The end of the schedule item
 * @property {string} [id] - The unique identifier for the speaker (if applicable)
 * @property {string} [name] - The name of the event or the speaker
 * @property {string} [description] - The description of the schedule item
 */

const schedule = [
  {
    start: '08:15',
    end: '09:00',
    name: 'The doors open',
    image: '/images/welcome.webp',
    description: '<p>Coffee and tea will be served.</p>',
  },
  {
    start: '09:00',
    end: '09:05',
    name: 'Fredrik Mörk',
    image: '/images/speakers/fredrik-mork.webp',
    title: 'Opening',
  },
  {
    start: '09:05',
    end: '10:00',
    id: 'kesha-williams',
    name: 'Kesha Williams',
    title: 'Ethics in AI',
    description: `<p>This talk dives into the critical role of ethics in the fast-evolving AI landscape, with a special emphasis on Large Language Models (LLMs). We'll tackle the challenges and strategic solutions for ensuring data privacy, reducing biases, and enhancing transparency in AI systems. Anchored by real-world case studies, our discussion will underline the crucial balance between cutting-edge AI development and ethical responsibility. Participants will gain insights into responsibly implementing LLMs in data projects, focusing on compliance and ethical integrity.</p>`,
  },
  {
    start: '10:00',
    end: '10:30',
    name: 'Fika',
    image: '/images/fika.webp',
  },
  {
    start: '10:30',
    end: '11:15',
    id: 'niall-merrigan',
    name: 'Niall Merrigan',
    title: 'Optimistic Security',
    description: `
      <p>Security is very often explained as being very experienced based. The more mistakes you have made, the more likely you are to be prepared in the future.</p>
      <p>Unfortunately this is not always the case as there is so much information that our brains need to take shortcuts to keep up. This is where biases come into the equation, and this can have a detrimental effect on our ability to secure our private and business lives.</p>
      <p>In this session, Niall will look at various things that can affect how we make decisions as well as complicate our ability to react when dealing with a security event. We will look at real world examples of this and what happened and what could have been done.</p>
      <p>This session will ask you to do an introspective on your security practices and look for own biases so that you can protect yourself better.</p>
    `,
  },
  {
    start: '11:30',
    end: '12:15',
    id: 'lisette-sutherland',
    name: 'Lisette Sutherland',
    title: 'Thriving in the future of work: Embracing remote-first',
    description: `
      <p>Hybrid working existed before covid, but covid made it more widespread. With extensive polling of workers worldwide, the answer is clear: the future of work is choice. For organizations to survive and thrive in the modern world, we want to be able to work in a “remote first” way: working online as if we were in the office together.</p>
    <p>In this presentation, tailored for workers who may think, "We've been working remotely for years now; what else is there to learn?" we'll dive deeper into the nuances of the virtual office and explore innovative strategies for seamless collaboration at a distance. We'll go beyond the basics and delve into advanced techniques digital nomads, virtual entrepreneurs, and global organizations use to foster a truly connected remote workforce.</p>
    `,
  },
  {
    start: '12:15',
    end: '13:15',
    name: 'Lunch',
    image: '/images/lunch.webp',
  },
  {
    start: '13:15',
    end: '14:00',
    id: 'dylan-beattie',
    name: 'Dylan Beattie',
    title: 'Analogue Evolution, Digital Revolution: Tipping Points in Technology',
    description: `
      <p>Technological progress is non-linear. Sometimes, innovation is a smooth curve; hundreds of small, incremental improvements over many years – until something comes along that changes the game; something that fundamentally challenges our assumptions around what technology can achieve. Within the last few decades, technology has profoundly and irreversibly changed the shape of human society; how we work, how we relax, how we communicate and collaborate. And, in almost every case, the key has been digitalisation: the ability to transform part of our reality into a stream of bits.</p>
      <p>With the benefit of hindsight, it’s easy to see the tipping points, to identify the moments when a particular technology or idea achieved critical mass, when something went from being an interesting prototype to a viable product – but for people who were there at the time, it often wasn’t nearly so obvious. In an industry that’s perpetually excited about the “next big thing”, how do developers and technologists decide what to focus on? Will machine learning replace developers? Is AI a fun toy, a useful tool – or an existential threat to humanity? Join Dylan Beattie for an entertaining look at some of the innovations that really did change the world, and how understanding our history can help us make sense of the next digital revolution – whatever that turns out to be.</p>
    `,
  },
  {
    start: '14:15',
    end: '15:00',
    id: 'jonah-andersson',
    name: 'Jonah Andersson',
    title: 'Cloud Migration and Modernization Mistakes You Should Avoid',
    description: `
      <p>Join Jonah Andersson, in this enlightening and lessons-learned session where she shares the landscape of cloud migration, her own cloud migration journey as a developer and IT architect. In this session, we will be exploring the most critical mistakes that developers, IT architects, and business leaders must avoid at all costs.</p>
    `,
  },
  {
    start: '15:00',
    end: '15:30',
    name: 'Fika',
    image: '/images/fika.webp',
  },
  {
    start: '15:30',
    end: '16:30',
    name: 'Panel discussion',
    image: '/images/speakers/kevlin-henney.webp',
    description: `<p>With all speakers. Hosted by Kevlin Henney.</p>`,
  },
];

export default schedule;
