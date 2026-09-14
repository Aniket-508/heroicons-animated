import { createIcon } from '../createIcon';

const ArrowRightIcon = createIcon({
  name: 'arrow-right',
  animation: 'shake',
  node: [
  ['path', { d: 'M13.5 4.5 21 12m0 0-7.5 7.5' }],
  ['path', { d: 'M21 12H3' }],
  ],
});

export default ArrowRightIcon;
