import { createIcon } from '../createIcon';

const ClockIcon = createIcon({
  name: 'clock',
  animation: 'rotate',
  node: [
  ['path', { d: 'M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' }],
  ],
});

export default ClockIcon;
