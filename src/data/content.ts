export type Announcement = {
  tag: string;
  title: string;
  copy: string;
  meta: string;
};

export type Study = {
  title: string;
  category: string;
  date: string;
};

export const announcements: Announcement[] = [
  {
    tag: 'Bible Study',
    title: 'Cornerstone Saturday Gathering',
    copy: 'Join us every Saturday for Scripture, prayer, intercession and fellowship.',
    meta: 'Saturday · 6:30 PM fellowship · 7:00 PM study',
  },
  {
    tag: 'Weekly',
    title: 'Organiser Bible Study',
    copy: 'A focused study for organisers, hosted in the WhatsApp Organiser Group.',
    meta: 'Sunday · 7:00 PM',
  },
  {
    tag: 'Prayer',
    title: 'Monday Fast & Prayer',
    copy: 'Fast together, break at 3:00 PM, then gather for prayer in the Cornerstone WhatsApp group.',
    meta: 'Monday · Prayer at 7:00 PM',
  },
];

export const studies: Study[] = [
  {
    title: 'Discovering My Purpose',
    category: 'Study Series',
    date: 'Latest series',
  },
  {
    title: 'The Mystery of Time and Seasons',
    category: 'Bible Study',
    date: 'Featured teaching',
  },
  {
    title: 'Self-Discipline',
    category: 'Growth',
    date: 'New episode',
  },
];