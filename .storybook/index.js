import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Dashboard from '../src/dasboard';

storiesOf('Button', module)
  .add('with text', () => (
    <Dashboard onClick={action('clicked')}></Dashboard>
  ));