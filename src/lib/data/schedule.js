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
    image: '/images/welcome.jpg',
    description: '<p>Coffee and tea will be served.</p>'
  },
  {
    start: '09:00',
    end: '09:05',
    name: 'Fredrik Mörk',
    image: '/images/speakers/fredrik-mork.jpg',
    title: 'Opening'
  },
  {
    start: '09:05',
    end: '10:00',
    id: 'kesha-williams',
    name: 'Kesha Williams',
    title: 'TBD',
    description: `<p>Coming soon…</p>`
  },
  {
    start: '10:00',
    end: '10:30',
    name: 'Fika',
    image: '/images/fika.jpg'
  },
  {
    start: '10:30',
    end: '11:15',
    id: 'niall-merrigan',
    name: 'Niall Merrigan',
    title: 'TBD',
    description: `<p>Coming soon…</p>`
  },
  {
    start: '11:30',
    end: '12:15',
    id: 'lisette-sutherland',
    name: 'Lisette Sutherland',
    title: 'TBD',
    description: `<p>Coming soon…</p>`
  },
  {
    start: '12:15',
    end: '13:15',
    name: 'Lunch',
    image: '/images/lunch.jpg'
  },
  {
    start: '13:15',
    end: '14:00',
    id: 'dylan-beattie',
    name: 'Dylan Beattie',
    title: 'TBD',
    description: `<p>Coming soon…</p>`
  },
  {
    start: '14:15',
    end: '15:00',
    id: 'jonah-andersson',
    name: 'Jonah Andersson',
    title: 'TBD',
    description: `<p>Coming soon…</p>`
  },
  {
    start: '15:00',
    end: '15:30',
    name: 'Fika',
    image: '/images/fika.jpg'
  },
  {
    start: '15:30',
    end: '16:30',
    name: 'Panel debate',
    image: '/images/speakers/kevlin-henney.jpg',
    description: `<p>With all speakers. Hosted by Kevlin Henney.</p>`
  }
];

export default schedule;
