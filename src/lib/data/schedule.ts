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
    title: 'TBA',
    description: `<p>We will update with Lisette’s talk soon.</p>`,
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
    title: 'TBA',
    description: `<p>We will update with Kevlin’s talk soon.</p>`,
  },
  {
    time: '14:15',
    speakerSlug: 'gitte-klitgaard',
    name: 'Gitte Klitgaard',
    title: 'TBA',
    description: `<p>We will update with Gitte’s talk soon.</p>`,
  },
  {
    time: '15:00',
    name: 'Fika',
    image: '/images/fika.webp',
    description: '<p>A second break with refreshments.</p>',
  },
  {
    time: '15:30',
    speakerSlug: 'dave-farley',
    name: 'Dave Farley',
    title: 'What does “Good” look like?',
    description: `<p>Many people working in software development spend their careers without seeing what good looks like. Our history is littered with inefficient processes creating poor quality output, too late to capitalise on the expected business value. How have we got to this state? How do we get past it? What does good really look like?</p>
<p>Continuous Delivery changes the economics of software development, find out how and why.</p>`,
  },
];
