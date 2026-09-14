import { createIcon } from '../createIcon';

const ViewColumnsIcon = createIcon({
  name: 'view-columns',
  animation: 'scale',
  node: [
  ['path', { d: 'M4.125 19.5h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z' }],
  ['path', { custom: 'line.index', d: 'line.d' }],
  ],
});

export default ViewColumnsIcon;
