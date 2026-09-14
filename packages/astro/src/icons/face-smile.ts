import { createIcon } from '../createIcon';

const FaceSmileIcon = createIcon({
  name: 'face-smile',
  animation: 'rotate',
  node: [
  ['circle', { cx: 12, cy: 12, r: 9 }],
  ['path', { d: 'M15.182 15.182C13.4246 16.9393 10.5754 16.9393 8.81802 15.182' }],
  ['path', { d: 'M9.75 9.75C9.75 10.1642 9.58211 10.5 9.375 10.5C9.16789 10.5 9 10.1642 9 9.75C9 9.33579 9.16789 9 9.375 9C9.58211 9 9.75 9.33579 9.75 9.75Z' }],
  ['path', { d: 'M15 9.75C15 10.1642 14.8321 10.5 14.625 10.5C14.4179 10.5 14.25 10.1642 14.25 9.75C14.25 9.33579 14.4179 9 14.625 9C14.8321 9 15 9.33579 15 9.75Z' }],
  ],
});

export default FaceSmileIcon;
