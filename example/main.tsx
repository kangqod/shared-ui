import * as React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../src/index';

const Example = () => {
  return (
    <Button className="type1" onClick={(e) => e.currentTarget.blur()}>
      Button
    </Button>
  );
};

ReactDOM.render(<Example />, document.getElementById('root'));
