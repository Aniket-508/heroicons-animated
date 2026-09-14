import { createIcon } from '../createIcon';

const SunIcon = createIcon({
  name: 'sun',
  animation: 'scale',
  node: [
  ['circle', { cx: 12, cy: 12, r: 3.75 }],
  ['path', { custom: 0, d: 'M12 3V5.25' }],
  ['path', { custom: 1, d: 'M18.364 5.63604L16.773 7.22703' }],
  ['path', { custom: 2, d: 'M21 12H18.75' }],
  ['path', { custom: 3, d: 'M18.364 18.364L16.773 16.773' }],
  ['path', { custom: 4, d: 'M12 18.75V21' }],
  ['path', { custom: 5, d: 'M7.22703 16.773L5.63604 18.364' }],
  ['path', { custom: 6, d: 'M5.25 12H3' }],
  ['path', { custom: 7, d: 'M7.22703 7.22703L5.63604 5.63604' }],
  ],
});

export default SunIcon;
