import { createIcon } from '../createIcon';

const ArrowsUpDownIcon = createIcon({
  name: 'arrows-up-down',
  animation: 'bounce',
  node: [
  ['path', { d: 'M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5' }],
  ['path', { d: 'M21 16.5L16.5 21m0 0L12 16.5m4.5 4.5V7.5' }],
  ],
});

export default ArrowsUpDownIcon;
