import { createIcon } from '../createIcon';

const XMarkIcon = createIcon({
  name: 'x-mark',
  animation: 'fade',
  node: [
  ['path', { d: 'M6 6l12 12' }],
  ['path', { d: 'M18 6l-12 12' }],
  ],
});

export default XMarkIcon;
