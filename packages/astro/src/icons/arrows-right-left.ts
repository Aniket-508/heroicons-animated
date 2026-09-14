import { createIcon } from '../createIcon';

const ArrowsRightLeftIcon = createIcon({
  name: 'arrows-right-left',
  animation: 'shake',
  node: [
  ['path', { d: 'M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5' }],
  ['path', { d: 'M16.5 3L21 7.5m0 0L16.5 12M21 7.5H7.5' }],
  ],
});

export default ArrowsRightLeftIcon;
