import { createIcon } from '../createIcon';

const PauseIcon = createIcon({
  name: 'pause',
  animation: 'scale',
  node: [
  ['path', { d: 'M15.75 5.25v13.5' }],
  ['path', { d: 'M8.25 5.25v13.5' }],
  ],
});

export default PauseIcon;
