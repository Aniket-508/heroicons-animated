import { createIcon } from '../createIcon';

const BuildingOfficeIcon = createIcon({
  name: 'building-office',
  animation: 'scale',
  node: [
  ['path', { d: 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' }],
  ['path', { custom: 'floorLine.index', d: 'floorLine.path' }],
  ],
});

export default BuildingOfficeIcon;
