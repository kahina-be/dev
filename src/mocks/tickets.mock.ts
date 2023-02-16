import { Ticket } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in ITALY',
    description: '',
    date: dateToday,
    Student: 'Paul',
    major: 'SI'
  },
  {
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    Student: 'Anakin',
    major: 'GB'
  },
];
