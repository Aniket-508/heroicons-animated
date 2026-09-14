import { createIcon } from '../createIcon';

const CubeIcon = createIcon({
  name: 'cube',
  animation: 'rotate',
  node: [
  ['path', { d: 'M21 7.5L12 2.25L3 7.5M21 7.5L12 12.75M21 7.5V16.5L12 21.75M3 7.5L12 12.75M3 7.5V16.5L12 21.75M12 12.75V21.75' }],
  ],
});

export default CubeIcon;
