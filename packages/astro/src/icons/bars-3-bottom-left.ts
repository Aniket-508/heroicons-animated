import { createIcon } from '../createIcon';

const Bars3BottomLeftIcon = createIcon({
  name: 'bars-3-bottom-left',
  animation: 'shake',
  node: [
  ['path', { d: 'M3.75 6.75h16.5' }],
  ['path', { d: 'M3.75 12h16.5' }],
  ['path', { d: 'M3.75 17.25H12' }],
  ],
});

export default Bars3BottomLeftIcon;
