import type { IconData } from './types';
import Icon from './Icon.astro';

export function createIcon(iconData: IconData) {
  const Component = (props: Record<string, any>) => {
    return Icon({ icon: iconData, ...props });
  };

  Component.displayName = iconData.name;
  Component.iconData = iconData;

  return Component;
}

export default createIcon;
