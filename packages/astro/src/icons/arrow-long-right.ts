import { createIcon } from '../createIcon';

const ArrowLongRightIcon = createIcon({
  name: 'arrow-long-right',
  animation: 'shake',
  node: [
  ['path', { d: 'M17.25 8.25 21 12m0 0-3.75 3.75' }],
  ['path', { d: 'M21 12H3' }],
  ],
});

export default ArrowLongRightIcon;
