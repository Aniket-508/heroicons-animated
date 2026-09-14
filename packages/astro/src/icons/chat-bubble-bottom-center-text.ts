import { createIcon } from '../createIcon';

const ChatBubbleBottomCenterTextIcon = createIcon({
  name: 'chat-bubble-bottom-center-text',
  animation: 'scale',
  node: [
  ['path', { custom: 'line.index', d: 'line.d' }],
  ['path', { d: 'M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z' }],
  ],
});

export default ChatBubbleBottomCenterTextIcon;
