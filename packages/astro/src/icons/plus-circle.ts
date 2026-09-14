import { createIcon } from '../createIcon';

const PlusCircleIcon = createIcon({
  name: 'plus-circle',
  animation: 'fade',
  node: [
  ['path', { d: 'M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z' }],
  ['path', { d: 'M12 9v6' }],
  ['path', { d: 'M9 12h6' }],
  ],
});

export default PlusCircleIcon;
