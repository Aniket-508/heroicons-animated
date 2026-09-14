import { createIcon } from '../createIcon';

const Battery100Icon = createIcon({
  name: 'battery-100',
  animation: 'scale',
  node: [
  ['rect', { height: 4.5, x: 4.5, y: 10.5 }],
  ['path', { d: 'M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21' }],
  ['path', { d: 'M3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z' }],
  ['path', { d: 'M4.5 10.5H18V15H4.5v-4.5Z' }],
  ['path', { clip-path: '`url(#${clipId', d: 'M4.5 10.5H18V15H4.5v-4.5Z', fill: 'currentColor', stroke: 'none' }],
  ],
});

export default Battery100Icon;
