import { createIcon } from '../createIcon';

const BarsArrowDownIcon = createIcon({
  name: 'bars-arrow-down',
  animation: 'float',
  node: [
  ['path', { d: 'M3 4.5h14.25M3 9h9.75M3 13.5h9.75' }],
  ['path', { d: 'M17.25 9v12m0 0-3.75-3.75M17.25 21L21 17.25' }],
  ],
});

export default BarsArrowDownIcon;
