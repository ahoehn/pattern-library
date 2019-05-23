import React from 'react';
import { Icon } from '@axa-ch/icon/lib/index.d';

type Variant = 'secondary' | 'red' | 'inverted';

interface AXAButtonProps {
  variant?: Variant;
  icon?: Icon;
  id?: String;
  large?: boolean;
  motionOff?: boolean;
  disabled?: boolean;
  accept?: String;
  multiple?: boolean;
  capture?: boolean;
  onChange?: () => void;
}

declare function createAXAButton(
  createElement: typeof React.createElement
): React.ComponentType<AXAButtonProps>;

export = createAXAButton;