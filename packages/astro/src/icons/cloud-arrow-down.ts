import { createIcon } from '../createIcon';

const CloudArrowDownIcon = createIcon({
  name: 'cloud-arrow-down',
  animation: 'float',
  node: [
  ['path', { d: 'M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z' }],
  ['path', { d: 'M12 9.75v6.75m0 0-3-3m3 3 3-3' }],
  ],
});

export default CloudArrowDownIcon;
