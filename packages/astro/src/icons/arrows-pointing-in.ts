import { createIcon } from '../createIcon';

const ArrowsPointingInIcon = createIcon({
  name: 'arrows-pointing-in',
  animation: 'bounce',
  node: [
  ['path', { d: 'M9 9V4.5M9 9H4.5M9 9 3.75 3.75' }],
  ['path', { d: 'M9 15v4.5M9 15H4.5M9 15l-5.25 5.25' }],
  ['path', { d: 'M15 9h4.5M15 9V4.5M15 9l5.25-5.25' }],
  ['path', { d: 'M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25' }],
  ],
});

export default ArrowsPointingInIcon;
