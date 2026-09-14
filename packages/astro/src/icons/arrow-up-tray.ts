import { createIcon } from '../createIcon';

const ArrowUpTrayIcon = createIcon({
  name: 'arrow-up-tray',
  animation: 'bounce',
  node: [
  ['path', { d: 'M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5' }],
  ['path', { d: 'M7.5 7.5L12 3m0 0 4.5 4.5M12 3v13.5' }],
  ],
});

export default ArrowUpTrayIcon;
