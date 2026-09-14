import { createIcon } from '../createIcon';

const ArrowLongLeftIcon = createIcon({
  name: 'arrow-long-left',
  animation: 'shake',
  node: [
  ['path', { d: 'M6.75 15.75 3 12m0 0 3.75-3.75' }],
  ['path', { d: 'M3 12h18' }],
  ],
});

export default ArrowLongLeftIcon;
