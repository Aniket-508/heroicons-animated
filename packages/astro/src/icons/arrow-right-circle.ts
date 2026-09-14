import { createIcon } from '../createIcon';

const ArrowRightCircleIcon = createIcon({
  name: 'arrow-right-circle',
  animation: 'shake',
  node: [
  ['path', { d: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' }],
  ['path', { d: 'm12.75 15 3-3m0 0-3-3m3 3h-7.5' }],
  ],
});

export default ArrowRightCircleIcon;
