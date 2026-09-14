import { createIcon } from '../createIcon';

const CalendarDateRangeIcon = createIcon({
  name: 'calendar-date-range',
  animation: 'fade',
  node: [
  ['path', { d: 'M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5' }],
  ['path', { d: 'FIRST_DOT.d' }],
  ['path', { custom: 'line.index', d: 'line.d' }],
  ['path', { custom: 'dot.index', d: 'dot.d' }],
  ],
});

export default CalendarDateRangeIcon;
