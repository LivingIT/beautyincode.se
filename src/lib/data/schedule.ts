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
    title: 'TBA',
    description: `<p>TBA!</p>`,
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
    title: 'TBA',
    description: `<p>TBA!</p>`,
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
