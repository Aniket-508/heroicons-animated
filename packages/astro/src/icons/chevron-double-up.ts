import { createIcon } from '../createIcon';

const ChevronDoubleUpIcon = createIcon({
  name: 'chevron-double-up',
  animation: 'bounce',
  node: [
  ['path', { d: 'm4.5 18.75 7.5-7.5 7.5 7.5' }],
  ['path', { d: 'm4.5 12.75 7.5-7.5 7.5 7.5' }],
  ],
});

export default ChevronDoubleUpIcon;
