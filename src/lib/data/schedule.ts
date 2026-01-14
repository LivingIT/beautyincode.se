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
    title: 'Creating Winning Teams',
    description: `<p>What is it that allows some teams to thrive, while others fall short?</p>
<p>In elite sport, the answer is clear: success is never achieved alone. Medals are won when teams are strong together. And this is something we can all learn from! As a mental performance coach within Swedish elite sport, my daily mission is clear: to make other people become heroes and help them peak at championships where medals are on the line.</p>
<p>This experience has shown me that success comes from balancing individual strength with teampower.</p>
<p>Few things are more important than creating environments where people with different ambitions, personalities, and competencies work together with joy, trust, and purpose.</p>
<p>In a warm, engaging, and meaningful way, I share my experiences on how to build successful teams. When people feel psychologically safe, emotionally balanced, and mentally prepared, performance follows naturally.</p>
<p>Because when individuals grow, teams win—and when teams win together, medals follow.</p>
<p>Key themes include:</p>
<ul>
<li>Key factors behind high-performing and winning teams</li>
<li>Psychological safety as a foundation for excellence</li>
<li>Understanding the importance of having a good stare of mind</li>
</ul>`,
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
    title: 'Developer Productivity Engineering: What’s in it for me?',
    description: `<p>It may surprise you to learn that we developers are a patient, tolerant species. People pay us to do what we enjoy - write code and create working applications. In return, we will put up with all sorts of blockages and toil that get in the way of this - long build times, flaky tests, hard-to-debug toolchain failures and so on.</p>
<p>Is this truly the price we need to pay? Could there be a better world, where the build is as fast as it could possibly be? A world where problems that affect many developers are quickly identified and fixed?</p>
<p>Welcome to the world of Developer Productivity Engineering, where we can get computers to do what they’re good at (automation) to make developers’ lives easier, and make us more effective at our jobs. And while developer joy may be a difficult thing to sell to decision-makers, effective developers who are making the best use of their time, and their hardware, have a direct impact on an organization’s ROI.</p>
<p>In this talk, Trisha will explore what DPE is, give you some practical ways to get started, and discuss ways to help the leaders in your organisation to understand the enormous value DPE could unlock.</p>`,
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
    title: 'The Power of an Agile Mindset – for Groups',
    description: `<p>In August 2011 in Salt Lake City, Linda gave the closing keynote for the Agile Conference. It introduced the notion of "the agile mindset," based on the research of Stanford psychologist, Carol Dweck. The idea of the agile mindset has grown over time and now the focus has moved up a level to organizations. The question is, "Can an organization, like an individual, have a fixed or a growth mindset? If so, what are the effects on the organization and its employees?" Linda will tackle this question and related ones, with some tips for improving your mindset and that of your team and organization.</p>`,
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
    title: 'Modern Software Engineering - Building Better Software Faster',
    description: `<p>What really works to help us build better software faster? What are the fundamentals of our profession, that if we get them right, and apply them whatever our goal and whatever our technology, will increase our chances of success. Some of these ideas have been hiding in plain sight, and if we just take them and build our practice and process on them, we do get better results. So what are they, what does that take, and what are the hallmarks of great software development?</p>

<p>In this talk Dave Farley explores these ideas, and with examples from software and other industries illustrates each of 10 ideas that when combined can be used to form the basis of a modern, agile, engineering approach to software development. Dave also answers the question “what does ‘quality’ in software really mean?”.</p>`,
  },
];
