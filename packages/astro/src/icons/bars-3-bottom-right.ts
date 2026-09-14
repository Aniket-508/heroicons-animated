import { createIcon } from '../createIcon';

const Bars3BottomRightIcon = createIcon({
  name: 'bars-3-bottom-right',
  animation: 'shake',
  node: [
  ['path', { d: 'M3.75 6.75h16.5' }],
  ['path', { d: 'M3.75 12h16.5' }],
  ['path', { d: 'M12 17.25h8.25' }],
  ],
});

export default Bars3BottomRightIcon;
