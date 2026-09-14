import { createIcon } from '../createIcon';

const AdjustmentsVerticalIcon = createIcon({
  name: 'adjustments-vertical',
  animation: 'scale',
  node: [
  ['line', { x1: 6, x2: 6, y1: 3.75, y2: 13.5 }],
  ['line', { x1: 6, x2: 6, y1: 16.5, y2: 20.25 }],
  ['circle', { cx: 6, cy: 15, fill: 'none', r: 1.5 }],
  ['line', { x1: 12, x2: 12, y1: 3.75, y2: 7.5 }],
  ['line', { x1: 12, x2: 12, y1: 10.5, y2: 20.25 }],
  ['circle', { cx: 12, cy: 9, fill: 'none', r: 1.5 }],
  ['line', { x1: 18, x2: 18, y1: 3.75, y2: 13.5 }],
  ['line', { x1: 18, x2: 18, y1: 16.5, y2: 20.25 }],
  ['circle', { cx: 18, cy: 15, fill: 'none', r: 1.5 }],
  ],
});

export default AdjustmentsVerticalIcon;
