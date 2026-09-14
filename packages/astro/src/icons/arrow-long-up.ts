import { createIcon } from '../createIcon';

const ArrowLongUpIcon = createIcon({
  name: 'arrow-long-up',
  animation: 'float',
  node: [
  ['path', { d: 'M8.25 6.75 12 3m0 0 3.75 3.75' }],
  ['path', { d: 'M12 3v18' }],
  ],
});

export default ArrowLongUpIcon;
