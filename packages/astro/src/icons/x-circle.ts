import { createIcon } from '../createIcon';

const XCircleIcon = createIcon({
  name: 'x-circle',
  animation: 'fade',
  node: [
  ['path', { d: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' }],
  ['path', { d: 'm9.75 9.75 4.5 4.5' }],
  ['path', { d: 'm14.25 9.75-4.5 4.5' }],
  ],
});

export default XCircleIcon;
