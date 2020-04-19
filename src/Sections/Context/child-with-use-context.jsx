import * as React from 'react';
import { useContext, memo } from 'react';

import Context from './context';

const ChildWithUseContext = memo((props) => {
  const context = useContext(Context);
  console.log('render child:', props.name);
  return (
    <div>
      {props.name}: {JSON.stringify(context, null, 4)}
    </div>
  );
});

export default ChildWithUseContext;
