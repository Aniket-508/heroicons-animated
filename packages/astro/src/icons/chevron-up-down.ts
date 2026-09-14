import { createIcon } from '../createIcon';

const ChevronUpDownIcon = createIcon({
  name: 'chevron-up-down',
  animation: 'bounce',
  node: [
  ['path', { d: 'M8.25 9 12 5.25 15.75 9' }],
  ['path', { d: 'M8.25 15 12 18.75 15.75 15' }],
  ],
});

export default ChevronUpDownIcon;
