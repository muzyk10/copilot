import { storiesOf } from '@kadira/storybook';
import React from 'react';
import Widget from './';

storiesOf('Widget', module)
  .add('single', () => (
    <Widget
      checked
      name='flag'
      selectable='single'
      value='flag_1'
    >
      <img
        alt='england flag'
        // eslint-disable-next-line max-len
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Union_flag_1606_(Kings_Colors).svg/2000px-Union_flag_1606_(Kings_Colors).svg.png'
      />
      <p>Some text</p>
    </Widget>
  ));
