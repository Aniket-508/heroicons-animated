import { createIcon } from '../createIcon';

const ArrowUturnLeftIcon = createIcon({
  name: 'arrow-uturn-left',
  animation: 'rubber-band',
  node: [
  ['path', { d: 'M3 9h12a6 6 0 0 1 0 12h-3' }],
  ['path', { d: 'M9 15 3 9m0 0 6-6' }],
  ],
});

export default ArrowUturnLeftIcon;
