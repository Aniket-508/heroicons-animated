import { createIcon } from '../createIcon';

const BuildingLibraryIcon = createIcon({
  name: 'building-library',
  animation: 'fade',
  node: [
  ['path', { d: 'M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18' }],
  ['path', { d: 'M12 6.75h.008v.008H12V6.75Z' }],
  ['path', { custom: 'pillar.index', d: 'pillar.d' }],
  ],
});

export default BuildingLibraryIcon;
