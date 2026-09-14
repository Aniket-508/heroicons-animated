import { createIcon } from '../createIcon';

const ChatBubbleOvalLeftEllipsisIcon = createIcon({
  name: 'chat-bubble-oval-left-ellipsis',
  animation: 'scale',
  node: [
  ['path', { custom: 'dot.index', d: 'dot.d' }],
  ['path', { d: 'M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z' }],
  ],
});

export default ChatBubbleOvalLeftEllipsisIcon;
