import { createIcon } from '../createIcon';

const ShareIcon = createIcon({
  name: 'share',
  animation: 'fade',
  node: [
  ['path', { d: 'M7.21721 10.9071C7.39737 11.2307 7.5 11.6034 7.5 12C7.5 12.3966 7.39737 12.7693 7.21721 13.0929M7.21721 10.9071L16.7828 5.5929M7.21721 13.0929L16.7828 18.4071' }],
  ['circle', { custom: 0, cx: 5.25, cy: 12, r: 2.25 }],
  ['circle', { custom: 0.15, cx: 18.75, cy: 4.5, r: 2.25 }],
  ['circle', { custom: 0.3, cx: 18.75, cy: 19.5, r: 2.25 }],
  ],
});

export default ShareIcon;
