import { createIcon } from '../createIcon';

const EllipsisVerticalIcon = createIcon({
  name: 'ellipsis-vertical',
  animation: 'scale',
  node: [
  ['path', { custom: 'dot.index', d: 'dot.d' }],
  ],
});

export default EllipsisVerticalIcon;
