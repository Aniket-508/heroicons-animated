import { createIcon } from '../createIcon';

const PlusIcon = createIcon({
  name: 'plus',
  animation: 'rotate',
  node: [
  ['path', { d: 'M5 12h14' }],
  ['path', { d: 'M12 5v14' }],
  ],
});

export default PlusIcon;
