import { createIcon } from '../createIcon';

const WifiIcon = createIcon({
  name: 'wifi',
  animation: 'scale',
  node: [
  ['path', { d: 'M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0' }],
  ['path', { custom: 1, d: 'M8.288 15.038a5.25 5.25 0 0 1 7.424 0' }],
  ['path', { custom: 2, d: 'M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0' }],
  ['path', { custom: 3, d: 'M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0' }],
  ],
});

export default WifiIcon;
