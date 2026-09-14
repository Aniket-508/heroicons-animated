import { createIcon } from '../createIcon';

const ArrowLongDownIcon = createIcon({
  name: 'arrow-long-down',
  animation: 'bounce',
  node: [
  ['path', { d: 'M15.75 17.25 12 21m0 0-3.75-3.75' }],
  ['path', { d: 'M12 21V3' }],
  ],
});

export default ArrowLongDownIcon;
