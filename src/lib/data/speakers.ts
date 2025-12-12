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
      <p>BIO</p>
    `,
  },
  'rendle': {
    name: 'Rendle',
    image: '/images/speakers/rendle.webp',
    bio: `
      <p>BIO</p>
    `,
  },
  'trisha-gee': {
    name: 'Trisha Gee',
    image: '/images/speakers/trisha-gee.webp',
    bio: `
      <p>BIO</p>
    `,
  },
  'dylan-beattie': {
    name: 'Dylan Beattie',
    image: '/images/speakers/dylan-beattie.webp',
    bio: `
      <p>BIO</p>
    `,
  },
  'linda-rising': {
    name: 'Linda Rising',
    image: '/images/speakers/linda-rising.webp',
    bio: `
      <p>BIO</p>
    `,
  },
  'dave-farley': {
    name: 'Dave Farley',
    image: '/images/speakers/dave-farley.webp',
    bio: `
      <p>BIO</p>
    `,
  },
};

export default speakers;
