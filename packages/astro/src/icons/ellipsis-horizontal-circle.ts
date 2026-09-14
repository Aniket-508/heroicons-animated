import { createIcon } from '../createIcon';

const EllipsisHorizontalCircleIcon = createIcon({
  name: 'ellipsis-horizontal-circle',
  animation: 'scale',
  node: [
  ['path', { custom: 'dot.index', d: 'dot.d' }],
  ['path', { d: 'M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z' }],
  ],
});

export default EllipsisHorizontalCircleIcon;
