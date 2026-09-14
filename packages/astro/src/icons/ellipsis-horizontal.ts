import { createIcon } from '../createIcon';

const EllipsisHorizontalIcon = createIcon({
  name: 'ellipsis-horizontal',
  animation: 'scale',
  node: [
  ['path', { custom: 'dot.index', d: 'dot.d' }],
  ],
});

export default EllipsisHorizontalIcon;
