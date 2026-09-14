import { createIcon } from '../createIcon';

const PauseCircleIcon = createIcon({
  name: 'pause-circle',
  animation: 'scale',
  node: [
  ['path', { d: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' }],
  ['path', { d: 'M9.75 9v6' }],
  ['path', { d: 'M14.25 9v6' }],
  ],
});

export default PauseCircleIcon;
