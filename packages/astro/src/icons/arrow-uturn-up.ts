import { createIcon } from '../createIcon';

const ArrowUturnUpIcon = createIcon({
  name: 'arrow-uturn-up',
  animation: 'rubber-band',
  node: [
  ['path', { d: 'M15 3v12a6 6 0 0 1-12 0v-3' }],
  ['path', { d: 'm9 9 6-6m0 0 6 6m-6-6' }],
  ],
});

export default ArrowUturnUpIcon;
