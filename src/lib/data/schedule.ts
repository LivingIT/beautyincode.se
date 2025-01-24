interface ScheduleItem {
  time: string;
  speakerSlug?: string;
  name: string;
  description?: string;
  title?: string;
  image?: string;
}

export const schedule: Array<ScheduleItem> = [
  {
    time: '08:15',
    name: 'The doors open',
    image: '/images/welcome.webp',
    description: '<p>Coffee and tea will be served.</p>',
  },
  {
    time: '09:00',
    name: 'Fredrik Mörk',
    image: '/images/speakers/fredrik-mork.webp',
    title: 'Opening',
  },
  {
    time: '09:05',
    speakerSlug: 'nicholas-fernholm',
    name: 'Nicholas Fernholm',
    title: 'From AI Risk to AI Opportunities',
    description: `<p>In a world characterized by unpredictability, complexity, and rapid technological change, the ability to foresee and manage uncertainty and new innovations is key to success. During this lecture, we will explore how technologies such as AI and new tools can be used to adapt to an uncertain future, and how we can build robust strategies to meet tomorrow's challenges.</p>`,
  },
  {
    time: '10:00',
    name: 'Fika',
    image: '/images/fika.webp',
    description: '<p>A short break with refreshments.</p>',
  },
  {
    time: '10:30',
    speakerSlug: 'lisette-sutherland',
    name: 'Lisette Sutherland',
    title: 'The Future of Work: Deliberate, Flexible, and Connected',
    description: `<p>As hybrid work environments become the norm, the future of work is both flexible and deliberate. Many forward-thinking companies are now hiring Heads of Remote to integrate flexibility into their operational DNA. This talk will explore how organizations can thrive in a flexible-first world by focusing on intentional collaboration, advanced tools, and a redefined approach to company culture.</p>
<p>Join us for a dynamic exploration of how modern teams can enhance productivity and connection, whether working in the office, remotely, or anywhere in between. Whether you’re a seasoned remote worker or new to hybrid arrangements, this talk will equip you with the knowledge to succeed in today’s evolving work environment.
</p>`,
  },
  {
    time: '11:30',
    speakerSlug: 'linda-rising',
    name: 'Linda Rising',
    title: 'The Magic of Teams',
    description: `<p>Humans have been working in teams as long as humans have been around. We've learned a lot but what does science say about teams? You've likely heard of Dunbar's Number but did you know it's not a single number but a series of ranges of numbers? New research on rituals helps explain the success of agile. We know that the elements of the agile process are not new, but that leads to the "whole is greater than the sum of its parts" solution. The power of ritual might offer a better explanation. This talk will touch on two "magic" aspects of teams -- size and ritual -- and what that might mean for better ways of working.</p>`,
  },
  {
    time: '12:15',
    name: 'Lunch',
    image: '/images/lunch.webp',
    description: '<p>Enjoy a delicious lunch break.</p>',
  },
  {
    time: '13:15',
    speakerSlug: 'kevlin-henney',
    name: 'Kevlin Henney',
    title: 'Learning from Failure',
    description: `<p>We are surrounded by failure. Everywhere we look — our browsers, our phones, supermarket checkouts, advertising billboards, airport timetables — there's often a display showing a broken configuration, a bootup sequence or the blue screen of death. And sometimes the failure is bigger than what we see — just think of CrowdStrike.</p>
<p>As software professionals we need to ask what we can learn from these failures. What simple but time-tested techniques can we apply to reduce the probability of something going wrong?</p>`,
  },
  {
    time: '14:15',
    speakerSlug: 'gitte-klitgaard',
    name: 'Gitte Klitgaard',
    title: 'What Engineering Departments would look like with great managers',
    description: `<p>Over the last years, disengagement in the global workforce have grown, number of stressed people have grown, number of lonely people have grown. While the job market has an impact on the numbers, the managers have a lot higher impact.
We want an organisation that fosters great managers, and gives them the mandate to create safe and challenging working environments; where engineering teams thrive and create great quality products that provide value; where we don’t need magic to run a company.</p>
      <p>Come hear what that could look like.</p>`,
  },
  {
    time: '15:00',
    name: 'Fika',
    image: '/images/fika.webp',
    description: '<p>A second break with refreshments.</p>',
  },
  {
    time: '15:30',
    // speakerSlug: 'dave-farley',
    name: 'TBA',
    // title: 'TBA',
    description: `<p>We will update this slot soon.</p>
`,
  },
];
