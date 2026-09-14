import { createIcon } from '../createIcon';

const ChartPieIcon = createIcon({
  name: 'chart-pie',
  animation: 'bounce',
  node: [
  ['path', { d: 'M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z' }],
  ['path', { d: 'M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z' }],
  ],
});

export default ChartPieIcon;
