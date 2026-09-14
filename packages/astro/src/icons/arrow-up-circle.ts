import { createIcon } from '../createIcon';

const ArrowUpCircleIcon = createIcon({
  name: 'arrow-up-circle',
  animation: 'bounce',
  node: [
  ['path', { d: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' }],
  ['path', { d: 'm15 11.25-3-3m0 0-3 3m3-3v7.5' }],
  ],
});

export default ArrowUpCircleIcon;
