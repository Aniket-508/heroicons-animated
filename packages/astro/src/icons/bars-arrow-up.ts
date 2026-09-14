import { createIcon } from '../createIcon';

const BarsArrowUpIcon = createIcon({
  name: 'bars-arrow-up',
  animation: 'bounce',
  node: [
  ['path', { d: 'M3 4.5h14.25M3 9h9.75M3 13.5h5.25' }],
  ['path', { d: 'M13.5 12.75L17.25 9L21 12.75M17.25 9v12' }],
  ],
});

export default BarsArrowUpIcon;
