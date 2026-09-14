import { createIcon } from '../createIcon';

const NoSymbolIcon = createIcon({
  name: 'no-symbol',
  animation: 'scale',
  node: [
  ['path', { d: 'M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636' }],
  ['path', { d: 'M18.364 18.364L5.636 5.636' }],
  ],
});

export default NoSymbolIcon;
