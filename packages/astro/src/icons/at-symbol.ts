import { createIcon } from '../createIcon';

const AtSymbolIcon = createIcon({
  name: 'at-symbol',
  animation: 'fade',
  node: [
  ['circle', { cx: 12, cy: 12, r: 4.5 }],
  ['path', { d: 'M16.5 12c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25' }],
  ],
});

export default AtSymbolIcon;
