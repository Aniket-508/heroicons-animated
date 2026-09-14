import { createIcon } from '../createIcon';

const ArrowLeftCircleIcon = createIcon({
  name: 'arrow-left-circle',
  animation: 'shake',
  node: [
  ['path', { d: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' }],
  ['path', { d: 'm11.25 9-3 3m0 0 3 3m-3-3h7.5' }],
  ],
});

export default ArrowLeftCircleIcon;
