/**
 * Schedule item data structure
 * @typedef {Object} ScheduleItem
 * @property {string} timeslot - The timeslot for the schedule item
 * @property {string} [id] - The unique identifier for the speaker (if applicable)
 * @property {string} [name] - The name of the event or the speaker
 * @property {string} [description] - The description of the schedule item
 */

const schedule = [
  {
    timeslot: '08:15 - 09:00',
    name: 'The doors open',
    image: '/images/welcome.jpg',
    description: '<p>Coffee and tea will be served.</p>'
  },
  {
    timeslot: '9:00 - 9:05',
    name: 'Fredrik Mörk',
    image: '/images/speakers/fredrik-mork.jpg',
    title: 'Opening keynote'
  },
  {
    timeslot: '09:05 - 10:00',
    id: 'kesha-williams',
    name: 'Kesha Williams',
    title: 'TBD',
    description: `<p>Coming soon…</p>`
  },
  {
    timeslot: '10:00 - 10:30',
    name: 'Fika',
    image: '/images/fika.jpg'
  },
  {
    timeslot: '10:30 - 11:15',
    id: 'niall-merrigan',
    name: 'Niall Merrigan',
    title: 'TBD',
    description: `<p>Coming soon…</p>`
  },
  {
    timeslot: '11:15 - 12:15',
    id: 'lisette-sutherland',
    name: 'Lisette Sutherland',
    title: 'TBD',
    description: `<p>Coming soon…</p>`
  },
  {
    timeslot: '12:15 - 13:15',
    name: 'Lunch',
    image: '/images/lunch.jpg'
  },
  {
    timeslot: '13:15 - 14:00',
    id: 'dylan-beattie',
    name: 'Dylan Beattie',
    title: 'TBD',
    description: `<p>Coming soon…</p>`
  },
  {
    timeslot: '14:15 - 15:00',
    id: 'jonah-andersson',
    name: 'Jonah Andersson',
    title: 'TBD',
    description: `<p>Coming soon…</p>`
  },
  {
    timeslot: '15:00 - 15:30',
    name: 'Fika',
    image: '/images/fika.jpg'
  },
  {
    timeslot: '15:30 - 16:30',
    name: 'Panel debate',
    image: '',
    description: `<p>With all speakers. Hosted by Kevlin Henney.</p>`
  }
];

export default schedule;
