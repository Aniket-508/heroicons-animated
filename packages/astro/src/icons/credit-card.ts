import { createIcon } from '../createIcon';

const CreditCardIcon = createIcon({
  name: 'credit-card',
  animation: 'scale',
  node: [
  ['path', { d: 'M2.25 8.25h19.5M2.25 9h19.5M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z' }],
  ['path', { custom: 'line.index', d: 'line.d' }],
  ],
});

export default CreditCardIcon;
