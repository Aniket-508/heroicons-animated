import { createIcon } from '../createIcon';

const CheckCircleIcon = createIcon({
  name: 'check-circle',
  animation: 'fade',
  node: [
  ['path', { d: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' }],
  ['path', { d: 'M9 12.75 11.25 15 15 9.75' }],
  ],
});

export default CheckCircleIcon;
