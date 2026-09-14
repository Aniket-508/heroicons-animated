import { createIcon } from '../createIcon';

const ArrowDownIcon = createIcon({
  name: 'arrow-down',
  animation: 'bounce',
  node: [
  ['path', { d: 'M19.5 13.5 12 21m0 0-7.5-7.5' }],
  ['path', { d: 'M12 21V3' }],
  ],
});

export default ArrowDownIcon;
