import { withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';

export default {
  title: 'Components',
  decorators: [withKnobs],
};

export const InputPhone = () => {
  const wrapper = document.createElement('div');
  const template = html`
    <axa-input-phone
      errorprefix="Format: +41795002010, Current"
    ></axa-input-phone>
  `;

  render(template, wrapper);
  return wrapper;
};
