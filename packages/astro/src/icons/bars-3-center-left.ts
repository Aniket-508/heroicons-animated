import { createIcon } from '../createIcon';

const Bars3CenterLeftIcon = createIcon({
  name: 'bars-3-center-left',
  animation: 'shake',
  node: [
  ['path', { d: 'M3.75 6.75h16.5' }],
  ['path', { d: 'M3.75 12H12' }],
  ['path', { d: 'M3.75 17.25h16.5' }],
  ],
});

export default Bars3CenterLeftIcon;
