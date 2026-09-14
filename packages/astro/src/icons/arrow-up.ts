import { createIcon } from '../createIcon';

const ArrowUpIcon = createIcon({
  name: 'arrow-up',
  animation: 'float',
  node: [
  ['path', { d: 'M4.5 10.5 12 3m0 0 7.5 7.5' }],
  ['path', { d: 'M12 3v18' }],
  ],
});

export default ArrowUpIcon;
