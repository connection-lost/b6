import * as React from 'react';
import { Text } from '@fluentui/react/lib/Text';

export interface textProp {
  [text: string]: any
}

export const InfoText: React.FunctionComponent = (prop: textProp) => {
  return (
    <div className='basecard'>
      <Text block>{prop.text}</Text>
    </div>
  );
};
