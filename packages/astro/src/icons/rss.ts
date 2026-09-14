import { createIcon } from '../createIcon';

const RssIcon = createIcon({
  name: 'rss',
  animation: 'scale',
  node: [
  ['path', { d: 'M6 18.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z' }],
  ['path', { custom: 1, d: 'M12.75 19.5v-.75a7.5 7.5 0 0 0-7.5-7.5H4.5' }],
  ['path', { custom: 2, d: 'M4.5 4.5h.75c7.87 0 14.25 6.38 14.25 14.25v.75' }],
  ],
});

export default RssIcon;
