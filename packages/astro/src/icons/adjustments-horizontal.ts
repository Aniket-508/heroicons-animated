import { createIcon } from '../createIcon';

const AdjustmentsHorizontalIcon = createIcon({
  name: 'adjustments-horizontal',
  animation: 'scale',
  node: [
  ['line', { x1: 10.5, x2: 20.25, y1: 6, y2: 6 }],
  ['line', { x1: 3.75, x2: 7.5, y1: 6, y2: 6 }],
  ['circle', { cx: 9, cy: 6, fill: 'none', r: 1.5 }],
  ['line', { x1: 16.5, x2: 20.25, y1: 12, y2: 12 }],
  ['line', { x1: 3.75, x2: 13.5, y1: 12, y2: 12 }],
  ['circle', { cx: 15, cy: 12, fill: 'none', r: 1.5 }],
  ['line', { x1: 10.5, x2: 20.25, y1: 18, y2: 18 }],
  ['line', { x1: 3.75, x2: 7.5, y1: 18, y2: 18 }],
  ['circle', { cx: 9, cy: 18, fill: 'none', r: 1.5 }],
  ],
});

export default AdjustmentsHorizontalIcon;
