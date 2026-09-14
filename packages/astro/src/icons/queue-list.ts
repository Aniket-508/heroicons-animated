import { createIcon } from '../createIcon';

const QueueListIcon = createIcon({
  name: 'queue-list',
  animation: 'fade',
  node: [
  ['path', { d: 'M5.625 4.5H18.375C19.4105 4.5 20.25 5.33947 20.25 6.375C20.25 7.41053 19.4105 8.25 18.375 8.25H5.625C4.58947 8.25 3.75 7.41053 3.75 6.375C3.75 5.33947 4.58947 4.5 5.625 4.5Z' }],
  ['path', { d: 'item.path' }],
  ],
});

export default QueueListIcon;
