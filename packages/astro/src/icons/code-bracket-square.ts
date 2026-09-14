import { createIcon } from '../createIcon';

const CodeBracketSquareIcon = createIcon({
  name: 'code-bracket-square',
  animation: 'scale',
  node: [
  ['path', { d: 'M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z' }],
  ['path', { custom: -1, d: 'M9.75 9.75L7.5 12l2.25 2.25' }],
  ['path', { custom: 1, d: 'M14.25 9.75 16.5 12l-2.25 2.25' }],
  ],
});

export default CodeBracketSquareIcon;
