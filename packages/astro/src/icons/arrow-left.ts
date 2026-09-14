import { createIcon } from '../createIcon';

const ArrowLeftIcon = createIcon({
  name: 'arrow-left',
  animation: 'shake',
  node: [
  ['path', { d: 'M10.5 19.5 3 12m0 0 7.5-7.5' }],
  ['path', { d: 'M3 12h18' }],
  ],
});

export default ArrowLeftIcon;
