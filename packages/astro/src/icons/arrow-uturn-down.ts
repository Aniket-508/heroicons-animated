import { createIcon } from '../createIcon';

const ArrowUturnDownIcon = createIcon({
  name: 'arrow-uturn-down',
  animation: 'rubber-band',
  node: [
  ['path', { d: 'M9 21V9a6 6 0 0 1 12 0v3' }],
  ['path', { d: 'm15 15-6 6m0 0-6-6m6 6' }],
  ],
});

export default ArrowUturnDownIcon;
