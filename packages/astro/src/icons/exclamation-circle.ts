import { createIcon } from '../createIcon';

const ExclamationCircleIcon = createIcon({
  name: 'exclamation-circle',
  animation: 'scale',
  node: [
  ['path', { d: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' }],
  ['path', { d: 'M12 9v3.75' }],
  ['path', { d: 'M12 15.75h.008v.008H12v-.008Z' }],
  ],
});

export default ExclamationCircleIcon;
