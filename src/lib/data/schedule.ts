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
    speakerSlug: 'rendle',
    name: 'Rendle',
    title: 'Lorem ipsum dolor sit amet',
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
  },
  {
    time: '11:30',
    speakerSlug: 'trisha-gee',
    name: 'Trisha Gee',
    title: 'Lorem ipsum dolor sit amet',
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
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
    title: 'Lorem ipsum dolor sit amet',
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
  },
  {
    time: '14:15',
    speakerSlug: 'linda-rising',
    name: 'Linda Rising',
    title: 'Lorem ipsum dolor sit amet',
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
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
    title: 'Lorem ipsum dolor sit amet',
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
  },
];
