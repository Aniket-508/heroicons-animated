import { createIcon } from '../createIcon';

const NewspaperIcon = createIcon({
  name: 'newspaper',
  animation: 'fade',
  node: [
  ['path', { d: 'M16.5 7.5h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5' }],
  ['path', { d: 'M6 7.5h3v3H6v-3Z' }],
  ['path', { d: 'M12 7.5h1.5' }],
  ['path', { d: 'M12 10.5h1.5' }],
  ['path', { d: 'M6 13.5h7.5' }],
  ['path', { d: 'M6 16.5h7.5' }],
  ],
});

export default NewspaperIcon;
