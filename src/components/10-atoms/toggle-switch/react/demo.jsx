import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/web-components';
import React from 'react';
import ReactDOM from 'react-dom';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import AXAToggleSwitchReact from './AXAToggleSwitchReact';
import ControlledWithOnChange from './ControlledWithOnChange';
import ControlledWithConstantActiveProperty from './ControlledWithConstantActiveProperty';

storiesOf('Examples/Toggle Switch/React', module)
  .addParameters({
    readme,
    usage: { disable: true },
    changelog,
  })
  .add('Controlled without onChange', () => {
    const div = document.createElement('div');
    const active = boolean('active', false);

    ReactDOM.render(<AXAToggleSwitchReact active={active} />, div);

    return div;
  })
  .add('Controlled with onChange', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ControlledWithOnChange />, div);

    return div;
  })
  .add('Controlled with dummy onChange listener', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ControlledWithConstantActiveProperty />, div);

    return div;
  })
  .add('Uncontrolled', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AXAToggleSwitchReact />, div);

    return div;
  });
