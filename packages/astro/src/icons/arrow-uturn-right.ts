import { createIcon } from '../createIcon';

const ArrowUturnRightIcon = createIcon({
  name: 'arrow-uturn-right',
  animation: 'rubber-band',
  node: [
  ['path', { d: 'M21 9H9a6 6 0 0 0 0 12h3' }],
  ['path', { d: 'm15 15 6-6m0 0-6-6m6 6' }],
  ],
});

export default ArrowUturnRightIcon;
