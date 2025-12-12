interface Speaker {
  name: string;
  image: string;
  bio: string;
}

type SpeakersList = Record<string, Speaker>;

const speakers: SpeakersList = {
  'susanne-pettersson': {
    name: 'Susanne Pettersson',
    image: '/images/speakers/susanne-pettersson.webp',
    bio: `
      <p>Susanne Pettersson is a highly sought-after speaker, consultant, coach, and author with over 30 years of experience helping individuals, teams, and organisations achieve success, strength, and balance. Her mission is to make others into heroes by fostering leadership, collaboration, and joy in change processes.</p>
      <p>Susanne works across business, the public sector, and elite sport, serving as a trusted leadership and mental performance advisor. She has been recognised as Female Speaker of the Year and Excellent Speaker for her engaging and impactful presentations.</p>
      <p>Susanne is also the author of five books on leadership, personal power, resilience, teamwork, and presentation skills. She has a strong track record supporting elite hockey organisations and coaches several NHL players. 
      Susanne Pettersson</p>
    `,
  },
  rendle: {
    name: 'Rendle',
    image: '/images/speakers/rendle.webp',
    bio: `
      <p>Hi, I&rsquo;m Rendle.</p>
      <p>I build software of all kinds: back-end, front-end, desktop, mobile,
      games, CLI tools, whatever. I mostly use C# and .NET but I can do stuff
      in JavaScript/TypeScript, Go, Rust, Zig, Kotlin, Python&hellip; pretty much
      anything. I like to
      <a href="https://rendle.dev/talks/">talk about building software</a>, sometimes seriously,
      but often more weird and fun. I do consulting and teach workshops on
      things like improving application performance, migrating from the old
      .NET Framework to modern .NET, and designing and creating APIs with
      JSON or gRPC.
      I&rsquo;ve been a stand-up comic, a television writer, a Microsoft MVP,
      a Docker Captain, and a bunch of other things, and I&rsquo;m currently
      a <a href="https://open.spotify.com/show/251OR8a0lxTzpjCwIL44KM">podcaster</a>,
      a writer, and the bass player in the world&rsquo;s premier
      tech parody band, <a href="https://linebreakers.band">The Linebreakers</a>.</p>
    `,
  },
  'trisha-gee': {
    name: 'Trisha Gee',
    image: '/images/speakers/trisha-gee.webp',
    bio: `
      <p><strong>Trisha Gee</strong> is a Java Champion, author, and internationally recognized speaker with over two decades of experience in software development. Known for her deep expertise in Java, high-performance systems, and developer productivity, Trisha has worked as a developer and leader in organizations ranging from startups to global enterprises. She's passionate about sharing knowledge and helping developers write more expressive and efficient code.</p>
      <p>Trisha is the author of <a href="https://trishagee.com/books/">multiple technical books</a>, including <em>Head First Java</em> (3rd Edition) and <em>Getting to Know IntelliJ IDEA</em>, and she frequently contributes to developer communities through blogs, webinars, and international conferences. She's also a strong advocate for grassroots learning and regularly supports local user groups and meetups to help developers connect, grow, and thrive.</p>
      <p>When she's not writing or coding, she's championing inclusive practices and mentoring the next generation of developers.</p>
    `,
  },
  'dylan-beattie': {
    name: 'Dylan Beattie',
    image: '/images/speakers/dylan-beattie.webp',
    bio: `
      <p>Dylan Beattie is a consultant, software developer and international
      keynote speaker. He’s been building data-driven web applications since
      the 1990s; he’s managed teams, taught workshops, and worked on
      everything from tiny standalone websites to complex distributed systems.
      He’s a <a href="https://mvp.microsoft.com/en-us/PublicProfile/5002699">Microsoft MVP</a>, and
      he regularly speaks at conferences and user groups all over the world.</p>
      <p>Dylan is the creator of the <a href="https://codewithrockstar.com">Rockstar</a> programming
      language, the director of <a href="https://ursatile.com">Ursatile</a>, and the founder
      of <a href="https://dylanbeattie.net/music">The Linebreakers</a>, the world’s greatest tech comedy party rock band.
      He’s online at <a href="https://dylanbeattie.net/">dylanbeattie.net</a> and on Bluesky
      as <a href="https://bsky.app/profile/dylanbeatt.ie/">@dylanbeatt.ie</a>.</p>
    `,
  },
  'linda-rising': {
    name: 'Linda Rising',
    image: '/images/speakers/linda-rising.webp',
    bio: `
      <p>Linda Rising is an independent consultant who lives in Nashville, Tennessee
      She has authored four books and numerous articles and is an internationally known presenter on topics related to patterns, retrospectives, influence strategies, agile development, and the change process.</p>
      <p>With a Ph.D. from Arizona State University in the field of object-based design metrics, Linda's background includes university teaching and software development in a number of different domains.</p>
    `,
  },
  'dave-farley': {
    name: 'Dave Farley',
    image: '/images/speakers/dave-farley.webp',
    bio: `
      <p>Dave Farley is a pioneering software engineer, consultant, and author, best known for co-authoring the influential <a href="http://www.amazon.co.uk/Continuous-Delivery-Deployment-Automation-Addison-Wesley/dp/0321601912">Continuous Delivery</a> book and shaping modern software development practices.</p>
      <p>He has been working with computers for nearly four decades, experimenting with systems from firmware to large-scale distributed applications, and was an early adopter of agile development, continuous integration, and automated testing.</p>
      <p>Farley served as Head of Software Development at LMAX Exchange, building one of the world’s fastest financial trading systems.</p>
      <p>He is the founder and managing director of <a href="http://www.continuous-delivery.co.uk/">Continuous Delivery Ltd</a>, advising organisations globally on continuous delivery, team organisation, automated testing, and high-performance software design.</p>
      <p>Farley is also a thought leader in DevOps, TDD, BDD, and software design, shares insights through his blog and training, and enjoys flying aerobatics in his spare time.</p>
    `,
  },
};

export default speakers;
