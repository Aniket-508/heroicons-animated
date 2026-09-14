import { createIcon } from '../createIcon';

const ArrowDownCircleIcon = createIcon({
  name: 'arrow-down-circle',
  animation: 'float',
  node: [
  ['path', { d: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' }],
  ['path', { d: 'm9 12.75 3 3m0 0 3-3m-3 3v-7.5' }],
  ],
});

export default ArrowDownCircleIcon;
