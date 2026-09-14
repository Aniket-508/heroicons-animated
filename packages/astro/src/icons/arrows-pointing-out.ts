import { createIcon } from '../createIcon';

const ArrowsPointingOutIcon = createIcon({
  name: 'arrows-pointing-out',
  animation: 'bounce',
  node: [
  ['path', { d: 'M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9' }],
  ['path', { d: 'M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15' }],
  ['path', { d: 'M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9' }],
  ['path', { d: 'M20.25 20.25h-4.5m4.5 0v-4.5m0 4.5L15 15' }],
  ],
});

export default ArrowsPointingOutIcon;
