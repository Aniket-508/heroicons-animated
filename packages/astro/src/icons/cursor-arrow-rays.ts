import { createIcon } from '../createIcon';

const CursorArrowRaysIcon = createIcon({
  name: 'cursor-arrow-rays',
  animation: 'scale',
  node: [
  ['path', { d: 'M15.0423 21.6718L13.6835 16.6007M13.6835 16.6007L11.1741 18.826L11.7425 9.35623L16.9697 17.2731L13.6835 16.6007Z' }],
  ['path', { custom: '{ x: 0, y: -2 ', d: 'M12 2.25V4.5' }],
  ['path', { custom: '{ x: 2, y: -2 ', d: 'M17.8336 4.66637L16.2426 6.25736' }],
  ['path', { custom: '{ x: 2, y: 0 ', d: 'M20.25 10.5H18' }],
  ['path', { custom: '{ x: -2, y: 2 ', d: 'M7.75736 14.7426L6.16637 16.3336' }],
  ['path', { custom: '{ x: -2, y: 0 ', d: 'M6 10.5H3.75' }],
  ['path', { custom: '{ x: -2, y: -2 ', d: 'M7.75736 6.25736L6.16637 4.66637' }],
  ],
});

export default CursorArrowRaysIcon;
