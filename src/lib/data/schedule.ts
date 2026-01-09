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
    speakerSlug: 'susanne-pettersson',
    name: 'Susanne Pettersson',
    title: 'TBA',
    description: `<p>TBA!</p>`,
  },
  {
    time: '10:00',
    name: 'Fika',
    image: '/images/fika.webp',
    description: '<p>A short break with refreshments.</p>',
  },
  {
    time: '10:30',
    speakerSlug: 'rendle',
    name: 'Rendle',
    title: 'Futurology for Developers',
    description: `<p>2024 was the 35th anniversary of my first job in tech. On my first day I was given a Wyse 60 terminal attached via RS232 cables to a Tandon 286, and told to learn C from a dead tree so I could write text applications for an 80x24 character screen. Fast-forward to now: my phone is about a million times more powerful than that Tandon; screens are 3840x2160 pixels; every computer in the world is attached to every other thing with no cables; and we code using... still basically C, even if we get LLMs to write it for us.</p>
<p>Having lived through all these changes in realtime, and as an incurable neophile, I think I can make an educated guess as to what the next 35 years are going to be like, and what we're all going to be doing by 2060. If anything, I'm going to underestimate it, but hopefully you'll be inspired, invigorated and maybe even informed about the future of your career in tech. And yes, you do have one.</p>`,
  },
  {
    time: '11:30',
    speakerSlug: 'trisha-gee',
    name: 'Trisha Gee',
    title: 'TBA',
    description: `<p>TBA!</p>`,
  },
  {
    time: '12:15',
    name: 'Lunch',
    image: '/images/lunch.webp',
    description: '<p>Enjoy a delicious lunch break.</p>',
  },
  {
    time: '13:15',
    speakerSlug: 'dylan-beattie',
    name: 'Dylan Beattie',
    title: 'Do It With Style: Rethinking CSS',
    description: `<p>Cascading Style Sheets. CSS. The language everybody loves to hate. Everything's global, there's no control flow, there's no error messages... in fact, some people say it isn't even a real programming language.</p>

<p>But CSS isn't just about making websites look pretty. It's one of the fundamental building blocks of the open web, and it's continuously evolving. Modern CSS has variables, grids, flexboxes, animations, view transitions... When it comes to layout, accessibility, interaction and validation, CSS can do all kinds of things you thought were impossible - or at least, only possible with a lot of complicated JavaScript. Dylan Beattie's been building web applications since before CSS was invented - yes, really - and in this session, he'll take you on a whirlwind tour of some of the weird and wonderful things you can do in 2026 using semantic HTML, a generous sprinkling of CSS, and absolutely no JavaScript.</p>

<p>OK, maybe a tiny bit of JavaScript. But absolutely no React.</p>`,
  },
  {
    time: '14:15',
    speakerSlug: 'linda-rising',
    name: 'Linda Rising',
    title: 'TBA',
    description: `<p>TBA!</p>`,
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
    title: 'TBA',
    description: `<p>TBA!</p>`,
  },
];
