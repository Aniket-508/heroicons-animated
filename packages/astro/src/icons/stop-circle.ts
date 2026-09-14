import { createIcon } from '../createIcon';

const StopCircleIcon = createIcon({
  name: 'stop-circle',
  animation: 'scale',
  node: [
  ['path', { d: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' }],
  ['path', { d: 'M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z' }],
  ],
});

export default StopCircleIcon;
