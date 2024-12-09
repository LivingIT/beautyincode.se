interface Speaker {
  name: string;
  image: string;
  bio: string;
}

type SpeakersList = Record<string, Speaker>;

const speakers: SpeakersList = {
  'gitte-klitgaard': {
    name: 'Gitte Klitgaard',
    image: '/images/speakers/gitte-klitgaard.webp',
    bio: `
      <p>Gitte Klitgaard is an independent consultant, leadership coach, trainer, facilitator, coach, advisor, and mentor. For more than a decade, she has helped organisations and individuals find opportunities for improvements by working with teams and individuals as well as leadership. Gitte is authentic, she will cut to the chase and yet communicate kindly. She uses tools from many fields, and her ability to align the individual well-being and growth together with company objectives is remarkable. One of Gitte’s key strengths is holding people accountable while fostering psychological safety.</p>
      <p>Gitte has given talks and keynots at three continents, where she highlights and makes topics like mental health and psychological safety accessible. Other topics include courage, retrospectives, various agile topics, leadership, management, and her personal goal: bringing humanity back in the workplace.</p>
      <p>Her community contributions include organizing coach camps and actively engaging on social media. She creates safe and respectful environments at work and outside. She listens to and engages the more silent voices and minority groups. Gitte also contributes to the community by writing blogpost and on Bluesky as she shifted away from Twitter. She wrote a section about team safety in "The Art of Agile Development, 2. edition" by James Shore which was published in 2021.</p>
      <p>In her spare time, Gitte collects LEGO and Yodas and keeps in touch with friends from all over the globe including some, she considers her second family.</p>
      <p>Gitte is owner of Native Wired and has lead change at companies like IBM, LEGO, and Spotify.</p>
    `,
  },
  'lisette-sutherland': {
    name: 'Lisette Sutherland',
    image: '/images/speakers/lisette-sutherland.webp',
    bio: `
      <p>Lisette Sutherland is the Director of Collaboration Superpowers, a company that helps people work together from anywhere through online workshops. She is the author of the Work Together Anywhere Handbook, the host of a podcast featuring interviews with remote-working experts, and a facilitator of workshops on a variety of remote working topics.</p>
    `,
  },
  'linda-rising': {
    name: 'Linda Rising',
    image: '/images/speakers/linda-rising.webp',
    bio: `
      <p>Humans have been working in teams as long as humans have been around. We've learned a lot but what does science say about teams? You've likely heard of Dunbar's Number but did you know it's not a single number but a series of ranges of numbers? New research on rituals helps explain the success of agile. We know that the elements of the agile process are not new, but that leads to the "whole is greater than the sum of its parts" solution. The power of ritual might offer a better explanation. This talk will touch on two "magic" aspects of teams -- size and ritual -- and what that might mean for better ways of working.</p>
      <p>Linda Rising is an independent consultant who lives near Nashville, Tennessee. Linda has a Ph.D. from Arizona State University in object-based design metrics. Her background includes university teaching as well as work in telecommunications, avionics, and tactical weapons systems. She is an internationally known presenter on topics related to agile development, patterns, retrospectives, the change process, and the connection between the latest neuroscience and software development. Linda is the author of numerous articles and five books. She was honored by the World Agility Forum in 2020 with their Lifetime Achievement Award. Her web site is: <a href="http://lindarising.org/">lindarising.org</a></p>
    `,
  },
  'nicholas-fernholm': {
    name: 'Nicholas Fernholm',
    image: '/images/speakers/nicholas-fernholm.webp',
    bio: `
      <p>His lectures focus on how individuals and organizations can navigate a rapidly changing digital world. He is particularly passionate about the potential AI creates for organizations and the changes required to meet an AI-driven future. During this lecture, we will explore how AI can be a guiding force for organizations to remain relevant and competitive in the future. Through practical examples and forward-looking insights and inspiring stories, participants will gain an understanding of how AI can be used as a tool to create opportunities and increase efficiency.</p>
      <p>Nicholas Fernholm is a prominent expert in change management and technological innovation. He has been recognized for his insights by being nominated for speaker of the year 2022 and was Sweden's first author to create a book entirely by AI. Nicholas has a background as senior advisor at ClimateTrackerInitiative, which uses AI to make ESG data structured and accessible. He was also robot manager at the New Karolinska Hospital and leader during critical change processes within healthcare. Nicholas insights focus on how we can manage the change future technology creates.</p>
    `,
  },
  'kevlin-henney': {
    name: 'Kevlin Henney',
    image: '/images/speakers/kevlin-henney.webp',
    bio: `
      <p>Kevlin is an independent consultant, trainer, speaker and writer. His development interests and work with companies covers programming, practice and people. He has contributed to open- and closed-source codebases, been a columnist for a number of magazines and sites and has been on far too many committees (it has been said that "a committee is a cul-de-sac down which ideas are lured and then quietly strangled"). He is co-author of two volumes in the <em>Pattern-Oriented Software Architecture</em> series, editor of <em>97 Things Every Programmer Should Know</em> and co-editor of <em>97 Things Every Java Programmer Should Know</em>.</p>
    `,
  },
  'dave-farley': {
    name: 'Dave Farley',
    image: '/images/speakers/dave-farley.webp',
    bio: `
      <p>Dave Farley is a pioneer of Continuous Delivery, thought-leader and expert practitioner in CD, DevOps, TDD and software design. He was an early adopter of agile development techniques, employing iterative development, continuous integration and significant levels of automated testing, working in large scale distributed systems. Dave has a long track record in creating high-performance teams, shaping organisations for success, and creating outstanding software.</p>

      <p>Dave is the managing director and founder of Continuous Delivery Ltd, one of the authors of the Reactive Manifesto, and a winner of the Duke Award for the open source LMAX Disruptor project. He is author of two best-selling books - "Continuous Delivery" and "Modern Software Engineering", founder of the CD.Training school and creator of the popular CD YouTube channel.</p>
    `,
  },
};

export default speakers;
